import React from 'react'
import './second.css'
import Grid from '@material-ui/core/Grid';
import fifty from '../assets/fifty.svg'
const SecondPage=()=>{
    return(
        <div className={'second'}>
            <Grid container justify={"center"}>
                <Grid item lg={4}>
                    <img src={fifty} height={150} alt=""/>
                </Grid>
                <Grid item lg={4}>
                    <p style={{color:'black',fontSize:22,marginTop:10}}>Increase in marks & conceptualization
                        by learning with the help of Augmented Reality</p>
                    <p style={{color:'black',textAlign:'right'}}>~NCERT</p>
                </Grid>
            </Grid>

        </div>
    )
}
export default SecondPage
