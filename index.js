const express = require('express'),
    bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 8080));

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
app.all('/', function(request, response){
    response.json("/teams per la lista dei teams, /matches per la lista dei match");
});
app.all('/teams', function(request, response){
    response.json("lista teams");
});
app.all('/matches', function(request, response){
    response.json("lista matches");
});
