function initMap() {
    //  mapa centrado en la ubicación actual del usuario
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            var map = new google.maps.Map(document.getElementById('map'), {
                center: pos,
                zoom: 8
            });

            //Vamos agregar un marcador en la ubicación actual del usuario
            var marker = new google.maps.Marker({
                position: pos,
                map: map,
                title: "Estás aquí"
            });

            //  marcadores de mis 3 lugares favoritos
            var location1 = {lat: 40.7128, lng: -74.0060};
            var marker1 = new google.maps.Marker({
                position: location1,
                map: map,
                title: "Nueva York"
            });

            var location2 = {lat: 48.8566, lng: 2.3522};
            var marker2 = new google.maps.Marker({
                position: location2,
                map: map,
                title: "París"
            });

            var location3 = {lat: 35.6895, lng: 139.6917};
            var marker3 = new google.maps.Marker({
                position: location3,
                map: map,
                title: "Tokio"
            });
        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // El navegador no admite la geolocalización
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: El servicio de geolocalización ha fallado.' :
        'Error: Tu navegador no admite la geolocalización.');
    infoWindow.open(map);
}