const contentWrapper = document.querySelector('.content-wrapper');
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const p = document.createElement('p');
contentWrapper.appendChild(p);
const recognition = new SpeechRecognition();
recognition.interimResults = true;
console.log(recognition);
    console.log(p);

    const capitalizeFirstLetter = function(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
recognition.addEventListener('result',(e)=>{
    console.log(e);
    let text = [...e.results[0]]
    .map(results=> results.transcript).join('');
    console.log(text);
    let p = contentWrapper.querySelector('p');
     p.textContent = capitalizeFirstLetter(text);
     console.log(e.results[0].isFinal);
     if (e.results[0].isFinal === true){
        let p =document.createElement('p');
        contentWrapper.insertBefore(p,contentWrapper.firstChild);
     }
});

console.log(capitalizeFirstLetter('sdfdf fadsf fasd'))
recognition.addEventListener('end',(e)=>{
    console.log(e);
    console.log('efs');
    recognition.start();
});
recognition.start();

