/*
This is empty on purpose! Your code to build the resume will go here.
 */

var model = {
    bio: {
        name: 'Viet Doan',
        role: 'Software Engineering Intern',
        contacts: {
            mobile: '+841234567890',
            email: 'vietdoanhp1996@gmail.com',
            github: 'vietdoan',
            twitter: '@empty',
            location: 'Hanoi, Vietnam'
        },
        welcomeMessage: "I'm currently working as a Software Engineering Intern in Gotit",
        skills: ['C++', 'Javascript', 'Java', 'Software Development'],
        biopic: 'images/fry.jpg'

    },

    education: {
        schools: [
            {
                name: 'University of Engineering and Techonology - VNU',
                location: 'Hanoi, Vietnam',
                degree: 'Bachelor of Science',
                major: 'Computer Science',
                dates: '2014 - 2018',
                url: 'uet.vnu.edu.vn'
            }
        ],
        onlineCourses: [
            {
                school: 'Udacity',
                title: 'Object-Oriented Javascript',
                dates: 'February 2017',
                url: 'https://www.udacity.com'
            },
            {
                school: 'Udacity',
                title: 'Javascript Design Patterns',
                dates: 'February 2017',
                url: 'https://www.udacity.com'
            }
        ]
    },
    //copy from intenet
    work: {
        jobs: [{
            "employer": "Localize",
            "title": "Senior Software Developer",
            "location": "Edmonton, Alberta, Canada",
            "dates": "March 2015 - December 2015",
            "description": "I was hired to work on Localize's online system, which involved knowledge in C# development, jQuery, knockoutJS, " +
            "SQL Server, Razor templates and Wordpress. I had limited experience with some of these so I learned quickly to become " +
            "productive as soon as possible.  I also lead discussions around better communication between the development team and " +
            "the business as well as definiing the company vision.  I enjoyed my time at Localize and learned a tremendous amount " +
            "from everyone I worked with there."
        },
        {
            "employer": "Enbridge",
            "title": "Software Developer",
            "location": "Edmonton, Alberta, Canada",
            "dates": "September 2008 - March 2015",
            "description": "My primary responsibilities involve all aspects of developing and supporting critical software " +
            "applications in a variety of languages including Java, python, C++ and Perl in both greenfield and " +
            "legacy systems.  This work includes, but is not limited to, database design, software architecture design, high level and " +
            "detailed estimates as well as peer review of submitted work. I am also very involved in encouraging " +
            "communication and collaboration within the team and have experience giving technical presentations as well " +
            "as facilitating project retrospective discussions."
        },
        {
            "employer": "Epcor",
            "title": "Systems Analyst",
            "location": "Edmonton, Alberta, Canada",
            "dates": "September 2003 - April 2006",
            "description": "I worked in a few different capacities here from internal application support of " +
            "internal users using third party customized applications to working on internal software applications " +
            "built using Oracle PL/SQL.  I also learned and used PHP to develop an internal web site to facilitate " +
            "communication between the quality control and development teams by tracking builds, releases and issues."
        },
        {
            "employer": "Matrikon",
            "title": "Programmer",
            "location": "Edmonton, Alberta, Canada",
            "dates": "March 2002 - September 2003",
            "description": "I developed software for external clients in a variety of languages including C#.  This " +
            "included design, development and deployment of back end systems as well as front end graphical user interfaces."
        },
        {
            "employer": "University of Windsor",
            "title": "Teaching Assisstant / Computer Centre Support / Computer Science Tutor",
            "location": "Windsor, Ontario, Canada",
            "dates": "September 1998 - April 2001",
            "description": "I supervised labs for the second year advanced programming class in C as a teaching " +
            "assisstant.  At the University Computer Centre I helped students with use of the computing resources " +
            "available.  As a computer science tutor I aided students with class work and helped them through problems."
        }]
    },

    projects: [{
        "title": "HTML5 Canvas Game",
        "dates": "December 2014 - January 2015",
        "description": "Created an online game using HTML5 Canvas as part of Udacity's Front-End Web Developer " +
        "Nanodegree.",
        "url": "http://www.cherylcourt.ca/frogger"
    },
    {
        "title": "Online Portfolio",
        "dates": "October 2014",
        "description": "Created an online portfolio of work as part of Udacity's Front-End Web Developer " +
        "Nanodegree.",
        "url": "http://www.cherylcourt.ca/"
    },
    {
        "title": "Web Development Wiki",
        "dates": "June 2014 - August 2014",
        "description": "Created an online wiki for Udacity's Web Development Course.",
        "url": "http://helpful-kit-572.appspot.com/"
    }]
};

