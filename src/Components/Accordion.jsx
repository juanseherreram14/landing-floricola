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
import cl1 from '../Images/CANDELIGHT.jpg'
import cl2 from '../Images/CANDELIGHT.png'
import clflorero from '../Images/CANDELIGHT-FLORERO.jpg'
import dp1 from '../Images/DEEP-PURPLE.jpg'
import dp2 from '../Images/DEEP-PURPLE.png' 
import dpflorero from '../Images/DEEP-PURPLE-FLORERO.jpg'
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
import kfl from '../Images/KAHALA-FLORERO.jpg'
import k1 from '../Images/KAHALA.png'
import g1 from '../Images/GOTCHA.jpg'
import g2 from '../Images/GOTCHA.png'
import gf from '../Images/GOTCHA-FLORERO.jpg'
import n1 from '../Images/NINA.jpg'
import n2 from '../Images/NINA.png'
import nf from '../Images/NINA-FLORERO.jpg'
import k2 from '../Images/KAHALA.jpg'
import ll from '../Images/LOLA-FLORERO.jpg'
import l1 from '../Images/LOLA.png'
import l2 from '../Images/LOLA.jpg'
import luf from '../Images/LUCIANO-FLORERO.jpg'
import lu1 from '../Images/LUCIANO.png'
import lu2 from '../Images/LUCIANO.jpg'
import mof from '../Images/MONDIAL-FLORERO.jpg'
import mo1 from '../Images/MONDIAL.png'
import mo2 from '../Images/MONDIAL.jpg'
import mtf from "../Images/MAGIC-TIMES-FLORERO.jpg"
import mt1 from "../Images/MAGICTIMES.jpg"
import mt2 from "../Images/MAGICTIMES.png"
import opf from "../Images/OPALA-FLORERO.jpg"
import op1 from "../Images/OPALA.jpg"
import op2 from "../Images/OPALA.png"
import palf from "../Images/PALOMA-FLORERO.jpg"
import pal1 from "../Images/PALOMA.jpg"
import pal2 from "../Images/PALOMA.png"
import pff from "../Images/PINK-FLOYD-FLORERO.jpg"
import pf1 from "../Images/PINKFLOYD.jpg"
import pf2 from "../Images/PINKFLOYD.png"
import pbf from "../Images/PLAYA-BLANCA-FLORERO.jpg"
import pb1 from "../Images/PLAYABLANCA.jpg"
import pb2 from "../Images/PLAYABLANCACENITAL.jpg"
import pr1 from "../Images/PROUD.jpg"
import pr2 from "../Images/PROUD.png"
import rpf from "../Images/REDPANTHERFLORERO.jpg"
import rp1 from "../Images/REDPANTHER.jpg"
import rp2 from "../Images/REDPANTHER.png"
import tf from "../Images/TIFFANYFLORERO.jpg"
import t1 from "../Images/TIFFANY.jpg"
import t2 from "../Images/TIFFANY.png"
import wof from "../Images/WHITE-OHARA-FLORERO.jpg"
import wo1 from "../Images/WHITEOHARA.jpg"
import wo2 from "../Images/WHITEOHARA.png"


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
          <div className="accordionrow">
          <Card 
          title="EXPLORER"
          imageSrc={explorerflorero}
          imageSrc2={explorer1}
          imageSrc3 = {explorer2}
          description="Hover over the card to see the description."
        />
          <Card 
          title="MONDIAL"
          imageSrc={mof}
          imageSrc2={mo1}
          imageSrc3 = {mo2}
          description="Hover over the card to see the description."
        />
      <Card 
          title="WHITE OHARA"
          imageSrc={wof}
          imageSrc2={wo1}
          imageSrc3 = {wo2}
          description="Hover over the card to see the description."
        />


          </div>
          <div>
            .
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>

  

          </div> 
          <div style={{ display: 'flex', justifyContent: 'center' }}>
        
  

          </div>
          <div className="accordionrow">
          <Card 
          title="BRIGHTON"
          imageSrc={brflorero}
          imageSrc2={br1}
          imageSrc3 = {br2}
          description="Hover over the card to see the description."
        />
       <Card 
          title="BLUEZ"
          imageSrc={blflorero}
          imageSrc2={bl1}
          imageSrc3 = {bl2}
          description="Hover over the card to see the description."
        />
     <Card 
           title="CANDELIGHT"
           imageSrc={clflorero}
           imageSrc2={cl1}
           imageSrc3 = {cl2}
          description="Hover over the card to see the description."
        />
          </div> 
          <div style={{ display: 'flex', justifyContent: 'center' }}>


          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
        
    

          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
     
    

          </div>
          <div className="accordionrow">
          <Card 
          title="DEEP PURPLE"
          imageSrc={dpflorero}
          imageSrc2={dp1}
          imageSrc3 = {dp2}
          description="Hover over the card to see the description."
        />
      <Card 
          title="ESPERANCE"
          imageSrc={epflorero}
          imageSrc2={ep1}
          imageSrc3 = {ep2}
          description="Hover over the card to see the description."
        />
     <Card 
          title="FREEDOM"
          imageSrc={frfl}
          imageSrc2={fr1}
          imageSrc3 = {fr2}
          description="Hover over the card to see the description."
        />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
        
      

          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
       
     

          </div>
          <div className="accordionrow">
          <Card 
          title="FRUTETTO"
          imageSrc={frufl}
          imageSrc2={fru1}
          imageSrc3 = {fru2}
          description="Hover over the card to see the description."
        />
     <Card 
          title="HERMOSA"
          imageSrc={hermf} 
          imageSrc2={herm1}
          imageSrc3={herm1}
        
          description="Hover over the card to see the description."
        />
 <Card 
          title="HOT EXPLORER"
          imageSrc={hefl} 
          imageSrc2={he1}
          imageSrc3 = {he2}
          description="Hover over the card to see the description."
        />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
         
    

          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
         
    
          </div>
          <div className="accordionrow">
          <Card 
          title="KAHALA"
          imageSrc={kfl} 
          imageSrc2={k1}
          imageSrc3 = {k2}
          description="Hover over the card to see the description."
        />
  <Card 
          title="LOLA"
          imageSrc={ll} 
          imageSrc2={l1}
          imageSrc3 = {l2}
          description="Hover over the card to see the description."
        />
   <Card 
          title="LUCIANO"
          imageSrc={luf} 
          imageSrc2={lu1}
          imageSrc3 = {lu2}
          description="Hover over the card to see the description."
        />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
         

          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
         

          </div>
          <div className="accordionrow">
          <Card 
          title="MAGIC TIMES"
          imageSrc={mtf}
          imageSrc2={mt1}
          imageSrc3 = {mt2}
          description="Hover over the card to see the description."
        />
  <Card 
          title="MONDIAL"
          imageSrc={mof}
          imageSrc2={mo1}
          imageSrc3 = {mo2}
          description="Hover over the card to see the description."
        />
          <Card 
          title="OPALA"
          imageSrc={opf}
          imageSrc2={op1}
          imageSrc3 = {op2}
          description="Hover over the card to see the description."
        />

          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
         
  

          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
        

          </div>
          <div className="accordionrow">
          <Card 
          title="PALOMA"
          imageSrc={palf}
          imageSrc2={pal1}
          imageSrc3 = {pal2}
          description="Hover over the card to see the description."
        />
  <Card 
          title="PINK FLOYD"
          imageSrc={pff}
          imageSrc2={pf1}
          imageSrc3 = {pf2}
          description="Hover over the card to see the description."
        />
    <Card 
          title="PLAYA BLANCA"
          imageSrc={pbf}
          imageSrc2={pb1}
          imageSrc3 = {pb2}
          description="Hover over the card to see the description."
        />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
        


          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
      


          </div>
          <div className="accordionrow">
          <Card 
          title="PROUD"
          imageSrc={pr1} 
          imageSrc2={pr2}
          imageSrc3={pr2}
          description="Hover over the card to see the description."
        />
  <Card 
          title="RED PANTHER"
          imageSrc={rpf}
          imageSrc2={rp1}
          imageSrc3 = {rp2}
          description="Hover over the card to see the description."
        />
   <Card 
          title="TIFFANY"
          imageSrc={tf}
          imageSrc2={t1}
          imageSrc3 = {t2}
          description="Hover over the card to see the description."
        />
          </div>
          <div className="accordionrow">
          <Card 
          title="GOTCHA"
          imageSrc={gf}
          imageSrc2={g1}
          imageSrc3 = {g2}
          description="Hover over the card to see the description."
        />
  <Card 
          title="NINA"
          imageSrc={nf}
          imageSrc2={n1}
          imageSrc3 = {n2}
          description="Hover over the card to see the description."
        />

          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
       


          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
       

          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>



          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>


          </div>
          
          
        </AccordionDetails>
      </Accordion>
    </div>
    </section>
    </>
)

}