import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>fun-bay life hackbook</span>
              <span>🍔 Add Marmite 🥞 </span>
            </h1>
            <h2>Recipes and Ideas for Having Fun 😋 Spread the Joy!</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">
        {children}
      </div>

      <footer><Link href="/">
        <a><p>🔥Copyright 2021 fun-bay.com Life Hackbook🔥</p></a>
      </Link>
        <div class="social">
          <Link href="https://pinterest.com/non-fungi" target="_blank"><a><i class="fab fa-pinterest fa-3x"></i></a></Link>
          <Link href="https://twitter.com/jdhorth" target="_blank"><a><i class="fab fa-twitter fa-3x"></i></a></Link>
          <Link href="https://youtube.com/jdubhman" target="_blank"><a><i class="fab fa-youtube fa-3x"></i></a></Link>
          <Link href="https://www.linkedin.com/in/justinhorth" target="_blank"><a><i class="fab fa-linkedin fa-3x"></i></a></Link>
          <Link href="https://github.com/jdhorth" target="_blank"><a><i class="fab fa-github fa-3x"></i></a></Link>

        </div>
      </footer>
    </div>
  )
}