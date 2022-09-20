import React from 'react'
import { Typography } from '@mui/material'
import MobileError from '../resources/Mobile.svg'
import {Grid} from '@mui/material'

//Mobile devices not supported page

export default function MobilePage(){
    return (
    <Grid container spacing={1}>
        <Grid item xs={12} textAlign="center" marginTop={"20%"}>
            <img src={MobileError} height="70%" width="70%" />
        </Grid>
        <Grid item xs={12} textAlign="center">
            <Typography variant='h7'>
                Kendra isn't supported on mobile devices yet.
            </Typography>
        </Grid>
        <Grid item xs={12} textAlign="center">
            <Typography variant='h7' >
                Try using it on Desktop!
            </Typography>
        </Grid>
    </Grid>
    )
}