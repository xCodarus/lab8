function initMap() {
	// add your code here
	L.mapquest.key = '8RKjVU3oIlPgGHAgEjY5pUzJgmsOkJ1M';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
  		center: [32.8788078, -117.2381008],
  		layers: L.mapquest.tileLayer('map'),
  		zoom: 12,
  		zoomControl: false
	});

	L.marker([32.8788078, -117.2381008]).addTo(map);
}