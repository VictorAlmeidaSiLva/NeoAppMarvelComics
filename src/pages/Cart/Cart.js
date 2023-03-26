import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Container, ListCart, Image, Amount } from "./styles/cartStyle"

function CartList() {

    const [cart, setCart] = useState([])
    const [cupom, setCupom] = useState("");

    const format = '.jpg'


    const priceWithoutDiscount = cart.reduce((accumulator, currentValue) => accumulator + currentValue.prices[0].price, 0);

    const discount = cupom === 'NeoApp' ? 0.1 : 0;
    const totalPrice = priceWithoutDiscount * (1 - discount);



    useEffect(() => {
        async function listComics() {
            const myList = localStorage.getItem('@cart')
            setCart(JSON.parse(myList || []))
        }
        listComics()
    }, [])

    function deleteItemComic(id) {
        let remove = cart.filter((item) => {
            return (item.id !== id)
        })

        setCart(remove)
        localStorage.setItem('@cart', JSON.stringify(remove))
    }


    return (
        <Container>
            <h1>Cart</h1>
            {cart.map(cart => {
                const price = cart.prices[0];

                return (
                    <ListCart>
                        <Image>
                            <Link to={`/details/${cart.id}`}>
                                <img src={cart.thumbnail.path + format} alt="cart.title"></img>
                            </Link>
                        </Image>
                        <p>{cart.title}</p>
                        <h3>${price.price}</h3>
                        <div>
                            <button onClick={() => deleteItemComic(cart.id)}>X</button>
                        </div>
                    </ListCart>
                )
            })}
            <Amount>
                <h2>Amount: ${totalPrice.toFixed(2)}</h2>
                <h3>Cupom</h3>
                <input type="text" value={cupom} onChange={(e) => setCupom(e.target.value)} />
            </Amount>
        </Container>
    )
}

export default CartList