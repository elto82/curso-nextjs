"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ProfileLayout = function (_a) {
    var children = _a.children;
    var _b = react_1.useState(""), input = _b[0], setInput = _b[1];
    return (React.createElement(React.Fragment, null,
        React.createElement("h3", null, "paths related to the user's account"),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement("h5", null, "explaining the difference between layout and template"),
        children,
        React.createElement("input", { type: "text", placeholder: "...", value: input, onChange: function (e) { return setInput(e.target.value); } })));
};
exports["default"] = ProfileLayout;
