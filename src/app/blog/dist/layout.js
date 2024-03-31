"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Bloglayout = function (_a) {
    var children = _a.children;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("header", null, "Header of the Blog"),
        react_1["default"].createElement("main", null,
            react_1["default"].createElement("section", null, children),
            react_1["default"].createElement("aside", null,
                react_1["default"].createElement("form", null,
                    react_1["default"].createElement("input", { type: "search", name: "search", id: "search", placeholder: 'Search' }),
                    react_1["default"].createElement("button", { type: 'submit' }, "Search")))),
        react_1["default"].createElement("footer", null,
            "Footer of the Blog",
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("small", null,
                react_1["default"].createElement("a", { href: 'XXXXXXXXXXXXXXXXXXXXXXXXXX' }, "Elto")),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("small", null,
                react_1["default"].createElement("a", { href: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' }, "Blog")),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("small", null,
                react_1["default"].createElement("a", { href: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' }, "Contact")),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("small", null,
                react_1["default"].createElement("a", { href: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' }, "We")),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("small", null,
                react_1["default"].createElement("a", { href: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' }, "Services")),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("small", null,
                react_1["default"].createElement("a", { href: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' }, "Store")),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("small", null))));
};
exports["default"] = Bloglayout;
