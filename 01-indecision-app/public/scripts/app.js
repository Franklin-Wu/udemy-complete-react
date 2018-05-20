'use strict';

console.log('app.js is running!');

// Create app object title/subtitle.
// Use title/subtitle in the template.
// Render template.

// Only render the subtitle (and p tag) if subtitle exists - logical and operator.
// Render new p tag - if options.length > 0 "Here are your options" "No options".

var app = {
    title: 'Indecision App',
    subtitle: 'A Sample App',
    options: ['One', 'Two']
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
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options && app.options.length > 0 ? "Here are your options: " + app.options : "No options"
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
    age: '19',
    location: 'Hong Kong'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
    // returns Undefined by default
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
// ReactDOM.render(templateTwo, appRoot);
