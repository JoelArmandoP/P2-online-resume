/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = '<h1 class="red-text name">%data%</h1>';
var HTMLheaderRole = '<h2>%data%</h2><hr/>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="red-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="red-text entypo-phone"></span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="red-text entypo-mail"></span><span class="white-text"><a href="mailto:%data%">%data%</a></span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="red-text entypo-twitter"></span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="red-text entypo-github"></span><span class="white-text">%data%</span></li>';
//var HTMLblog = '<li class="flex-item"><span class="red-text entypo-pencil"></span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="red-text fontawesome-globe"></span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkEntry =
  '<div class="col-md-6 work-entry">'+
    '<div class="job-name">%title%</div>'+
    '<div class="employer">%employer%</div>'+
    '<div class="date-text">%dates%</div>'+
    '<div class="location-text">%location%</div>'+
    '<p><br>%description%</p>'
  '</div>';


var HTMLprojectEntry =
  '<div class="col-md-4 project-entry">' +
    '<a href="%url%">%title%</a>' +
    '<div class="date-text">%dates%</div>' +
    '<img class="img-responsive" src="%image%" srcset="%image-set%" sizes="100vw" ' +
      'data-toggle="modal" data-target="%data-target%" alt="%alt-text%">'
  '</div>';

var HTMLschoolEntry = 
  '<div class="col-md-6 education-entry">' + 
    '<div class="education-name"><a href="%url%">%name% - %degree%</a></div>' + 
    '<div class="location-text">%location%</div>' +
    '<div class="date-text">%dates%</div>' +
    '<div class="degree-major">%majors%</div>' +
  '</div>';

var HTMLonlineClasses = '<h3 class= "col-md-12">Online Classes</h3>';

var HTMLonlineEntry = 
  '<div class="col-md-12 education-entry">' + 
    '<div class="online-name"><a href="%url%">%name% - %degree%</a></div>' + 
    '<div class="date-text">%dates%</div>' +
  '</div>';

var HTMLprojectModal =
  '<div class="modal fade" id="%modal-id%" tabindex="-1" role="dialog" ' +
        'aria-labelledby="project-resume" aria-hidden="true">'+
    '<div class="modal-dialog">' +
      '<div class="modal-content">' +
        '<div class="modal-header">' +
          '<h4 class="modal-title">%title%</h4>' +
        '</div>' +
        '<div class="modal-body">' +
          '<img class="img-responsive" src="%image%" srcset="%image-set%" sizes="100vw" alt="%alt-text%">' +
          '%description%' +
        '</div>' +
        '<div class="modal-footer">' +
          '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>' +
        '</div>' +
      '</div>' +
    '</div>' +
  '</div>';


var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';


$(document).ready(function() {
  $('button').click(function() {
    var iName = inName() || function(){};
    $('#name').html(iName);  
  });
});

/*
Clicks for the Collecting Click Locations.
*/
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y); 
});

/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };


  map = new google.maps.Map(document.querySelector('#map-div'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array
    for (var school in education.schools) {
      locations.push(education.schools[school].location);
    }

    // iterates through work locations and appends each location to
    // the locations array
    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData, infoWindowData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: "<div class=\"maps-info-window\"><div class=\"maps-city-name\">" + name + "</div><br/>" +
        "<div class=\"maps-city-description\">" + infoWindowData + "</div></div>"
    });
    // Opens an infowindow when a map marker is clicked
    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map, marker);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
    Returns a callback function suitable for a call to textSearch. The function can create a marker on
    the map, including the infoWindowData in the info window.
  */
  function makeCallback(infoWindowData) {
    return function(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        createMapMarker(results[0], infoWindowData);
      }
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    for (var i in locations) {
      // the search request object
      var request = {
        query: cities[locations[i]].name
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, makeCallback(cities[locations[i]].description));
    }
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});

//Language & Skills charts

window.onload = function(){
    // Create Language chart
    var ctx = document.getElementById("languagesChart").getContext("2d");
    new Chart(ctx).Bar(langData, {
      responsive : true
    });
    // Create Skills chart
    WordCloud(document.getElementById('skillsChart'), {
        list: skillsData
      } );
};




