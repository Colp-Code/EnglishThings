const input = document.getElementById('wordInput')
const translation = document.getElementById('translationInput')
const phrase = document.getElementById('phraseInput')
const button = document.getElementById('sendButton')
const getButton = document.getElementById('getButton')
const wordList = document.getElementById('wordList')
const wordTable = document.getElementById('wordTable')
const titleTable = document.getElementById('titleTable')


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

    try{
        const fetchD = await fetch('http://localhost:3000/datos')
        const data = await fetchD.json()
        wordTable.innerHTML = '<thead><tr><th>Word</th><th>Translation</th><th>Phrase</th></tr></thead>'
        data.data.forEach(item =>{
            const row = document.createElement('tr')
            row.innerHTML += '<td>' + item.word + '</td><td>' + item.translation + '</td><td>' + item.phrase + '</td>'
            wordTable.appendChild(row)
        })
    }catch (error){
        console.error('Error fetching data:', error)
    }
})

