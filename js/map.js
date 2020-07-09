var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB3k9RXDmvPmLetfOI38fVAJswFyx5jnwQ&callback=initMap';
script.defer = true;
script.async = true;

window.initMap = function() {
  var element = document.querySelector(".map");
  var options = {
      center: {lat: 59.9387165, lng: 30.3230474},
      zoom: 15
  };

  var mapElement = new google.maps.Map(element, options);

  var marker = new google.maps.Marker({
      position: {lat: 59.9387165, lng: 30.3230474},
      map: mapElement,
      icon: "img/map-marker.png"
  });
};

document.head.appendChild(script);