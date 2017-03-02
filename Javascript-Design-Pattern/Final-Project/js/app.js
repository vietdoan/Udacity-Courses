var Map = function () {
    var self = this;
    // locations that will be shown when searching for some places
    this.shownLocations = ko.observableArray([]);

    var map = new google.maps.Map(document.getElementById('ggmap'), {
        zoom: 2,
        center: new google.maps.LatLng(2.8, -187.3)
    });
    var searchBox = new google.maps.places.SearchBox(document.getElementById('search-field'), {
        bounds: new google.maps.LatLngBounds(
            new google.maps.LatLng(-90, -180),
            new google.maps.LatLng(90, 180)
        )
    });
    searchBox.addListener('places_changed', function () {
        var places = searchBox.getPlaces();
        self.shownLocations.removeAll();
        places.forEach(function (place) {
            //console.log(place);
            var icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
            };

            self.shownLocations.push({
                map: map,
                icon: icon,
                title: place.formatted_address,
                position: place.geometry.location,
                viewport: place.geometry.viewport
            })
        });
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
}


var ViewModel = function () {
    self = this;
    this.map = new Map();
}

ko.applyBindings(new ViewModel());





