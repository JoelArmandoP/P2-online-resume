var bio = {
	"name" : "Joel Armando",
	"role" : "Educational Technologist",
	"contacts": {
		"mobile": "+447824477292",
		"email": "joelarma@gmail.com",
		"github": "JoelArmandoP",
		"twitter": "joelitaap",
		"blog": "",
		"location": "London, UK"
	},
	"pictureUrl": "images/Joel.png",
	"welcomeMsg": "Educational technologist with extensive experience in educational research " +
				  "and project management dipping a toe in the field of programming and web development.",
	"skills": ["learning design", "curriculum design", "moodle","e-learning","educational research","teaching"]

};

var education = {
	"schools": [
	{
		"name": "Birkbeck College, University of London",
		"location" : "London, UK",
		"degree" : "MSc",
		"majors" :  ["Learning Technologies"],
		"dates" : "2016",
		"url": "http://www.dcs.bbk.ac.uk/courses/msclt/"
	},
	{
		"name": "Universidad de Santiago de Compostela",
		"location" : "Santiago de Compostela, Spain",
		"degree" : "PhD",
		"majors" :["Education"],
		"dates" : "2015",
		"url": "http://www.usc.es/es/centros/cptf/doutoramento/index.html"
	},
	{
		"name": "Universidad Nacional de Córdoba",
		"location" : "Córdoba, Argentina",
		"degree" : "Master",
		"majors" : ["Educational Research"],
		"dates" : "2009",
		"url": "http://www.cea.unc.edu.ar/"
	},
	{
		"name": "Universidad Nacional de Córdoba",
		"location" : "Córdoba, Argentina",
		"degree" : "BSc",
		"majors" : ["Educational Sciences"],
		"dates" : "2000",
		"url": "http://www.unc.edu.ar"
	}
	],
	"onlineCourses": [
	{
		"title": "Front-End Web Developer Nanodegree",
		"school": "Udacity",
		"dates": "2015",
		"url": "http://www.udacity.com"
	}
	]
};

var work = {
	"jobs": [
	{
		"employer": "City University London",
		"title" : "Educational Technologist",
		"location" : "London, UK",
		"dates" : "May 2015-continue",
		"description" :  "As part of the Learning, Enhancement and Development Department, "+ 
						"based at Cass School of Business, I provide pedagogical and technical support and develop research" + 
						" and innovation projects in the use of educational technologies in Higher Education."			
	},
	{
		"employer": "LamMovil",
		"title" : "E-learning Consultant",
		"location" : "Working from home(London)",
		"dates" : "Jan 2014-Apr 2015",
		"description" :"Provided educational advice in e-learning for healthcare programs."

	},
	{
		"employer": "Universidad Nacional de Córdoba. School of Philosophy and Humanities",
		"title" : "Director of the Educational Technology Department",
		"location" : "Córdoba, Argentina",
		"dates" : "Feb 2006-Jun 2013",
		"description" : "Led the Educational Technology Department, which provides infrastructure, services, training and advice to academic staff."
	},
	{
		"employer": "Centro de Perfeccionamiento R. Núñez. Judicial Power, Córdoba Goverment",
		"title" : "Executive Coordinator",
		"location" : "Córdoba, Argentina",
		"dates" : "Feb 2012-Jun 2013",
		"description" : "Executive in charge of the education programmes for the Judicial Power's Learning & Development area."
	}, 
	{
		"employer": "Universidad Nacional de Córdoba. School of Economics",
		"title" : "Pedagogical Advisor in Distance Learning",
		"location" : "Córdoba, Argentina",
		"dates" : "Aug 1999-Jan 2006",
		"description" : "Program manager and pedagogical advisor for distance learning courses. Provided advice in the design and production of courses and educational materials."
	}
	]
};

