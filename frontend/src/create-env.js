const fs = require('fs')
fs.writeFileSync('src/config.json', `{
    "AWS_ID":"${process.env.AWS_ID}",
    "AWS_REGION1":"${process.env.AWS_REGION1}",
    "AWS_DB_TABLE":"${process.env.AWS_DB_TABLE}"
}`)

