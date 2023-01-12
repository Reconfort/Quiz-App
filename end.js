const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
// console.log(highScores)
// console.log(JSON.parse(localStorage.getItem('HighScores')));

const maxhighScore = 5;




finalScore.innerHTML =mostRecentScore;

username.addEventListener('keyup', () => {
    // console.log(username.value)
    saveScoreBtn.disabled = !username.value;
})
saveHighScore = e => {
    e.preventDefault();
    // console.log('I saved it')
    alert('Saved')

    const score = {
        score: Math.floor(Math.random() *100),
        name: username.value
    }

    highScores.push(score);

    highScores.sort((a, b) => b.score - a.score);

    highScores.splice(5);

    localStorage.setItem('higScores', JSON.stringify(highScores));
    window.location.assign('/QuizApp')
    // console.log(highScores);

}