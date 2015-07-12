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
	"pictureUrl": "images/joel.png",
	"welcomeMsg": "Éducational technologist with extensive experience in educational research and project management diping a toe in the field of programming and web development.",
	"skills": ["learning design", "curriculum design", "moodle","e-learning","educational research","teaching"]

};


var education = {
	"schools": [
	{
		"name": "Birkbeck College, University of London",
		"city" : "London, UK",
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
		"employer": "Judicial Power, Córdoba Goverment",
		"title" : "Executive Coordinator of Centro de Perfeccionamiento R. Núñez",
		"location" : "Córdoba, Argentina",
		"dates" : "Feb 2012 - Jun 2013",
		"description" : "Executive in charge of the education programme for the Judicial Power's Learning & Development area."
	}, 
	{
		"employer": "Universidad Nacional de Córdoba. School of Economics",
		"title" : "Pedagogical Advisor in Distance Learning",
		"location" : "Córdoba, Argentina",
		"dates" : "Aug 1999 - Jan 2006",
		"description" : "Program manager for distance learning courses. Provided advice in the design and production of courses and educational materials."
	}
	]

};

var projects = {
	"projects": [ 
	{
		"title": "Arcade Game",
		"dates": "2015",
		"description": "Project developed as part of the Udacity Front-end developer nanodegree",
		"images": ["images/Joel.png"]
	},
	{
		"title": "Neighborhood Map",
		"dates": "2015",
		"description": "Project developed as part of the Udacity Front-end developer nanodegree",
		"images": ["images/Joel.png"]
	},
	{
		"title": "Working through statistics. A mobile application to enhance teaching and learning in Higher Education",
		"dates": "2015-2016",
		"description": "Research based design of a mobile application to enhance teaching and learning of statistics' concepts in the career of Actuarial Sciences (Cass Busines School, City University London.",
			"images": ["images/Joel.png"]
		},
		{
			"title": "New literacies in teachers' educational. An analysis of curricular policies in Argentina",
			"dates": "2013-2015",
			"description": "PhD Research project. It involved the combination of quantitative and qualitative research to identify and map main theoretical perspectivs about new literacies in the curricular change in teachers' education, carried on in Argentina from 2007",
			"images": ["images/Joel.png"]
		},
		{
			"title": "Ansenuza, a digital repository of teaching materials for teachers' education",
			"dates": "2010-2013",
			"description": "Led the development of Ansennuza, an open repository of educational materials, jointly developed by Universidad Nacional de Cordoba and Government of Cordoba.",
			"images": ["images/Joel.png"]
		},
		{
			"title": "Enhancing University Teaching with New Technology (EUTNT)",
			"dates": "2000- 2012",
			"description": "Coordinated the local team at Universidad Nacional de Cordoba in an International research and innovation project.",
			"images": ["images/Joel.png"]
		}
		]

	};

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("header").prepend(formattedRole);
	$("header").prepend(formattedName);
	

    education.display = function() {
    	for(school in education.schools) {
    		$("#education").append(HTMLschoolStart);
    		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
    		$("school-entry: last").append(formattedSchoolName);
    		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    		$("school-entry: last").append(formattedSchoolLocation);
    		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    		$("school-entry: last").append(formattedSchoolDegree);
    		var formattedSchoolMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
    		$("school-entry: last").append(formattedSchoolMajors);
    		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    		$("school-entry: last").append(formattedSchoolDates);
    	}
		for(onlineCourse in education.onlineCourses) {
    		$("#education").append(HTMLonlineClasses);
    		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
    		$("online-entry: last").append(formattedOnlineTitle);
    		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
    		$("online-entry: last").append(formattedSchoolLocation);
    		var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].date);
    		$("online-entry: last").append(formattedOnlineDate);
       		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
    		$("online-entry: last").append(formattedOnlineURL);
    	}
    };

    work.displayWork = function(){
    	for(job in work.jobs) {
    		$("#workExperience").append(HTMLworkStart);
    		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    		$("work-entry: last").append(formattedWorkEmployer);
    		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    		$("work-entry: last").append(formattedWorkTitle);
    		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    		$("work-entry: last").append(formattedWorkDates);
    		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    		$("work-entry: last").append(formattedWorkLocation);
    		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    		$("work-entry: last").append(formattedWorkDescription);

    	}
    }

    
    projects.display = function() {
    	for(project in projects.projects) {
    		$("#projects").append(HTMLprojectStart);
    		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    		$("project-entry: last").append(formattedprojectTitle);
    		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    		$("work-entry: last").append(formattedWorkDates);
    		var formattedProjectLocation = HTMLprojectLocation.replace("%data%", projects.projects[project].location);
    		$("work-entry: last").append(formattedProjectLocation);
    		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    		$("work-entry: last").append(formattedProjectDescription);
    		if(projects.projects[project].images.length > 0) {
    			for(image in images) {
    				var formattedProjectImages = HTMLprojectImages.replace("%data%", projects.projects[project].images);
    				$("work-entry: last").append(formattedProjectImages);
    			}
	   		}
       	}
    };

$(document).click(function(loc) {
    	var x = loc.pageX;
    	var y = loc.pageY;

    	logClicks(x,y); 
    });

    function inName(name) {
    	name = name.trim().split(" ");
    	name[1] = name[1].toUpperCase();
    	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    	return name[0] + " " + name[1];
    }

    $("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);



