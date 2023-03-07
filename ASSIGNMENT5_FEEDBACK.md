Hi Max!

Looks great! A heap of JS and it all looks and works perfectly!

As you can see below I've got almost nothing to say besides: well done, Välgokänt!

*************************************

CRITERIA FOR GRADING

*************************************

GODKÄNT:
-------------------------------------

HTML
  index.html at root level for publishing on github pages ✅

  Multiple pages ✅

  Header, footer and navigational menu on all main pages (where possible) ✅

  H1 on every page ✅

  Mail to Contact form ✅

  Links to specific projects opening in new windows ✅

CSS
  External CSS ✅

  General style sheets for common elements ✅
    A few dpulicate elements - eg h1s in media queries, but well done.

  Typography style sheet ✅

  Locally installed font ✅
  
  Separate stylesheets for each page ✅

  RWD
    Desktop ✅
    Mobile ✅

JS
  jQuery plugin (such as a carousel) ✅

  JS/jQuery multi level menu (min 2 levels) ✅ 
    Probably could have targeted .menu-item or somesuch rather tan each individual link when activating and deactivating
  

-------------------------------------

VÄLGODKÄNT:
-------------------------------------

  Project organisation ✅
    Excellent

  CSS prefixing where required ❌ ✅
    You got some, but things like:

    .programming-languages {
      align-items: center;
      flex-direction: column;
      justify-content: center;
    }

    all should be prefixed. Use a tool like 

  jQuery effects ✅

    /* I tried to write the code below like this: 
       $(this).find(".project-background", ".project-intro-text", ".project-img").fadeIn(100).addClass("active");
       ww3schools says it is correct, but why does it not work? 
    */

    I think it's not working  because you are selecting one thing three times due to the "" separating the classes. Try this:

    $(this).find(".project-background, .project-intro-text, .project-img").fadeIn(500).addClass("active");
            
  Semantic element naming ✅

  Code style Very, very good!
   HTML: ✅
   CSS: ✅
   JS: ✅ 