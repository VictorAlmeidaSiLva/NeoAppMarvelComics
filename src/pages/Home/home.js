import Comics from "./comics"
import Header from "./header"

function Home() {
    return (
        <>
            <Header></Header>
            <h1>API MARVEL</h1>
            <Comics></Comics>
        </>
    )
}

export default Home