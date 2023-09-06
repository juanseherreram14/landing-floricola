import React,{useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import MediaCard from './FlowerCard'
import AccordionDetails from '@mui/material/AccordionDetails';
import CenteredButton from './SeeMoreBtn'
export default function AccordionMenu(){
    const [expanded, setExpanded] = useState(false);


    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
      };

      const marginSmallCard = '10px'

    

return(
    <>
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
          <MediaCard name={"name3"} description={"Search for the keywords to learn more about each warning."} url={"https://florfashions.com/web/wp-content/uploads/2022/06/arreglos5702021-14.png"} width={500} margin={marginSmallCard}/>
          <MediaCard name={"name3"} description={"Search for the keywords to learn more about each warning."} url={"https://florfashions.com/web/wp-content/uploads/2022/06/arreglos5702021-14.png"} width={500} margin={marginSmallCard}/>
          <MediaCard name={"name3"} description={"Search for the keywords to learn more about each warning."} url={"https://florfashions.com/web/wp-content/uploads/2022/06/arreglos5702021-14.png"} width={500} margin={marginSmallCard}/>
          <MediaCard name={"name3"} description={"Search for the keywords to learn more about each warning."} url={"https://florfashions.com/web/wp-content/uploads/2022/06/arreglos5702021-14.png"} width={500} margin={marginSmallCard}/>
          <MediaCard name={"name3"} description={"Search for the keywords to learn more about each warning."} url={"https://florfashions.com/web/wp-content/uploads/2022/06/arreglos5702021-14.png"} width={500} margin={marginSmallCard}/>
          </div>
          <div>
            .
          </div>

          <div style={{display:'flex'}}>
          <MediaCard name={"name3"} description={"Search for the keywords to learn more about each warning."} url={"https://florfashions.com/web/wp-content/uploads/2022/06/arreglos5702021-14.png"} width={500} margin={marginSmallCard}/>
          <MediaCard name={"name3"} description={"Search for the keywords to learn more about each warning."} url={"https://florfashions.com/web/wp-content/uploads/2022/06/arreglos5702021-14.png"} width={500} margin={marginSmallCard}/>
          <MediaCard name={"name3"} description={"Search for the keywords to learn more about each warning."} url={"https://florfashions.com/web/wp-content/uploads/2022/06/arreglos5702021-14.png"} width={500} margin={marginSmallCard}/>
          <MediaCard name={"name3"} description={"Search for the keywords to learn more about each warning."} url={"https://florfashions.com/web/wp-content/uploads/2022/06/arreglos5702021-14.png"} width={500} margin={marginSmallCard}/>
          <MediaCard name={"name3"} description={"Search for the keywords to learn more about each warning."} url={"https://florfashions.com/web/wp-content/uploads/2022/06/arreglos5702021-14.png"} width={500} margin={marginSmallCard}/>

          </div>
          
          
        </AccordionDetails>
      </Accordion>
    
    </>
)

}