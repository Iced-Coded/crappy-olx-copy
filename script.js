// Has message been open?
var mesop = false

// Messages
function message() {
    // If message haven't been oppened then
    if (mesop == false) {
        $("#messages").css('display', 'flex')
        $("#m_header").text("Messages")
        mesop = true
        //document.getElementById("heart").setAttribute.d("M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z");
    }
    else {
        console.log("Window is already oppened!")
    }
}

function closemessage() {
// If message have been oppened then
    if (mesop == true) {
        $("#messages").css('display', 'none')
        mesop = false 
    }
    else {
        //I don't know how anybody would press on close the message button if there is no message
        console.log("How did you manage to press on that button????")
    }
}

function fav() {
    // If message haven't been oppened then
    if (mesop == false) {
        $("#messages").css('display', 'flex')
        $("#m_header").text("Favourites")
        mesop = true
    }
    else {
        console.log("Window is already oppened!")
    }
}

function prof() {
    // If message haven't been oppened then
    if (mesop == false) {
        $("#messages").css('display', 'flex')
        $("#m_header").text("My Profile")
        mesop = true
    }
    else {
        console.log("Window is already oppened!")
    }
}

function l() {
    // If message haven't been oppened then
    if (mesop == false) {
        $("#messages").css('display', 'flex')
        $("#m_header").text("Language")
        mesop = true
    }
    else {
        console.log("Window is already oppened!")
    }
}

function ad() {
    // If message haven't been oppened then
    if (mesop == false) {
        $("#messages").css('display', 'flex')
        $("#m_header").text("Add")
        mesop = true
    }
    else {
        console.log("Window is already oppened!")
    }
}