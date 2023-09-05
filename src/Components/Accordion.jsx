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
    

return(
    <>
     <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
         
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        > 
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
         < CenteredButton/>
          </Typography>
       
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
        
          </Typography>
          <MediaCard name={"name3"} description={"Search for the keywords to learn more about each warning."} url={"https://florfashions.com/web/wp-content/uploads/2022/06/arreglos5702021-14.png"}/>
        </AccordionDetails>
      </Accordion>
    
    </>
)

}