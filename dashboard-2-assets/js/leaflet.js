//Initialiser la map, aller la chercher dans le html (leafletMap)
//setView sert à montrer ce qui sera rendu sur l'ecran
//mettre les coordonées de la suisse et ensuite le zoom
const map = L.map("leafletMap", {
  zoomControl: false,
}).setView([46.81, 8.2275], 7.4);

//On desactive les fonctionalités suivantes
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();
map.boxZoom.disable();
map.keyboard.disable();
map.dragging.disable();

L.geoJSON(geojson).addTo(map);

//Definir la long et la lat dans un tableau
const markers = [
  [46.747995, 7.435746],
  [47.323269, 7.16162], 
  [47.417621, 9.117657], 
  [46.426153, 7.542155],
  [46.626785, 6.389672], 
  [46.746816, 9.918374]
];

//ON FETCH l'API Fake Store API
//on le console.log pour voir les tableaux d'objets qu'il possède
//on fais une iteration, dans CHAQUE objet de JSON on ira chercher
//la geolocalisation qui se retrouve dans address, address.geolocation
//ON va chercher les lat et long dans le tableau Markers et on prend l'index
//Faire une commande JS, Leaflet, créer un objet, et dans icon
//Chercher la map qui est L.divIcon, commande pour trouver un marker
//lui donner une CLASSE CSS, className
//et l'AJOUTER dans la map avec .addTo(map)

fetch("https://fakestoreapi.com/users?limit=6")
  .then((res) => res.json())
  .then((json) => {
    console.log(json);
    json.forEach((user, index) => {
      L.marker(
        markers[index],
        {
          icon: L.divIcon({
            className: "leaflet-marker-div",
            html: "",
          }),
        }
      ).addTo(map);
    });
  });
