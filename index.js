var Client = require('coinbase').Client;
var client = new Client({'apiKey': "blah", 'apiSecret': "blahh"});

client.getBuyPrice({'currencyPair': 'BTC-USD'}, function(err, obj) {
  console.log('total amount: ' + obj.data.amount);
});
