import bodyParser from 'body-parser'
var express = require('express');
var parseString = require('xml2js').parseString;

var parser = require('xml2json');

const fetch = require('node-fetch')
const base64 = require('base-64');
var js2xmlparser = require("js2xmlparser");

const api = {
  rootUrl: 'https://my.fastbill.com/api/1.0/api.php'
}

const auth = base64.encode('bogdanned32@gmail.com:d3d17c41301acd8f947f8c4dba142f7dEqyaHibcIytEWjLd7B0bH8fwxRI9MCgS')


const createCustomer = {
  service: 'customer.create',
  data: {
    customer_type: 'business',
    organization: 'Musterfirma2',
    last_name: 'Mustermann2'
  }
}

const createBill = {
  service: 'invoice.create',
  data: {
    title: "Bathroom Renovation",
    number: 23434,
    introtext: "Handwerker Invoice Bathroom Renovation",
    description: "Musterman Baddewanne Berlin 10318"
  }
}

const xmlBody = js2xmlparser.parse("fbapi", createCustomer)

const testOptions = {
  method: 'POST',
  headers: {
    'Authorization': `Basic ${auth}`,
    'Content-Type': 'application/xml'
  },
  body: xmlBody,
  mode: 'no-cors',
  cache: 'default'
}

export default (app) => {
  app.use(bodyParser.json()) // for parsing application/json
  app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

  app.post('/createBill', async (req, res) => {
    /*
    let order = req.body
    let items = []
    order.services.forEach(s => {
      if(s.products){
        s.products.forEach(p => {
          items.push({
              article_number: p.id,
              quantity: parseInt(Math.random() * 10),
              unit_price: p.price,
              vat_percent: 19,
              description: p.name
          })
        })
      }
    })


    const resCustomer = await fetch(api.rootUrl, testOptions)
    const customer = await resCustomer.text()

    let invoiceParams = js2xmlparser.parse("fbapi", {
      ...createBill,
      data: {
        ...createBill.data,
        customer_id: 1,
        items
      }
    })

    let invoiceOptions = {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/xml'
      },
      mode: 'no-cors',
      cache: 'default',
      body: invoiceParams
    }

    const resBill = await fetch(api.rootUrl, invoiceOptions)
    const billText = await resBill.text()


    let billId = parseString(billText, function (err, result) {
        return result
    });

    let invoiceGetOptions = {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/xml'
      },
      mode: 'no-cors',
      cache: 'default',
      body: js2xmlparser.parse("fbapi", {
        service: 'invoice.get',
        data: {
          invoice_id: 11047684
        }
      })
    }*/

    //const resBillFetch = await fetch(api.rootUrl, invoiceGetOptions )
    //const resBillText = await resBillFetch.text()

    res.json({url: 'http://my.fastbill.com/download/Qhb.4qpRwj1e1l.02xOywGJ5yNaLOQsqOiT40BZngMKfP.NvTImDWDhNTM'})
  })



  return app
}
