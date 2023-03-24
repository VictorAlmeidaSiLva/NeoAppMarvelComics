import React, { useEffect, useState } from "react"
import { animateScroll as scroll } from 'react-scroll';
import { Link } from "react-router-dom"
import { Container, ComicsList, Comic, NextPage } from "./styles/stylesComics"
import { Spinner } from "../../components/spinner"
import api from "../../api/api"

function Comics() {
    const [comics, setComics] = useState([])
    const [loading, setLoading] = useState(true)
    const [offset, setOffset] = useState(0)

    const format = '.jpg'
    const size = '/portrait_fantastic'
    const unavailable = "Unavailable" // "Essa variavel é chamada quando o valor do produto é 0 na API Marvel para indicar a indisponibilidade do produto "

    useEffect(() => {
        async function loadComics() {
            const response = await api.get("/v1/public/comics", {
                params: {
                    ts: 1,
                    apikey: "537b30d15b5f4cc9f88ad94eacc97aee",
                    hash: "0d1b28ff07637c55ee96465753be577f",
                    limit: 21,
                    offset: offset
                },
            });

            setComics(response.data.data.results)
            setLoading(false)
        }
        loadComics()

    }, [offset]);

    function handleNextPage() {
        setOffset(offset + 21);
        scroll.scrollToTop();
    }

    function handlePrevPage() {
        if (offset >= 21) {
            setOffset(offset - 21);
            scroll.scrollToTop();
        }
    }

    if (loading === true) {
        return (
            <Container>
                <Spinner />
            </Container>
        )
    }

    return (
        <Container>
            <h1>Comics Marvel</h1>
            <ComicsList>
                {comics.map((comic) => {
                    let priceComic = comic.prices[0]
                    let creators = comic.creators.items.map(item => item.name).join(", ")

                    return (
                        <div>
                            <Comic key={comic.id}>
                                <Link to={`/details/${comic.id}`}>
                                    <img src={comic.thumbnail.path + size + format} alt={comic.title}></img>
                                </Link>
                                <span>{comic.title}</span>
                                {creators
                                    ? <p>creator(s): {creators}</p>
                                    : <p>Creator(s):</p>}

                                {priceComic.price === 0
                                    ? <h3 className="p-price">{unavailable}</h3>
                                    : <h3 className="p-price">${priceComic.price}</h3>}

                                {priceComic.price === 0
                                    ? <button disabled="true">{unavailable}</button>
                                    : <Link to={`/details/${comic.id}`}><button>Buy</button></Link>}{/* Botão é desabilitado se a Comic não tiver um valor definido na API  */}
                            </Comic>
                        </div>
                    )
                })}
            </ComicsList>
            <NextPage>
                <nav>
                    <buttton onClick={handlePrevPage} className="button-page" >Previous</buttton>
                    <buttton onClick={handleNextPage} className="button-page" >Next</buttton>
                </nav>
            </NextPage>
        </Container>
    )
}

export default Comics 