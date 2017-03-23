

$(document).ready(function() {
            $('.q').hide();
            $('.end').hide();

          
            var count = 90;
            $(".timerbutton").on("click", function() {
                var token;
                counter = setInterval(minusSec, 1000);
                $('.q').show();
                $('#startpage').hide();
                $('.end').hide();

            });

            function minusSec() {


                count--;
                $("#num").html(count);

                if (count === 0) {
                    clearInterval(counter);
                    $('.q').hide()


                    $('.timer').hide();
                    $('#startpage').hide();
                    $('.end').show();
                    correctAnswers = $(':radio[class=true]:checked').length
                    incorrectAnswers = $(':radio[class=false]:checked').length
                    unAnswered = 8 - correctAnswers - incorrectAnswers;
                    $(".trues").html(correctAnswers);
                    $(".falses").html(incorrectAnswers);
                    $(".Unanswered").html(unAnswered);

                };
            };

            $QuestionNum = 1;
            $radionum = 1;

            
            var correctAnswers;
            var incorrectAnswers;
            var unAnswered;

            $("#done").on("click", function() {
                $('.q').hide();
                $('.timer').hide();
                $('#startpage').hide();
                $('.end').show();
                correctAnswers = $(':radio[class=true]:checked').length
                incorrectAnswers = $(':radio[class=false]:checked').length
                unAnswered = 8 - correctAnswers - incorrectAnswers;
                $(".trues").html(correctAnswers);
                $(".falses").html(incorrectAnswers);
                $(".Unanswered").html(unAnswered);
                
            });



           


//function timer(){
		//count--;
		//if(count == 0){

			//	clearInterval(counter);
	//	}
//document.getElementById("num").innerHTML = count;
//}
//})







//$('#timer') .on('click', function(event){
		
		
		
		



});



