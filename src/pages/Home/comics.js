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

            const comicsRare = response.data.data.results.map((comic) => {
                const isRare = Math.random() < 0.1;
                return {
                    ...comic,
                    marked: isRare
                }
            }); // "Função para colocar a tag Rare em 10% das comics consumidas da API"

            setComics(comicsRare)
            setLoading(false)

       
        }
        loadComics() //"Essa função chama a API da Marvel para apresentar as informações da tela"

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
    } // "handleNextPage e handledPrevPage são funções para mudança de pagina Next para seguir adiante e Prev para voltar ambas vão de 21 em 21"

    if (loading === true) {
        return (
            <Container>
                <Spinner />
            </Container>
        )
    } // "Um if para mostrar ao usuario que a API esta carregando e sinalizando para o usuario que o site não esta travado caso a API demore um pouco mais que o normal"

    return (
        <Container>  
            <h1>Comics Marvel</h1>
            <NextPage>  
                <nav>
                    <buttton onClick={handlePrevPage} className="button-page" >Previous</buttton>
                    <buttton onClick={handleNextPage} className="button-page" >Next</buttton>
                </nav>
            </NextPage>
            <ComicsList>
                {comics.map((comic) => {
                    let priceComic = comic.prices[0]

                    return (
                        <div>
                            <Comic key={comic.id}>
                                <Link to={`/details/${comic.id}`}>
                                    <img src={comic.thumbnail.path + size + format} alt={comic.title}></img>
                                </Link>
                                <span>{comic.title}</span>
                                {comic.marked ? <p className="text-rare">Rare</p> : <p>Normal</p>} 

                                {priceComic.price === 0
                                    ? <h3 className="p-price">{unavailable}</h3>
                                    : <h3 className="p-price">${priceComic.price}</h3>}{/*Adaptando quando o custo dos produtos é 0*/}

                                {priceComic.price === 0
                                    ? <button disabled="true">{unavailable}</button>
                                    : <Link to={`/details/${comic.id}?rare=${comic.marked}`}><button>Buy</button></Link>}{/* Botão é desabilitado se a Comic não tiver um valor definido na API  */}
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