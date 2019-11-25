//Här ska jag bygga ett quiz som ska räkna poängen och visa dessa på skärmen i spelområdet.
//vidare ska den gå igenom en array och ta upp frågorna en efter en. 
//Count eller shift. har inte klart för mig hur jag ska göra än. :O
// jag ska inte ha en loop. men måste kunna gå genom arrayen på ett bra sett och kunna 
// läsa av svaret från användaren. och räkning och iteration måste fungera!
//


var mainQuiz = [
  ["Till vilken stad är Malmö kopplad med en bro?", "köpenhamn"],
  ["Vad heter havsområdet mellan Halland och Ålborg?", "kattegatt"],
  ["Vad heter klädesplagget som är döpt efter en känd attolsamling?", "bikini"],
  ["Cement från Limhamn har använts i bygget av en känd staty, var står statyn?", "rio de janeiro"],
  ["Vilken är vår närmsta galax (närmst vintergatan)?", "andromeda"],
  ["Vilket år invigdes öresundsbron?", "2000"],
  ["Var hålls Sommar-OS 2020?", "tokyo"],
  ["Vad heter världens äldsta flagga?", "dannebroge"]
];

let 
score = 0, 
svar = "", 
count = 0, 
wrong = 0;

//gömmer resultatet till alla frågorna är ställda och svarade på!


$('#totals').hide();
$('#results').hide();


$('#restart').click(function(){//knappen button med id restart startar om quizet. alltså. nollställer alla värden och återställer quizet.
score = 0, 
svar = "", 
count = 0, 
wrong = 0;
$('#totals').hide();
$('#results').hide();
$('#quiz').show();
$('#questofquest').text('Question nr ' + (count+1) + ' of ' + mainQuiz.length);
$('#wrongs').text('You got ' + wrong + ' wrong so far!');
$('#scores').text('You got ' + score + ' points');
$('#questions').text(mainQuiz[count][0]);
});

$('#form').submit(function(e){//hämtar svaret med jquery och lägger det i svar!
  e.preventDefault();
    svar = $('#answer').val().toLowerCase();
    $('#answer').val("");
    main(svar);
    console.log(svar);
    
});
$('#questions').text(mainQuiz[count][0]); //ställer första frågan
$('#questofquest').text('Question nr ' + (count+1) + ' of ' + mainQuiz.length);// skriver ut vilken fråga du är på!
$('#wrongs').text('You got ' + wrong + ' wrong so far!'); //visar första poäng
$('#scores').text('You got ' + score + ' points'); //visar första poäng


//definierar och bygger mainmetoden(funktionen) här! 
function main(svar) {
    
    
    
    if (svar == mainQuiz[count][1].toLowerCase()){
      ++score;
      ++count;
      $('#scores').text('You got ' + score + ' points');
    }else if(svar != mainQuiz[count][1].toLowerCase()) {
      ++wrong;
      ++count;
      $('#wrongs').text('You got ' + wrong + ' wrong so far!');      
    };
         if (count >= mainQuiz.length){
               results();
         };

    $('#questofquest').text('Question nr ' + (count+1) + ' of ' + mainQuiz.length);
    $('#wrongs').text('You got ' + wrong + ' wrong so far!');
    $('#scores').text('You got ' + score + ' points');
    $('#questions').text(mainQuiz[count][0]);
    
};

 // här lägger jag ut resultatet efter att quizet är slut och frågar i fall man vill börja om
function results() {
  $('#quiz').hide();
  $('#results').show();
  $('#what').text('You got ' + score + ' points,')
  $('#what2').text('and ' + wrong + ' wrong answers.')
  
}
