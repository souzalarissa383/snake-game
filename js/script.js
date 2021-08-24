let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];

snake[0] = {
    x: 8 * box,
    y: 8 * box
}
function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function crirCobrinha(){
    for(i=0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function iniciarJogo(){
    criarBG();
    crirCobrinha();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    //cordenadas da cobrinha
    if(direction = "right") snakeX += box;
    if(direction = "left") snakeX-= box;
    if(direction = "up") snakeY -= box;
    if(direction = "down") snakeY -= box;
    
    // funcao pop para retirar o ultimo elemento do lancamento
    snake.pop();

    let newHead = {
        x: snakeX,
        y; snakeY
    }

    snake.unshift(newHead);


}

let jogo = setInterval(iniciarJogo, 100);

criarBG();
crirCobrinha();