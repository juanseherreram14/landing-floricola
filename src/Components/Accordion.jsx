import React,{useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import MediaCard from './FlowerCard'
import AccordionDetails from '@mui/material/AccordionDetails';
import CenteredButton from './SeeMoreBtn'
import CatalogueItem from './CatalogueItem'
import Card from './Card';
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
          <Card 
          title="Card 3"
          imageSrc="https://i.ibb.co/YR2TbNx/EXPLORER.png"
          description="Hover over the card to see the description."
        />
        <Card 
          title="Card 3"
          imageSrc="https://i.ibb.co/YR2TbNx/EXPLORER.png"
          description="Hover over the card to see the description."
        />
        <Card 
          title="Card 3"
          imageSrc="https://i.ibb.co/YR2TbNx/EXPLORER.png"
          description="Hover over the card to see the description."
        />
        <Card 
          title="Card 3"
          imageSrc="https://i.ibb.co/YR2TbNx/EXPLORER.png"
          description="Hover over the card to see the description."
        />
          </div>
          <div>
            .
          </div>

          <div style={{display:'flex'}}>
          <Card 
          title="Card 3"
          imageSrc="https://i.ibb.co/YR2TbNx/EXPLORER.png"
          description="Hover over the card to see the description."
        />
        <Card 
          title="Card 3"
          imageSrc="https://i.ibb.co/YR2TbNx/EXPLORER.png"
          description="Hover over the card to see the description."
        />
        <Card 
          title="Card 3"
          imageSrc="https://i.ibb.co/YR2TbNx/EXPLORER.png"
          description="Hover over the card to see the description."
        />
        <Card 
          title="Card 3"
          imageSrc="https://i.ibb.co/YR2TbNx/EXPLORER.png"
          description="Hover over the card to see the description."/>

          </div>
          
          
        </AccordionDetails>
      </Accordion>
    </div>
    </>
)

}