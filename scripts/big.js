function addTitle() {
    var x = document.getElementById("question");
    x.innerHTML = "Hey";
};

function changeQuestion(words) {
    var question = document.getElementById("question");
    question.innerHTML = "";
    question.innerHTML += words;
};

function changeButtons(buttons) {
    var buttonBox = document.getElementById("buttonBox");
    buttonBox.innerHTML = "";
    for (var i = 0; i < buttons.length; i++) {
        buttonBox.innerHTML += "<button onClick=" + buttons[i][1] + ">" + buttons[i][0] + "</button>";
    };
};

function advance(s) {
    changeQuestion(s.question)
    changeButtons(s.buttons)
};

scenario = {}
var scenario = {
    zero: {
        question: "Which dystopia?",
        buttons: [["Post-apocalpytic", "advance(scenario.a1)"], ["Corporation", "advance(scenario.a2)"]]
    },
    a1: {
        question: "HAHA Post what?",
        buttons: [["Post-apocalpytic", "advance(scenario.a1)"], ["Corporation", "advance(scenario.a2)"]]
    },
    a2: {
        question: "Corporations suck",
        buttons: [["Post-apocalpytic", "advance(scenario.a1)"], ["Corporation", "advance(scenario.a2)"]]
    }

};
