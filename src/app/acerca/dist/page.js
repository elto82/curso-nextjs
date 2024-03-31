"use client";
"use strict";
exports.__esModule = true;
var navigation_1 = require("next/navigation");
function Acerca() {
    var router = navigation_1.useRouter();
    var handleClick = function () {
        router.push('/');
    };
    return (React.createElement("div", null,
        React.createElement("h1", null, "About"),
        React.createElement("button", { onClick: handleClick }, "Back to Home")));
}
exports["default"] = Acerca;
