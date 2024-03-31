"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var link_1 = require("next/link");
require("./global.css");
exports.metadata = {
    title: {
        template: "template",
        "default": "default",
        absolute: " absolute"
    }
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement("body", null,
            React.createElement("header", null,
                React.createElement("h2", null, "App Header"),
                React.createElement("nav", null,
                    React.createElement(link_1["default"], { href: "/" }, "Home"),
                    "-",
                    React.createElement(link_1["default"], { href: "/acerca" }, "About"),
                    "-",
                    React.createElement(link_1["default"], { href: "/blog" }, "Blog"),
                    "-",
                    React.createElement(link_1["default"], { href: "/contacto" }, "Contact"),
                    "-",
                    React.createElement(link_1["default"], { href: "/productos" }, "products"),
                    "-",
                    React.createElement(link_1["default"], { href: "/cuenta/login" }, "account"),
                    "-",
                    React.createElement(link_1["default"], { href: "/cuenta/registro" }, "Register"),
                    "-",
                    React.createElement(link_1["default"], { href: "/cuenta/password" }, "Recover Password"),
                    "-",
                    React.createElement(link_1["default"], { href: "/dashboard" }, "Dashboard"))),
            React.createElement("main", null, children),
            React.createElement("footer", null,
                React.createElement("h6", null, "App footer")))));
}
exports["default"] = RootLayout;
