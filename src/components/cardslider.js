import React, {useEffect, useRef} from "react";

import curriculum from '../assets/curriculam.svg'
import './cardslider.css'
import explore from '../assets/explore.svg'
const CardSlider=()=>{



        useEffect(()=>{

        },[])



    return(
        <div className={'card-slider'}>
            <div id="scroll-progress" ></div>
            <img src={curriculum} height={80} alt=""/>
            <ul id="scroller" >
                <li ><div ><img style={{position:'relative',bottom:-250}} src={explore} alt=""/></div></li>
                <li ><div ><img style={{position:'relative',bottom:-250}} src={explore} alt=""/></div></li>
                <li ><div ><img style={{position:'relative',bottom:-250}} src={explore} alt=""/></div></li>
                <li ><div ><img style={{position:'relative',bottom:-250}} src={explore} alt=""/></div></li>
                <li ><div ><img style={{position:'relative',bottom:-250}} src={explore} alt=""/></div></li>

            </ul>
        </div>)
}

export default CardSlider
