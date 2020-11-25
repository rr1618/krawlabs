import React from 'react'
import './second.css'
import Grid from '@material-ui/core/Grid';
import fifty from '../assets/fifty.svg'
import learn from '../assets/learn.svg'
import {useMediaQuery} from "react-responsive";

import anuradha from '../assets/anuradha.svg'
import ButtonSlider from "./buttonslider";
const SecondPage=()=>{
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    return(
        <div className={'second'}>
            <Grid container justify={"center"} lg={10} justify={"space-around"}>
                <Grid item lg={4}>
                    <img src={fifty} height={150} alt=""/>
                </Grid>
                <Grid item lg={4}>
                    <p style={{color:'black',fontSize:22,marginTop:10}}>Increase in marks & conceptualization
                        by learning with the help of Augmented Reality</p>
                    <p style={{color:'black',textAlign:'right'}}>~NCERT</p>
                </Grid>
                <Grid item  lg={10} style={{position:'absolute',top:'28%',left:'5%'}}>
                    {isPortrait?<img src={learn} height={50}   alt=""/>:<img src={learn}   alt=""/>}
                </Grid>
                <Grid item container style={{position:'absolute',top:'60%',color:'black'}} lg={10}>
                    <Grid item  lg={7} >
                        {isPortrait?<img src={anuradha} height={200}   alt=""/>:<img src={anuradha}   alt=""/>}
                        {/*<img src={anuradha} height={400}  alt=""/>*/}
                    </Grid>
                    <Grid item  lg={5}

                    >
                        <div>
                            <h3>Anuradha Mathur</h3>
                            <span>HOD-Kalam Labs</span>
                            <p>Mrs Anuradha Madhur is one of the most celebrated Physisicts in India.
                                Core authors for Physics NCERT Textbooks of Class 11th and 12th.
                                She has
                                previously taught at Harvard University, USA
                                Ex- HOD Physics NCERT.
                            </p>
                            <p>At Kalam Labs, she guides students across Globe to Study Science Experimentally.</p>
                        </div>

                    </Grid>
                </Grid>


            </Grid>
            {/*<div style={{position:'absolute',bottom:0}}>*/}

            {/*</div>*/}

        </div>
    )
}
export default SecondPage
