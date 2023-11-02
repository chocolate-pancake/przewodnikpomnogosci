let questionNumber = 28;

// if(!sessionStorage.getItem('currentQuestion')){
//     sessionStorage.setItem('currentQuestion', '1');
// }
// let currentQuestion = parseInt(sessionStorage.getItem('currentQuestion'));
// Uncomment when sawing answers in storage is managed



// let currentQuestion = 1;
// for(let i = 1; i < currentQuestion; i ++){
//     document.getElementById('question' + i).classList.toggle('swipedLeft');
// }
// for(let i = currentQuestion + 1; i < questionNumber + 1; i ++){
//     document.getElementById('question' + i).classList.toggle('swipedRight');
// }
// Uncomment when arrows are functional



// let answers = [];
// if(!sessionStorage.getItem('answers')){

//     sessionStorage.setItem('answers', '');
// }

function setScore(score){
}

function calculateScore(){
    let score = 0;
    let inputs = document.querySelectorAll('.setting');
    for(let i = 0; i < inputs.length; i ++){
        if(inputs[i].checked === true){
            score += parseInt(inputs[i].labels[0].textContent);
        }
    }
    score *= 10;
    score /= questionNumber;
    if(score % 1 !== 0){
        score = score.toFixed(2);
    }
    document.getElementById('testResult').textContent = score;
    if(score < 30){
        document.documentElement.style.setProperty('--low', 'block');
        document.documentElement.style.setProperty('--high', 'none');
    }
    else {
        document.documentElement.style.setProperty('--low', 'none');
        document.documentElement.style.setProperty('--high', 'block');
    }
}