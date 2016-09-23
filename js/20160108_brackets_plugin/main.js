
/*
    시작은 아래와 같이 define 으로 시작한다
*/
// define(function(require, exports, module) {

//     function log(s) {
//             console.log("[helloworld] "+s);
//     }
//     log("Hello from HelloWorld.");
// });

define(function(require, exports, module) {

    var CommandManager = brackets.getModule("command/CommandManager"),
            Menus = brackets.getModule("command/Menus"),
            AppInit = brackets.getModule("utils/AppInit");

    function log(s) {
            console.log("[helloworld2] "+s);
    }


    function handleHelloWorld() {
            alert("You ran me, thanks!");
    }


    AppInit.appReady(function () {

            log("Hello from HelloWorld2.");

            var HELLOWORLD_EXECUTE = "helloworld.execute";

            CommandManager.register("Run HelloWorld", HELLOWORLD_EXECUTE, handleHelloWorld);

            var menu = Menus.getMenu(Menus.AppMenuBar.VIEW_MENU);
            menu.addMenuItem(HELLOWORLD_EXECUTE);

    });

});