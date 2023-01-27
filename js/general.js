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

    populateSlideShow((".info-container.slide-1 h3"), (assignmentArray[0].name));
    populateSlideShow((".info-container.slide-1 p"), (assignmentArray[0].introText));
    populateSlideShow((".info-container.slide-2 h3"), (assignmentArray[1].name));
    populateSlideShow((".info-container.slide-2 p"), (assignmentArray[1].introText));
    populateSlideShow((".info-container.slide-3 h3"), (assignmentArray[2].name));
    populateSlideShow((".info-container.slide-3 p"), (assignmentArray[2].introText));
    

    function populateSlideShow(div, value) {
      $(div).text(value);
    }
    
    function navMenu () {
      $(".projects-in-school").on({
        click: function() {
          if ($(".projects-in-school-container").hasClass("display-flex")) {
            $(this).find(".projects-in-school-container").removeClass("display-flex").hide();
            $(this).removeClass("active-sub-menu-projects");

            SubMenuNotActive((".my-skills-btn"), ("my-skills-position-while-sub-menu-active"));
            SubMenuNotActive((".main-content-section"), ("active-margin-top-while-projects-in-school-sub-menu-active"));
            SubMenuNotActive((".nav-right"), ("nav-right-position-while-sub-menu-active"));
            SubMenuNotActive((".sub-menu-item"), ("active-sub-menu-projects-in-school"));

            SubMenuNotActive(("h4 i"), ("fa fa-angle-down"));
            SubMenuActive(("h4 i"), ("fa fa-angle-right"));
          } else {
            $(this).find(".projects-in-school-container").slideDown().addClass("display-flex");
            $(this).addClass("active-sub-menu-projects");

            SubMenuActive((".my-skills-btn"), ("my-skills-position-while-sub-menu-active"));
            SubMenuActive((".main-content-section"), ("active-margin-top-while-projects-in-school-sub-menu-active"));
            SubMenuActive((".nav-right"), ("nav-right-position-while-sub-menu-active"));
            SubMenuActive((".sub-menu-item"), ("active-sub-menu-projects-in-school"));

            SubMenuNotActive(("h4 i"), ("fa fa-angle-right"));
            SubMenuActive(("h4 i"), ("fa fa-angle-down"));
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
          SubMenuNotActive((".sub-menu"), ("active-sub-menu"));
          SubMenuNotActive((".projects-in-school"), ("active-sub-menu-projects projects-in-school-position"));
          SubMenuNotActive((".my-skills-btn"), ("my-skills-position my-skills-position-while-sub-menu-active"));
          SubMenuNotActive((".nav-right"), ("nav-right-position nav-right-position-while-sub-menu-active"));
          SubMenuNotActive((".main-content-section"), ("sub-menu-active-margin-top active-margin-top-while-projects-in-school-sub-menu-active"));
          SubMenuNotActive((".sub-menu-item"), ("active-sub-menu-projects-in-school display-flex"));

          divHide(".projects-in-school-container");
        } else {
          SubMenuActive((".sub-menu"), ("active-sub-menu"));
          SubMenuActive((".projects-in-school"), ("projects-in-school-position"));
          $(".projects-in-school").show();
          SubMenuActive((".my-skills-btn"), ("my-skills-position"));
          SubMenuActive((".nav-right"), ("nav-right-position"));
          SubMenuActive((".main-content-section"), ("sub-menu-active-margin-top"));
        }
      });
    }

    function hamburgerMenu () {
      $(".hamburger-menu").on("click", function() {
        if ($(".nav-items-menu").hasClass("active-hamburger-menu")) {
          SubMenuNotActive((".nav-items-menu"), ("active-hamburger-menu"));
          SubMenuNotActive((".main-content-section"), ("active-margin-top sub-menu-active-margin-top active-margin-top-while-projects-in-school-sub-menu-active"));
          SubMenuNotActive((".sub-menu"), ("active-sub-menu let-sub-menu-display-block"));
          SubMenuNotActive((".sub-menu-item"), ("active-sub-menu-projects-in-school"));
          SubMenuNotActive((".projects-in-school"), ("projects-in-school-position active-sub-menu-projects active-sub-menu-projects-in-school"));
          SubMenuNotActive((".projects-in-school-container"), ("display-flex"));
          SubMenuNotActive((".nav-right"), ("nav-right-position nav-right-position-while-sub-menu-active"));
          SubMenuNotActive((".my-skills-btn"), ("my-skills-position my-skills-position-while-sub-menu-active"));

          divHide(".sub-menu");
          divHide(".projects-in-school");
          divHide(".projects-in-school-container");
          
        } else {
          SubMenuActive((".nav-items-menu"), ("active-hamburger-menu"));
          SubMenuActive((".main-content-section"), ("active-margin-top"));
        }
      }); 
    }

    function SubMenuNotActive(div, divRemovedClass) {
      $(div).removeClass(divRemovedClass);
    }

    function SubMenuActive(div, divAddedClass) {
      $(div).addClass(divAddedClass);
    }

    function divHide(div) {
      $(div).hide();
    }
});


