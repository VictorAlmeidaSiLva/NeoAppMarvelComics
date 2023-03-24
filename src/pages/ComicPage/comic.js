import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Spinner } from "../../components/spinner"
import { ContainerSpinner, ComicDetails, BackgroundImage } from "./styles/stylesDetails"
import api from '../../api/api'

function Comic() {

    const { id } = useParams()
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
        onComic()

    }, [id])



    if (loading === true) {
        return (
            <ContainerSpinner>
                <Spinner />
            </ContainerSpinner>
        )
    }

    let priceComic = comic.prices[0]
    const imageUrl = comic.thumbnail.path + format;

    return (
            <BackgroundImage imageUrl={imageUrl}>
                <ComicDetails>
                    <img className='comic-image' src={comic.thumbnail.path + format} alt={comic.title}></img>
                    <div className='details'>
                        <h1>{comic.title}</h1>
                        {priceComic.price === 0
                            ? <h3>{unavailable}</h3>
                            : <h3>${priceComic.price}</h3>}
                        <p>Description: {comic.description}</p>
                        <p>Format: {comic.format}</p>
                        <p>Pages: {comic.pageCount}</p>
                        {priceComic.price === 0
                            ? <button disabled="true">{unavailable}</button>
                            : <Link to={`/cart`}><button>Add to Cart</button></Link>}
                    </div>
                </ComicDetails>
            </BackgroundImage>
    )
}

export default Comic