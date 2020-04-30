/**These are the questions */
let questionset =[
  {
       question: "1.Which of the following is the correct format for the HTML5 doctype?",
    choices:{
      A:'&lt;DOCTYPE html!&gt;',
      B:'&lt;!DOCTYPE html&gt;',
      C:'&lt;!html DOCTYPE&gt;',
      D:'&lt;html DOCTYPE!&gt;'
    },
    correctanswer:'B'
  },
  {
    question: "2.Which of the following examples is the correct way to markup a paragraph?",
    choices:{
      A:'&lt;paragraph&gt;This is a paragraph.&lt;/paragraph&gt;',
      B:'&lt;p1&gt;This is a paragraph.&lt;/p1&gt;',
      C:'&lt;p&gt;This is a paragraph.&lt;/p&gt;',
    },
    correctanswer:'C'
  },
  {
    question: "3.Which of the following examples would you expect to usually render as bold text?",
    choices:{
      A:'&lt;em&gt;Text&lt;/em&gt;',
      B:'&lt;strong&gt;Text&lt;/strong&gt;',
      C:'&lt;bold&gt;Text&lt;/bold&gt;',
      D:'&lt;s&gt;Text&lt;/s&gt;'
    },
    correctanswer:'B'
  },
  {
    question: "4.From which tag does the descriptive list start?",
    choices:{
      A:'&lt;LL&gt;',
      B:'&lt;DD&gt;',
      C:'&lt;DL&gt;',
      D:'&lt;DS&gt;'
    },
    correctanswer:'C'
  },
  {
    question: "5.What is the correct HTML tag for the largest heading?",
    choices:{
      A:'&lt;h1&gt;',
      B:'&lt;h2&gt;',
      C:'&lt;h3&gt;',
      D:'&lt;h4&gt;'
    },
    correctanswer:'A'
  },
];
/**This tells the script where to put the letious functios defined */
let qcont = document.getElementById('quiz');
let rcont = document.getElementById('results');
let sbutton = document.getElementById('submit');
/**The is is the method called */
quizgen(questionset, qcont, rcont, sbutton);
/**This is where all the code to define the functions are */
function quizgen(quest, qcont, rcont, sbutton){

function qshow(quest, qcont){
  let display = [];
  let choices;

  for(let x=0; x<quest.length; x++){
    
    choices = [];

    for(letter in quest[x].choices){

      choices.push(
        '<label>'
          + '<input type="radio" name="question'+x+'" value="'+letter+'">'
          + letter + ': '
          + quest[x].choices[letter]
        + '</label>'
      );
    }

    display.push(
      '<div class="question">' + quest[x].question + '</div>'
      + '<div class="choices">' + choices.join('') + '</div>'
    );
  }

  qcont.innerHTML = display.join('');
}


function rshow(quest, qcont, rcont){
  
  let acont = qcont.querySelectorAll('.choices');
  
  let uans = '';
  let cor = 0;
  
  for(let x=0; x<quest.length; x++){

    uans = (acont[x].querySelector('input[name=question'+x+']:checked')||{}).value;
  
    if(uans===quest[x].correctAnswer){
      cor++;
      acont[x].style.color = 'lightgreen';
    }
    else{
      acont[x].style.color = 'red';
    }
  }
  rcont.innerHTML = cor + ' out of ' + quest.length;
}

qshow(quest, qcont);

sbutton.onclick = function(){
  rshow(quest, qcont, rcont);
}

}