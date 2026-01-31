import { ArrowUpRight } from 'lucide-react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: boolean;
  variant?: 'primary' | 'secondary';
};

export default function Button({
  children,
  icon = true,
  variant = 'primary',
  type,
  disabled,
  className = '',
  ...props
}: Props) {
  const baseStyles =
    'px-5 py-2.5 rounded-full font-medium text-sm cursor-pointer transition-all inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantStyles =
    variant === 'primary'
      ? 'bg-white text-black hover:bg-neutral-200 hover:-translate-y-0.5 shadow-lg shadow-white/10'
      : 'bg-transparent text-white border border-white/10 hover:border-white/20 hover:bg-white/5';

  return (
    <button
      type={type ?? 'button'}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
      {icon && <ArrowUpRight className="w-4 h-4" aria-hidden="true" />}
    </button>
  );
}
