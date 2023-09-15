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
          <div style={{display:'flex'}}>
          <Card 
          title="KAHALA"
          imageSrc="https://i.ibb.co/tLmpDG6/KAHALA.png"
          description="Hover over the card to see the description."
        />
        <Card 
          title="KAHALA"
          imageSrc="https://i.ibb.co/RT0Lk3z/KAHALA.jpg"
          description="Hover over the card to see the description."
        />
        <Card 
          title="KAHALA"
          imageSrc="https://i.ibb.co/kHBrwzk/KAHALA-FLORERO.jpg"
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
        <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/sJJR8cs/NINA.jpg"
          description="Hover over the card to see the description."
        />
        <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/G5GCht8/NINA.png"
          description="Hover over the card to see the description."
        />

          </div>
          <div style={{display:'flex'}}>
          <Card 
          title="MONDIAL"
          imageSrc="https://icecube-us-841.icedrive.io/thumbnail?p=i4YSP1W.pLJIs4R8qma6dH.RR7EOWHQPdXJRYpidusAlU6iV7g339RbrVjexQvn0yO.sD2g5ApON_h0eJfaP0SDlyLGz8uHpUKktTHrYuxDcvWGcR3uOixMrcrnaAhj6.pQBV1ASGuK0gxj72vtdCg--&w=1024&h=1024&m=cropped"
          description="Hover over the card to see the description."
        />
        <Card 
          title="MONDIAL"
          imageSrc="https://icecube-us-841.icedrive.io/thumbnail?p=F3vwN3p4OdzPyiWqje_6OWOffhCgv9BuvcagJ7XoIhdqrYAiqwyfQnEnuiGN0UPAIxwwt8FZ052H5tsUyKUK6CDlyLGz8uHpUKktTHrYuxBW5vNvCcpi4KLTxaTjTHZF.pQBV1ASGuK0gxj72vtdCg--&w=1024&h=1024&m=cropped"
          description="Hover over the card to see the description."
        />
        <Card 
          title="MONDIAL"
          imageSrc="https://icecube-us-841.icedrive.io/thumbnail?p=XzMiAgvGnsIECdCPl7Os.90iT6HGh_lrWE7cO2LoSd9fUuZfRK8rgmo4BuUVlMURcparLnEAOfI1RN8obWoucyDlyLGz8uHpUKktTHrYuxBW5vNvCcpi4KLTxaTjTHZF.pQBV1ASGuK0gxj72vtdCg--&w=1024&h=1024&m=cropped"
          description="Hover over the card to see the description."
        />

          </div>
          <div style={{display:'flex'}}>
          <Card 
          title="BRIGHTON"
          imageSrc="https://icecube-us-845.icedrive.io/thumbnail?p=BoKekWH5CItzBwOrIFFBqN9Dsmo1.CPs8pQcD0MT9Ay6LEMFsLPq2dJyGYtKgCVqGod.esSAm.fqgB6OBFxYECDlyLGz8uHpUKktTHrYuxDcvWGcR3uOixMrcrnaAhj6.pQBV1ASGuK0gxj72vtdCg--&w=1024&h=1024&m=cropped"
          description="Hover over the card to see the description."
        />
        <Card 
          title="BRIGHTON"
          imageSrc="https://icecube-us-845.icedrive.io/thumbnail?p=iej0DJI1pPSaqKAq383W9yEDIHs.WZz8jD8cmiS.wViq2I1bJYaQ8ZGoDJx_.cB1MelRnW_EmjImtiZh0Nd1uSDlyLGz8uHpUKktTHrYuxBW5vNvCcpi4KLTxaTjTHZF.pQBV1ASGuK0gxj72vtdCg--&w=1024&h=1024&m=cropped"
          description="Hover over the card to see the description."
        />
        <Card 
          title="BRIGHTON"
          imageSrc="https://icecube-us-845.icedrive.io/thumbnail?p=lAxDcqAcWRXw.lU363JBzrvnWBFNKud3Al22BYstMkSHIKDaXmoyHbyqgEGbvFDmBaFUZUwAvJZOIu0tiquHvSDlyLGz8uHpUKktTHrYuxBW5vNvCcpi4KLTxaTjTHZF.pQBV1ASGuK0gxj72vtdCg--&w=1024&h=1024&m=cropped"
          description="Hover over the card to see the description."
        />

          </div>
          <div style={{display:'flex'}}>
          <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />
        <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/sJJR8cs/NINA.jpg"
          description="Hover over the card to see the description."
        />
        <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/G5GCht8/NINA.png"
          description="Hover over the card to see the description."
        />

          </div>
          <div style={{display:'flex'}}>
          <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />
        <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/sJJR8cs/NINA.jpg"
          description="Hover over the card to see the description."
        />
        <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/G5GCht8/NINA.png"
          description="Hover over the card to see the description."
        />

          </div>
          <div style={{display:'flex'}}>
          <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />
        <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/sJJR8cs/NINA.jpg"
          description="Hover over the card to see the description."
        />
        <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/G5GCht8/NINA.png"
          description="Hover over the card to see the description."
        />

          </div>
          <div style={{display:'flex'}}>
          <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />
        <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/sJJR8cs/NINA.jpg"
          description="Hover over the card to see the description."
        />
        <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/G5GCht8/NINA.png"
          description="Hover over the card to see the description."
        />

          </div>
          <div style={{display:'flex'}}>
          <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />
        <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/sJJR8cs/NINA.jpg"
          description="Hover over the card to see the description."
        />
        <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/G5GCht8/NINA.png"
          description="Hover over the card to see the description."
        />

          </div>
          <div style={{display:'flex'}}>
          <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />
        <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/sJJR8cs/NINA.jpg"
          description="Hover over the card to see the description."
        />
        <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/G5GCht8/NINA.png"
          description="Hover over the card to see the description."
        />

          </div>
          <div style={{display:'flex'}}>
          <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />
        <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/sJJR8cs/NINA.jpg"
          description="Hover over the card to see the description."
        />
        <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/G5GCht8/NINA.png"
          description="Hover over the card to see the description."
        />

          </div>
          <div style={{display:'flex'}}>
          <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />
        <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/sJJR8cs/NINA.jpg"
          description="Hover over the card to see the description."
        />
        <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/G5GCht8/NINA.png"
          description="Hover over the card to see the description."
        />

          </div>
          <div style={{display:'flex'}}>
          <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />
        <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/sJJR8cs/NINA.jpg"
          description="Hover over the card to see the description."
        />
        <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/G5GCht8/NINA.png"
          description="Hover over the card to see the description."
        />

          </div>
          <div style={{display:'flex'}}>
          <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />
        <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/sJJR8cs/NINA.jpg"
          description="Hover over the card to see the description."
        />
        <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/G5GCht8/NINA.png"
          description="Hover over the card to see the description."
        />

          </div>
          <div style={{display:'flex'}}>
          <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />
        <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/sJJR8cs/NINA.jpg"
          description="Hover over the card to see the description."
        />
        <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/G5GCht8/NINA.png"
          description="Hover over the card to see the description."
        />

          </div>
          <div style={{display:'flex'}}>
          <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />
        <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/sJJR8cs/NINA.jpg"
          description="Hover over the card to see the description."
        />
        <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/G5GCht8/NINA.png"
          description="Hover over the card to see the description."
        />

          </div>
          <div style={{display:'flex'}}>
          <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />
        <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/sJJR8cs/NINA.jpg"
          description="Hover over the card to see the description."
        />
        <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/G5GCht8/NINA.png"
          description="Hover over the card to see the description."
        />

          </div>
          <div style={{display:'flex'}}>
          <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />
        <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/sJJR8cs/NINA.jpg"
          description="Hover over the card to see the description."
        />
        <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/G5GCht8/NINA.png"
          description="Hover over the card to see the description."
        />

          </div>
          <div style={{display:'flex'}}>
          <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />
        <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/sJJR8cs/NINA.jpg"
          description="Hover over the card to see the description."
        />
        <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/G5GCht8/NINA.png"
          description="Hover over the card to see the description."
        />

          </div>
          <div style={{display:'flex'}}>
          <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />
        <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/sJJR8cs/NINA.jpg"
          description="Hover over the card to see the description."
        />
        <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/G5GCht8/NINA.png"
          description="Hover over the card to see the description."
        />

          </div>
          <div style={{display:'flex'}}>
          <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />
        <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/sJJR8cs/NINA.jpg"
          description="Hover over the card to see the description."
        />
        <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/G5GCht8/NINA.png"
          description="Hover over the card to see the description."
        />

          </div>
          <div style={{display:'flex'}}>
          <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />
        <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/sJJR8cs/NINA.jpg"
          description="Hover over the card to see the description."
        />
        <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/G5GCht8/NINA.png"
          description="Hover over the card to see the description."
        />

          </div>
          <div style={{display:'flex'}}>
          <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />
        <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/sJJR8cs/NINA.jpg"
          description="Hover over the card to see the description."
        />
        <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/G5GCht8/NINA.png"
          description="Hover over the card to see the description."
        />

          </div>
          <div style={{display:'flex'}}>
          <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />
        <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/sJJR8cs/NINA.jpg"
          description="Hover over the card to see the description."
        />
        <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/G5GCht8/NINA.png"
          description="Hover over the card to see the description."
        />

          </div>
          <div style={{display:'flex'}}>
          <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />
        <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/sJJR8cs/NINA.jpg"
          description="Hover over the card to see the description."
        />
        <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/G5GCht8/NINA.png"
          description="Hover over the card to see the description."
        />

          </div>
          <div style={{display:'flex'}}>
          <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />
        <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/sJJR8cs/NINA.jpg"
          description="Hover over the card to see the description."
        />
        <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/G5GCht8/NINA.png"
          description="Hover over the card to see the description."
        />

          </div>
          <div style={{display:'flex'}}>
          <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />
        <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/sJJR8cs/NINA.jpg"
          description="Hover over the card to see the description."
        />
        <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/G5GCht8/NINA.png"
          description="Hover over the card to see the description."
        />

          </div>
          <div style={{display:'flex'}}>
          <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />
        <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/sJJR8cs/NINA.jpg"
          description="Hover over the card to see the description."
        />
        <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/G5GCht8/NINA.png"
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