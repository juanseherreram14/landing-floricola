import React,{useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import MediaCard from './FlowerCard'
import AccordionDetails from '@mui/material/AccordionDetails';
import CenteredButton from './SeeMoreBtn'
import CatalogueItem from './CatalogueItem'
import './Accordion.css'
export default function AccordionMenu(){
    const [expanded, setExpanded] = useState(false);


    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
      };


    

return(
    <>
          <div className='catalogue'>
        
     <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
         
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        > 
       
          <Typography  sx={{ width: '100%', flexShrink: 0, alignItems: 'center'}}>
          < CenteredButton/>
          </Typography>
       
        </AccordionSummary>
       
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
       
          </Typography>
          <div style={{display:'flex'}}>
          <CatalogueItem imageUrl={ "https://i.ibb.co/nccJ4JC/EXPLORER-FLORERO.jpg"} description={"Search for the keywords to learn more about each warning."}/>
          <CatalogueItem imageUrl={"https://florfashions.com/web/wp-content/uploads/2022/06/Diseno-sin-titulo-33.png"} description={"Search for the keywords to learn more about each warning."}/>
          <CatalogueItem imageUrl={"https://florfashions.com/web/wp-content/uploads/2022/06/Diseno-sin-titulo-33.png"} description={"Search for the keywords to learn more about each warning."}/>
          <CatalogueItem imageUrl={"https://florfashions.com/web/wp-content/uploads/2022/06/Diseno-sin-titulo-33.png"} description={"Search for the keywords to learn more about each warning."}/>
          <CatalogueItem imageUrl={"https://florfashions.com/web/wp-content/uploads/2022/06/Diseno-sin-titulo-33.png"} description={"Search for the keywords to learn more about each warning."}/>
          </div>
          <div>
            .
          </div>

          <div style={{display:'flex'}}>
          <CatalogueItem imageUrl={"https://florfashions.com/web/wp-content/uploads/2022/06/Diseno-sin-titulo-33.png"} description={"Search for the keywords to learn more about each warning."}/>
          <CatalogueItem imageUrl={"https://florfashions.com/web/wp-content/uploads/2022/06/Diseno-sin-titulo-33.png"} description={"Search for the keywords to learn more about each warning."}/>
          <CatalogueItem imageUrl={"https://florfashions.com/web/wp-content/uploads/2022/06/Diseno-sin-titulo-33.png"} description={"Search for the keywords to learn more about each warning."}/>
          <CatalogueItem imageUrl={"https://florfashions.com/web/wp-content/uploads/2022/06/Diseno-sin-titulo-33.png"} description={"Search for the keywords to learn more about each warning."}/>
          <CatalogueItem imageUrl={"https://icecube-us-841.icedrive.io/thumbnail?p=LXy6AW5.hXECWGDZFRWH4RSHbIt6ZMm4F.hrX6bRMxcv.9jmKswejfjKVSrJYqEwDtxFcU5M1cnxLHYptRYOhCDlyLGz8uHpUKktTHrYuxBW5vNvCcpi4KLTxaTjTHZF.pQBV1ASGuK0gxj72vtdCg--&w=1024&h=1024&m=cropped"} description={"Search for the keywords to learn more about each warning."}/>

          </div>
          
          
        </AccordionDetails>
      </Accordion>
    </div>
    </>
)

}