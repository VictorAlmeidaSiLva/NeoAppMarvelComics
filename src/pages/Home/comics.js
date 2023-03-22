import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Container, ComicsList, Comic } from "./styles/stylesComics"
import { Spinner } from "../../components/spinner"
import api from "../../api/api"

function Comics() {
    const [comics, setComics] = useState([])
    const [loading, setLoading] = useState(true)
    const format = '.jpg'
    const size = '/portrait_fantastic'

    useEffect(() => {
        async function loadComics() {
            const response = await api.get("/v1/public/comics", {
                params: {
                    ts: 1,
                    apikey: "537b30d15b5f4cc9f88ad94eacc97aee",
                    hash: "0d1b28ff07637c55ee96465753be577f",
                    limit: 20,
                    offset: 0
                },
            });

            setComics(response.data.data.results)
            setInterval(() => {
                setLoading(false)
            }, 1000)
        }
        loadComics()

    }, []);

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
                    return (
                        <div>
                            <Comic>
                                <Link to="/">
                                    <img src={comic.thumbnail.path + format} alt={comic.title}></img>
                                </Link>
                                <span>{comic.title}</span>
                                <p>${priceComic.price}</p>
                            </Comic>
                        </div>
                    )
                })}
            </ComicsList>
        </Container>
    )
}

export default Comics 