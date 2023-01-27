$(function () {
    navMenu();
    hamburgerMenu();
    
    function assignment(
        name,
        thumbnail,
        introText,
        link
    ) {
        this.name = name;
        this.thumbnail = thumbnail;
        this.introText = introText;
        this.link = link;
    }
    
    let myFirstAssignment = new assignment (
        "A Green Website",
        "a-green-website-background.png",
        "This project was finished after 4 weeks of me learning the basics of html and css!",
        "../assignment-1-copy/html/home.html"
    );
    
    let mySecondAssignment = new assignment (
        "Hangman Game",
        "hangman-background.png",
        "This was my first ever project in js! A hangman game using only prompts and alerts!",
        "../assignment-2-copy/hangman.html"
    );
    
    let myThirdAssignment = new assignment (
        "Tic-Tac-Toe Game",
        "tic-tac-toe-background.png",
        "My first project combining html and css with js! A 1v1 Tic-Tac-Toe game!",
        "https://maxhaggmancmedu.github.io/Assignment-3/"
    );
    
    let myFourthAssignment = new assignment (
        "Spotify API",
        "spotify-api-background.png",
        "Generating content through an API! Search for artists and generate data about them!",
        "https://maxhaggmancmedu.github.io/Assignment-4/"
    );

    let assignmentArray = [myFirstAssignment, mySecondAssignment, myThirdAssignment, myFourthAssignment];
        window.assignmentArray = assignmentArray;
    if (Array.isArray(assignmentArray)) {
        assignmentArray.forEach(function(value) {
            let subMenuItem = `<a class='second-level-sub-menu-item' href="${value.link}" target="_blank">${value.name}</a>`;
            $(".projects-in-school-container").append(subMenuItem);
        }); 
    } 

    populateSlideShow();
    
    function navMenu () {
      $(".projects-in-school").on({
        click: function() {
          if ($(".projects-in-school-container").hasClass("display-flex")) {
            $(this).find(".projects-in-school-container").removeClass("display-flex").hide();
            $(this).removeClass("active-sub-menu-projects");
            projectsInSchoolNotActive();
            $(this).find("h4 i").removeClass("fa fa-angle-down");
            $(this).find("h4 i").addClass("fa fa-angle-right");
          } else {
            $(this).find(".projects-in-school-container").slideDown().addClass("display-flex");
            $(this).addClass("active-sub-menu-projects");
            projectsInSchoolActive();
            $(this).find("h4 i").removeClass("fa fa-angle-right");
            $(this).find("h4 i").addClass("fa fa-angle-down");
          }  
        }
      });

      $(".menu-click").on("click", function() {
        if ($(".sub-menu").hasClass("let-sub-menu-display-block")) {
          $(".sub-menu").hide().removeClass("let-sub-menu-display-block");
        } else {
          $(".sub-menu").show().addClass("let-sub-menu-display-block");
        }
        if ($(".sub-menu").hasClass("active-sub-menu")) {
          SubMenuNotActive();
        } else {
          SubMenuActive();
        }
      });

      function projectsInSchoolNotActive() {
        $(".my-skills-btn").removeClass("my-skills-position-while-sub-menu-active");
        $(".main-content-section").removeClass("active-margin-top-while-projects-in-school-sub-menu-active");
        $(".nav-right").removeClass("nav-right-position-while-sub-menu-active");
        $(".sub-menu-item").removeClass("active-sub-menu-projects-in-school");
      }
  
      function projectsInSchoolActive() {
        $(".my-skills-btn").addClass("my-skills-position-while-sub-menu-active");
        $(".main-content-section").addClass("active-margin-top-while-projects-in-school-sub-menu-active");
        $(".nav-right").addClass("nav-right-position-while-sub-menu-active");
        $(".sub-menu-item").addClass("active-sub-menu-projects-in-school");
      }
      
      function SubMenuNotActive() {
        $(".sub-menu").removeClass("active-sub-menu");
        $(".projects-in-school").removeClass("active-sub-menu-projects projects-in-school-position");
        $(".my-skills-btn").removeClass("my-skills-position my-skills-position-while-sub-menu-active");
        $(".nav-right").removeClass("nav-right-position nav-right-position-while-sub-menu-active");
        $(".main-content-section").removeClass("sub-menu-active-margin-top active-margin-top-while-projects-in-school-sub-menu-active");
        $(".sub-menu-item").removeClass("active-sub-menu-projects-in-school display-flex");
        $(".projects-in-school-container").hide();
      }

      function SubMenuActive() {
        $(".sub-menu").addClass("active-sub-menu");
        $(".projects-in-school").addClass("projects-in-school-position").show();
        $(".my-skills-btn").addClass("my-skills-position");
        $(".nav-right").addClass("nav-right-position");
        $(".main-content-section").addClass("sub-menu-active-margin-top");
      }
    }
    
    function hamburgerMenu () {
      $(".hamburger-menu").on("click", function() {
        if ($(".nav-items-menu").hasClass("active-hamburger-menu")) {
          $(".nav-items-menu").removeClass("active-hamburger-menu");
          removeHamburgerMenuClasses();
        } else {
          $(".nav-items-menu").addClass("active-hamburger-menu");
          $(".main-content-section").addClass("active-margin-top");
        }
      });
      
      function removeHamburgerMenuClasses() {
        $(".main-content-section").removeClass("active-margin-top sub-menu-active-margin-top active-margin-top-while-projects-in-school-sub-menu-active");
        $(".sub-menu").removeClass("active-sub-menu let-sub-menu-display-block").hide();
        $(".sub-menu-item").removeClass("active-sub-menu-projects-in-school");
        $(".projects-in-school").removeClass("projects-in-school-position active-sub-menu-projects active-sub-menu-projects-in-school").hide();
        $(".projects-in-school-container").removeClass("display-flex").hide();
        $(".nav-right").removeClass("nav-right-position nav-right-position-while-sub-menu-active");
        $(".my-skills-btn").removeClass("my-skills-position my-skills-position-while-sub-menu-active");
      }
    }

    function populateSlideShow() {
      $(".info-container.slide-1 h3").text(assignmentArray[0].name);
      $(".info-container.slide-1 p").text(assignmentArray[0].introText);
      $(".info-container.slide-2 h3").text(assignmentArray[1].name);
      $(".info-container.slide-2 p").text(assignmentArray[1].introText);
      $(".info-container.slide-3 h3").text(assignmentArray[2].name);
      $(".info-container.slide-3 p").text(assignmentArray[2].introText);
    }

});


