var slideIndex = 0;
carousel();


function carousel() {
    let slide = document.getElementsByClassName("slide");
    
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slide.length) {
        slideIndex = 1
    }

    slide[slideIndex-1].style.display = "flex";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

function slidein(){
    let ticketBox = document.getElementById("ticket-box");
    ticketBox.style.display = 'block'
}

function closeBox(){
    let ticketBox = document.getElementById("ticket-box");
    ticketBox.style.display = 'none'
    console.log(ticketBox)
}
