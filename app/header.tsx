import Link from "next/link";

export function Header() {
  return (
    <header className="site-header">
      <Link className="site-title" href="/">
        Julio César
      </Link>
      <nav className="site-nav">
        <Link href="/about">About</Link>
        <a className="follow-link" href="https://x.com/juliocesar_io" rel="noreferrer" target="_blank">
          <svg aria-hidden="true" className="x-icon" viewBox="0 0 1200 1227">
            <path
              d="M714.2 519.3L1160.9 0H1055L667.1 450.9L357.3 0H0L468.5 681.8L0 1226.4H105.9L515.6 750.2L842.7 1226.4H1200L714.2 519.3ZM569.4 687.6L522.1 620L145.5 81.1H308.1L612.1 516.1L659.4 583.7L1055.7 1150.7H893.1L569.4 687.6Z"
              fill="currentColor"
            />
          </svg>
          <span>Follow me</span>
        </a>
      </nav>
    </header>
  );
}
