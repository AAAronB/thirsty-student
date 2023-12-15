// Import express and ejs and bodyParser
var express = require ('express')
var ejs = require('ejs')
var bodyParser= require ('body-parser')
// Create the express application object
const app = express()
const port = 8000
app.use(bodyParser.urlencoded({ extended: true }))
// Define our data
var shopData = {shopName: "Bevs 4 U",productCategories:["Beer", "Wine", "Soft Drinks", "Hot Drinks"],storeLocations:["Camden Market, Manager: David Campbell","White City: Sam Jones","East Acton: Rhys","Cardiff: Scotty Q"]};
// Handle our routes
app.get('/',function(req,res){
res.render('index.html', shopData)});
// Set the directory where Express will pick up HTML files
// __dirname will get the current directory
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

// Tell Express that we want to use EJS as the templating engine
app.set('view engine', 'ejs');
// Tells Express how we should process html files
// We want to use EJS's rendering engine
app.engine('html', ejs.renderFile);
// Handle our routes
app.get('/about',function(req,res){
res.render('about.html', shopData);
});
app.get('/search',function(req,res){
res.render("search.html", shopData);
});
app.get('/search-result', function (req, res) {
    // TODO: search in the database
    res.send("You searched for: " + req.query.keyword);
 });
app.get('/register', function (req,res) {
    res.render('register.html',shopData);
});                                                                                                                                                                                                 
app.post('/registered', function (req,res) {
    // saving data in database
    res.send(' Hello '+ req.body.first + ' '+ req.body.last +' you are now registered. We will now send you a confirmation email at' + ' ' + req.body.email + '.');
}); 


// Start the web app listening
app.listen(port, () => console.log(`Up and running on port ${port}!`))