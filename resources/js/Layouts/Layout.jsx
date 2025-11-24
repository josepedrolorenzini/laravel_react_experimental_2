import { Link } from "@inertiajs/react";

export default function Layout({ children }) {
    return (
        <>
            <header>
                <nav>
                    <Link className="nav-link" href="/">
                        Home
                    </Link>
                      <Link className="nav-link" href="/about">
                        About
                    </Link>
                    <Link className="nav-link" href="/posts">
                        Posts
                    </Link>
                    <Link className="nav-link" href="/posts/create">
                        Create posts
                    </Link>
                    <Link className="nav-link" href="/jobs">
                        jobs
                    </Link>
                </nav>
            </header>

            <main>{children}</main>
        </>
    );
}