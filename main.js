const speech= document.querySelector("button");



const recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

const synth = window.speechSynthesis;

speech.addEventListener("click",()=>{
    recognition.start()
});

let utter = new SpeechSynthesisUtterance("hi how are you?");
utter.onend=()=>{
    recognition.start();
};

recognition.onresult = (e)=>{
    const p = document.querySelector("p");
    const transcript = e.result[e.results.length - 1][0].transcript.trim();
    p.innerText= transcript;
    console.log(transcript);
    if(transcript === "hello"){
        recognition.stop();
        utter.text ="hi,how are u";
        synth.speak(utter);
    }
    else if(transcript === "goodbye"){
        recognition.stop();
        utter.text = "see u soon";
        synth.speak(utter);
    }

}
