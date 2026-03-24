import './Button.css';

export function Button({
  children = 'Label',
  disabled = false,
  ...props
}) {
  return (
    <button className="ds-button" disabled={disabled} {...props}>
      <span className="ds-button__label">{children}</span>
      <svg
        className="ds-button__arrow"
        width="13"
        height="13"
        viewBox="79.78 13.78 12.44 12.44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M92.22 19.9891L85.9743 26.2227L85.3959 25.6454L90.6405 20.4109L79.78 20.4109L79.7801 19.6109L90.707 19.6109L85.4317 14.3457L85.9985 13.78L92.22 19.9891Z"
          fill="black"
        />
      </svg>
    </button>
  );
}

export default Button;
