window.onload = function() {
    var navBar = document.getElementById("navMenu");
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.innerHTML = "Location";
    a.href = "Map.html";
    li.id = "Location";
    li.appendChild(a);
    navBar.appendChild(li);
    
    if (document.title === "Location") {
        li.classList.add("uk-active");
    }
}