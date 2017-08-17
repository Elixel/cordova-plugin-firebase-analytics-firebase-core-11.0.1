var exec = require("cordova/exec");
var PLUGIN_NAME = "FirebaseAnalytics";

module.exports = {
    logEvent: function(name, params, success, error) {
        exec(success, error, PLUGIN_NAME, "logEvent", [name, params || {}]);
    },
    setUserId: function(userId, success, error) {
        exec(success, error, PLUGIN_NAME, "setUserId", [userId]);
    },
    setUserProperty: function(name, value, success, error) {
        exec(success, error, PLUGIN_NAME, "setUserProperty", [name, value]);
    },
    setEnabled: function(enabled, success, error) {
        exec(success, error, PLUGIN_NAME, "setEnabled", [enabled]);
    },
    setCurrentScreen: function(name, success, error) {
        exec(success, error, PLUGIN_NAME, "setCurrentScreen", [name]);
    }
};
