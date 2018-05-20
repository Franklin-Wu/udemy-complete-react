console.log('app.js is running!');

// Create app object title/subtitle.
// Use title/subtitle in the template.
// Render template.

// Only render the subtitle (and p tag) if subtitle exists - logical and operator.
// Render new p tag - if options.length > 0 "Here are your options" "No options".

var app = {
    title: 'Indecision App',
    subtitle: 'A Sample App',
    options: ['One', 'Two'],
};

// JSX - JavaScript XML
var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{(app.options && app.options.length > 0) ? "Here are your options: " + app.options : "No options"}</p>
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
    age: '19',
    location: 'Hong Kong'
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
    // returns Undefined by default
}

var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
// ReactDOM.render(templateTwo, appRoot);
