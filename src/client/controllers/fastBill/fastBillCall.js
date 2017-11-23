
const base64 = require('base-64');
var js2xmparser = require("js2xmlparser");

const api = {
  rootUrl: 'https://my.fastbill.com/api/1.0/api.php'
}

const auth = base64.encode('bogdanned32@gmail.com:d3d17c41301acd8f947f8c4dba142f7dEqyaHibcIytEWjLd7B0bH8fwxRI9MCgS')

let params = {
  method: 'POST',
  headers: {
    'Authorization': `Basic ${auth}`,
    'Content-Type': 'application/xml'
  },
  body: null,
  mode: 'no-cors',
  cache: 'default'
}


export default async (apiCallJson) => {
  const xmlBody = js2xmlparser.parse("fbapi", apiCallJson)
  params.body = xmlBody
  const test = await fetch(api.rootUrl, params)
  return await test.text()
}
