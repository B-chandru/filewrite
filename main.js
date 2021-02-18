const speechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
const mic=document.getElementById("mic");


mic.addEventListener("click",()=>{
    const recog= new speechRecognition ();
    recog.start();
    recog.onresult=(data)=>{
        document.getElementById("content").innerText = data.results[0][0].transcript;
    }
})
