interface XLogoProps {
  className?: string;
}

/**
 * Official X (formerly Twitter) logo.
 *
 * lucide-react 0.378 only ships the legacy Twitter bird and a plain "x"
 * cross-mark, neither of which is the X brand logo — so we render the
 * official path ourselves.
 */
export default function XLogo({ className = "" }: XLogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
