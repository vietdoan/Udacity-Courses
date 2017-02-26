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
                dates: 'February 2017'
            },
            {
                school: 'Udacity',
                title: 'Javascript Design Patterns',
                dates: 'February 2017'
            }
        ]
    },
    //copy from intenet
    work: {
        jobs: [{
            "employer": "Localize",
            "title": "Senior Software Developer",
            "location": "Edmonton, Alberta, Canada",
            "datesWorked": "March 2015 - December 2015",
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
            "datesWorked": "September 2008 - March 2015",
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
            "datesWorked": "September 2003 - April 2006",
            "description": "I worked in a few different capacities here from internal application support of " +
            "internal users using third party customized applications to working on internal software applications " +
            "built using Oracle PL/SQL.  I also learned and used PHP to develop an internal web site to facilitate " +
            "communication between the quality control and development teams by tracking builds, releases and issues."
        },
        {
            "employer": "Matrikon",
            "title": "Programmer",
            "location": "Edmonton, Alberta, Canada",
            "datesWorked": "March 2002 - September 2003",
            "description": "I developed software for external clients in a variety of languages including C#.  This " +
            "included design, development and deployment of back end systems as well as front end graphical user interfaces."
        },
        {
            "employer": "University of Windsor",
            "title": "Teaching Assisstant / Computer Centre Support / Computer Science Tutor",
            "location": "Windsor, Ontario, Canada",
            "datesWorked": "September 1998 - April 2001",
            "description": "I supervised labs for the second year advanced programming class in C as a teaching " +
            "assisstant.  At the University Computer Centre I helped students with use of the computing resources " +
            "available.  As a computer science tutor I aided students with class work and helped them through problems."
        }]
    },

    projects: [{
        "title": "HTML5 Canvas Game",
        "datesWorked": "December 2014 - January 2015",
        "description": "Created an online game using HTML5 Canvas as part of Udacity's Front-End Web Developer " +
        "Nanodegree.",
        "images": ["images/frogger.jpg"],
        "url": "http://www.cherylcourt.ca/frogger"
    },
    {
        "title": "Online Portfolio",
        "datesWorked": "October 2014",
        "description": "Created an online portfolio of work as part of Udacity's Front-End Web Developer " +
        "Nanodegree.",
        "images": ["images/portfolio.jpg"],
        "url": "http://www.cherylcourt.ca/"
    },
    {
        "title": "Web Development Wiki",
        "datesWorked": "June 2014 - August 2014",
        "description": "Created an online wiki for Udacity's Web Development Course.",
        "images": ["images/web.jpg"],
        "url": "http://helpful-kit-572.appspot.com/"
    }]
};

var octopus = {
    init: function () {
        viewBio.init();
        viewEducation.init();
        viewWork.init();
        viewProjects.init();
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

    getProject: function () {
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

        for (let i = 0; i < formarttedContacts.length; i++)
            $('#topContacts').append(formarttedContacts[i]);
        
        $('#header').append(formarttedBioPic).append(formarttedWelcomeMsg).append(this.HTMLskillsStart);

        for (let i = 0; i < formarttedSkills.length; i++)
            $('#skills').append(formarttedSkills[i]);
    }
};

var viewEducation = {
    init: function () {
        this.render();
    },

    render: function () {

    }
};

var viewWork = {
    init: function () {
        this.render();
    },

    render: function () {

    }
};

var viewProjects = {
    init: function () {
        this.render();
    },

    render: function () {

    }

};

octopus.init();