'use strict';

//JSON to store cv data: bio, education, work, projects, cities.
var bio = {
	'name' : 'Joel Armando',
	'role' : 'Educational Technologist',
	'contacts': {
		'mobile': '+447824477292',
		'email': 'joelarma@gmail.com',
		'github': 'JoelArmandoP',
		'twitter': 'joelitaap',
		'location': 'LON'
	},
	'pictureUrl': 'images/Joel.png',
	'welcomeMsg': 'Educational technologist with extensive experience in educational research ' +
				  'and project management, dipping a toe in the field of programming and web development.',
	'skills': [
		{ name: 'learning design', score: 120 },
		{ name: 'curriculum design', score: 120 },
		{ name: 'moodle', score: 80 },
		{ name: 'e-learning', score: 80 },
		{ name: 'research', score: 100 },
		{ name: 'teaching', score: 100 },
		{ name: 'HTML', score: 40 },
		{ name: 'javascript', score: 40 },
		{ name: 'CSS', score: 40 },
		{ name: 'java',	score: 40 }
	]
};

var education = {
	'schools': [{
		'name': 'Birkbeck College, University of London',
		'location' : 'LON',
		'degree' : 'MSc',
		'majors' :  ['Learning Technologies'],
		'dates' : '2016',
		'url': 'http://www.dcs.bbk.ac.uk/courses/msclt/'
	},
	{
		'name': 'Universidad de Santiago de Compostela',
		'location' : 'SCQ',
		'degree' : 'PhD',
		'majors' :['Education'],
		'dates' : '2015',
		'url': 'http://www.usc.es/es/centros/cptf/doutoramento/index.html'
	},
	{
		'name': 'Universidad Nacional de Córdoba',
		'location' : 'COR',
		'degree' : 'Master',
		'majors' : ['Educational Research'],
		'dates' : '2009',
		'url': 'http://www.cea.unc.edu.ar/'
	},
	{
		'name': 'Universidad Nacional de Córdoba',
		'location' : 'COR',
		'degree' : 'BSc',
		'majors' : ['Educational Sciences'],
		'dates' : '2000',
		'url': 'http://www.unc.edu.ar'
	}],
	'onlineCourses': [
	{
		'title': 'Front-End Web Developer Nanodegree',
		'school': 'Udacity',
		'dates': '2015',
		'url': 'http://www.udacity.com'
	}]
};

var work = {
	'jobs': [{
		'employer': 'City University London',
		'title' : 'Educational Technologist',
		'location' : 'LON',
		'dates' : 'May 2015-continue',
		'description' : 'As part of the Learning, Enhancement and Development Department, '+
						'based at Cass School of Business, I provide pedagogical and technical support for lecturers and professional staff.'+
						' My duties also include the development of research and innovation projects in the use of educational technologies in Higher Education.'
	}, {
		'employer': 'LamMovil',
		'title' : 'E-learning Consultant',
		'location' : 'LON',
		'dates' : 'Jan 2014-Apr 2015',
		'description' : 'Provided educational advice in e-learning for healthcare programs. Designed the general strategy for the use'+
						' of different technologies: Content Management System (CMS), Virtual Learning Environment (VLE), Video recording,'+
						' Social Media. Responsible for moodle administration, and training tutors in its use.'

	}, {
		'employer': 'Universidad Nacional de Córdoba. School of Philosophy and Humanities',
		'title' : 'Director of the Educational Technology Department',
		'location' : 'COR',
		'dates' : 'Feb 2006-Jun 2013',
		'description' : 'Led the Educational Technology Department, which provides infrastructure, services, '+
						'training and advice to academic staff. I managed a fifteen-person multi-dis­ciplinary team and conducted international research and'+
						' innovation projects.'
	}, {
		'employer': 'Centro de Perfeccionamiento R. Núñez. Judicial Power, Córdoba Goverment',
		'title' : 'Executive Coordinator',
		'location' : 'COR',
		'dates' : 'Feb 2012-Jun 2013',
		'description' : 'Executive in charge of the education programmes for the Judicial Power\'s Learning & Development area. '+
						'Designed and implemented the Virtual Campus and integrated it to existing technologies. '+
						'I was responsible for creating new capabilities in the existing team and designed and started execution of two new on line postgraduate careers'
	},  {
		'employer': '“Conectar Igualdad” Programme, Ministry of Education, Argentina',
		'title': 'Member of the Advisory Council',
		'location': 'BUE',
		'dates': '2010-2011',
		'description': 'I provided pedagogical advice to “Conectar Igualdad,” Argentina\'s plan to'+
						'deliver three million netbooks to all of its secondary school­children. I co-drafted the Council\'s report'+
						'on general guidelines for the execution of digital inclusion policies'
	}, {
		'employer': 'Universidad Nacional de Córdoba. School of Economics',
		'title' : 'Pedagogical Advisor in Distance Learning',
		'location' : 'COR',
		'dates' : 'Aug 1999-Jan 2006',
		'description' : 'Program manager and pedagogical advisor for distance learning courses. Provided advice in the design and production of courses and educational materials.'
	}]
};

