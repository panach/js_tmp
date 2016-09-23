
/*
    시작은 아래와 같이 define 으로 시작한다
*/
// define(function(require, exports, module) {

//     function log(s) {
//             console.log("[helloworld] "+s);
//     }
//     log("Hello from HelloWorld.");
// });


/* 메뉴를 추가 하고 해당 메뉴를 클릭시 함수를 실행함 */
// define(function(require, exports, module) {

//     var CommandManager = brackets.getModule("command/CommandManager"),
//             Menus = brackets.getModule("command/Menus"),
//             AppInit = brackets.getModule("utils/AppInit");

//     function log(s) {
//             console.log("한글이 되는가?  "+s);
//     }


//     function handleHelloWorld() {
//             alert("그렇다면 이제 시작이다");
//     }


//     AppInit.appReady(function () {

//             log("된다 이게 된다면 넌 할수있다 개발을 _ 왈도");

//             var HELLOWORLD_EXECUTE = "helloworld.execute";

//             CommandManager.register("Run HelloWorld", HELLOWORLD_EXECUTE, handleHelloWorld);

//             var menu = Menus.getMenu(Menus.AppMenuBar.VIEW_MENU);
//             menu.addMenuItem(HELLOWORLD_EXECUTE);

//     });

// });



/*
    딤드 + 안내 판낼
*/
// define(function(require, exports, module) {

//     var CommandManager = brackets.getModule("command/CommandManager"),
//         Menus = brackets.getModule("command/Menus"),
//         Dialogs = brackets.getModule("widgets/Dialogs"),
//         DefaultDialogs = brackets.getModule("widgets/DefaultDialogs"),
//         AppInit = brackets.getModule("utils/AppInit");

//     function log(s) {
//             console.log("[helloworld3] "+s);
//     }

//     function handleHelloWorld() {
//         Dialogs.showModalDialog(  "Hello World", "Same Important Message");
//     }

//     AppInit.appReady(function () {

//         log("Hello from HelloWorld3.");

//         var HELLOWORLD_EXECUTE = "helloworld.execute";

//         CommandManager.register("Run HelloWorld", HELLOWORLD_EXECUTE, handleHelloWorld);

//         var menu = Menus.getMenu(Menus.AppMenuBar.VIEW_MENU);
//         menu.addMenuItem(HELLOWORLD_EXECUTE);

//     });

// });


/*
    하단 패널 추가
*/
// define(function(require, exports, module) {

//     var CommandManager = brackets.getModule("command/CommandManager"),
//     Menus = brackets.getModule("command/Menus"),
//     PanelManager = brackets.getModule("view/PanelManager"),
//     AppInit = brackets.getModule("utils/AppInit");

//     var HELLOWORLD_EXECUTE = "helloworld.execute";
//     var panel;

//     function log(s) {
//             console.log("[helloworld4] "+s);
//     }

//     function handleHelloWorld() {
//         if(panel.isVisible()) {
//             panel.hide();
//             CommandManager.get(HELLOWORLD_EXECUTE).setChecked(false);
//         } else {
//             panel.show();
//             CommandManager.get(HELLOWORLD_EXECUTE).setChecked(true);
//         }
//     }

//     AppInit.appReady(function () {

//             log("Hello from HelloWorld4.");

//             CommandManager.register("Run HelloWorld", HELLOWORLD_EXECUTE, handleHelloWorld);

//             var menu = Menus.getMenu(Menus.AppMenuBar.VIEW_MENU);
//             menu.addMenuItem(HELLOWORLD_EXECUTE);

//             panel = PanelManager.createBottomPanel(HELLOWORLD_EXECUTE, $("<div id='user_bottom_panel' class='bottom-panel'>HTML for my panel</div>"),200);

//     });

// });

/*
Based - in part - on the HelloWorld sample extension on the Brackets wiki:
https://github.com/adobe/brackets/wiki/Simple-%22Hello-World%22-extension
*/

define(function(require, exports, module) {

    var CommandManager = brackets.getModule("command/CommandManager"),
    Menus = brackets.getModule("command/Menus"),
    PanelManager = brackets.getModule("view/PanelManager"),
    ExtensionUtils = brackets.getModule("utils/ExtensionUtils"),
    AppInit = brackets.getModule("utils/AppInit");

    var HELLOWORLD_EXECUTE = "helloworld.execute";
    var panel;
    var panelHtml = require("text!panel.html");

    function log(s) {
        console.log("[helloworld5] "+s);
        console.log(this);
    }

    function handleHelloWorld() {
        if(panel.isVisible()) {
            panel.hide();
            CommandManager.get(HELLOWORLD_EXECUTE).setChecked(false);
        } else {
            panel.show();
            CommandManager.get(HELLOWORLD_EXECUTE).setChecked(true);
        }

    }

    AppInit.appReady(function () {

        log("Hello from HelloWorld5.");
        ExtensionUtils.loadStyleSheet(module, "helloworld.css");
        CommandManager.register("Run HelloWorld", HELLOWORLD_EXECUTE, handleHelloWorld);

        var menu = Menus.getMenu(Menus.AppMenuBar.VIEW_MENU);
        menu.addMenuItem(HELLOWORLD_EXECUTE);

        panel = PanelManager.createBottomPanel(HELLOWORLD_EXECUTE, $(panelHtml),200);

    });

});