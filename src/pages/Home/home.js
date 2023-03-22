import Comics from "./comics"
import Header from "./header"
import Footer from "./footer"

function Home() {
    return (
        <>
            <Header/>
            <h1>API MARVEL</h1>
            <Comics/>
            <Footer/>
        </>
    )
}

export default Home