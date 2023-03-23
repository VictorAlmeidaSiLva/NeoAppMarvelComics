import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../api/api'

function Comic() {

    const { id } = useParams()
    const [ comic, setComic ] = useState([])
    const [ loading, setLoading ] = useState(true)
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
            null
        )
    }

    return (
        <>
            <div>
                <img src={comic.thumbnail.path + format}></img>
                <h1>{comic.title}</h1>
            </div>
        </>
    )
}

export default Comic