import React from 'react'
import Grid from '@material-ui/core/Grid';
import {
    Link,
} from "react-scroll";
import Button from '@material-ui/core/Button';
import CardSlider from "./cardslider";
import './home.css'
import downarrow from '../assets/downarrow.png'

const Home=()=>{
    return(
        <div className={'header'}>
            <Grid container  justify={"space-around"} >
                <Grid item container   style={{marginTop:30}} lg={10}>
                    <Grid item lg={6}>
                        <h2>Kalam Labs</h2>
                    </Grid>
                    <Grid item lg={6} >
                        <Link className={'btn btn-link'}>Home</Link>
                        <Link className={'btn btn-link'}>Home</Link>
                        <Link className={'btn btn-link'}>Home</Link>

                    </Grid>
                </Grid>
                <Grid container justify={"space-around"}>
                    <Grid item lg={10} style={{marginTop:50}}>
                        <h1>Kalam Winter School</h1>
                        <p> Learn science the practical way with our Augmented Reality courses designed for Indian school students</p>
                        <p>2 Weeks  |  Virtual Science Playground  |  Live Scientist Interactions</p>
                        <Button  variant={'contained'} style={{marginRight:10}}>Curriculum</Button>
                        <Button variant={'contained'} style={{backgroundColor:'#0C00E0',color:'white'}}>Buy Now</Button>
                    </Grid>
                </Grid>
            </Grid>
                <CardSlider/>
            <img src={downarrow} style={{position:'absolute',bottom:'-20px',left:'50%'}} height={50} alt=""/>
        </div>
    )
}

export default Home
