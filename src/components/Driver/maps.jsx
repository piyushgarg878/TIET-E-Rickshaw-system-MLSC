import axios from 'axios'
import React from 'react'
import "https://unpkg.com/leaflet/dist/leaflet.css" 
import L from ""

const maps = () => {

    const data = async() =>{
        const L = fetch('https://unpkg.com/leaflet/dist/leaflet.js')
        console.log(L)
    }

    const start = () =>{

        var map = L.map('map').setView([30.3564, 76.3647], 15.5);

    // Add the base OpenStreetMap layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 16,
    }).addTo(map);

    var markerC = L.marker([30.3508695, 76.3612381]).addTo(map);
    var markerJ = L.marker([30.3534863, 76.3635498]).addTo(map);
    var markerD = L.marker([30.3509499, 76.3602690]).addTo(map);
    var markerB = L.marker([30.3511374, 76.3632293]).addTo(map);
    var markerO = L.marker([30.3515132, 76.3624623]).addTo(map);
    var markerA = L.marker([30.3513047, 76.3645508]).addTo(map);
    var markerH = L.marker([30.3530092, 76.3649750]).addTo(map);
    var markerM = L.marker([30.3530389, 76.3606600]).addTo(map);
    var markerK = L.marker([30.3568769, 76.3637607]).addTo(map);
    var markerQ = L.marker([30.3518998, 76.3678058]).addTo(map);
    var markerPG = L.marker([30.3518372, 76.3667073]).addTo(map);
    var markerG_BLOCK = L.marker([30.3531908, 76.3700807]).addTo(map);
    var markerLIBRARY_CSED = L.marker([30.3542763, 76.3695845]).addTo(map);
    var markerFBLOCK = L.marker([30.3542763, 76.3714975]).addTo(map);
    var markerCOS = L.marker([30.3538872, 76.3625969]).addTo(map);
    var markerJAGGI = L.marker([30.3527305, 76.3702731]).addTo(map);
    var markerMAINGATE = L.marker([30.3519976, 76.3730264]).addTo(map);
    var markerDBLOCK = L.marker([30.3542889, 76.3708665]).addTo(map);

    markerC.bindPopup("<b>Hostel C</b><br>You are at Hostel C.").openPopup();
    markerJ.bindPopup("<b>Hostel J</b><br>You are at Hostel J.").openPopup();
    markerD.bindPopup("<b>Hostel D</b><br>You are at Hostel D.").openPopup();
    markerB.bindPopup("<b>Hostel B</b><br>You are at Hostel B.").openPopup();
    markerO.bindPopup("<b>Hostel O</b><br>You are at Hostel O.").openPopup();
    markerA.bindPopup("<b>Hostel A</b><br>You are at Hostel A.").openPopup();
    markerH.bindPopup("<b>Hostel H</b><br>You are at Hostel H.").openPopup();
    markerM.bindPopup("<b>Hostel M</b><br>You are at Hostel M.").openPopup();
    markerK.bindPopup("<b>Hostel K</b><br>You are at Hostel K.").openPopup();
    markerQ.bindPopup("<b>Hostel Q</b><br>You are at Hostel Q.").openPopup();
    markerPG.bindPopup("<b>Hostel PG</b><br>You are at Hostel PG.").openPopup();
    markerG_BLOCK.bindPopup("<b>G-BLOCK</b><br>NA Lab <br> Physics Lab <br>Mathematics Department").openPopup();
    markerLIBRARY_CSED.bindPopup("<b>CSED AND LIBRARY</b><br>Welcome to the Nava Nalanda Library").openPopup();
    markerFBLOCK.bindPopup("<b>F-BLOCK</b><br>You are at F-Block.").openPopup();
    markerCOS.bindPopup("<b>COS</b><br>You are at COS.").openPopup();
    markerJAGGI.bindPopup("<b>JAGGI</b><br>You are at Jaggi.").openPopup();
    markerMAINGATE.bindPopup("<b>MAIN GATE</b><br>You are at Main Gate.").openPopup();
    markerDBLOCK.bindPopup("<b>D-BLOCK</b><br>You are at D-Block.").openPopup();

    if (!navigator.geolocation) {
  console.log("Geolocation is not supported right now!");
} else {
  navigator.geolocation.getCurrentPosition(getPosition);
}


    }
  return (
    <div>
      
    </div>
  )
}

export default maps
