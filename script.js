/* Style Dark Matter GL */
const style = "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json";

// Initialise the map
const map = new maplibregl.Map({
  container: 'map',
  style: style,
  center: [76.3833, 30.3240], // Centered around Patiala city
  zoom: 11.7
});

// Data sources
const sourceLayer = {
  type: "geojson",
  data: "https://gist.githubusercontent.com/mgiraldo/cc86b6b043f3ad16a719/raw/78e146a81625ccdd8f3a72b8ea16756dcd641e28/merged.geojson",
};



let criminalCoords = [76.4000, 30.3200];
let randCoords1 = [76.3820, 30.3250];
let randCoords2 = [76.3850, 30.3280];
// Getting parameters from URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
if (urlParams.has('xloc') && urlParams.has('yloc')) {
  const xLoc = urlParams.get('xloc');
  const yLoc = urlParams.get('yloc');

  criminalCoords = [xLoc, yLoc];

  // Creating random choke points
  console.log(typeof xLoc);
  const xChokeMaxLimit = parseFloat(xLoc) + 0.01;
  const xChokeMinLimit = parseFloat(xLoc) - 0.01;
  const yChokeMaxLimit = parseFloat(yLoc) + 0.01;
  const yChokeMinLimit = parseFloat(yLoc) - 0.01;

  const xRand1 = (Math.random() * (xChokeMaxLimit - xChokeMinLimit) + xChokeMinLimit).toFixed(4);
  const yRand1 = (Math.random() * (yChokeMaxLimit - yChokeMinLimit) + yChokeMinLimit).toFixed(4);
  const xRand2 = (Math.random() * (xChokeMaxLimit - xChokeMinLimit) + xChokeMinLimit).toFixed(4);
  const yRand2 = (Math.random() * (yChokeMaxLimit - yChokeMinLimit) + yChokeMinLimit).toFixed(4);

  randCoords1 = [xRand1, yRand1];
  randCoords2 = [xRand2, yRand2];
}

// Criminal cars position
const criminalCarPosition = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Car',
        coordinates: criminalCoords // Coordinates for criminal car's position
      },
      properties: {
        carNo: 'XYZ 1234' // Random car number
      }
    }
    // Add more criminal car positions if needed
  ]
};

// Chokepoints
const chokepoints = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: randCoords1 // Coordinates for chokepoint 1
      },
      properties: {
        name: 'Chokepoint 1',
        color: 'yellow' // Different color for chokepoint 1
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: randCoords2 // Coordinates for chokepoint 2
      },
      properties: {
        name: 'Chokepoint 2',
        color: 'yellow' // Different color for chokepoint 2
      }
    }
    // Add more chokepoints if needed
  ]
};

// Function to create markers for criminal car position
function getCriminalCarMarker() {
  return new maplibregl.Marker({
    color: 'red' // Color for criminal car
  })
  .setLngLat(criminalCarPosition.features[0].geometry.coordinates)
  .setPopup(new maplibregl.Popup().setHTML('<h3>Criminal Car</h3><p>Car No: ' + criminalCarPosition.features[0].properties.carNo + '</p>'))
  .addTo(map);
}

// Function to create markers for chokepoints
function getChokepointMarkers() {
  chokepoints.features.forEach(chokepoint => {
    new maplibregl.Marker({
      color: chokepoint.properties.color
    })
    .setLngLat(chokepoint.geometry.coordinates)
    .setPopup(new maplibregl.Popup().setHTML('<h3>' + chokepoint.properties.name + '</h3>'))
    .addTo(map);
  });
}

// Function to create markers for police cars
function getPoliceCarMarkers() {
  // Add coordinates for police cars in Patiala city
  const policeCarCoordinates = [
    [76.3900, 30.3200], // Example coordinate for a police car
    [76.3850, 30.3250], // Example coordinate for another police car
    // Add more coordinates for additional police cars if needed
  ];

  policeCarCoordinates.forEach((coordinate, index) => {
    new maplibregl.Marker({
      color: '#3366FF', // Blue color for police cars
      draggable: false
    })
    .setLngLat(coordinate)
    .setPopup(new maplibregl.Popup().setHTML('<h3>Police Car ' + (index + 1) + '</h3>'))
    .addTo(map);
  });
}

let customIcon = {
  iconUrl: 'https://t3.ftcdn.net/jpg/02/80/14/60/360_F_280146023_kEPJ7JL482jB3PjL1wYAY2R245QtLoYw.jpg',
  iconSize: [40, 40]
}

// Add the navigation control
map.addControl(new maplibregl.NavigationControl());

// Add data sources and layers to the map
map.on('load', () => {
  // Add Map Sources
  map.addSource('pointData', sourceLayer);

  // Add Map Layers
  getCriminalCarMarker();
  getChokepointMarkers();
  getPoliceCarMarkers();
});
