const containerEL = document.querySelector('.container')

const careers = ["Engineer!", 'Web Developer!', 'Freelancer!']
let career_index = 0
let character_index = 0



async function updateText() {
    
    character_index++

    containerEL.innerHTML = `
    <h1>I'm ${
        careers[career_index].slice(0, 1) === 'E' ? 'an' : 'a'
    } ${careers[career_index].slice(0, character_index)}</h1>
    `

    if (character_index === careers[career_index].length){
        career_index++
        character_index = 0
        await new Promise(r => setTimeout(r, 300));
    };  
    
    if (career_index === careers.length) {
        career_index = 0
    }
    setTimeout(updateText, 70);
}

updateText()
