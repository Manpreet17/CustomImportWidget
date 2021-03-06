//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "CustomImport",
    appName: "CustomWidgetApp",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: null,
    serverPort: null,
    secureServerPort: null,
    isDebug: false,
    middlewareContext: "CustomImport",
    url: "https://acme-inc.konycloud.com/CustomImport/MWServlet",
    secureurl: "https://acme-inc.konycloud.com/CustomImport/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    frmDatePicGlobals();
    frmHomeGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: true
    })
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmHome.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("KonyTheme", themeCallBack, themeCallBack);
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
kony.print = function() {
    return;
};