var heart, write;
var toWrite = ['Люблю проводить с тобой время', 'Обожаю твои глаза', 'Люблю, когда ты целуешь меня', 'Обожаю твоё лицо', 'Люблю, когда ты улыбаешься', 'Обожаю слушать твои рассказы', 'Люблю лежать с тобой в обнимку', 'Обожаю твой голос'];

async function rewrite() {
    for (let i = 0;; i++) {
        for (letter of toWrite[i % toWrite.length]) {
            write.innerHTML += letter;
            if (letter != ' ') await new Promise(r => setTimeout(r, 100));
        }
        await new Promise(r => setTimeout(r, 100));
        for (let j = toWrite[i % toWrite.length].length; j >= 0; j--) {
            write.innerHTML = write.innerHTML.slice(0, j);
            if (toWrite[i][j] != ' ') await new Promise(r => setTimeout(r, 100));
        }
        await new Promise(r => setTimeout(r, 100));
    }
}

function pulse() {
    if (heart.style.width == '200px') heart.style.width = '180px';
    else heart.style.width = '200px';
}

function getTimeStamp() {
    const timeStamp = Math.floor((new Date().getTime() - new Date('2023-11-20').getTime()) / 1000 / 60 / 60 / 24).toString();
    const last = timeStamp.length - 1;

    if ((timeStamp.length >= 2 && timeStamp[last - 1] == '1') || '567890'.match(timeStamp[last])) return `${timeStamp} дней <3`;
    if (timeStamp[last] == '1') return `${timeStamp} день <3`;
    return `${timeStamp} дня <3`;
}

window.onload = async function() {
    document.getElementById("days").innerHTML += getTimeStamp();

    heart = document.getElementById('heart');
    heart.addEventListener("transitionend", pulse);
    heart.style.width = '200px';

    write = document.getElementById('write');

    await rewrite();
}
