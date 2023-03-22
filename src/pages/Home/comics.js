import React, { useEffect, useState } from "react"
import api from "../../api/api"

function Comics() {
    const [ comics, setComics ] = useState([])
    const [ loading, setLoading ] = useState(true)  
    const format = '.jpg'
    const size = '/portrait_fantastic'

    useEffect(() => {
        async function loadComics() {
            const response = await api.get("/v1/public/comics", {
                params: {
                    ts: 1,
                    apikey: "537b30d15b5f4cc9f88ad94eacc97aee",
                    hash: "0d1b28ff07637c55ee96465753be577f",
                    limit: 100,
                    offset: 100
                },
            });

            setComics(response.data.data.results)
            setInterval(() => {
                setLoading(false)
            }, 3000)
        }
        loadComics()
        
    }, []);

    return (
        <>
            <h3>Comics Marvel</h3>
            {comics.map((comic) => {
                return (
                    <div>
                        <ul>
                            <li>
                                <img src={comic.thumbnail.path + format} alt={comic.title}></img>
                                <span>{comic.title}</span>
                            </li>
                        </ul>
                    </div>
                )
            })}

        </>
    )
}

export default Comics 