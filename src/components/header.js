import { Head, Cart, Logo } from "./styles/stylesHeader"

function Header() {
    return (
        <>
            <Head>
                <nav>
                    <Logo href="/" >
                        <img src={require("./images/marvelLogo.png")} alt="Logo"></img>
                    </Logo>
                    <Cart href="/cartList">
                        <img src={require("./images/Cart.png")} alt="Cart"></img>
                    </Cart>
                </nav>
            </Head>
        </>
    )
}

export default Header