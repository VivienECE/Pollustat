import React from 'react';
import ChartHumidity from './ChartHumidity';
import ChartSolarRadiation from './ChartSolarRadiation';
import ChartTemperature from './ChartTemperature';
import ChartWindSpeed from './ChartWindSpeed';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    main: {
        backgroundColor: '#550055',
    },
}));

function Example(){
    return (           
        <div>
              <ChartHumidity/>
              <ChartSolarRadiation/>
              <ChartTemperature/>
              <ChartWindSpeed/>
        </div>
    );
}

function MeteoStat() {
    const { main } = useStyles();
    return(
        <div>
            <br/>
            <br/>
            <br/>
            <Example className={main}/>
        </div>
    );
}

export default MeteoStat;