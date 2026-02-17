import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteContent } from '@/constants';
import { Container, Section } from '@/components/layout';
import { Card } from '@/components/ui';
import { validateEmail } from '@/utils';
import styles from './Contact.module.css';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
  const { contact } = siteContent;
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  type FormState = { firstName: string; email: string; message: string; lastName: string };
  const [form, setForm] = useState<FormState>({
    firstName: '',
    email: '',
    message: '',
    lastName: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // Scroll reveal animation for header
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        header.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: header,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, header);

    return () => ctx.revert();
  }, []);

  // Scroll reveal animation for form content
  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        content,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: content,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, content);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { firstName, email, message, lastName } = form;

    // Honeypot check - if filled, silently reject (bots fill hidden fields)
    if (lastName) {
      setStatus('success');
      setForm({ firstName: '', email: '', message: '', lastName: '' });
      return;
    }

    if (!firstName || !email || !message) {
      setStatus('error');
      return;
    }
    if (!validateEmail(email)) {
      setStatus('error');
      return;
    }

    setStatus('submitting');
    try {
      const res = await fetch(siteContent.contact.webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: firstName, email, message }),
      });

      if (!res.ok) throw new Error(`Request failed: ${res.status}`);

      setStatus('success');
      setForm({ firstName: '', email: '', message: '', lastName: '' });
    } catch (err) {
      // keep console error for debugging; UI shows generic message
      // eslint-disable-next-line no-console
      console.error('Contact form submit error', err);
      setStatus('error');
    }
  };

  return (
    <Section id={contact.id} background="dark" padding="large" noReveal>
      <Container size="medium">
        <div className={styles.header} ref={headerRef}>
          <h2 className={styles.title}>{contact.title}</h2>
          <p className={styles.subtitle}>{contact.subtitle}</p>
        </div>

        <div className={styles.content} ref={contentRef}>
          <Card variant="default" padding="large" className={styles.formCard}>
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              {/* Honeypot field - hidden from humans, bots see "Last Name" and fill it */}
              <div className={styles.honeypot} aria-hidden="true">
                <label htmlFor="contact-lastname">Last Name</label>
                <input
                  type="text"
                  id="contact-lastname"
                  name="lastName"
                  value={form.lastName}
                  onChange={(e) => setForm((s) => ({ ...s, lastName: e.target.value }))}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <label className={styles.label} htmlFor="contact-firstname">
                {contact.form.nameLabel}
              </label>
              <input
                id="contact-firstname"
                name="firstName"
                className={styles.input}
                value={form.firstName}
                onChange={(e) => setForm((s) => ({ ...s, firstName: e.target.value }))}
                placeholder={contact.form.namePlaceholder}
                required
              />

              <label className={styles.label} htmlFor="contact-email">
                {contact.form.emailLabel}
              </label>
              <input
                id="contact-email"
                className={styles.input}
                value={form.email}
                onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                placeholder={contact.form.emailPlaceholder}
                required
              />

              <label className={styles.label} htmlFor="contact-message">
                {contact.form.messageLabel}
              </label>
              <textarea
                id="contact-message"
                className={styles.input}
                value={form.message}
                onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                placeholder={contact.form.messagePlaceholder}
                rows={5}
                required
              />

              <div className={styles.cta}>
                <button
                  type="submit"
                  className={styles.ctaButton}
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? contact.form.submitting : contact.form.submit}
                </button>
              </div>

              {status === 'error' && (
                <p className={styles.error}>{contact.form.validation.required}</p>
              )}
              {status === 'success' && <p className={styles.success}>{contact.form.success}</p>}
            </form>
          </Card>
        </div>
      </Container>
    </Section>
  );
};