var projects = {
	'projects': [{
			'title': 'Arcade Game',
			'dates': '2015',
			'description': 'Project developed as part of the Udacity Front-end developer nanodegree. I was provided with visual assets'+
							' and a game loop engine; using these tools I must add a number of entities to the game including'+
							' the player characters and enemies to recreate the classic arcade game Frogger.',
			'image': 'images/ArcadeGame.png', //TODO: replace for real image.
			'url': 'https://github.com/JoelArmandoP/P3-Classic-Arcade-Game'
		}, {
			'title': 'Neighborhood Map',
			'dates': '2015',
			'description': 'Project developed as part of the Udacity Front-end developer nanodegree. I developed a single-page application'+
							' featuring a map of my neighborhood. I add additional functionality to this application, '+
							'including: map markers, a search function, and a listview. '+
							'I researched and implemented third-party APIs that provide additional information about each of these locations.',
			'image': 'images/NeighborhoodMap.png', //TODO: replace for real image.
			'url': 'https://github.com/JoelArmandoP/P5-Neighborhood-Map-Project'
		}, {
			'title': 'Working-through statistics',
			'dates': '2015-2016',
			'description': 'MSc in Learning Technologies\' dissertation. It consists in the development of a mobile application to enhance '+
							'teaching and learning of Statistics. It is a research-based design carried on in '+
							'the career of Actuarial Sciences (Cass Busines School, City University London).',
			'image': 'images/MSc.png', //TODO: replace for real image.
			'url': 'http://ansenuza.ffyh.unc.edu.ar/'//TODO replace for real url
		}
//I decided not to include the following projects, because they are not web-dev related.
//They are left commented in case I want to include them later.
		/*,
		, {
			'title': 'New literacies in teachers' education',
			'dates': '2013-2015',
			'description': 'PhD research project. It involved the combination of quantitative and qualitative research to identify and map main '+
							'theoretical perspectivs about new literacies in the curricular change in teachers' education, carried on in Argentina between 2007-2010',
			'image': 'images/PhD.png',
			'url': 'https://www.academia.edu/964828/Las_nuevas_alfabetizaciones_en_la_formaci%C3%B3n_docente_inicial._Cartograf%C3%ADa_de_las_perspectivas_te%C3%B3ricas_dominantes_en_el_contexto_internacional'
		},
		{
			'title': 'Ansenuza',
			'dates': '2010-2013',
			'description': 'I co-directed the development of Ansenuza, an open digital repository of educational materials,'+
							'This project was jointly developed by Universidad Nacional de Cordoba and Government of Cordoba.',
			'image': 'images/ansenuza.png',
			'url': 'http://ansenuza.ffyh.unc.edu.ar/'
		},
		{
			'title': 'Technologies in Higher Education',
			'dates': '2000-2012',
			'description': 'I managed the local team at Universidad Nacional de Cordoba in the project:'+
							'Enhancing University Teaching with New Technology. This was an international research'+
							' and innovation project, led by Universidad de Santiago de Compostela (Spain) and developed '+
							'at Universidad Nacional de Córdoba (Argentina)',
			'image': 'images/ProjectD.png',
			'url': 'http://unisic.usc.es/index.php?option=com_content&view=article&id=39&Itemid=5/'

		}*/
	]
};

//A dictionary to store locations with descriptions
var cities = {
	'COR': {
		name:'Córdoba, Argentina',
		description:'Córdoba is a city located in the geographical center of Argentina. ' +
		'It is the capital of Córdoba Province and the second-largest city in Argentina, ' +
		'with about 1.5 million inhabitants.<br/>' +
		'Universidad Nacional de Córdoba teaches 110.000 students with diverse origins, ' +
		'in 250 undergraduate and postgraduate careers. It has 13 Schools, 100 research ' +
		'centres, 25 librares y 16 museums. It carries out 1.500 research projects annually.'
	},
	'SCQ': {
		name:'Santiago de Compostela, Spain',
		description:'Santiago de Compostela is the capital of the autonomous community of ' +
		'Galicia in northwestern Spain.<br/>'+
		'The University of Santiago de Compostela offers the appeal of living in two World Heritage '+
		'cities. Between its Santiago and Lugo Campuses, the USC offers 42 bachelor degrees corresponding '+
		'to the different branches of knowledge: 4 Science, 8 Health Science, 12 Social Science'+
		'and Legal, 8 Engineering and Architecture and 9 Art and Humanities bachelor degrees.'
	},
	'BUE': {
		name:'Buenos Aires, Argentina',
		description:'Buenos Aires is the capital and largest city of Argentina, and the second-largest ' +
		'metropolitan area in South America. The Greater Buenos Aires conurbation constitutes the ' +
		'third-largest conurbation in Latin America, with a population of around fifteen and a half million.'
	},
	'LON': {
		name:'London, UK',
		description:'City University London is a leading international University and the only university ' +
		'in London to be both committed to academic excellence and focused on business and the ' +
		'professions. It is among the top five per cent of universities in the world. '+
		'Sir John Cass Business School is among the top four business schools in the UK and 18th in Europe.'
	}
};

