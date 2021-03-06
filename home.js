document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('user');
    const URL = `https://backdatacharlieandadao.herokuapp.com/users`
    const choices = document.getElementById('choices');
    const header = document.getElementById('header');
    let player;
    let marioScore = document.getElementById('mario-score');
    let rockScore = document.getElementById('rock-score');
    let snakeScore = document.getElementById('snake-score');    

    form.addEventListener('submit', (e) => logIn(e))
    function getUsers() { return fetch(URL).then(res => res.json()) }


    function logIn(e) {
        e.preventDefault();
        let playerString = e.target[0].value
        getUsers().then(users => {
            player = (users.find(user => user.username === playerString))
            choices.style.display = 'block';
            header.innerText = `Hello ${player.username}, pick a game!`
            // debugger
            marioScore.innerText = `Mario-Dodger! \n High-Score: ${player.highscores.mario}`  
            rockScore.innerText = `Rock-Paper-Scissors! \n High-Score: ${player.highscores.rps}`  
            snakeScore.innerText = `Snake Game! \n High-Score: ${player.highscores.snake}`  
            window.localStorage.setItem('player', JSON.stringify(player))
            // player = JSON.parse(localStorage.getItem('player'))
            return player
        })       
        
    }




})