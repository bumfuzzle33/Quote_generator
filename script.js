let text = document.getElementById("text");

function random(){
    let quotes = ["Whether you think you can, or you think you can't--you're right."
    ,"Think before you speak. Read before you think."
    ,"Judge a man by his questions rather than by his answers."
    ,"We are addicted to our thoughts. We cannot change anything if we cannot change our thinking."];

    let random_quote = quotes[Math.floor(Math.random()*quotes.length)];
    text.innerHTML = random_quote;
}
random();