const express = require('express');
const path = require('path');

var app = express()
.use( express.static('dist') )
.get('/', (req, res)=>
{
	res.sendFile( path.resolve(__dirname, 'index.html') );
})
.listen(1234, ()=>
{
	console.log('ready, sir !');
});
