import { Button as AntButton } from 'antd';
import './Button.css';

export function Button({
  children = 'Label',
  variant = 'default',
  size = 'middle',
  icon,
  showArrow = true,
  block = false,
  disabled = false,
  loading = false,
  danger = false,
  href,
  target,
  onClick,
  ...props
}) {
  const antType = variant === 'primary' ? 'primary'
    : variant === 'text' ? 'text'
    : variant === 'dashed' ? 'dashed'
    : 'default';

  return (
    <AntButton
      className={`ds-button ds-button--${variant} ds-button--${size}`}
      type={antType}
      size={size}
      icon={icon}
      block={block}
      disabled={disabled}
      loading={loading}
      danger={danger}
      href={href}
      target={target}
      onClick={onClick}
      {...props}
    >
      <span className="ds-button__label">{children}</span>
      {showArrow && !loading && (
        <svg
          className="ds-button__arrow"
          width="13"
          height="13"
          viewBox="79.78 13.78 12.44 12.44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M92.22 19.9891L85.9743 26.2227L85.3959 25.6454L90.6405 20.4109L79.78 20.4109L79.7801 19.6109L90.707 19.6109L85.4317 14.3457L85.9985 13.78L92.22 19.9891Z"
            fill="currentColor"
          />
        </svg>
      )}
    </AntButton>
  );
}

export default Button;
