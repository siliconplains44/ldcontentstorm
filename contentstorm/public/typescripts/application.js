/// <reference path="../../definitions/node.d.ts"/>
/// <reference path="../../definitions/express.d.ts"/>
"use strict";
var Application = (function () {
    function Application() {
        this.initialize = function () {
        };
        this.navigateToPage = function (path, addToHistory) {
        };
    }
    return Application;
}());
exports.app = new Application();
window.addEventListener("popstate", function (event) {
    exports.app.navigateToPage(event.state.modulename, false);
});
//# sourceMappingURL=application.js.map