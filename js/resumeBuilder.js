/* JSON data of bio, work, projects, education */

var bio={
  "name" : "James Kim",
  "role" : "Web Developer",
   "welcomeMessage" : "Hail fellow traveller and happy tales!", 
  "pictureURL" : "DogeBernanke.png",
  "contacts" : { 
    "email" : "jsolk206@gmail.com",
    "github" : "solo206",
    "twitter" : "@javasalts",
    "location" : "Seattle"
  },
  "skills" : [
    {"name" : "HTML5", "value" : "80", "level" : "proficient"},
    {"name" : "CSS3", "value" : "60", "level" : "competent"},
    {"name" : "Javascript", "value":"60", "level" : "competent"},
   ]
}

var work={
  "jobs" : [
    {
      "employer" : "Javasalts",
      "title" : "Web Designer",
      "location" : "Seattle - WA",
      "dates" : "January 2013 - Present",
      "description" : "Prototyping - Wireframing - QA / UX testing"
    },
    {
      "employer" : "Senior Services",
      "title" : "Desktop Helpdesk",
      "location" : "Seattle - WA",
      "dates" : "January 2012- December 2012",
      "description" : "IT Support - IT Security- Hardware Upgrades"
    }
  ]
}

var projects={
  "project":[
    {
      "title" : "GeoQuiz",
      "dates" : "June 2014",
      "description" : "Quiz app that test geographical knowledge",
      "images" : ["Geoquiz.png", "Geoquiz2.png", "Geoquiz3.png"]
    },
    {
      "title" : "Instagram matching game",
      "dates" : "August 2014",
      "description" : "Photo matching game app", 
      "images" : ["PhotoRecall.png", "PhotoRecall2.png", "PhotoRecall3.png"]
    },
    {
      "title" : "Shopping cart app",
      "dates" : "July 2014",
      "description" : "App that tracks shopping cart items",
      "images" : ["shoppingcart.png", "shoppingcart2.png", "shoppingcart3.png"]
    }
  ]
}

var education=
{
    "schools": 
        [{
            "name": "University of Washington",
            "major": "Psychology",
            "degree": "Bachelors",
            "location": "Seattle, WA",
            "date_attended": "2001",
            "url": "http: //u.washington.edu"
        }]
    ,
    "onlineCourses": [
        {
            "title": "JavaScriptSyntax",
            "school": "Udacity",
            "dates_attended": 2014,
            "url": "http: //www.udacity.com/course/ud804"
        },
        {
          "title" : "Front End Developer",
          "school" : "Thinkful",
          "dates_attended" : 2014,
          "url" : "http://www.thinkful.com"
        }
    ]
}

/*Biography section*/

/*anonymous function attached to json bio object*/

bio.attach = function () {
  
  appendNameRole();

  appendContacts();

  appendPhotoWelcome();

  appendSkills();

}//end of function

/*name and role section*/

function appendNameRole(){

  var formattedName=HTMLheaderName.replace("%data%",bio.name);
  var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
  var formattedTitle=formattedName+formattedRole;
  $("#header").prepend(HTMLnameStarter);
  $(".nameRole").prepend(formattedTitle);

}

/*contacts section*/

function appendContacts(){

  var formattedEmail=HTMLemail.replace("%data%",bio.contacts.email);
  var formattedTwitter=HTMLtwitter.replace("%data%",bio.contacts.twitter);
  var formattedGithub=HTMLgithub.replace("%data%",bio.contacts.github);
  var formattedLocation=HTMLlocation.replace("%data%",bio.contacts.location);
  var formattedContact=formattedEmail+formattedGithub+formattedTwitter+formattedLocation;
  $("#topContacts").append(formattedContact);

}

/*Biopic and Welcome message*/

function appendPhotoWelcome(){
  
  var formattedBioPic=HTMLbioPic.replace("%data%",bio.pictureURL);
  var formattedWelcomeMsg=HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
  $("#headerPhoto").append(formattedBioPic);
  $("#contactSkills").append(formattedWelcomeMsg);

}

/*Skills section*/

function appendSkills(){

  //checks if skills in bio json object  is not empty 
  if(bio.skills.length>0){

    $('#contactSkills').append(HTMLskillsStart);
    //loop that iterates through skills array in bio json and adds skill name and value associated with skill
    
    for(var skill in bio.skills){
    
        var formattedSkillBar=HTMLskillBar.replace("%data%", bio.skills[skill].value);
        var formattedSkill=HTMLskills.replace("%data%",bio.skills[skill].name);
        var formattedSkillBarLevel=HTMLskillBarLevel.replace("%data%", bio.skills[skill].level);
        $("#skills:last").append(HTMLskillBarStart+formattedSkillBar+formattedSkill+formattedSkillBarLevel+HTMLskillBarEnd);
    
    }

  }//end of if

}


/*Work section*/

work.attach=function() {

  /* loop through each job in json array*/
  for(var job in work.jobs){

    //insert work div format into index.html
    $("#workExperience").append(HTMLworkStart);

    appendWorkTitle(job);

    appendWorkDatesDesc(job);

  }//end of for loop

}//end of function