var projects = {
	"projects": [ 
		{
			"title": "Arcade Game",
			"dates": "2015",
			"description": "Project developed as part of the Udacity Front-end developer nanodegree. I was provided with visual assets"+
							" and a game loop engine; using these tools I must add a number of entities to the game including"+
							" the player characters and enemies to recreate the classic arcade game Frogger.",
			"image": "images/ArcadeGame.png", //TODO: replace for real image.
			"url": "https://github.com/JoelArmandoP/P3-Classic-Arcade-Game"
		},
		{
			"title": "Neighborhood Map",
			"dates": "2015",
			"description": "Project developed as part of the Udacity Front-end developer nanodegree. I developed a single-page application"+
							" featuring a map of my neighborhood. I add additional functionality to this application, "+
							"including: map markers, a search function, and a listview. "+
							"I researched and implemented third-party APIs that provide additional information about each of these locations.",
			"image": "images/NeighborhoodMap.png", //TODO: replace for real image.
			"url": "https://github.com/JoelArmandoP/P5-Neighborhood-Map-Project"
		},
		{
			"title": "Working-through statistics",
			"dates": "2015-2016",
			"description": "MSc in Learning Technologies' dissertation. It consists in the development of a mobile application to enhance "+
							"teaching and learning of Statistics. It's a research-based design carried on in "+ 
							"the career of Actuarial Sciences (Cass Busines School, City University London).",
			"image": "images/MSc.png", //TODO: replace for real image.
			"url": "http://ansenuza.ffyh.unc.edu.ar/"//TODO replace for real url
		}
//I decided not to include the following projects, because are not web-dev projects. 
		/*, 
		{
			"title": "New literacies in teachers' education",
			"dates": "2013-2015",
			"description": "PhD research project. It involved the combination of quantitative and qualitative research to identify and map main "+
							"theoretical perspectivs about new literacies in the curricular change in teachers' education, carried on in Argentina between 2007-2010",
			"image": "images/PhD.png",
			"url": "https://www.academia.edu/964828/Las_nuevas_alfabetizaciones_en_la_formaci%C3%B3n_docente_inicial._Cartograf%C3%ADa_de_las_perspectivas_te%C3%B3ricas_dominantes_en_el_contexto_internacional"
		},
		{
			"title": "Ansenuza",
			"dates": "2010-2013",
			"description": "I co-directed the development of Ansenuza, an open digital repository of educational materials,"+
							"This project was jointly developed by Universidad Nacional de Cordoba and Government of Cordoba.",
			"image": "images/ansenuza.png",
			"url": "http://ansenuza.ffyh.unc.edu.ar/"
		},
		{
			"title": "Technologies in Higher Education",
			"dates": "2000-2012",
			"description": "I managed the local team at Universidad Nacional de Cordoba in the project:"+
							"Enhancing University Teaching with New Technology. This was an international research"+
							" and innovation project, led by Universidad de Santiago de Compostela (Spain) and developed "+
							"at Universidad Nacional de Córdoba (Argentina)",
			"image": "images/ProjectD.png",
			"url": "http://unisic.usc.es/index.php?option=com_content&view=article&id=39&Itemid=5/"

		}*/
	]
};
$("#name").prepend(HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg));
$("#name").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#name").prepend(HTMLheaderName.replace("%data%", bio.name));
//I left this commented in case I want to display my picture later.
//$("#header").prepend(HTMLbioPic.replace(/%data%/g, bio.pictureUrl));
$("#topContacts").append(HTMLmobile.replace(/%data%/g, bio.contacts.mobile));
$("#topContacts").append(HTMLemail.replace(/%data%/g, bio.contacts.email));
$("#topContacts").append(HTMLgithub.replace(/%data%/g, bio.contacts.github));
$("#topContacts").append(HTMLlocation.replace(/%data%/g, bio.contacts.location));




education.display = function() {
	for(school in education.schools) {
		var s = education.schools[school];
		$("#education").append(
			HTMLschoolEntry.
			replace("%name%", s.name).replace("%dates%", s.dates).
			replace("%url%", s.url).replace("%degree%", s.degree).
			replace("%majors%", s.majors).replace("%location%", s.location)
			);
	}
	$("#education").append(HTMLonlineClasses);
	for(onlineCourse in education.onlineCourses) {
		var s = education.onlineCourses[onlineCourse];
		$("#education").append(
			HTMLonlineEntry.
			replace("%name%", s.school).replace("%dates%", s.dates).
			replace("%url%", s.url).replace("%degree%", s.title)
			);
	}
};

work.display = function(){
	for(job in work.jobs) {
		var s = work.jobs[job];
		$("#workExperience").append(HTMLworkEntry.
		replace("%employer%", s.employer).replace("%title%", work.jobs[job].title).
		replace("%dates%", work.jobs[job].dates).replace("%location%", work.jobs[job].location).
		replace("%description%", work.jobs[job].description));
	}
}

projects.display = function() {
	for(project in projects.projects) {
		var p = projects.projects[project];
		var srcSet =
			p.image.replace(/\.png$/g, "-large.png") + " 1024w, " +
			p.image.replace(/\.png$/g, "-medium.png") + " 640w, " +
			p.image.replace(/\.png$/g, "-small.png") + " 320w";
		var projectID = "project-" + project;
		$("#projects").append(
			HTMLprojectEntry.
			replace(/%title%/g, p.title).
			replace(/%dates%/g, p.dates).
			replace(/%image%/g, p.image).
			replace(/%image-set%/g, srcSet).
			replace(/%alt-text%/g, "Image for " + p.title).
			replace(/%data-target%/g, "#" + projectID).
			replace(/%url%/g, p.url)
			);
		$("body").append(
			HTMLprojectModal.replace(/%modal-id%/g, projectID).
			replace(/%title%/g, p.title).
			replace(/%image%/g, p.image).
			replace(/%image-set%/g, srcSet).
			replace(/%alt-text%/g, "Image for " + p.title).
			replace(/%description%/g, p.description)
			);
	}
};

bio.displayFooter = function() {
	$("#footerContacts").append(
		HTMLmobile.replace(/%data%/g, bio.contacts.mobile) +
		HTMLemail.replace(/%data%/g, bio.contacts.email) +
		HTMLtwitter.replace(/%data%/g, bio.contacts.twitter) +
		HTMLgithub.replace(/%data%/g, bio.contacts.github) +
		HTMLblog.replace(/%data%/g, bio.contacts.blog));
};


function inName(name) {
	name = name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);
education.display();
work.display();
projects.display();
bio.displayFooter();
$("#mapDiv").append(googleMap);