var octopus = {
    init: function () {
        viewBio.init();
        viewEducation.init();
        viewWork.init();
        viewProjects.init();
        viewMap.init();
    },

    getBio: function () {
        return model.bio;
    },

    getEducation: function () {
        return model.education;
    },

    getWork: function () {
        return model.work;
    },

    getProjects: function () {
        return model.projects;
    }
};

var viewBio = {
    init: function () {
        this.bio = octopus.getBio();
        this.HTMLheaderName = '<h1 id="name">%data%</h1>';
        this.HTMLheaderRole = '<span>%data%</span><hr>';

        this.HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';

        this.HTMLbioPic = '<img src="%data%" class="biopic">';
        this.HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

        this.HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>';
        this.HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';
        this.render();
    },

    render: function () {
        var formarttedHeaderName = this.HTMLheaderName.replace('%data%', this.bio.name);
        var formarttedHeaderRole = this.HTMLheaderName.replace('%data%', this.bio.role);

        var formarttedContacts = [];
        for (let contact in this.bio.contacts) {
            formarttedContacts.push(this.HTMLcontactGeneric.replace('%contact%', contact).replace('%data%', this.bio.contacts[contact]));
        }

        var formarttedBioPic = this.HTMLbioPic.replace('%data%', this.bio.biopic);
        var formarttedWelcomeMsg = this.HTMLwelcomeMsg.replace('%data%', this.bio.welcomeMessage);

        var formarttedSkills = [];
        for (let i = 0; i < this.bio.skills.length; i++)
            formarttedSkills.push(this.HTMLskills.replace('%data%', this.bio.skills[i]));

        $('#header').prepend(formarttedHeaderRole).prepend(formarttedHeaderName);

        for (let i = 0; i < formarttedContacts.length; i++) {
            $('#topContacts').append(formarttedContacts[i]);
            $('#footerContacts').append(formarttedContacts[i]);
        }

        $('#header').append(formarttedBioPic).append(formarttedWelcomeMsg).append(this.HTMLskillsStart);

        for (let i = 0; i < formarttedSkills.length; i++)
            $('#skills').append(formarttedSkills[i]);
    }
};

var viewEducation = {
    init: function () {
        this.education = octopus.getEducation();
        this.HTMLschoolStart = '<div class="education-entry"></div>';
        this.HTMLschoolName = '<a href="#">%data%';
        this.HTMLschoolDegree = ' -- %data%</a>';
        this.HTMLschoolDates = '<div class="date-text">%data%</div>';
        this.HTMLschoolLocation = '<div class="location-text">%data%</div>';
        this.HTMLschoolMajor = '<em><br>Major: %data%</em>';

        this.HTMLonlineClasses = '<h3>Online Classes</h3>';
        this.HTMLonlineTitle = '<a href="#">%data%';
        this.HTMLonlineSchool = ' - %data%</a>';
        this.HTMLonlineDates = '<div class="date-text">%data%</div>';
        this.HTMLonlineURL = '<br><a href="#">%data%</a>';
        this.render();
    },

    render: function () {
        var formarttedSchools = [],
            schools = this.education.schools;
        formarttedOnlineCourses = [],
            onlineCourses = this.education.onlineCourses;

        for (let i = 0; i < schools.length; i++)
            formarttedSchools.push(this.HTMLschoolName.replace('%data%', schools[i].name)
                + this.HTMLschoolDegree.replace('%data%', schools[i].degree)
                + this.HTMLschoolDates.replace('%data%', schools[i].dates)
                + this.HTMLschoolLocation.replace('%data%', schools[i].location)
                + this.HTMLschoolMajor.replace('%data%', schools[i].major));

        for (let i = 0; i < onlineCourses.length; i++)
            formarttedOnlineCourses.push(this.HTMLonlineTitle.replace('%data%', onlineCourses[i].title)
                + this.HTMLonlineSchool.replace('%data%', onlineCourses[i].school)
                + this.HTMLonlineDates.replace('%data%', onlineCourses[i].dates)
                + this.HTMLonlineURL.replace('%data%', onlineCourses[i].url));
        $('#education').append(this.HTMLschoolStart);
        for (let i = 0; i < formarttedSchools.length; i++)
            $('.education-entry').append(formarttedSchools[i]);

        $('.education-entry').append(this.HTMLonlineClasses);
        for (let i = 0; i < formarttedOnlineCourses.length; i++)
            $('.education-entry').append(formarttedOnlineCourses[i]);

    }
};

