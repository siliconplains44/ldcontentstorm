
/// <reference path="../../definitions/node.d.ts"/>
/// <reference path="../../definitions/express.d.ts"/>

class Application {

    currentContent: any;
    bodyElement: any;
    loggedInSecurityUserID: number;
    Username: string;

    constructor() {

    }

    public initialize = function() {

    }

    public navigateToPage = function(path, addToHistory) {

    }
    

}

export var app = new Application();

window.addEventListener("popstate", function(event) {
    app.navigateToPage(event.state.modulename, false)
});
