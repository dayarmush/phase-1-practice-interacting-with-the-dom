const counter = document.querySelector('#counter')

//set the counter to go up by one very second and to pause when the pause button is clicked
setInterval(() => {
    let numberSec = Number(counter.innerText)
    if (document.querySelector('#pause').innerText === 'pause') {
    counter.innerText = numberSec + 1
    }
}, 1000)

//function to disable buttons and change the button from pause to start 
function pauseBtn() {
    const pauseBtn = document.querySelector('#pause')
    pauseBtn.addEventListener('click', () => {
         if (pauseBtn.innerText === 'pause') {
            document.querySelector('#minus').disabled = true
            document.querySelector('#plus').disabled = true
            document.querySelector('#heart').disabled = true
            document.querySelector('#submit').disabled = true
             pauseBtn.innerText = 'start'
        } else {
            document.querySelector('#minus').disabled = false
            document.querySelector('#plus').disabled = false
            document.querySelector('#heart').disabled = false
            document.querySelector('#submit').disabled = false
            pauseBtn.innerText = 'pause'
        }
    })
}

// when heart is clicked appends message
function likes() {
    const like = document.querySelector('#heart')
    like.addEventListener('click', () => {
        const likesUl = document.querySelector('.likes')
        const likesLi = document.createElement('li')
        likesUl.appendChild(likesLi).innerText = `${counter.innerText} has been liked`;
        })
}

// when plus is clicked the number increases by one 
function plusBtn() {
    const plus = document.querySelector('#plus') 
    plus.addEventListener('click', (e) => {
        let plusNumber = Number(counter.innerText)
        counter.innerText = plusNumber + 1
    })
}

// when minus is clicked the number decreases by one
function minusBtn() {
    const minus = document.querySelector('#minus')
    minus.addEventListener('click', () => {
        let minusNumber = Number(counter.innerText)
        counter.innerText = minusNumber - 1
    })
}

// submit event listener for form 
const form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault()
    appendComments(e)
})

// appends comments to the dom
function appendComments(comment) {
    const ul = document.createElement('ul')
    const li = document.createElement('li')
    document.querySelector('h3').append(ul)
    ul.appendChild(li)
    li.textContent = comment.target['comment-input'].value
    form.reset()

}

// Calling the functions
pauseBtn()
likes()
plusBtn()
minusBtn()