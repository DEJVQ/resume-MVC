/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio,
    education,
    work;

$(document).ready(function() {
     bio = {
        name : "Tom Dwad",
        role : "Manager",
        contacts : {
            mobile: "733 231 321",
            email: "tom@gmail.com", 
            github: "github.io/tom",
            twitter: "Test",
            location: "Germany"
        },
        welcomeMessage: "Hello Tom", 
        skills: ["C++", "Java", "JIRA"],
        biopic: "https://facetzokladki.pl/wp-content/uploads/2016/12/Mezczyzna-Zawiaze-Krawat-600x533.jpg",
        display: function() {
            return this;
        }
    };
    
    education = {
        schools: [
                {
                    name: "IT School 1",
                    location: "Poland",
                    degree: "Degree 1",
                    majors: ["5", "5", "5"],
                    dates: "2013-2014",
                    url: ""
                },
                {
                    name: "IT School 2",
                    location: "Poland",
                    degree: "Degree 2",
                    majors: ["5", "4", "5"],
                    dates: "2014-2015",
                    url: ""
                },
                {
                    name: "IT School 1",
                    location: "Poland",
                    degree: "Degree 3",
                    majors: ["4", "5", "5"],
                    dates: "2015-2016",
                    url: ""
                }
            ],
            onlineCourses: [
                {
                    title: "Course 1",
                    school: "IT School 1",
                    dates: "2013-2014",
                    url: "udacity.pl",
                },
                {
                    title: "Course 2",
                    school: "IT School 2",
                    dates: "2014-2015",
                    url: "udacity.pl",
                },
                {
                    title: "Course 3",
                    school: "IT School 3",
                    dates: "2015-2016",
                    url: "udacity.pl",
                }
            ],
            display: function() {
                return this.schools;
            }
    };
    
    work = {
        jobs: [ 
            {
                employer: "Company IT 1",
                title: "Title 1",
                location: "Poland",
                dates: "2013-2014",
                description: "Tekst dklasjkdljas kl jkljkldsa kdjas kdklas kljdaskdklasd dkasjdkasd asdaskjdkljasdkl dasdkljasdklas daskjdklasdkljas daskjdkljasdklas dkjasdkljasdkl askdjklasdasdas ashjdhkjasdhjksa dasdasdas dasdasdas dasdas"
            },
            {
                employer: "Company IT 2",
                title: "Title 2",
                location: "Poland",
                dates: "2014-2015",
                description: "Tekst"
            },
            {
                employer: "Company IT 3",
                title: "Title 3",
                location: "Poland",
                dates: "In progess",
                description: "Tekst"
            }
        ],
        display: function() {
            return this.jobs;
        }
    };
    
    var modelProjects = {
            projects: [
                {
                  title: "Project 1",
                  dates: "2013-2014",
                  description: "Project 1 Description",
                  images: ["../images/197x148.gif", "../images/197x148.gif"] 
                },
                {
                  title: "Project 2",
                  dates: "2014-2015",
                  description: "Project 2 Description",
                  images: ["../images/197x148.gif", "../images/197x148.gif"] 
                },
                {
                  title: "Project 3",
                  dates: "2015-2016",
                  description: "Project 3 Description",
                  images: ["../images/197x148.gif", "../images/197x148.gif"] 
                }
            ],
            display: function() {
                return this.projects;
            }   
    };
    
    var octopus = {
        init: function() {
            
            view.init();
        },
        
        bioDisplay: function() {
            return bio;
        },
        
        workDisplay: function() {
            return work;
        },
        
        educationDisplay: function() {
            return education;
        },
        
        projectDisplay: function() {
            return modelProjects;
        }
    };
    
    var view =  {
        init: function() {
            this.initBio();
            this.initWork();
            this.initEducation();
            this.initProject();
            this.initMap();
            this.render();
        },
        
        // Init Bio
        initBio: function() {
            var bio = octopus.bioDisplay();
            var self = this;
            
            this.formattedName = HTMLheaderName.replace("%data%", bio.name);
            this.formattedRole = HTMLheaderRole.replace("%data%", bio.role);
            this.bioPicture = HTMLbioPic.replace("%data%", bio.biopic);
            this.welcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
            
            
            for(var name in bio.contacts) {
                this.formattedContacts = HTMLcontactGeneric.replace("%contact%", name);
                this.formattedContacts1 = this.formattedContacts.replace("%data%", bio.contacts[name]);
                this.addContacts();
            }
            
            this.skillContent = "";
            bio.skills.forEach(function(skill) {
                self.skillContent += HTMLskills.replace("%data%", skill);
            });
            this.renderBio();
        },
        
        // Init Work
        initWork: function() {
            var work = octopus.workDisplay();
            
            for (var i = 0; i < work.jobs.length; i++) {
                this.j = i;
                this.formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
                this.formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);

                this.formattedWorkEmployerTitle = this.formattedWorkEmployer + this.formattedWorkTitle;

                this.formattedWorkDate = HTMLworkDates.replace("%data%", work.jobs[i].dates);
                this.formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
                this.formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
                
                this.renderWork();
            }
        },
        
        initProject: function() {
            var project = octopus.projectDisplay();
            
            for (var i = 0; i < project.projects.length; i++) {
                this.j = i;
                this.formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.projects[i].title);

                this.formattedProjectDate = HTMLprojectDates.replace("%data%", project.projects[i].dates);
                this.formattedProjectDescription = HTMLprojectDates.replace("%data%", project.projects[i].description);
                
                var self = this;
                this.formattedProjectImage = "";
                project.projects[i].images.forEach(function(image) {
                    self.formattedProjectImage += HTMLprojectImage.replace("%data%", image);
                });
                
                this.renderProject();
            }
            
        },
        
        initEducation: function() {
            var education = octopus.educationDisplay();
            
            for (var i = 0; i < education.schools.length; i++) {
                this.j = i;
                
                this.formattedEduactionName = HTMLschoolName.replace("%data%", education.schools[i].name);
                this.formattedEducationDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
                this.formattedEducationDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
                this.formattedEducationLocation= HTMLschoolLocation.replace("%data%", education.schools[i].location);
                this.formattedEducationMajors = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
                
                this.renderEducation();
            }
            
            
            for (i = 0; i < education.onlineCourses.length; i++) {
                this.j = i;
                
                
                this.formattedCourseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
                this.formattedCourseSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
                
                this.formattedCourseTitleSchool = this.formattedCourseTitle + this.formattedCourseSchool;
                
                this.formattedCourseDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
                this.formattedCourseUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
                
                console.log("Times rendering");
                this.renderCourses();
            }
            
        },
        
        initMap: function() {
            this.renderMap();
        },
        
        // Helper to initBio
        addContacts: function() {
            $("#topContacts:last-child").append(this.formattedContacts1);
            $("#footerContacts:last-child").append(this.formattedContacts1);
        },
        
        // Render Bio
        renderBio: function() {
            $("#header").prepend(this.formattedName);
            $("#header h1").after(this.formattedRole);
            
            $("#topContacts").after(this.bioPicture);
            $("#header img").after(this.welcomeMessage);
            $("#header .welcome-message").after(HTMLskillsStart);
            $("#skills").append(this.skillContent);
        },
        
        // Render Work
        renderWork: function() {
            $("#workExperience").append(HTMLworkStart);
            workEntry = document.querySelectorAll(".work-entry");
            
            workEntry[this.j].innerHTML = (this.formattedWorkEmployerTitle);
            workEntry[this.j].innerHTML += (this.formattedWorkDate);
            workEntry[this.j].innerHTML += (this.formattedWorkLocation);
            workEntry[this.j].innerHTML += (this.formattedWorkDescription);
        },
        
        renderProject: function() {
            $("#projects").append(HTMLprojectStart);
            projectEntry = document.querySelectorAll(".project-entry");
            
            projectEntry[this.j].innerHTML = (this.formattedProjectTitle);
            projectEntry[this.j].innerHTML += (this.formattedProjectDate);
            projectEntry[this.j].innerHTML += (this.formattedWorkDescription);
            projectEntry[this.j].innerHTML += (this.formattedProjectImage);
            
        },
        
        renderEducation: function() {
            $("#education").append(HTMLschoolStart);
            educationEntry = document.querySelectorAll(".education-entry");
            
            educationEntry[this.j].innerHTML = (this.formattedEduactionName);
            educationEntry[this.j].innerHTML += (this.formattedEducationDegree);
            educationEntry[this.j].innerHTML += (this.formattedEducationDates);
            educationEntry[this.j].innerHTML += (this.formattedEducationLocation);
            educationEntry[this.j].innerHTML += (this.formattedEducationMajors);
            
        },
        
        renderCourses: function() {
            if(this.j == 0) {
                $(".education-entry:last-child").append(HTMLonlineClasses);
            }
                $("#education h3").after(this.formattedCourseTitleSchool);
                $("#education h3").next().after(this.formattedCourseDates);
                $("#education h3").next().next().after(this.formattedCourseUrl);
        },
        
        renderMap: function() {
            $("#mapDiv").append(googleMap);
        },
        
        render: function() {
            
        }
    };

    octopus.init();



});