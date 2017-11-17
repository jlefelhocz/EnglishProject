var score = 0;
final = 0;

var eyecolor = "";
var height = "";
var haircolor = "";
var hairtype = "";

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

function changeScore(add) {
    score += add
}

function start(s) {
    eyecolor = prompt("What is your eye color?")
    height = prompt("What is your height?")
    haircolor = prompt("What is your hair color?")
    hairtype = prompt("What is your hair type?")
    advance(s)

}

function advance(s) {
    changeQuestion(s.question)
    changeButtons(s.buttons)
    changeScore(s.add)
    checkScore()

};

function checkScore() {
    final = parseInt((score*100)/30, 10);
}

function finalPage() {
    checkScore()
    var score = document.getElementById("score");
    score.innerHTML = "Your Crake Score is " + final + "%";
    var question = document.getElementById("question");
    if (final > 60) {
        question.innerHTML = "You bust into a compound home, breathing heavily from your ordeal and labored sprinting. You hastily crash through the house trying to find the bathroom, not caring if you make a ruckus. You finally find it and stumble inside, raiding the medicine cabinet in the same movement. Nothing. Frustrated you pound the counter with your bleeding hands. The bathroom mirror is heavily cracked, but you can still make out your image in the shards. Well, you think it is your image. You see someone that is tall, with straight brown-black hair. Muted, dark clothing, devoid of any decoration save some blood and dirt. Slowly, you see your eyes change from " + eyecolor + " to bright green eyes. Yes, your journey presented you with many conflicts with many choices in overcoming them. Overwhelmingly you have chosen the path of self-presentation and self interest. Perhaps you looked out for others whenever the mood struck, but for the most part you put your survival first as any other rational human would. In trying times, you felt little empathy for the hardships endured by others, and if push came to shove you did not hesitate to do what you must. Killing is no matter when it is called for. Yes without a doubt, you are Crake.";
    } else {
        question.innerHTML = "You bust into a compound home, breathing heavily from your ordeal and labored sprinting. You hastily crash through the house trying to find the bathroom, not caring if you make a ruckus. You finally find it and stumble inside, raiding the medicine cabinet in the same movement. Nothing. Frustrated you pound the counter with your bleeding hands. The bathroom mirror is heavily cracked, but you can still make out your image in the shards. You are " + height + ", with " + hairtype + " " + haircolor + " hair and " + eyecolor + " eyes. Yes, your journey presented you with many conflicts, and you had many choice to choose from in overcoming them. Overwhelmingly you have chosen the path of altruism and selflessness. You constantly looked out for others, always making an effort to make the ‘right’ choice. Even in trying times, you demonstrated appreciable empathy for others, even those who were your enemies and tried to harm you. Taking a life should be avoided whenever possible- it is only natural to respect other lives as if it were your own. Yes, you managed to hold onto your more positive ‘human’ traits, and you have traversed the wastelands relatively unchanged.";
    }
    var buttonBox = document.getElementById("buttonBox");
    buttonBox.innerHTML = "<a href='rationale.html'><button> continue </button></a>";


}

