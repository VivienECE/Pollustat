import React from 'react';
import ChartHumidity from './ChartHumidity';
import ChartSolarRadiation from './ChartSolarRadiation';
import ChartTemperature from './ChartTemperature';
import ChartWindSpeed from './ChartWindSpeed';
import { makeStyles, Container, Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    main: {
        // backgroundColor: "#bbbbff",
        // color: "#0000ff",
    },
    grid: {

    },
    chart: {
        // backgroundColor: "#dfdfff",
    },
    paper: {
        backgroundColor: "#2f2f3f",
        color: "#aabbff",
        paddingBottom: "7%",
    }
}));

function Example(){
    const { grid, chart, paper } = useStyles()
;    return (           
        <Grid container spacing={6} wrap='wrap' className={grid}>
            <Grid item xs={6} className={chart}>
                <Paper variant='outlined' square className={paper}>
                    <ChartHumidity/>
                </Paper>
            </Grid>
            <Grid item xs={6} className={chart}>
                <Paper variant='outlined' square className={paper}>
                    <ChartSolarRadiation/>
                </Paper>
            </Grid>
            <Grid item xs={6} className={chart}>
                <Paper variant='outlined' square className={paper}>
                    <ChartTemperature/>
                </Paper>
            </Grid>
            <Grid item xs={6} className={chart}>
                <Paper variant='outlined' square className={paper}>
                    <ChartWindSpeed/>
                </Paper>
            </Grid>
        </Grid>
    );
}

function MeteoStat() {
    const { main } = useStyles();
    return(
        <Container className={main}>
            <br/>
            <br/>
            <br/>
            <br/>
            <Example/>
        </Container>
    );
}

export default MeteoStat;