var bio = {
	"name" : "Joel Armando",
	"role" : "Educational Technologist",
	"contacts": {
		"mobile": "+447824477292",
		"email": "joelarma@gmail.com",
		"github": "JoelArmandoP",
		"twitter": "joelitaap",
		"location": "London"
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
		"majors" :  "Learning Technologies",
		"dates" : "2016",
		"url": "http://www.dcs.bbk.ac.uk/courses/msclt/"
	},
	{
		"name": "Universidad de Santiago de Compostela",
		"location" : "Santiago de Compostela, Spain",
		"degree" : "PhD",
		"majors" :["Educational Technologies", "Curricular Policies"],
		"dates" : "2015",
		"url": "http://www.usc.es/es/centros/cptf/doutoramento/index.html"
	},
	{
		"name": "Universidad Nacional de Córdoba. Centro de Estudios Avanzados",
		"location" : "Córdoba, Argentina",
		"degree" : "Master",
		"majors" : ["Educational Research", "Mathematics Education"],
		"dates" : "2009",
		"url": "http://www.cea.unc.edu.ar/"
	},
	{
		"name": "Universidad Nacional de Córdoba",
		"location" : "Córdoba, Argentina",
		"degree" : "BSc",
		"majors" : ["Educational theories", "Sociology", "Antropology", 
		"History of Education", "Curriculum Design", "Learning Theories"],
		"dates" : "2000",
		"url": "http://www.unc.edu.ar"
	}
	],
	"onlineCourses": [
	{
		"title": "Front-end nanodegree",
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
		"dates" : "May 2015- continue",
		"description" :  "Educational Technologist. Learning, Enhancement and Development Department, based at Cass School of Business"			
	},
	{
		"employer": "LamMovil",
		"title" : "E-learning Consultant",
		"location" : "Working from home(London)",
		"dates" : "Jan 2014 - Apr 2015",
		"description" :"Provided educational advice in e-learning for healthcare programs."

	},
	{
		"employer": "Universidad Nacional de Córdoba. School of Philosophy and Humanities",
		"title" : "Director of the Educational Technology Department",
		"location" : "Córdoba, Argentina",
		"dates" : "Feb 2006 - Jun 2013",
		"description" : "Led the Educational Technology Department, which provides infrastructure, services, training and advice to academic staff."
	},
	{
		"employer": "Centro de Perfeccionamiento R. Núñez. Judicial Power, Córdoba Goverment",
		"title" : "Executive Coordinator",
		"location" : "Córdoba, Argentina",
		"dates" : "Feb 2012 - Jun 2013",
		"description" : "Executive in charge of the education programmes for the Judicial Power's Learning & Development area."
	}, 
	{
		"employer": "Universidad Nacional de Córdoba. School of Economics",
		"title" : "Pedagogical Advisor in Distance Learning",
		"location" : "Córdoba, Argentina",
		"dates" : "Aug 1999 - Jan 2006",
		"description" : "Program manager and pedagogical advisor for distance learning courses. Provided advice in the design and production of courses and educational materials."
	}
	]
};

var projects = {
	"projects": [ 
		{
			"title": "Arcade Game",
			"dates": "2015",
			"description": "Project developed as part of the Udacity Front-end developer nanodegree",
			"images": ["images/ArcadeGame.png"]
		},
		{
			"title": "Neighborhood Map",
			"dates": "2015",
			"description": "Project developed as part of the Udacity Front-end developer nanodegree",
			"images": ["images/NeighborhoodMap.png"]
		},
		{
			"title": "Working through statistics. A mobile application to enhance teaching and learning in Higher Education",
			"dates": "2015-2016",
			"description": "Research based design of a mobile application to enhance teaching and learning of statistics' concepts in the career of Actuarial Sciences (Cass Busines School, City University London.",
			"images": ["images/PhD.png"]
		},
		{
			"title": "New literacies in teachers' educational. An analysis of curricular policies in Argentina",
			"dates": "2013-2015",
			"description": "PhD Research project. It involved the combination of quantitative and qualitative research to identify and map main theoretical perspectivs about new literacies in the curricular change in teachers' education, carried on in Argentina from 2007",
			"images": ["images/PhD.png"]
		},
		{
			"title": "Ansenuza, a digital repository of teaching materials for teachers' education",
			"dates": "2010-2013",
			"description": "Led the development of Ansennuza, an open repository of educational materials, jointly developed by Universidad Nacional de Cordoba and Government of Cordoba.",
			"images": ["images/ansenuza.png"]
		},
		{
			"title": "Enhancing University Teaching with New Technology (EUTNT)",
			"dates": "2000- 2012",
			"description": "Coordinated the local team at Universidad Nacional de Cordoba in an International research and innovation project.",
			"images": ["images/ProjectD.png"]
		}
	]
};

$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
$("#header").prepend(HTMLbioPic.replace(/%data%/g, bio.pictureUrl));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg));
$("#topContacts").append(HTMLmobile.replace(/%data%/g, bio.contacts.mobile));
$("#topContacts").append(HTMLemail.replace(/%data%/g, bio.contacts.email));


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
		$("#workExperience").append(HTMLworkStart);
		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		$(".work-entry:last").append(formattedWorkEmployer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		$(".work-entry:last").append(formattedWorkTitle);
		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedWorkDates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedWorkLocation);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedWorkDescription);
	}
}

projects.display = function() {
	for(project in projects.projects) {
		var p = projects.projects[project];
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", p.title);
		$(".project-entry:last").append(formattedProjectTitle);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", p.dates);
		$(".project-entry:last").append(formattedProjectDates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", p.description);
		$(".project-entry:last").append(formattedProjectDescription);
		if(p.images.length > 0) {
			for(image in projects.projects[project].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", p.images[image]);
				$(".project-entry:last").append(formattedProjectImage);
			}
		}
	}
};


function inName(name) {
	name = name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);
$("#education").append(education.display());
$("#workExperience").append(work.display());
$("#projects").append(projects.display());
$("#mapDiv").append(googleMap);




