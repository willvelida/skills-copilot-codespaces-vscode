// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create an array to store comments
var comments = [
    {name: 'Tom', message: 'I am Tom'},
    {name: 'Jerry', message: 'I am Jerry'}
];

// Create a route for getting all comments
app.get('/comments', function(req, res) {
    res.json(comments);
});

// Create a route for creating new comment
app.post('/comments', function(req, res) {
    var comment = req.body;
    comments.push(comment);
    res.json(comment);
});

// Create a route for updating a comment
app.put('/comments/:index', function(req, res) {
    var index = req.params.index;
    var comment = req.body;
    comments[index] = comment;
    res.json(comment);
});

// Create a route for deleting a comment
app.delete('/comments/:index', function(req, res) {
    var index = req.params.index;
    var comment = comments[index];
    comments.splice(index, 1);
    res.json(comment);
});

// Start the server
app.listen(3000, function() {
    console.log('Server is running on http://localhost:3000');
});

// Run the server by running 'node comments.js'
// Open browser and go to 'http://localhost:3000/comments' to see all comments

// Test creating a new comment using Postman
// 1. Open Postman
// 2. Choose POST method
// 3. Enter URL 'http://localhost:3000/comments'
// 4. Click on 'Body' tab
// 5. Choose 'x-www-form-urlencoded'
// 6. Enter 'name' and 'message'
// 7. Click 'Send'

// Test updating a comment using Postman
// 1. Open Postman
// 2. Choose PUT method
// 3. Enter URL 'http://localhost:3000/comments/0'
// 4. Click on 'Body' tab
// 5. Choose 'x-www-form-urlencoded'
// 6. Enter 'name' and 'message'
// 7. Click 'Send'

// Test deleting a comment using Postman
// 1. Open Postman
// 2. Choose DELETE method
// 3. Enter