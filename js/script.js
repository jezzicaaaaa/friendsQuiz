$(function(){
    $('.quiz').hide();
    $('.finalResults').hide();
    $('.home-btn').click(function(){
        $('.home').hide();
        $('.quiz').fadeIn();
        $('form').on('submit', function(e){
            e.preventDefault();
            submitAnswers();
        });
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
    


    var rossFinal = document.getElementById('rossResult');

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
    
    function finalResult(){
        $('.finalResults').show();
        var answer = Math.max(rossTotal, rachelTotal, monicaTotal, chandlerTotal, joeyTotal, phoebeTotal);
        console.log(answer);
        if( answer == rossTotal){
            $('#phoebeResult').hide();
            $('#rossResult').show();
            $('#rachelResult').hide();
            $('#monicaResult').hide();
            $('#chandlerResult').hide();
            $('#joeyResult').hide();

        }else if( answer == rachelTotal){
            $('#phoebeResult').hide();
            $('#rossResult').hide();
            $('#rachelResult').fadeIn();
            $('#monicaResult').hide();
            $('#chandlerResult').hide();
            $('#joeyResult').hide();

        }else if( answer == monicaTotal){
            $('#phoebeResult').hide();
            $('#rossResult').hide();
            $('#rachelResult').hide();
            $('#monicaResult').fadeIn();
            $('#chandlerResult').hide();
            $('#joeyResult').hide();

        }else if( answer == chandlerTotal){
            $('#phoebeResult').hide();
            $('#rossResult').hide();
            $('#rachelResult').hide();
            $('#monicaResult').hide();
            $('#chandlerResult').fadeIn();
            $('#joeyResult').hide();

        }else if( answer == joeyTotal){
            $('#phoebeResult').hide();
            $('#rossResult').hide();
            $('#rachelResult').hide();
            $('#monicaResult').hide();
            $('#chandlerResult').hide();
            $('#joeyResult').fadeIn();

        }else if( answer == phoebeTotal){
            $('#phoebeResult').fadeIn();
            $('#rossResult').hide();
            $('#rachelResult').hide();
            $('#monicaResult').hide();
            $('#chandlerResult').hide();
            $('#joeyResult').hide();

        }
    }
    finalResult();

}
            // $('#rossResult).fadeIn();
            //             $('#rachelResult').fadeIn();
            //                        $('#monicaResult').fadeIn();
            //                                    $('#chandlerResult').fadeIn();
            //                                                $('#joeyResult').fadeIn();
            //                                                            