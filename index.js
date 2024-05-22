const chooseRangeValue = document.getElementById('choose-range-value');
const audioEle = document.getElementById('speech-audio');

const updateRangeValue = (value) => {
    chooseRangeValue.innerHTML = value + ' giây/số';
}

const speak = (num) => {
    const msg = 'Số ' + num.toString();
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=vi-VN&client=tw-ob&q=${msg}`;
    audioEle.src = url;
    audioEle.play();

}
let spokeNumbers = [];
const startSpeaking = () => {
    audioEle.play();
    document.getElementById('speak-btn').innerHTML = 'Dừng đọc';
    document.getElementById('speak-btn').setAttribute('onclick', 'stopSpeaking()');
    const speakValue = document.getElementById('speak-speed').value;
    //disable input
    document.getElementById('speak-speed').disabled = true;
    console.log(speakValue);
    setInterval(() => {
        var num = Math.floor(Math.random() * 90) + 1;
        //only speak number that has not been spoken
        while (spokeNumbers.includes(num)) {
            num = Math.floor(Math.random() * 90) + 1;
        }
        speak(num);
        spokeNumbers.push(num);
        const spokenNumberItem = document.createElement('div');
        spokenNumberItem.innerHTML = num;
        spokenNumberItem.classList.add('spoken-number-item');
        document.getElementById('spoken-number-list').appendChild(spokenNumberItem);
    }, speakValue * 1000);
}

const stopSpeaking = () => {
    audioEle.pause();
    document.getElementById('speak-btn').innerHTML = 'Bắt đầu đọc';
    document.getElementById('speak-speed').disabled = false;
    document.getElementById('speak-btn').setAttribute('onclick', 'startSpeaking()');
}

