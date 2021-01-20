$(function() {
//This JQ script is to prevent accordion drop downs with large amount of text from causing the page to bounce around.
    $(".cardLink").click(function()  { //Add click event listener to all elements with class "cardLink", which are only <a>s. Since the jumbotron also uses an accordion which has an <a> and there are other <a>s, can't just use the element <a> as the JQ selector.    
        let element = $(this); // Sets the varible "element" to the element that was just clicked on. Can't be inside the setTimeout function because.......(I don't know how "this" works, so I'm guessing putting the line inside the setTimeout function causes it to grab something unintended).
        setTimeout(function () { //SetTimeout allows this function to run 500ms after click, which is after the Bootstrap accordion expand/collapse animation is complete.  Have to wait until the Bootstrap accordion expand/collapse animation is complete to make sure the clicked element is in it's final position.  Could have used shown.bs.collapse event provided by Bootstrap, but it didn't work.
            let position = element.offset().top; // Sets the variable "position" to the element's top y-coordinate relative to the document.
            $("html").animate({scrollTop: position - 170}, 1000); //Animates the entire html page over 1000ms to set the top of the scroll bar to the y-coordinate held by variable "position" and moved down by 170 (-170 is so the navBar doesn't cover things up).
            }
            , 500)
    });

    $("#welcomeModal").modal('show'); //Automatically show welcomeModal on Home page when the page loads
})

