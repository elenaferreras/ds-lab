import { Button as AntButton } from 'antd';
import { ArrowRightOutlined } from '../Icons';
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
        <ArrowRightOutlined className="ds-button__arrow" />
      )}
    </AntButton>
  );
}

export default Button;
