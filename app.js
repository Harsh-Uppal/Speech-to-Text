const speechRecognition = new webkitSpeechRecognition();
const startRecognisingBtn = document.querySelector('.start-speech-recognition');
const language = document.getElementById('language');
const out = document.getElementById('output');
let isRecognising = false;

speechRecognition.addEventListener('result', speechRecognised);
speechRecognition.addEventListener('end', speechRecognitionEnd);

startRecognisingBtn.addEventListener('click', () => {
    speechRecognition.lang = language.value;
    isRecognising = !isRecognising;

    if (isRecognising) {
        speechRecognition.start();
        startRecognisingBtn.setAttribute('recognising', true);
    }
    else {
        speechRecognition.stop();
        startRecognisingBtn.removeAttribute('recognising');
    }
});

function speechRecognised(res) {
    out.value += res.results[0][0].transcript + ' ';
    startRecognisingBtn.removeAttribute('recognising');
    isRecognising = false;
}

function speechRecognitionEnd() {
    startRecognisingBtn.removeAttribute('recognising');
    isRecognising = false;
}