var viewWork = {
    init: function () {
        this.work = octopus.getWork();
        this.HTMLworkStart = '<div class="work-entry"></div>';
        this.HTMLworkEmployer = '<a href="#">%data%';
        this.HTMLworkTitle = ' - %data%</a>';
        this.HTMLworkDates = '<div class="date-text">%data%</div>';
        this.HTMLworkLocation = '<div class="location-text">%data%</div>';
        this.HTMLworkDescription = '<p><br>%data%</p>';
        this.render();
    },

    render: function () {
        var formarttedWork = [],
            jobs = this.work.jobs;

        for (let i = 0; i < jobs.length; i++)
            formarttedWork.push(this.HTMLworkEmployer.replace('%data%', jobs[i].employer)
                + this.HTMLworkTitle.replace('%data%', jobs[i].title)
                + this.HTMLworkDates.replace('%data%', jobs[i].dates)
                + this.HTMLworkLocation.replace('%data%', jobs[i].location)
                + this.HTMLworkDescription.replace('%data%', jobs[i].description));

        $('#workExperience').append(this.HTMLworkStart);
        for (let i = 0; i < formarttedWork.length; i++)
            $('.work-entry').prepend(formarttedWork[i]);
    }
};

var viewProjects = {
    init: function () {
        this.projects = octopus.getProjects();
        this.HTMLprojectStart = '<div class="project-entry"></div>';
        this.HTMLprojectTitle = '<a href="#">%data%</a>';
        this.HTMLprojectDates = '<div class="date-text">%data%</div>';
        this.HTMLprojectDescription = '<p><br>%data%</p>';
        this.HTMLprojectImage = '<img src="%data%">';
        this.render();
    },

    render: function () {
        var formarttedProjects = [],
            projects = this.projects;

        for (let i = 0; i < projects.length; i++)
            formarttedProjects.push(this.HTMLprojectTitle.replace('%data%', projects[i].title)
                + this.HTMLprojectDates.replace('%data%', projects[i].dates)
                + this.HTMLprojectDescription.replace('%data%', projects[i].description));

        $('#projects').append(this.HTMLprojectStart);
        for (let i = 0; i < formarttedProjects.length; i++)
            $('.project-entry').append(formarttedProjects[i]);
    }

};

var viewMap = {
    init: function () {
        this.internationalizeButton = '<button>Internationalize</button>';
        this.googleMap = '<div id="map"></div>';
        this.render();
    },

    render: function () {
        $('#mapDiv').append(this.googleMap);
        
        var bio = octopus.getBio(),
            education = octopus.getEducation(),
            work = octopus.getWork();
        
        var map;    // declares a global map variable


        /*
        Start here! initializeMap() is called when page is loaded.
        */
        function initializeMap() {

            var locations;

            var mapOptions = {
                disableDefaultUI: true
            };

            /*
            For the map to be displayed, the googleMap var must be
            appended to #mapDiv in resumeBuilder.js.
            */
            map = new google.maps.Map(document.querySelector('#map'), mapOptions);


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
                // the locations array. Note that forEach is used for array iteration
                // as described in the Udacity FEND Style Guide:
                // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
                education.schools.forEach(function (school) {
                    locations.push(school.location);
                });

                // iterates through work locations and appends each location to
                // the locations array. Note that forEach is used for array iteration
                // as described in the Udacity FEND Style Guide:
                // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
                work.jobs.forEach(function (job) {
                    locations.push(job.location);
                });

                return locations;
            }

            /*
            createMapMarker(placeData) reads Google Places search results to create map pins.
            placeData is the object returned from search results containing information
            about a single location.
            */
            function createMapMarker(placeData) {

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
                    content: name
                });

                // hmmmm, I wonder what this is about...
                google.maps.event.addListener(marker, 'click', function () {
                    // your code goes here!
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
            callback(results, status) makes sure the search returned results for a location.
            If so, it creates a new map marker for that location.
            */
            function callback(results, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                    createMapMarker(results[0]);
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
                locations.forEach(function (place) {
                    // the search request object
                    var request = {
                        query: place
                    };

                    // Actually searches the Google Maps API for location data and runs the callback
                    // function with the search results after each search.
                    service.textSearch(request, callback);
                });
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
        window.addEventListener('resize', function (e) {
            //Make sure the map bounds get updated on page resize
            map.fitBounds(mapBounds);
        });

    }
}

octopus.init();