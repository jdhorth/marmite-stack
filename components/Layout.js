import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>fun-bay :) how to have fun</span>
              <span>Just Add Marmite ✔</span>
            </h1>
            <h2>Life hacks and recipes - Spread The Joy!</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">
        {children}
      </div>

      <footer><Link href="/">
        <a><p>Copyright 2021 fun-bay.com :)</p></a>
      </Link>
        <div class="social">
          <a href="https://twitter.com/jdhorth" target="_blank"><i class="fab fa-twitter fa-3x"></i></a>
          <a href="https://facebook.com/justinhorth" target="_blank"><i class="fab fa-facebook fa-3x"></i></a>
          <a href="https://youtube.com/jdubhman" target="_blank"><i class="fab fa-youtube fa-3x"></i></a>
          <a href="https://www.linkedin.com/in/justinhorth" target="_blank"><i class="fab fa-linkedin fa-3x"></i></a>
          <a href="https://github.com/jdhorth" target="_blank"><i class="fab fa-github fa-3x"></i></a>
        </div>
      </footer>
    </div>
  )
}