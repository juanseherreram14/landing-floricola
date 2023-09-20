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
    const [buttonText, setButtonText] = useState("FULL CATALOGUE");


    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
        setButtonText(expanded ? "FULL CATALOGUE" : "CLOSE CATALOGUE");
      };

//<a href="https://ibb.co/kHBrwzk"><img src="https://i.ibb.co/kHBrwzk/KAHALA-FLORERO.jpg" alt="KAHALA-FLORERO" border="0"></a>

//<a href="https://ibb.co/G5GCht8"><img src="https://i.ibb.co/G5GCht8/NINA.png" alt="NINA" border="0"></a>
return(
    <>
    <section id="FCatalogue">
     
          <div className='catalogue'>
        
     <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
         
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        > 
       
          <Typography  sx={{ width: '100%', flexShrink: 0, alignItems: 'center'}}>
         
          <CenteredButton text={buttonText} /> 
    
          </Typography>

        </AccordionSummary>
       
        <AccordionDetails> 
    <h1 className="title"> CATALOGUE </h1>
          <div style={{alignItems:'center',}}>
          <Card 
          title="KAHALA"
          imageSrc="https://i.ibb.co/tLmpDG6/KAHALA.png"
          description="Hover over the card to see the description."
        />

          </div>
          <div>
            .
          </div>

          <div style={{display:'flex'}}>
          <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />
  

          </div>
          <div style={{display:'flex'}}>
          <Card 
          title="MONDIAL"
          imageSrc="https://icecube-us-841.icedrive.io/thumbnail?p=i4YSP1W.pLJIs4R8qma6dH.RR7EOWHQPdXJRYpidusAlU6iV7g339RbrVjexQvn0yO.sD2g5ApON_h0eJfaP0SDlyLGz8uHpUKktTHrYuxDcvWGcR3uOixMrcrnaAhj6.pQBV1ASGuK0gxj72vtdCg--&w=1024&h=1024&m=cropped"
          description="Hover over the card to see the description."
        />
  

          </div>
          <div style={{display:'flex'}}>
          <Card 
          title="BRIGHTON"
          imageSrc="https://icecube-us-845.icedrive.io/thumbnail?p=BoKekWH5CItzBwOrIFFBqN9Dsmo1.CPs8pQcD0MT9Ay6LEMFsLPq2dJyGYtKgCVqGod.esSAm.fqgB6OBFxYECDlyLGz8uHpUKktTHrYuxDcvWGcR3uOixMrcrnaAhj6.pQBV1ASGuK0gxj72vtdCg--&w=1024&h=1024&m=cropped"
          description="Hover over the card to see the description."
        />
     

          </div>
          <div style={{display:'flex'}}>
          <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />


          </div>
          <div style={{display:'flex'}}>
          <Card 
          title="BLUEZ"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />
    

          </div>
          <div style={{display:'flex'}}>
          <Card 
           title="CANDELIGHT"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />
    

          </div>
          <div style={{display:'flex'}}>
          <Card 
          title="DEEP PURPLE"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />
    
  
          </div>
          <div style={{display:'flex'}}>
          <Card 
          title="ESPERANCE"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />
      

          </div>
          <div style={{display:'flex'}}>
          <Card 
          title="FREEDOM"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />
     

          </div>
          <div style={{display:'flex'}}>
          <Card 
          title="FRUTETTO"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />
    

          </div>
          <div style={{display:'flex'}}>
          <Card 
          title="HERMOSA"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />
    

          </div>
          <div style={{display:'flex'}}>
          <Card 
          title="HOT EXPLORER"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />
    
          </div>
          <div style={{display:'flex'}}>
          <Card 
          title="KAHALA"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />
 
          </div>
          <div style={{display:'flex'}}>
          <Card 
          title="LOLA"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />
  

          </div>
          <div style={{display:'flex'}}>
          <Card 
          title="LUCIANO"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />

          </div>
          <div style={{display:'flex'}}>
          <Card 
          title="MAGIC TIMES"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />
 
          </div>
          <div style={{display:'flex'}}>
          <Card 
          title="MONDIAL"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />
  

          </div>
          <div style={{display:'flex'}}>
          <Card 
          title="OPALA"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />


          </div>
          <div style={{display:'flex'}}>
          <Card 
          title="PALOMA"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />

          </div>
          <div style={{display:'flex'}}>
          <Card 
          title="PINK FLOYD"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />


          </div>
          <div style={{display:'flex'}}>
          <Card 
          title="PLAYA BLANCA"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />


          </div>
          <div style={{display:'flex'}}>
          <Card 
          title="PROUD"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />


          </div>
          <div style={{display:'flex'}}>
          <Card 
          title="RED PANTHER"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />


          </div>
          <div style={{display:'flex'}}>
          <Card 
          title="TIFFANY"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />


          </div>
          <div style={{display:'flex'}}>
          <Card 
          title="WHITE OHARA"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />


          </div>
          <div style={{display:'flex'}}>
          <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />


          </div>
          <div style={{display:'flex'}}>
          <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />


          </div>
          
          
        </AccordionDetails>
      </Accordion>
    </div>
    </section>
    </>
)

}