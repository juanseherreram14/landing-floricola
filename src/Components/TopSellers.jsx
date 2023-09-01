
import MediaCard from './FlowerCard'

const TopSellers = ()=>{
    return(
        <>
        <h1 style={{ textAlign: 'center' }}> Top Sellers </h1>
        <div style={{ display: 'flex' }}>
        <MediaCard name={"name1"} description={"Search for the keywords to learn more about each warning."} url={"https://florfashions.com/web/wp-content/uploads/2022/06/Diseno-sin-titulo-33.png"}/>
        <MediaCard name={"name2"} description={"Search for the keywords to learn more about each warning."} url={"https://florfashions.com/web/wp-content/uploads/2022/06/Diseno-sin-titulo-25.png"}/>
        <MediaCard name={"name3"} description={"Search for the keywords to learn more about each warning."} url={"https://florfashions.com/web/wp-content/uploads/2022/06/arreglos5702021-14.png"}/>
        </div>
       
        </>
    )
}

export default TopSellers