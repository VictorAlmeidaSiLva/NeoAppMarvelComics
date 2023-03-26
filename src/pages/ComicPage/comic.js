import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Spinner } from "../../components/spinner"
import { ContainerSpinner, ComicDetails, BackgroundImage } from "./styles/stylesDetails"
import api from '../../api/api'

function Comic() {

    const { id } = useParams()
    const rare = new URLSearchParams(useLocation().search).get("rare");
    const [comic, setComic] = useState([])
    const [loading, setLoading] = useState(true)

    const unavailable = "Unavailable"
    const format = '.jpg'

    useEffect(() => {
        async function onComic() {
            const response = await api.get(`/v1/public/comics/${id}`, {
                params: {
                    ts: 1,
                    apikey: "537b30d15b5f4cc9f88ad94eacc97aee",
                    hash: "0d1b28ff07637c55ee96465753be577f",
                },
            })
            setComic(response.data.data.results[0])
            setLoading(false)
        }
        onComic() //"Função pegando a ID da Comic e mostrando para o usuario os Detalher da Comic selecionado pelo mesmo"

    }, [id])

    function CartSaved() {
        const cartSave = localStorage.getItem('@cart');
        let comicsSaves = JSON.parse(cartSave) || []
        const storeComic = comicsSaves.some(((comicSave) => comicSave.id === comic.id))

        if (storeComic) {
            alert('Sorry, this comic has already been cart')
            return
        }

        comicsSaves.push(comic)
        localStorage.setItem('@cart', JSON.stringify(comicsSaves))
        alert('Comic is saved to Cart')
    } // "Função para o usuario adicionar a Comic para o carrinho de compras dele encaminhando a ID da Comic para a pagina Cart"



    if (loading === true) {
        return (
            <ContainerSpinner>
                <Spinner />
            </ContainerSpinner>
        )
    }//"Um if para mostrar ao usuario que a API esta carregando e sinalizando para o usuario que o site não esta travado caso a API demore um pouco mais que o normal"

    let priceComic = comic.prices[0]
    const imageUrl = comic.thumbnail.path + format;

    return (
        <BackgroundImage imageUrl={imageUrl}> {/*Pegando a img da Comic e colocando como fundo e formatando ela no CSS*/}
            <ComicDetails>
                <img className='comic-image' src={comic.thumbnail.path + format} alt={comic.title}></img>
                <div className='details'>
                    <h1>{comic.title}</h1>
                    {priceComic.price === 0
                        ? <h3>{unavailable}</h3>
                        : <h3>${priceComic.price}</h3>}
                    {rare === "true" ? <p>Rare comic</p> : <p>Normal comic</p>}
                    <p>Description: {comic.description}</p>
                    <p>Format: {comic.format}</p>
                    <p>Pages: {comic.pageCount}</p>
                    {priceComic.price === 0
                        ? <button disabled="true">{unavailable}</button>
                        : <button onClick={CartSaved}>Add to Cart</button>}{/*Função roda caso tenha o produto disponivel para a compra (Valores maiores que 0)*/}
                </div>
            </ComicDetails>
        </BackgroundImage>
    )
}

export default Comic