import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="not-found">
            <h1>404</h1>
            <h2>Ooops! That page can't be found :(</h2>
            <p>Click back to the <Link href="/">Homepage</Link> for more fun-bay
            life hacks and marmite recipes...</p>

            <style jsx>{`
                .not-found {
                    background: #fff;
                    padding: 30px;
                    box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
                    transform: rotateZ(-3deg);
                  }
                  h1 {
                    font-size: 3em;
                  }
            `}</style>
        </div>
    )
}