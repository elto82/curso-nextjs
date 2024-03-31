"use strict";
exports.__esModule = true;
var react_1 = require("react");
var DasboardLayout = function (_a) {
    var children = _a.children, analytics = _a.analytics, chat = _a.chat, video = _a.video;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("article", null, children),
        react_1["default"].createElement("section", null,
            react_1["default"].createElement("aside", null, analytics),
            react_1["default"].createElement("aside", null, chat),
            react_1["default"].createElement("aside", null, video))));
};
exports["default"] = DasboardLayout;
