import { Head, Logo, Hqs, Carrinho } from "./styles/stylesHeader"

function Header() {
    return (
        <>
            <Head>
                <nav>
                    <Logo href="#"></Logo>
                    <Hqs href="#">HQS</Hqs>
                    <Carrinho href="#">Carrinho</Carrinho>
                </nav>
            </Head>
        </>
    )
}

export default Header