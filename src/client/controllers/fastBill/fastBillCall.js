const base64 = require('base-64');
var js2xmlparser = require("js2xmlparser");

const api = {
  rootUrl: 'https://my.fastbill.com/api/1.0/api.php'
}


export default async (apiCallJson) => {
  const auth = base64.encode('bogdanned32@gmail.com:d3d17c41301acd8f947f8c4dba142f7dEqyaHibcIytEWjLd7B0bH8fwxRI9MCgS')
  var headers = new Headers();
  //headers.set("Authorization", `Basic ${auth}`);
  headers.set("Content-Type", "application/json");
  let params = {
    method: 'post',
    mode: 'no-cors',
    headers: headers,
    body: JSON.stringify(apiCallJson)
  }
  const xmlBody = js2xmlparser.parse("fbapi", apiCallJson)
  const test = await fetch('/createBill', params)
  return await test.text()
}
