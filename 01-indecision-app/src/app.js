console.log('app.js is running!');

// Create app object title/subtitle.
// Use title/subtitle in the template.
// Render template.

var app = {
    title: 'Indecision App',
    subtitle: 'A Sample App',
};

// JSX - JavaScript XML
var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
        </ol>
    </div>
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
var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
// ReactDOM.render(templateTwo, appRoot);
