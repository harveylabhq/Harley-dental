import styles from './Button.module.css'

export default function Button({
  children,
  variant = 'primary',  // 'primary' | 'outline' | 'ghost' | 'accent'
  size = 'md',          // 'sm' | 'md' | 'lg'
  onClick,
  type = 'button',
  fullWidth = false,
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={[
        styles.btn,
        styles[variant],
        styles[size],
        fullWidth ? styles.fullWidth : '',
        disabled ? styles.disabled : '',
      ].join(' ')}
    >
      {children}
    </button>
  )
}