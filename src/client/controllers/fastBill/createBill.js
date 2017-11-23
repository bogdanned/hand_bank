//const fetch = require('node-fetch')
const base64 = require('base-64');
var js2xmparser = require("js2xmlparser");

const api = {
  rootUrl: 'https://my.fastbill.com/api/1.0/api.php'
}

export default async (order) => {
  const res = await fetch('/createBill', {
    method: "post",
    body: JSON.stringify(order),
    cors: "no-cors",
    headers: {
      "Content-Type": "application/json"
    }
  })
  return res
}
