
var numQues = 4;
var numChoi = 4;
correctAns = 0;
percentage = 0;
var answers = new Array(4);
answers[0] = "Dennis Ritchie";
answers[1] = "High Level";
answers[2] = "Difficult to understand and readability is questionable";
answers[3] = "Human readable like language";
// answers[4] = "doesn't make";
// answers[5] = "seem";
// answers[6] = "don't have";
// answers[7] = "doesn't have";
// answers[8] = "takes";
// answers[9] = "want";
// answers[10] = "comes";
// answers[11] = "doesn't know";
// answers[12] = "tries";
// answers[13] = "play";
// answers[14] = "lasts";
function getScore(form) {

    var score = 0;
    var currElt;
    var currSelection;
    for (i = 0; i < numQues; i++) {
        currElt = i * numChoi;// i = 1    1*4 = 4
        answered = false;
        for (j = 0; j < numChoi; j++)   {
            currSelection = form.elements[currElt + j]; //4 + 1= 5
            if (currSelection.checked) {
                answered = true;
                if (currSelection.value == answers[i]) {
                    score++;
                    break;
                }
            }
        }
        if (answered === false) { alert("Do answer all the questions, Please"); return false; }

    }
    //   form.percentage.value = scoreper + "%";
    //   form.mark.value=score;
    var scoreper = Math.round(score / numQues * 100);
    correctAns = "Total Score: "+score + " out of 10";
    percentage = "Percentage: "+scoreper + "%";
    alert('Please click on "View Results" to check your score!')
}
function showResult(){
    document.getElementById("correctA").innerHTML = correctAns;
    document.getElementById("totalP").innerHTML = percentage;
}
