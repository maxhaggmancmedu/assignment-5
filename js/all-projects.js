$(function () {
    populateAllProjects();

    function populateAllProjects() {
        assignmentArray.forEach(value => {
            let projectItem = document.createElement("a");
            projectItem.classList.add("project-item");
            projectItem.href = value.link;
            projectItem.setAttribute("target", "_blank");
            $(".projects-container").append(projectItem);

            let projectBackground = document.createElement("div");
            projectBackground.classList.add("project-background");
            $(projectItem).append(projectBackground);

            let projectImg = document.createElement("img");
            projectImg.classList.add("project-img");
            projectImg.src = "../images/backgrounds/" + value.thumbnail;
            $(projectItem).append(projectImg);

            let projectInfo = document.createElement("div");
            projectInfo.classList.add("project-info");
            $(projectItem).append(projectInfo);

            let projectName = document.createElement("div");
            projectName.classList.add("project-name");
            projectName.textContent = value.name;
            $(projectInfo).append(projectName);

            let projectIntroText = document.createElement("div");
            projectIntroText.classList.add("project-intro-text");
            projectIntroText.textContent = value.introText;
            $(projectInfo).append(projectIntroText);
            
            let projectButton = `<a class='project-button' href="${value.link}" target="_blank">See more</a>`;
            $(projectInfo).append(projectButton);
        });
    }

    $(".project-item").on({
        mouseenter: function () {
            /* I tried to write the code below like this: 
            $(this).find(".project-background", ".project-intro-text", ".project-img").fadeIn(100).addClass("active");
            ww3schools says it is correct, but why does it not work? 
            */
            $(this).find(".project-background").fadeIn(100).addClass("active");
            $(this).find(".project-name").addClass("add-white-color");
            $(this).find(".project-intro-text").fadeIn(100).addClass("active");
            $(this).find(".project-button").fadeIn(100).addClass("active");
            $(this).find(".project-img").addClass("remove-border-radius");
            
        },
        mouseleave: function () {
            // I also tried the same thing for these ones with no success
            $(this).find(".project-background").fadeOut(0).removeClass("active");
            $(this).find(".project-name").removeClass("add-white-color");
            $(this).find(".project-intro-text").fadeOut(0).removeClass("active");
            $(this).find(".project-button").fadeOut(0).removeClass("active");
            $(this).find(".project-img").removeClass("remove-border-radius");
        }
    });
});