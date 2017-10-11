const app =  angular.module("app", []);

app.controller("AppCtrl", function ($http) {
    const app = this;

    $http.get("/api/pin").then(function (data) {
        app.pins = data.data.objects;
        console.log(data)
    });

    app.addPin = function () {
        $http.post("api/pin", {"title": "new", "image": "http:///placekitten.com/200/200/?image=" + app.pins.length })
            .then(function (response) {
                app.pins.push(response);
            })
    }
});