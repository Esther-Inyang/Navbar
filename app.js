// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

//get classes
const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

//TOGGLE NAV LINKS - ON SMALLER SCREENS
navToggle.addEventListener("click", function(){
            /*check links classes*/
    //console.log(links.classList)

            /*check if the link contains the classname*/
    //console.log(links.classList.contains("random"));
    //console.log(links.classList.contains("links"));

    //toggle
    // if(links.classList.contains("show-links")){
    //     links.classList.remove("show-links")
    // } else {
    //     links.classList.add("show-links")
    // }

            /* OR */
    links.classList.toggle("show-links")
})