scenario = {}
var scenario = {
    a: {
        question: "The first thing you register as you regain consciousness is the distant cacophony of sounds. The cadenced ebb and flow of the waves might have been soothing were it not for the shrieks of the birds offshore and the occasional groan of metal. The smell… without a shadow of the doubt you know it’s the beach. Your suspicions are confirmed when you open your eyes. You are lying in the gently sloping dunes of a strip of beach. Behind you is a forest and before you is a scene straight from a dystopian dream: once-magnificent buildings arise from the depths of the ocean, now derelict, the sentinels of a forgotten civilization. Your civilization. Upon further inspection of your surroundings you spot a backpack and beyond it, presumably the body of another man. You decide to investigate the backpack first. Inside the backpack is about a week's worth of rations, a gallon of water, and a first aid kit, among other survival items. You strap the backpack onto your back and decide to investigate the body. As you expected it is another human but… he is breathing. The man is unconscious and is bleeding steadily from a severe looking shoulder wound. God knows what bioforms have already taken residence in it.  What do you do?",
        buttons: [["Help the man- We’re all good as dead. Might as well do something useful while it’s still useful to do something.", "advance(scenario.a5)"],
        ["Help the man- He is injured and it seems right. I wouldn’t feel okay leaving him as he is.", "advance(scenario.a5)"]],
        add: 0
    },
    a5: {
        question: "You decide to help the man. While you are by no means capable of fixing his wound with the supplies you have, you do what you can to clean it up. He shows no signs of waking anytime soon, so you decide to explore your surroundings a bit more. Where do you go?",
        buttons: [["The forest. Perhaps I can find food and water there.", "advance(scenario.a8)"],
        ["Down the beach. There ought to be some useful flotsam along the shoreline.", "advance(scenario.a9)"]],
        add: 0
    },
    a8: {
        question: "You decide to look for supplies in the forest first. Wary of getting lost in the thickets, you make sure not to travel too far from your ‘campsite’. While combing the area you find a few berry bushes. Probably edible right? Your hunger is less sharp than before, but far from sated. As you are about the give up the search, you spot another backpack lying next to woman who is most certainly deceased. Oh the fruits of the generous apocalypse! In the backpack is a myriad of useless items; however at the bottom there is a spraygun with half a magazine of virtual bullets. Sweet! You decide to head back to your ‘campsite’.",
        buttons: [["Continue", "advance(scenario.a10)"]],
        add: 0
    },
    a9: {
        question: "You decide to scavenge along the shoreline first. Most of the debris you find is useless, rusted junk from a recently forgotten era. “A plastic BlyssPluss container, empty; a ChickieNobs Bucket O’Nubbins, ditto. A computer mouse, or the busted remains of one, with a long wiry tail” (Atwood 7). After a mere mile of walking or so you happen upon a combat knife. Although it is rusted and has a chipped handle, it appears it will function quite nicely. Satisfied, you decide to head back to your ‘campsite’.",
        buttons: [["Continue", "advance(scenario.a11)"]],
        add: 0
    },
    a10: {
        question: "Having made it back to camp, you decide to check along the shoreline for supplies before sundown. Most of the debris you find is useless, rusted junk from a recently forgotten era. “A plastic BlyssPluss container, empty; a ChickieNobs Bucket O’Nubbins, ditto. A computer mouse, or the busted remains of one, with a long wiry tail” (Atwood 7). After a mere mile of walking or so you happen upon a combat knife. Although it is rusted and has a chipped handle, it appears it will function quite nicely. Satisfied, you decide to head back to camp as the sun begins to dip below the horizon.",
        buttons: [["Continue", "advance(scenario.a12)"]],
        add: 0
    },
    a11: {
        question: "The sun is getting lower in the sky. Wary of getting lost in the thickets, especially at night, you make sure not to travel too far from your ‘campsite’. While combing the area you find a few berry bushes. Probably edible right? Your hunger is less sharp than before, but far from sated. As you are about the give up the search, you spot another backpack lying next to woman who is most certainly deceased. Oh the fruits of the generous apocalypse! In the backpack is a myriad of useless items; however at the bottom there is a spraygun with half a magazine of virtual bullets. Sweet! Having found more than you bargained for, you decide to head back to camp.",
        buttons: [["Continue", "advance(scenario.a12)"]],
        add: 0
    },
    a12: {
        question: "You make it back to camp just as dusk is setting in. You rummage through your supplies and find a CozeeYoo automatic fire-starting kit. Nifty. You light a fire to warm yourself and your unconscious companion. The man is still breathing shallowly, but it seems that the bandages have stopped the bleeding. You briefly feel proud of your actions but realize that they may come at a great cost in the future. As you begin eating your dinner, you wonder about the man’s health. He’s probably dehydrated from this ordeal… Do you take the time rehydrate him?",
        buttons: [["Yes, I’m in better shape than him. It’s the least I can do.", "advance(scenario.a16)"],
        ["No, that’s so inefficient. Do you know how long dribbling water into someone's mouth takes? He can drink when he wakes up.", "advance(scenario.a17)"],
        ["No, I’m not even sure he’s going to survive. I’m not wasting anymore supplies on him until he shows some improvement.", "advance(scenario.a17b)"]],
        add: 0
    },
    a16: {
        question: "You take some water from your backpack and use the lid to dribble water into the man’s mouth. It’s painstakingly slow, but he drinks the liquid without incidence. You feel exhausted from your day’s labor and fall asleep.",
        buttons: [["Continue", "advance(scenario.a18)"]],
        //not like Crake
        add: 0
    },
    a17b: {
        question: "You decide not to give the man water. As of now, it’s simply not worth it. Honestly, it was the only rational thing to do. Exhausted from your day’s labor, you fall asleep.",
        buttons: [["Continue", "advance(scenario.a18)"]],
        add: 5
    },
    a17: {
        question: "You decide not to give the man water. As of now, it’s simply not worth it. Honestly, it was the only rational thing to do. Exhausted from your day’s labor, you fall asleep.",
        buttons: [["Continue", "advance(scenario.a18)"]],
        add: 2
    },
    a18: {
        question: "You wake the next day shortly after dawn. To your surprise, you find that the unconscious man is now awake. “Thank you for taking care of my wounds. I fear I do not have long however.” He pauses with a contorted thinking face, estimating how soon it will be until the bioforms melt him from the inside-out. “There is no time to lose,” he proclaims. “I thank you for your kindness stranger but I must go now. I must go see what has become of my family. Only then will I be at ease.” He gets up painfully and turns to leave. “Wait!..” you shout.",
        buttons: [["It’s dangerous to go alone! Take this.” *give him the knife*", "advance(scenario.a23)"],
        ["You’re injured- there’s no way you’ll survive on your own! I’ll go with you.", "advance(scenario.a23)"],
        ["Don’t delude yourself. Who knows what’s waiting for you out there! Leaving now is suicide.", "advance(scenario.a24a)"],
        ["I need you to stick around. Your family is dead for sure. Trust me it’s pointless to look for them.", "advance(scenario.a24)"]],
        add: 0
    },
    a23: {
        question: "The man smiles deeply at your offer. “I am in debt of your boundless gratitude. However, I wish to cause you no more trouble. Thank you again for your kindness.” With that the man walks into the forest and is soon out of view.",
        buttons: [["Continue", "advance(scenario.a25)"]],
        //not like Crake
        add: 0
    },
    a24a: {
        question: "The man frowns sharply at your words. “You may speak the truth, but this is something I need to find out for myself. Is there nothing that you hold dear?” With those parting remarks the man leaves your presence and disappears into the forest.",
        buttons: [["Continue", "advance(scenario.a25)"]],
        add: 2
    },
    a24: {
        question: "The man frowns sharply at your words. “You may speak the truth, but this is something I need to find out for myself. Is there nothing that you hold dear?” With those parting remarks the man leaves your presence and disappears into the forest.",
        buttons: [["Continue", "advance(scenario.a25)"]],
        add: 5
    },
    a25: {
        question: "Hours pass as you lie and gaze at the sky. Who was that guy anyways? Where was he headed? Lost and alone, you ponder your next course of action. What do you decide to do?",
        buttons: [["“I should follow that man. Perhaps I can catch up to him and help him find his family, or what’s left of them atleast. I don’t want to be alone.", "advance(scenario.a29)"],
        ["I’m going to head inland. Wherever that man is going… there must be supplies. That’s my best bet at survival.", "advance(scenario.a30)"],
        ["Anywhere is as good as here. I might as well just pick a direction and walk.", "advance(scenario.a30b)"]],
        add: 0
    },
    a29: {
        question: "You decide to follow the man in hopes of catching up and finding out more about his objective. You pack your supplies and depart your meager campsite.",
        buttons: [["Continue", "advance(scenario.a31)"]],
        add: 0
    },
    a30: {
        question: "Without a clue as to what to do next, you decide that heading inland is your best bet. That man seemed to know where he is going, and it’s likely that he’s heading to a place where there might be supplies. You pack up your supplies and head into the woods.",
        buttons: [["Continue", "advance(scenario.a31)"]],
        add: 5
    },
    a30b: {
        question: "Without a clue as to what to do next, you decide that heading inland is your best bet. That man seemed to know where he is going, and it’s likely that he’s heading to a place where there might be supplies. You pack up your supplies and head into the woods.",
        buttons: [["Continue", "advance(scenario.a31)"]],
        add: 2
    },
    a31: {
        question: "You journey into the woods, tracking the footprints of the mysterious man. The weather is cool and you make good progress. After a few hours of travel you hear a strange anguished sort of oinking and rustling in the bushes. You decide to uncover the source of the noise. You make your way through the underbrush to find an injured pigoon! One of its hoofed legs is snared in a Transparo-trap. The clever pigoon has nearly shimmied its way out the trap, and it is enraged. What do you do?",
        buttons: [["Kill it. That’s my ticket to bacon-town and nothing on this planet can stop me from boarding. It’s just a pig after all. Well sort of.", "advance(scenario.a35)"],
        ["Flee. I don’t want to mess with that pigoon. Something could go wrong and I’m not risking it.", "advance(scenario.a36a)"],
        ["Kill it? It’s just trying to survive like I am. Plus I’m not starving yet. I can spare its life and scavenge for supplies in a nearby town.", "advance(scenario.a36)"]],
        add: 0
    },
    a35: {
        question: "You walk over to the thrashing pigoon. It eyes you down as you deftly move in and cut it down with your combat knife. No sense wasting a bullet when you have to cut up the meat anyway! You pull out your CozeeYoo fire starter and get to work preparing the meat. After 15 minutes of work and cooking you get to taste the “fruits of your effort”. Sweet, delicious bacon.",
        buttons: [["Continue", "advance(scenario.a37)"]],
        add: 3
    },
    a36a: {
        question: "You decide not to kill the pigoon and you flee before it gets loose and goes on a rampage. You feel a pang of regret as you imagine the taste of that sweet sweet bacon. You plod onwards, the thoughts of past foods filling your mind.",
        buttons: [["Continue", "advance(scenario.a37)"]],
        //not like Crake
        add: 5
    },
    a36: {
        question: "You decide not to kill the pigoon and you flee before it gets loose and goes on a rampage. You feel a pang of regret as you imagine the taste of that sweet sweet bacon. You plod onwards, the thoughts of past foods filling your mind.",
        buttons: [["Continue", "advance(scenario.a37)"]],
        //not like Crake
        add: 0
    },
    a37: {
        question: "The sun is steadily descending as you finally make your way out of the forest. In the distance you see a compound! Overjoyed at the prospect of shelter, water, and food among other goodies, you start walking energetically towards the ramparts. You stop dead in your tracks when you near the gates. A cloaked person is standing inside the security checkpoint,a rifle slung over their back, which, fortunately for you is pointed away you. That could change in an instant though. Quick! What do you do?",
        buttons: [["Shoot first ask later. These lands are lawless and there’s no sense in risking my life for a stranger. This person would do the same in my position- nothing personal. Plus that rifle would be a great addition for protection.", "advance(scenario.a40)"],
        ["Aim your gun and tell them to turn around. You will lose the advantage if things go south, but just maybe you can avoid more needless bloodshed.", "advance(scenario.a41)"]],
        add: 0
    },
    a40: {
        question: "You whip your spraygun up to aim and fire immediately. The virtual bullet travels unimpeded through the window pane and connect with the figure. With a crash, the cloaked figure falls to the ground. You make your way into the security checkpoint to check the body but trip over a concealed tripwire as you enter the doorway. You land hard on the pieces of the plastic mannequin as the door slams shut, locking into place. You’ve been duped!",
        buttons: [["Continue", "advance(scenario.a46)"]],
        add: 0
    },
    a41: {
        question: "You calmly command the figure to turn around. It does not move. What do you do?",
        buttons: [["Pull the trigger. They wasted their chance.", "advance(scenario.a44)"],
        ["Something’s not adding up. I’m going to investigate", "advance(scenario.a45)"]],
        //not like Crake
        add: 5
    },
    a44: {
        question: "You pull the trigger. The virtual bullet travels unimpeded through the window pane and connect with the figure. With a crash, the cloaked figure falls to the ground. You make your way into the security checkpoint to check the body but trip over a concealed tripwire as you enter the doorway. You land hard on the pieces of the plastic mannequin as the door slams shut, locking into place. You’ve been duped!",
        buttons: [["Continue", "advance(scenario.a46)"]],
        add: 5
    },
    a45: {
        question: "Obviously something is not adding up here. You cautiously make your way into the pill-box with your gun trained on the individual. As you approach the doorway you can clearly see that this figure is nonhuman. “What the…?” As you step over the threshold you trip on a concealed tripwire and crash into the mannequin. It’s a trap!",
        buttons: [["Continue", "advance(scenario.a47)"]],
        //not like Crake
        add: 0
    },
    a46: {
        question: "Fear lances through your heart as you hear nefarious laughter coming from outside. A severely disfigured man covered in tattered, blood-stained clothes comes into view. You immediately recognize him as a case of advance bioform infestation. Obviously this guy is off his rocker. “OOOOoooh another little piggy in the pen. Mmmmm tear the flesh, salt the wound!” He pulls out a butcher’s knife and grins menacingly before hopping up the side of the poll-box. A hatch swings open in the roof and the head of the maniac pokes in, smiling malevolently. What do you do?",
        buttons: [["I shot the unassuming mannequin in the back- I’m sure as hell going to shoot this guy! *Aim and shoot*", "advance(scenario.a51)"],
        ["Screw that! I’m getting out of here!", "advance(scenario.a52)"]],
        add: 0

    },
    a47: {
        question: "Fear lances through your heart as you hear nefarious laughter coming from outside. A severely disfigured man covered in tattered, blood-stained clothes comes into view. You immediately recognize him as a case of advance bioform infestation. Obviously this guy is off his rocker. “OOOOoooh another little piggy in the pen. Mmmmm tear the flesh, salt the wound!” He pulls out a butcher’s knife and grins menacingly before hopping up the side of the poll-box. A hatch swings open in the roof and the head of the maniac pokes in, smiling malevolently. What do you do?",
        buttons: [["I didn’t shoot the first time around, but there’s a hell of a lot more motive here! *Aim and shoot*", "advance(scenario.a51)"],
        ["Screw that! I’m getting out of here!", "advance(scenario.a52)"]],
        add: 0
    },
    a51: {
        question: "You aim at the head and fire wildly. Luckily one of your shots connects, and the headless man tumbles into the room. It was probably for the best anyways. Disgusted you use the inside desk to hop up to the hatch and climb out. Damn! You slice your hands open on the edges of the hole as you climb out. The lunatic trapped that with razor blades. You curse the now deceased man and run deeper into the compound, hoping to find some medical equipment. If only you had not used it on that stranger at the beginning of your journey",
        buttons: [["Continue", "finalPage()"]],
        add: 0
    },
    a52: {
        question: "You panic as the man moves to drop into the room and wildly stab at the window pane. It shatters partially from your frenzied barrage. You quickly throw yourself through the busted pane and sprint away, ignoring your injuries from the glass shards. You hear the angry howling of the diseased man grow distant as you sprint deeper into the compound hoping to find some medical equipment. If only you had not used it on that stranger at the beginning of your journey.",
        buttons: [["Continue", "finalPage()"]],
        add: 0
    }

};
