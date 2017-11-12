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
        buttons: [["Post-apocalpytic", "advance(scenario.a)"], ["Corporation", "advance(scenario.a2)"]]
    },
    a: {
        question: "The first thing you register as you regain consciousness is the distant cacophony of sounds. The cadenced ebb and flow of the waves might have been soothing were it not for the shrieks of the birds offshore and the occasional groan of metal. The smell… without a shadow of the doubt you know it’s the beach. Your suspicions are confirmed when you open your eyes. You are lying in the gently sloping dunes of a strip of beach. Behind you is a forest and before you is a scene straight from a dystopian dream: once-magnificent buildings arise from the depths of the ocean, now derelict, the sentinels of a forgotten civilization. Your civilization. Upon further inspection of your surroundings you spot a backpack and beyond it, presumably the body of another man. You decide to investigate the backpack first. Inside the backpack is about a week's worth of rations, a gallon of water, and a first aid kit, among other survival items. You strap the backpack onto your back and decide to investigate the body. As you expected it is another human but… he is breathing. The man is unconscious and is bleeding steadily from a severe looking shoulder wound. God knows what bioforms have already taken residence in it.  What do you do?",
        buttons: [["Help the man- We’re all good as dead. Help the man- We’re all good as dead. Might as well do something useful while it’s still useful to do something.", "advance(scenario.a5)"],
        ["Help the man- He is injured and it seems right. I wouldn’t feel okay leaving him as he is.", "advance(scenario.a5)"]]
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
