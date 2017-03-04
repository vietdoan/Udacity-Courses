var Location = function (restaurant) {
    this.res = restaurant;
    this.rating_img = 'img/small_' + Math.round(this.res.rating - 0.5);
    if (Math.round(this.res.rating) != this.res.rating) 
        this.rating_img += '_half';
    this.rating_img += '.png';
    this.address = this.res.location.address1 + " " + this.res.location.city + " " + this.res.location.country;
}

var View = function () {
    var self = this;
    // locations that will be shown when searching for some places
    this.shownLocations = ko.observableArray([]);

    var map = new google.maps.Map(document.getElementById('ggmap'), {
        zoom: 2,
        center: new google.maps.LatLng(2.8, -187.3)
    });

    var markers = [];
    this.addMarker = function (data, event) {
        markers.push(new google.maps.Marker(data));
        var bounds = new google.maps.LatLngBounds();
        if (data.viewport) {
            bounds.union(data.viewport);
        }
        else {
            bounds.extend(data.position);
        }

        map.fitBounds(bounds);
    }
    this.term = '';
    this.area = '';
    this.searchLocation = function () {
        console.log(1);
        var data = {
            term: this.term,
            location: this.area,
            limit: 10
        }
        $.getJSON('http://127.0.0.1:8081/', data, function(data) {
            console.log(data.businesses);
            self.shownLocations.removeAll();
            data.businesses.forEach(function(place) {
                self.shownLocations.push(new Location(place));
                console.log(place);
            })
        })

    }
}


var ViewModel = function () {
    self = this;
    this.view = new View();
}

ko.applyBindings(new ViewModel());





