"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Card = function (_a) {
    var children = _a.children;
    var cardStyle = {
        backgroundColor: 'blue',
        padding: '1rem',
        borderRadius: '0.5rem',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        margin: '1rem'
    };
    return (react_1["default"].createElement("div", { style: cardStyle, className: "card" }, children));
};
exports["default"] = Card;
