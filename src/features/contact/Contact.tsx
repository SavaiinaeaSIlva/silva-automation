import { useState } from 'react';
import { siteContent } from '@/constants';
import { Container, Section } from '@/components/layout';
import styles from './Contact.module.css';

export const Contact = () => {
  const { contact } = siteContent;
  type FormState = { name: string; email: string; message: string };
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validateEmail = (v: string) => /\S+@\S+\.\S+/.test(v);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = form;
    if (!name || !email || !message) {
      setStatus('error');
      return;
    }
    if (!validateEmail(email)) {
      setStatus('error');
      return;
    }

    setStatus('submitting');
    // simulate network request (replace with webhook if desired)
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    }, 800);
  };

  return (
    <Section id={contact.id} background="dark" padding="large">
      <Container size="medium">
        <div className={styles.header}>
          <h2 className={styles.title}>{contact.title}</h2>
          <p className={styles.subtitle}>{contact.subtitle}</p>
        </div>

        <div className={styles.content}>
          <div className={styles.cta}>
            <a
              href={contact.cta.url}
              className={styles.ctaButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.cta.text}
            </a>
          </div>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <label className={styles.label} htmlFor="contact-name">
              {contact.form.nameLabel}
            </label>
            <input
              id="contact-name"
              className={styles.textarea}
              value={form.name}
              onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
              placeholder={contact.form.namePlaceholder}
              aria-required
            />

            <label className={styles.label} htmlFor="contact-email">
              {contact.form.emailLabel}
            </label>
            <input
              id="contact-email"
              className={styles.textarea}
              value={form.email}
              onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
              placeholder={contact.form.emailPlaceholder}
              aria-required
            />

            <label className={styles.label} htmlFor="contact-message">
              {contact.form.messageLabel}
            </label>
            <textarea
              id="contact-message"
              className={styles.textarea}
              value={form.message}
              onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
              placeholder={contact.form.messagePlaceholder}
              rows={5}
              aria-required
            />

            <div className={styles.cta}>
              <button type="submit" className={styles.ctaButton} disabled={status === 'submitting'}>
                {status === 'submitting' ? contact.form.submitting : contact.form.submit}
              </button>
            </div>

            {status === 'error' && (
              <p className={styles.error}>{contact.form.validation.required}</p>
            )}
            {status === 'success' && <p className={styles.success}>{contact.form.success}</p>}
          </form>
        </div>
      </Container>
    </Section>
  );
};
