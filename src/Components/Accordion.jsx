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
import explorer1 from '../Images/EXPLORER.jpg'
import explorer2 from '../Images/EXPLORER.png'
import explorerflorero from '../Images/EXPLORER.png'
import br1 from '../Images/BRIGHTON.jpg'
import br2 from '../Images/BRIGHTON.png'
import brflorero from '../Images/BRIGHTON-FLORERO.jpg'
import bl1 from '../Images/BLUEZFLORERO.jpg'
import bl2 from '../Images/BLUEZ.png'
import blflorero from '../Images/BLUEZFLORERO.jpg'
import cl1 from '../Images/BLUEZFLORERO.jpg'
import cl2 from '../Images/BLUEZ.png'
import clflorero from '../Images/CANDELIGHT-FLORERO.jpg'
import dp1 from '../Images/BLUEZFLORERO.jpg'
import dp2 from '../Images/BLUEZ.png' 
import dpflorero from '../Images/CANDELIGHT-FLORERO.jpg'
import ep1 from '../Images/ESPERANCE.jpg'
import ep2 from '../Images/ESPERANCE.png'
import epflorero from '../Images/ESPERANCE.jpg'
import frfl from '../Images/FREEDOM-FLORERO.jpg'
import fr1 from '../Images/FREEDOM.png'
import fr2 from '../Images/FREEDOM.jpg'
import frufl from '../Images/FRUTETTO-FLORERO.jpg'
import fru1 from '../Images/FRUTETTO.png'
import fru2 from '../Images/FRUTETTO.jpg'
import hermf from '../Images/HERMOSA-FLORERO.jpg'
import herm1 from '../Images/HERMOSA.png'
import hefl from '../Images/HOT-EXPLORER-FLORERO.jpg'
import he1 from '../Images/HOTEXPLORER.png'
import he2 from '../Images/HOTEXPLORER.jpg'
import kfl from '../Images/HOT-EXPLORER-FLORERO.jpg'
import k1 from '../Images/HOTEXPLORER.png'
import k2 from '../Images/HOTEXPLORER.jpg'
import ll from '../Images/LOLA-FLORERO.jpg'
import l1 from '../Images/LOLA.png'
import l2 from '../Images/LOLA.jpg'
import luf from '../Images/LUCIANO-FLORERO.jpg'
import lu1 from '../Images/LUCIANO.png'
import lu2 from '../Images/LUCIANO.jpg'


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
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Card 
          title="KAHALA"
          imageSrc="https://i.ibb.co/tLmpDG6/KAHALA.png"
          imageSrc2={explorer1}
          imageSrc3 = {explorer2}
          description="Hover over the card to see the description."
        />

          </div>
          <div>
            .
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />
  

          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Card 
          title="MONDIAL"
          imageSrc="https://icecube-us-841.icedrive.io/thumbnail?p=i4YSP1W.pLJIs4R8qma6dH.RR7EOWHQPdXJRYpidusAlU6iV7g339RbrVjexQvn0yO.sD2g5ApON_h0eJfaP0SDlyLGz8uHpUKktTHrYuxDcvWGcR3uOixMrcrnaAhj6.pQBV1ASGuK0gxj72vtdCg--&w=1024&h=1024&m=cropped"
          description="Hover over the card to see the description."
        />
  

          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Card 
          title="BRIGHTON"
          imageSrc={brflorero}
          imageSrc2={br1}
          imageSrc3 = {br2}
          description="Hover over the card to see the description."
        />
     

          </div> 
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />


          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Card 
          title="BLUEZ"
          imageSrc={blflorero}
          imageSrc2={bl1}
          imageSrc3 = {bl2}
          description="Hover over the card to see the description."
        />
    

          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Card 
           title="CANDELIGHT"
           imageSrc={clflorero}
           imageSrc2={cl1}
           imageSrc3 = {cl2}
          description="Hover over the card to see the description."
        />
    

          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Card 
          title="DEEP PURPLE"
          imageSrc={dpflorero}
          imageSrc2={dp1}
          imageSrc3 = {dp2}
          description="Hover over the card to see the description."
        />
    
  
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Card 
          title="ESPERANCE"
          imageSrc={epflorero}
          imageSrc2={ep1}
          imageSrc3 = {ep2}
          description="Hover over the card to see the description."
        />
      

          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Card 
          title="FREEDOM"
          imageSrc={frfl}
          imageSrc2={fr1}
          imageSrc3 = {fr2}
          description="Hover over the card to see the description."
        />
     

          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Card 
          title="FRUTETTO"
          imageSrc={frufl}
          imageSrc2={fru1}
          imageSrc3 = {fru2}
          description="Hover over the card to see the description."
        />
    

          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Card 
          title="HERMOSA"
          imageSrc={hermf} 
          imageSrc2={herm1}
        
          description="Hover over the card to see the description."
        />
    

          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Card 
          title="HOT EXPLORER"
          imageSrc={hefl} 
          imageSrc2={he1}
          imageSrc3 = {he2}
          description="Hover over the card to see the description."
        />
    
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Card 
          title="KAHALA"
          imageSrc={kfl} 
          imageSrc2={k1}
          imageSrc3 = {k2}
          description="Hover over the card to see the description."
        />
 
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Card 
          title="LOLA"
          imageSrc={ll} 
          imageSrc2={l1}
          imageSrc3 = {l2}
          description="Hover over the card to see the description."
        />
  

          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Card 
          title="LUCIANO"
          imageSrc={luf} 
          imageSrc2={lu1}
          imageSrc3 = {lu2}
          description="Hover over the card to see the description."
        />

          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Card 
          title="MAGIC TIMES"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />
 
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Card 
          title="MONDIAL"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />
  

          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Card 
          title="OPALA"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />


          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Card 
          title="PALOMA"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />

          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Card 
          title="PINK FLOYD"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />


          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Card 
          title="PLAYA BLANCA"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />


          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Card 
          title="PROUD"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />


          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Card 
          title="RED PANTHER"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />


          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Card 
          title="TIFFANY"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />


          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Card 
          title="WHITE OHARA"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />


          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Card 
          title="NINA"
          imageSrc="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg"
          description="Hover over the card to see the description."
        />


          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
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