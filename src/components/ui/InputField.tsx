import type { InputHTMLAttributes, ChangeEvent } from 'react';
import styles from './InputField.module.css';

export interface InputFieldProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'id' | 'onChange'
> {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  step?: number;
}

export const InputField = ({
  id,
  label,
  value,
  onChange,
  min = 0,
  step = 1,
  ...rest
}: InputFieldProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value === '' ? 0 : Number(e.target.value));
  };

  return (
    <div className={styles.fieldGroup}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        id={id}
        type="number"
        min={min}
        step={step}
        className={styles.input}
        value={value === 0 ? '' : value}
        onChange={handleChange}
        aria-label={label}
        {...rest}
      />
    </div>
  );
};
