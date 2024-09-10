(function() {

    const input = document.getElementById("input") as HTMLInputElement;
    const infoText = document.getElementById("info-text") as HTMLParagraphElement;
    const meaningContainer = document.getElementById("meaning-container") as HTMLDivElement;
    const title = document.getElementById("title") as HTMLSpanElement;
    const meaning = document.getElementById("meaning") as HTMLSpanElement;
    const audio = document.getElementById("audio") as HTMLAudioElement;

    input.addEventListener("keyup", (e) => { // e = key that's being pressed
        // e.target.value would be input value
        // e.key is key

        if (e.target.value && e.key === "Enter") {
            fetchAPI(e.target.value);
        }
    })


    async function fetchAPI(word) {
        try {
            // waiting for the response
            infoText.style.display = "block";
            meaningContainer.style.display = "none";
            infoText.innerText = `Searching the meaning of "${word}"`;
           

            const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
            const result = await fetch(url).then((res) => res.json());

            // response comes
            if (result.title) {
                meaningContainer.style.display = "block";
                infoText.style.display = "none";
                title.innerText = word;
                meaning.innerText = "Not Available"
                audio.style.display = "none";
            } else {
                infoText.style.display = "none";
                meaningContainer.style.display = "block";
                audio.style.display = "inline-flex";
                title.innerText = result[0].word;
                meaning.innerText = result[0].meanings[0].definitions[0].definition;
                audio.src = result[0].phonetics[0].audio;
            }
        } catch (error) {
            infoText.innerText = "an error happened, try again later";
        }

        
        
    }



})();