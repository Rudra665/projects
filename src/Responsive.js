import { Grid } from '@mui/material'
import React from 'react'

function Responsive() {
    return (
        <Grid container spacing={2}>
            <Grid item md={6} sm={12} sx={12}>
                Hello World
            </Grid>
            <Grid item md={6} sm={12} sx={12}>
                Hello World
            </Grid>
            <Grid item md={6} sm={12} sx={12}>
                Hello World
            </Grid>
            <Grid item md={6} sm={12} sx={12}>
                Hello World
            </Grid>
        </Grid>
    )
}

export default Responsive