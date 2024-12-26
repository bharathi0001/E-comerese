var sidenav = document.querySelector(".side-navbar")
sidenav.Style.display = "none"

function showNavbar()
{
    sidenav.style.left = "0"

}

function closeNavbar()
{
    sidenav.style.left = "-50%"

}