var Location = function (restaurant) {
    this.res = restaurant;
    this.address = this.res.location.address1 + ", " + this.res.location.city + ", " + this.res.location.country;
    this.reviews = [];
}

var ViewModel = function () {
    var self = this;
    // locations that will be shown when searching for some places
    this.shownLocations = ko.observableArray([]);
    // values of search field
    this.term = '';
    this.area = '';
    this.reviews = ko.observableArray([]);
    this.clickedId = ko.observable('');
    var map = new google.maps.Map(document.getElementById('ggmap'), {
        zoom: 2,
        center: new google.maps.LatLng(2.8, -187.3)
    });

    var markers = [];
    // temporary markers
    var tempMarkers = [];
    var bounds;

    var createMarker = function (location) {
        var icon = {
            url: 'https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png',
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25)
        };
        var position = new google.maps.LatLng(location.coordinates.latitude, location.coordinates.longitude);
        bounds.extend(position);
        return new google.maps.Marker({
            icon: icon,
            position: position,
            map: map,
            title: location.name
        });
    }

    var clearTempMarkers = function() {
        tempMarkers.forEach(function (marker) {
            marker.setMap(null);
        });
        tempMarkers.length = 0;
    }

    this.searchLocation = function () {
        var service = new google.maps.places.PlacesService(map);
        var data = {
            term: this.term,
            location: this.area,
            limit: 10
        }
        // clear all markers and locations in the recent search 
        clearTempMarkers();
        self.shownLocations.removeAll();
        this.reviews([]);
        this.clickedId('');

        bounds = new google.maps.LatLngBounds();
        $.getJSON('http://127.0.0.1:8081/', data, function (data) {
            var index = -1;
            data.businesses.forEach(function (place) {
                index++;
                self.shownLocations.push(new Location(place));
                tempMarkers.push(createMarker(place));
                var query = {
                    id: place.id
                }
                $.getJSON('http://127.0.0.1:8081/', query, function (id) {
                    return function (res) {
                        self.shownLocations()[id].reviews = res.reviews;
                    }
                }(index));
            });
            map.fitBounds(bounds);
        })

    }

    this.clickLocation = function (data, event) {
        clearTempMarkers();
        tempMarkers.push(createMarker(data.res));
        self.clickedId(data.res.id);
        var lat = data.res.coordinates.latitude;
        var lng = data.res.coordinates.longitude;
        map.setCenter({ lat: lat, lng: lng });
        map.setZoom(19);
        self.reviews(data.reviews);
    }

    this.getRatingImg = function (rating) {
        var res = 'img/small_' + Math.round(rating - 0.5);
        if (Math.round(rating) != rating)
            res += '_half';
        res += '.png';
        return res;
    }

    this.addMarker = function (data, event) {
        markers.push(createMarker(data.res));
        self.shownLocations.remove(function(item) { return item.res.id == data.res.id});
        self.reviews([]);
    }

}

ko.applyBindings(new ViewModel());





