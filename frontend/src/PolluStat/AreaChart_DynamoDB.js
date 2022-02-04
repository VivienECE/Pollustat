import React, { PureComponent } from 'react';
import {
 AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import * as AWS from 'aws-sdk'
import moment from 'moment'
import Context from './Context'
var config = require('../config.json');


const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    console.log(payload)
    return (
      <div className="custom-tooltip">
        <center>
        <p className="label">{`${payload[0].name} : ${payload[0].value}`} ug/m3</p>
        <p className="desc"> Time : {moment(label).format("hh:mm")}</p>
        </center>
      </div>
    );
  }

  return null;
};

export default class Example extends PureComponent {
      state = {
        //Assing a array to your pokeList state
        data: [],
        //Have a loading state where when data retrieve returns data.
        loading: true
    }
    
    static contextType = Context
    
    async componentDidMount() {
      //Have a try and catch block for catching errors.
      try {
          AWS.config.update({region: config.AWS_REGION1});
          AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            IdentityPoolId: config.AWS_ID,
          });
          AWS.config.credentials.get(function (err) {
             if (err) console.log(err);
             else console.log("Connected to AWS");
          });

          var docClient = new AWS.DynamoDB.DocumentClient();
          // #datetime between :?? and :now
          var params = {
            TableName:  config.AWS_DB_TABLE,
            ProjectionExpression: "#timestamp, device_data",
            FilterExpression: "#timestamp < :now",
            ExpressionAttributeNames: {
                "#timestamp": "timestamp",
            },
            ExpressionAttributeValues: {
                 ":now": Date.now()
            }
          };
          docClient.scan(params, (err, data) => {
	           if(data!=null)
             {data.Items.sort(function (a, b) {
               return a.timestamp - b.timestamp;
             });
               var OrderedData = []
               data.Items.forEach(item => {
                  var newItem
                  if(item.device_data.type==="PM10" && item.device_data["PM"])
                    newItem = {"PM10" : item.device_data.PM, timestamp : item.timestamp }
                  else if(item.device_data.type==="PM2.5" && item.device_data["PM"])
                    newItem = {"PM2.5" : item.device_data.PM, timestamp : item.timestamp }
                  OrderedData.push(newItem)
               });
               this.setState({ data : OrderedData });
           }
           });
          } catch(err) {
              console.log("Error fetching data-----------", err);
          }
  }

  render() {
    const {domain, tickFormatter} = this.context;
    console.log(this.state.data)
    return (
      <div>
      <h5 class="texte">Particules Fines (PPM)</h5>
      <div style={{ width: '95%', height: 300 }}>
        <ResponsiveContainer>
          <AreaChart
            data={this.state.data}
            margin={{
              top: 10, right: 30, left: 0, bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
               dataKey = 'timestamp'
               allowDataOverFlow={true}
               domain = {domain}
               tickFormatter = {(unixTime) => moment(unixTime).format(tickFormatter)}
               type = 'number'
               scale="time"
             />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
             <Area connectNulls = "true" type="monotone" name="PM10" dataKey="PM10" stackId="1" stroke="#8884d8" fill="#8884d8"  activeDot={{r: 8}}/>
            <Area connectNulls = "true" type="monotone" name="PM2.5" dataKey="PM2.5" stackId="1" stroke="#84d8ca" fill="#84d8ca" activeDot={{r: 8}}/>
          </AreaChart>
        </ResponsiveContainer>
      </div>
      </div>
    );
  }
}