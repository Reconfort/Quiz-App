const highScoreList = document.getElementById('highscorelist');
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

console.log(
    highScores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`
})
);
// console.log(highScores)