function appendWorkTitle(job){
    
    var formattedWorkEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    var formattedWorkTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
    var formattedWorkLocation=HTMLworkLocation.replace("%data%",work.jobs[job].location);
    var formattedEmployerTitle=formattedWorkEmployer+formattedWorkTitle+formattedWorkLocation
    $(".work-entry:last").append(formattedEmployerTitle);

}

function appendWorkDatesDesc(job){

    var formattedWorkDates=HTMLworkDates.replace("%data%",work.jobs[job].dates);
    $(".work-entry:last").append(formattedWorkDates);

    var formattedWorkDescription=HTMLworkDescription.replace("%data%",work.jobs[job].description);
    $(".work-entry:last").append(formattedWorkDescription);

}



/*Projects section*/

/*property of projects json object*/

projects.attach=function (){

  for(singleProject in projects.project){
      
      $("#projects").append(HTMLprojectStart);
      
      $(".project-entry:last").append(HTMLprojectText);

      appendProjectTitle(singleProject);

      appendProjectImage(singleProject);
    
  }//end of outer for project loop

}//end of project function

function appendProjectTitle(singleProject){

  /* Title */
    var formattedTitle=HTMLprojectTitle.replace("%data%", projects.project[singleProject].title);
    $(".projectText:last").append(formattedTitle);

/* Dates */
    var formattedDates=HTMLprojectDates.replace("%data%", projects.project[singleProject].dates);
    $(".projectText:last").append(formattedDates);

/* Description*/
    var formattedDescription=HTMLprojectDescription.replace("%data%", projects.project[singleProject].description);
    $(".projectText:last").append(formattedDescription);

}

function appendProjectImage(singleProject){

      if (projects.project[singleProject].images.length > 0){

      $(".project-entry:last").append(HTMLprojectImageBegin);

        for (image in projects.project[singleProject].images){
    
          var formattedImage = HTMLprojectImage.replace("%data%", projects.project[singleProject].images[image]);

          $(".projectImageHold:last").append(formattedImage);
      
        }//end of image for loop

      $(".project-entry:last").append(HTMLprojectImageEnd);

    }//end of if

}



/* education section */

/*anonymous function attached to education json object*/

education.attach = function (){

  /*insert online format html into index.html*/
  $("#education").append(HTMLschoolStart);

  /*off line schools section*/

  /*loop for array of schools in json object*/
  for(var school in education.schools){

    appendSchoolTitle(school);

  }//end of for loop*/

  /*onlineCourses section */
  
  //insert online format html into index.html
  $("#education").append(HTMLonlineClasses);

  for (var course in education.onlineCourses){

    appendOnlineTitle(course);

    appendOnlineDatesURL(course);

  }

}//end of function

function appendSchoolTitle(school){

    //replace and format json employer and title data and concatenate into title
    var formattedSchoolName=HTMLschoolName.replace("%data%",education.schools[school].name);
    var formattedSchoolDegree=HTMLschoolDegree.replace("%data%",education.schools[school].degree);
    var formattedSchoolTitle=formattedSchoolName+formattedSchoolDegree;

      /* Title - Dates -Major*/
    $(".education-entry:last").append(formattedSchoolTitle);
    var formattedSchoolLocation=HTMLschoolLocation.replace("%data%",education.schools[school].location);
    $(".education-entry:last").append(formattedSchoolLocation);
    var formattedSchoolDates=HTMLschoolDates.replace("%data%",education.schools[school].date_attended);
    $(".education-entry:last").append(formattedSchoolDates);
    var formattedSchoolMajor=HTMLschoolMajor.replace("%data%",education.schools[school].major);
    $(".education-entry:last").append(formattedSchoolMajor);

}

function appendOnlineTitle(course){

    //replace and format json employer and title data and concatenate into title
    var formattedOnlineTitle=HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
    var formattedOnlineSchool=HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
    var formattedOnlineTitleSchool=formattedOnlineTitle+formattedOnlineSchool;
    $(".online-entry").append(formattedOnlineTitleSchool);

}

function appendOnlineDatesURL(course){

    var formattedOnlineDates=HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates_attended);
    var formattedOnlineURL=HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);

    $(".online-entry").append(formattedOnlineDates);
    $(".online-entry").append(formattedOnlineURL);

}


/* internationalize name  or capitalize last name*/

function inName (name){
  name = name.trim().split(" ");
  console.log(name);
  name[1] =name[1].toUpperCase();
  name[0] =name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] +" " +name[1];
} /*end of function*/

function internationalize(){

  /*internationalize button*/
  $('.nameHolder').prepend(internationalizeButton);
}


/*google map*/

function googleMapIt(){

  /*map*/
  $("#mapDiv").append(googleMap);

}



/*object calls*/

bio.attach();

work.attach();

projects.attach();

education.attach();

/*non-json related function calls*/

internationalize();

googleMapIt();


