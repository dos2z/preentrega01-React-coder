import Navbar from "../components/Navbar/Navbar"
import ItemListContainer from "../components/ItemListcontainer/ItemListContainer"

const App = () => {
    return (
        <>
            <Navbar />
            <ItemListContainer saludo={"Bienvenidos!"} />
        </>
    )
}

export default App