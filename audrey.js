const audrey = document.getElementById("audrey")

/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/

document.addEventListener("scroll", function () {
    let x = window.scrollY;
    audrey.style.width = `${x/3}px`;
    audrey.style.minWidth = "50px";
    audrey.style.height = `${x/4}px`;
    audrey.style.minHeight = "100px";
});

    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */

    

    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */
