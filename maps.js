let metroAreaCenterCoordinates = [44.96, -93.2]         // Lat/Long coords
let zoomLevel = 9                                       // 1 = Whole world.  20 = city blocks

let map = L.map('college-map').setView(metroAreaCenterCoordinates, zoomLevel)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Array of objects
campuses =  [
    {"name": "Minneapolis College", "website": "https://minneapolis.edu", "coordinates": [44.9724, -93.2844] }, 
    {"name": "Saint Paul College", "website": "https://saintpaul.edu", "coordinates": [44.94839, -93.1099] }, 
    {"name": "Normandale Community College", "website": "https://normandale.edu", "coordinates": [44.8297, -93.3312] }, 
    {"name": "North Hennepin Community College", "website": "https://nhcc.edu", "coordinates": [45.1054232,-93.3767558] }, 
    {"name": "Century College", "website": "https://www.century.edu/", "coordinates": [45.0438494,-92.9862026] }
]

campuses.forEach( function(collegeCampus) {
    let markerText = `${collegeCampus.name}<br><a href="${collegeCampus.website}">Website</a>`
    L.marker(collegeCampus.coordinates).bindPopup(markerText).addTo(map)
})
// https://leafletjs.com/reference-1.7.1.html for other marker shapes
/* // Marker for MTCC
let mctcCoordinates = [44.9724, -93.2844]
let mctcMarker = L.marker(mctcCoordinates)
    .bindPopup('Minneapolis College<br><a href="https://www.minneapolis.edu">Website</a>')
    .addTo(map)

// Marker for St. Paul College
let stPaulCoordinates = [44.9483, -93.1099]
let stPaulMarker = L.marker(stPaulCoordinates)
    .bindPopup('Saint Paul College<br><a href="https://www.saintpaul.edu/">Website</a>')
    .addTo(map)

// Marker for Normandale Community College
let normandaleCoordinates = [44.8297, -93.3312]
let normandaleMarker = L.marker(normandaleCoordinates)
    .bindPopup('Normandale Community College<br><a href="https://www.normandale.edu/">Website</a>')
    .addTo(map) 
    */

// Add a circle around Metro Area
let metroAreaCircle = L.circle(metroAreaCenterCoordinates, {
    color: 'green',
    radius: 30000,
    fillOpacity: 0.2                                        // 1-solid, 0 transparent
})
.bindPopup('Twin Cities Metro Area')
.addTo(map)