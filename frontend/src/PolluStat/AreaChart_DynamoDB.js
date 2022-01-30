import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import * as AWS from 'aws-sdk'
import moment from 'moment'
import Context from './Context'

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
          AWS.config.update({region: process.env.AWS_REGION});
          AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            IdentityPoolId: process.env.AWS_ID,
          });
          AWS.config.credentials.get(function (err) {
             if (err) console.log(err);
             else console.log(AWS.config.credentials);
          });

          var docClient = new AWS.DynamoDB.DocumentClient();
          // #datetime between :?? and :now
          var params = {
            TableName:  process.env.AWS_DB_TABLE,
            ProjectionExpression: "#sample_time, device_data, device_id",
            FilterExpression: "#sample_time < :now",
            ExpressionAttributeNames: {
                "#sample_time": "sample_time",
            },
            ExpressionAttributeValues: {
                 ":now": Date.now()
            }
          };
          docClient.scan(params, (err, data) => {
	           if(data!=null)
             {data.Items.sort(function (a, b) {
               return a.datetime - b.datetime;
             });
               this.setState({ data : data.Items });
           }
             console.log(this.state.data)
           });
          } catch(err) {
              console.log("Error fetching data-----------", err);
          }
  }

  render() {
    const {domain, tickFormatter} = this.context;
    console.log(domain)
    return (
      <div>
      <h5 class="texte">CO2 en PPM</h5>
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
               dataKey = 'sample_time'
               allowDataOverFlow={true}
               domain = {domain}
               tickFormatter = {(unixTime) => moment(unixTime).format(tickFormatter)}
               type = 'number'
             />
            <YAxis />
            <Tooltip />
            <Area type="monotone" name="PPM" dataKey="device_data.polluant1" stackId="1" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" name="PPM" dataKey="device_data.polluant2" stackId="0" stroke="#84d8ca" fill="#84d8ca" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      </div>
    );
  }
}