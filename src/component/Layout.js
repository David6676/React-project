import { Link, Outlet } from "react-router-dom"
import layoutStyle from "./style.module.css"

function Layout() {
    return (
        <>
            <header className={layoutStyle.h1}>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}
export default Layout