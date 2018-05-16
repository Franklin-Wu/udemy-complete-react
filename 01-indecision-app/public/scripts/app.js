'use strict';

console.log('app.js is running!');

// Create app object title/subtitle.
// Use title/subtitle in the template.
// Render template.

var app = {
    title: 'Indecision App',
    subtitle: 'A Sample App'
};

// JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item 1'
        ),
        React.createElement(
            'li',
            null,
            'Item 2'
        )
    )
);

// Create a templateTwo var JSX expression.
// div
//  h1 -> Andrew Mead
//  p -> Age: 20
//  p -> Location: Philadelphia
// Render templateTwo instead of template.

var user = {
    name: 'Franklin',
    age: '101',
    location: 'San Francisco'
};
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
// ReactDOM.render(templateTwo, appRoot);
