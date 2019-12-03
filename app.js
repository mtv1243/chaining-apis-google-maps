let findUserButton = document.querySelector('.findUserButton');
let userLocation = document.querySelector('.user-location');
let userDropdown = document.querySelector('#user-dropdown');

let script = document.createElement('script');
script.src = 'https://jsonplaceholder.typicode.com/users';
document.getElementsByTagName('head')[0].appendChild(script);

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });

  let markerPosition = new google.maps.LatLng(-34.397, 150.644);
  let marker = new google.maps.Marker({
    position: markerPosition,
    map: map
  });

  findUserButton.addEventListener('click', ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((response) => {
        let selectedUser = userDropdown.value;
        let userLat = response[selectedUser].address.geo.lat;
        let userLatNum = parseFloat(userLat);
        let userLng = response[selectedUser].address.geo.lng;
        let userLngNum = parseFloat(userLng);

        map.setCenter({lat: userLatNum, lng: userLngNum});
        marker.setPosition({lat: userLatNum, lng: userLngNum});
        map.setZoom(6);
      });
  });
}





// findUserButton.addEventListener('click', ()=>{
//
// });


// initMap();
