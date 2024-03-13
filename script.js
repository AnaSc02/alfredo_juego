const symbols = ["🍒", "🍊", "🍋", "🍇", "🍉"];

function A jugar!() {
    const reels = document.querySelectorAll(".reel");
    const result = document.getElementById("result");

    let A jugar!Result = [];
    reels.forEach(reel => {
        const randomIndex = Math.floor(Math.random() * symbols.length);
        reel.textContent = symbols[randomIndex];
        A jugar!Result.push(randomIndex);
    });

    if (A jugar!Result[0] === A jugar!Result[1] && A jugar!Result[1] === A jugar!Result[2]) {
        result.textContent = "¡Ganaste!";
    } else {
        result.textContent = "¡Perdiste!";
    }
}
