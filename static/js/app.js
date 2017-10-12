const app =  angular.module("app", []);

app.controller("AppCtrl", function ($http) {
    const app = this;

    $http.get("/api/pin").then(function (data) {
        app.pins = data.data.objects;
    });

    app.addPin = function () {
        $http.post("api/pin", {"title": "new", "image": "http:///placekitten.com/200/200/?image=" + app.pins.length })
            .then(function (response) {
                app.pins.push(response);
            })
    };

    app.deletePin = function (pin) {
        $http.delete("api/pin/" + pin.id)
            .then(function (response) {
                app.pins.splice(app.pins.indexOf(pin), 1);
                console.log("Delete", response);
            })
    };

    app.updatePin = function (pin) {
        console.log(pin.id);
        $http.put("api/pin/" + pin.id, pin)
            .then(function (response) {
                console.log("update suc", response);
            })
    };
});