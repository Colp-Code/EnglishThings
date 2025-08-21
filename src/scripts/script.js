const input = document.getElementById('wordInput')
const translation = document.getElementById('translationInput')
const phrase = document.getElementById('phraseInput')
const button = document.getElementById('sendButton')


button.addEventListener('click', () => {
    const data = {
        word: input.value,
        translation: translation.value,
        phrase: phrase.value,
    }
    fetch('http://localhost:3000/datos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    console.log(data)
})
