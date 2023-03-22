import { Head, Cart } from "./styles/stylesHeader"
import { Link } from "react-router-dom"

function Header() {
    return (
        <>
            <Head>
                <nav>
                    <Link to="/" >
                        <img src={require("./images/marvelLogo.png")} alt="Logo"></img>
                    </Link>
                    <Cart href="#">Cart</Cart>
                </nav>
            </Head>
        </>
    )
}

export default Header