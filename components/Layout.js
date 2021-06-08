import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>Fun Recipes and Things</span>
              <span>🦦 fun-bay.com 🏄‍♂️ </span>
            </h1>
            <h2>🧾 Recipes Ideas Hacks 🍯 Spread the Joy! 🤗</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">
        {children}
      </div>

      <footer><Link href="/">
        <a><p>© 2021 fun-bay.com 😹</p></a>
      </Link>
        <div >
          <section className="social">
            <Link href="https://pinterest.com/non-fungi" target="_blank"><a><i className="fab fa-pinterest fa-3x"></i></a></Link>
            <Link href="https://twitter.com/jdhorth" target="_blank"><a><i className="fab fa-twitter fa-3x"></i></a></Link>
            <Link href="https://youtube.com/jdubhman" target="_blank"><a><i className="fab fa-youtube fa-3x"></i></a></Link>
            <Link href="https://www.linkedin.com/in/justinhorth" target="_blank"><a><i className="fab fa-linkedin fa-3x"></i></a></Link>
            <Link href="https://github.com/jdhorth" target="_blank"><a><i className="fab fa-github fa-3x"></i></a></Link>
          </section>
          <style jsx>{`
                .social {
                    background: #fff;
                    padding: 1px;
                    box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
                    transform: rotateZ(-2deg);
                  }
                  h3 {
                    font-size: 2em;
                  }
            `}</style>
        </div>
      </footer>
    </div>
  )
}