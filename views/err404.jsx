const React = require('react');
const Default = require('./layouts/Default');

function Err404() {
    return (
        <Default>
            <h2>404 Error - Page Not Found</h2>
        </Default>
    );
};

module.exports = Err404;