import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>fun-bay :)</span>
              <span>Just Add Marmite</span>
            </h1>
            <h2>Life hacks and recipes - Spread The Joy!</h2>
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