import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>recipes and hacks</span>
              <span>fun-bay.com</span>
            </h1>
            <h2>Just add marmite - Spread The Joy!</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">
        {children}
      </div>

      <footer>
        <p>Copyright 2021 fun-bay.com :)</p>
      </footer>
    </div>
  )
}