import { Head, Cart, Logo } from "./styles/stylesHeader"
import { Link } from "react-router-dom"

function Header() {
    return (
        <>
            <Head>
                <nav>
                    <Logo href="/" >
                        <img src={require("./images/marvelLogo.png")} alt="Logo"></img>
                    </Logo>
                    <Cart href="/cart">
                        <img src={require("./images/Cart.png")}></img>
                    </Cart>
                </nav>
            </Head>
        </>
    )
}

export default Header