function changeColor() {
    var x = document.getElementById("h5");
    x.style.color = "red";
    var y = document.getElementById("p");
    y.innerHTML = "Did you really think it would be that easy? Dystopias are the embodiment of everything humans don't desire. Good luck. You'll need it.";
    var z = document.getElementById("button");
    var str = "Proceed";
    var result = str.link("Storypage.html");
    z.innerHTML = result;
};
