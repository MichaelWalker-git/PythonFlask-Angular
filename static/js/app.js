const app =  angular.module("app", []);

app.controller("AppCtrl", function () {
    const app = this;
    app.message = "Am I working?";

    $http.get("/api/pin").success((function (data) {
        app.pins = data.objects;
    }))
});