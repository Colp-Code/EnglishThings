const input = document.getElementById('wordInput')
const translation = document.getElementById('translationInput')
const phrase = document.getElementById('phraseInput')
const button = document.getElementById('sendButton')
const getButton = document.getElementById('getButton')
const wordList = document.getElementById('wordList')


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

getButton.addEventListener('click', async () => {
    try{
        const fetchD = await fetch('http://localhost:3000/datos')
        const data = await fetchD.json()
        console.log(data)
        wordList.innerHTML = ''
        data.data.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `Word: ${item.word} | Translation: ${item.translation} | Phrase: ${item.phrase}`;
        wordList.appendChild(li);
    });
    }catch (error) {
        console.error('Error fetching data:', error)
    }
})

