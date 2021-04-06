import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import * as AWS from 'aws-sdk'
import moment from 'moment'

export default class Example extends PureComponent {
      state = {
        //Assing a array to your pokeList state
        data: [],
        //Have a loading state where when data retrieve returns data.
        loading: true
    }

    async componentDidMount() {
      //Have a try and catch block for catching errors.
      try {
          AWS.config.update({region: 'us-east-2'});
          AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            IdentityPoolId: process.env.IDENTITY_POOL_ID,
          });
          AWS.config.credentials.get(function (err) {
             if (err) console.log(err);
             else console.log(AWS.config.credentials);
          });

          var docClient = new AWS.DynamoDB.DocumentClient();
          // #datetime between :?? and :now
          var params = {
            TableName:  "Pollustats",
            ProjectionExpression: "#datetime, pollution,nom",
            FilterExpression: "#datetime < :now",
            ExpressionAttributeNames: {
                "#datetime": "datetime",
            },
            ExpressionAttributeValues: {
                 ":now": Date.now()
            }
          };
          docClient.scan(params, (err, data) => {
             if(data=!null)
                this.setState({ data : data.Items });
             console.log(this.state.data)
           });

          } catch(err) {
              console.log("Error fetching data-----------", err);
          }
  }

  render() {
    return (
      <div>
      <h5 class="texte">CO2 en ug</h5>
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
               dataKey = 'datetime'
               domain = {['auto', 'auto']}
               name = 'Time'
               tickFormatter = {(unixTime) => moment(unixTime).format('DD/MM')}
               type = 'number'
             />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="pollution" label="CO2" stackId="1" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      </div>
    );
  }
}
