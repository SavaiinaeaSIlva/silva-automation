import { useState } from 'react';
import styles from './PaymentPortal.module.css';

const PLANS = [
  { id: 'lead-scorer', name: 'Lead Scorer', price: 497 },
  { id: 'lead-agent', name: 'Lead Agent + CRM', price: 1297 },
  { id: 'lead-intelligence', name: 'Lead Intelligence Dashboard', price: 3497 },
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  business: string;
  plan: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const INITIAL_FORM: FormState = {
  name: '',
  email: '',
  phone: '',
  business: '',
  plan: PLANS[0]!.id,
};

export const PaymentPortal = () => {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const selectedPlan = PLANS.find((p) => p.id === form.plan)!;

  const validate = (): boolean => {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = 'Required';
    if (!form.email.trim()) next.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Invalid email';
    if (!form.phone.trim()) next.phone = 'Required';
    if (!form.business.trim()) next.business = 'Required';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange =
    (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={styles.page}>
        <div className={styles.successWrap}>
          <div className={styles.successIcon} aria-hidden="true">
            ✓
          </div>
          <h1 className={styles.successTitle}>You're in.</h1>
          <p className={styles.successBody}>
            We received your order for <strong>{selectedPlan.name}</strong>. You'll get a
            confirmation at <strong>{form.email}</strong> shortly, and we'll reach out within one
            business day to kick things off.
          </p>
          <a href="/" className={styles.successLink}>
            Back to home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <a href="/" className={styles.logo} aria-label="Silva Automation — back to home">
            Silva Automation
          </a>
        </header>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <h1 className={styles.title}>Get started</h1>
          <p className={styles.subtitle}>Fill out the form and we'll take it from there.</p>

          <div className={styles.field}>
            <label htmlFor="name" className={styles.label}>
              Full name
            </label>
            <input
              id="name"
              type="text"
              className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
              value={form.name}
              onChange={handleChange('name')}
              autoComplete="name"
            />
            {errors.name && <span className={styles.errorMsg}>{errors.name}</span>}
          </div>

          <div className={styles.field}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              id="email"
              type="email"
              className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
              value={form.email}
              onChange={handleChange('email')}
              autoComplete="email"
            />
            {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
          </div>

          <div className={styles.field}>
            <label htmlFor="phone" className={styles.label}>
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
              value={form.phone}
              onChange={handleChange('phone')}
              autoComplete="tel"
            />
            {errors.phone && <span className={styles.errorMsg}>{errors.phone}</span>}
          </div>

          <div className={styles.field}>
            <label htmlFor="business" className={styles.label}>
              Business name
            </label>
            <input
              id="business"
              type="text"
              className={`${styles.input} ${errors.business ? styles.inputError : ''}`}
              value={form.business}
              onChange={handleChange('business')}
              autoComplete="organization"
            />
            {errors.business && <span className={styles.errorMsg}>{errors.business}</span>}
          </div>

          <div className={styles.field}>
            <label htmlFor="plan" className={styles.label}>
              Plan
            </label>
            <select
              id="plan"
              className={styles.input}
              value={form.plan}
              onChange={handleChange('plan')}
            >
              {PLANS.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} — ${p.price.toLocaleString()}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.total}>
            <span>Total due today</span>
            <span className={styles.totalAmount}>${selectedPlan.price.toLocaleString()}</span>
          </div>

          <button type="submit" className={styles.submitBtn}>
            Complete purchase — ${selectedPlan.price.toLocaleString()}
          </button>

          <p className={styles.note}>
            One-time payment. You own everything we build. 60-day support included.
          </p>
        </form>
      </div>
    </div>
  );
};