//data for languages chart
var langData = {
	labels: ['English', 'Spanish', 'French'],
	datasets: [{
		label: 'Expertise',
		fillColor: 'rgb(163,0,33)',
		strokeColor: 'rgba(220,220,220,0.8)',
		highlightFill: 'rgba(220,220,220,0.75)',
		highlightStroke: 'rgba(220,220,220,1)',
		data: [80, 100, 30]
	}]
};

//data for skills chart
var skillsData = [];
bio.skills.forEach(function(x){skillsData.push([x.name, x.score/3])});

//A function to display the education entries
education.display = function() {
	var e = $('#education');
	education.schools.forEach(
		function(s) {
			e.append(
			HTMLschoolEntry.
			replace('%name%', s.name).replace('%dates%', s.dates).
			replace('%url%', s.url).replace('%degree%', s.degree).
			replace('%majors%', s.majors).replace('%location%', cities[s.location].name)
			);
		});
	e.append(HTMLonlineClasses);
	education.onlineCourses.forEach(
		function(s) {
			e.append(
			HTMLonlineEntry.
			replace('%name%', s.school).replace('%dates%', s.dates).
			replace('%url%', s.url).replace('%degree%', s.title)
			);
		});
};

skills.display = function() {
	for(skill in bio.skills[skill]) {
		var s = bio.skills[skill];
		S
	}
}

//A function to display the work entries
work.display = function(){
	work.jobs.forEach(
		function(j) {
			$('#workExperience').append(HTMLworkEntry.
			replace('%employer%', j.employer).replace('%title%', j.title).
			replace('%dates%', j.dates).replace('%location%', cities[j.location].name).
			replace('%description%', j.description));
		});
}

//A function to display the project entries
projects.display = function() {
	var projectNumber = 0;
	projects.projects.forEach(
		function(p) {
			var projectID = 'project-' + projectNumber;
			projectNumber++;
			var srcSet =
			p.image.replace(/\.png$/g, '-large.png') + ' 1024w, ' +
			p.image.replace(/\.png$/g, '-medium.png') + ' 640w, ' +
			p.image.replace(/\.png$/g, '-small.png') + ' 320w';
		$('#projects').append(
			HTMLprojectEntry.
			replace(/%title%/g, p.title).
			replace(/%dates%/g, p.dates).
			replace(/%image%/g, p.image).
			replace(/%image-set%/g, srcSet).
			replace(/%alt-text%/g, 'Image for ' + p.title).
			replace(/%data-target%/g, '#' + projectID).
			replace(/%url%/g, p.url)
			);
		$('body').append(
			HTMLprojectModal.replace(/%modal-id%/g, projectID).
			replace(/%title%/g, p.title).
			replace(/%image%/g, p.image).
			replace(/%image-set%/g, srcSet).
			replace(/%alt-text%/g, 'Image for ' + p.title).
			replace(/%description%/g, p.description)
			);
		});
};

//A function to display the header info
bio.displayHeader = function() {
	$('#role').prepend(
		HTMLheaderRole.replace('%data%', bio.role) +
		HTMLwelcomeMsg.replace('%data%', bio.welcomeMsg));
	$('#name').prepend(HTMLheaderName.replace('%data%', bio.name));
	//I left this commented in case I want to display my picture later.
	//$('#header').prepend(HTMLbioPic.replace(/%data%/g, bio.pictureUrl));
	$('#topContacts').append(
		HTMLmobile.replace(/%data%/g, bio.contacts.mobile) +
		HTMLemail.replace(/%data%/g, bio.contacts.email) +
		HTMLgithub.replace(/%data%/g, bio.contacts.github) +
		HTMLlocation.replace(/%data%/g, cities[bio.contacts.location].name));
};

//A function to display the footer info
bio.displayFooter = function() {
	$('#footerContacts').append(
		HTMLmobile.replace(/%data%/g, bio.contacts.mobile) +
		HTMLemail.replace(/%data%/g, bio.contacts.email) +
		HTMLtwitter.replace(/%data%/g, bio.contacts.twitter) +
		HTMLgithub.replace(/%data%/g, bio.contacts.github));
};

//Internationalize function
function inName(name) {
	name = name.trim().split(' ');
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + ' ' + name[1];
}

//Calls to functions that display data
$('#main').append(internationalizeButton);
education.display();
work.display();
projects.display();
bio.displayHeader();
bio.displayFooter();
$('#mapDiv').append(googleMap);