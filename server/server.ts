/**
 * Created by chapeau on 7/25/16.
 */
///<reference path="../typings/index.d.ts"/>

import * as Express from 'express';
var app = Express();

app.set('view-engine', 'ejs');

app.get('/',(req, res)=>{
    res.render('../client/views/index.ejs');
});

app.use('/static', Express.static('public'));

app.listen(8081, function(){
    console.log('App listening!');
});