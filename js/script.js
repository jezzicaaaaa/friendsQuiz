$(function(){
    $('.quiz').hide();
    $('.home-btn').click(function(){
        $('.home').hide();
        $('.quiz').fadeIn();
    });
});


function submitAnswers(){

    var q1 = document.forms["quizForm"]["question1"].value;
    var q2 = document.forms["quizForm"]["question2"].value;
    var q3 = document.forms["quizForm"]["question3"].value;
    var q4 = document.forms["quizForm"]["question4"].value;
    var q5 = document.forms["quizForm"]["question5"].value;
    var q6 = document.forms["quizForm"]["question6"].value;
    var q7 = document.forms["quizForm"]["question7"].value;
    var q8 = document.forms["quizForm"]["question8"].value;
    var q9 = document.forms["quizForm"]["question9"].value;
    var q10 = document.forms["quizForm"]["question10"].value;
    var q11 = document.forms["quizForm"]["question11"].value;

    //set all to 0
    var rossTotal = 0;
    var rachelTotal = 0;
    var monicaTotal = 0;
    var chandlerTotal = 0;
    var joeyTotal = 0;
    var phoebeTotal = 0;

    //var answers
    var ross = ['a','b','b','a','f','e','e','a','c','e','b'];
    var rachel = ['b','f','c','d','d','a','d','e','a','d','d'];
    var monica = ['b','a','d','b','e','b','f','c','d','c','a'];
    var chandler = ['b','c','f','f','b','c','c','d','f','a','f'];
    var joey = ['b','d','e','e','c','f','a','f','b','b','c'];
    var phoebe = ['b','e','a','c','a','d','b','b','e','f','e'];

    //alert when a question is left blanked
    for(var i= 1; i <= 11; i++){
        if (eval ('q' + i) == null || eval('q' + i) == ''){
            alert("You missed question "+ i);
            return false;
        }
    }



    for(var i = 1; i <= 11; i++){
        if(eval('q' + i) == ross[i - 1]){
            rossTotal++;
        }
        if(eval('q' + i) == rachel[i - 1]){
            rachelTotal++;
        }
        if(eval('q' + i) == monica[i - 1]){
            monicaTotal++;
        }
        if(eval('q' + i) == chandler[i - 1]){
            chandlerTotal++;
        }
        if(eval('q' + i) == joey[i - 1]){
            joeyTotal++;
        }
        if(eval('q' + i) == phoebe[i - 1]){
            phoebeTotal++;
        }

    }
    
    
    alert('ross total is' + rossTotal + 'rachel total is' + rachelTotal);
    return false;

}


