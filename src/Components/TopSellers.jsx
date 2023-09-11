
import MediaCard from './FlowerCard'

import './catalogue.css'
const TopSellers = ()=>{
    return(
        <>
        <div className='catalogue'style={{backgroundColor:'#FF6B6B'}}>
        <h1 className="title"> Top Sellers </h1>
        <div style={{ display: 'flex' }}>
           

        <MediaCard name={"name1"} description={"Search for the keywords to learn more about each warning."} url={"https://florfashions.com/web/wp-content/uploads/2022/06/Diseno-sin-titulo-33.png"} margin={'35px'}/>
        <MediaCard name={"name2"} description={"Search for the keywords to learn more about each warning."} url={"https://florfashions.com/web/wp-content/uploads/2022/06/Diseno-sin-titulo-25.png"} margin={'35px'}/>
        <MediaCard name={"name3"} description={"Search for the keywords to learn more about each warning."} url={"https://florfashions.com/web/wp-content/uploads/2022/06/arreglos5702021-14.png"} margin={'35px'}/>
        </div>
        </div>
        
       
        </>
    )
}

export default TopSellers