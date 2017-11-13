function changeColor() {
    var x = document.getElementById("h5");
    x.style.color = "red";
    x.innerHTML = "Welcome to Dystopia."
    var y = document.getElementById("p");
    y.innerHTML = "Did you really think it would be that easy? Utopia by definition, does not exist. Whenever people try to make Utopia, they end up with a dystopia. The following text game is based after Margaret Atwood's Novel, <i>Oryx and Crake</i>. The goal of this game is to survive Dystopia. Answer the questions as accurately as possible to your own beliefs and values, but remember your survival is dependent on your choices. Consider all possible options thoroughly before making a decision. Good luck. You'll need it.";
    var z = document.getElementById("button");
    var str = "Proceed";
    var result = str.link("Storypage.html");
    z.innerHTML = result;
};
