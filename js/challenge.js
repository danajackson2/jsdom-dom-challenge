
//Definitions
let counter = document.querySelector("#counter")
let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let heart = document.getElementById('heart')
let pause_button = document.getElementById('pause')
let input = document.querySelector('input')
let resume_button = document.createElement('button')
resume_button.textContent = 'resume'
resume_button.id = 'resume'
resume_button.style.display = "none"
document.getElementById('button_div').appendChild(resume_button)
let num = 0
let clock = setInterval(increment, 1000)
let likes_hash = {}

//Change DOM Elements
function count(){
    clock
}
function increment(){
    num += 1
    counter.textContent = num
}
function decrement(){
    num -= 1
    counter.textContent = num
}
function like(){
    if (likes_hash[`${counter.textContent}`]) {
        likes_hash[`${counter.textContent}`] += 1
    } else {
        likes_hash[`${counter.textContent}`] = 1
    }

    if (document.getElementById(`${counter.textContent}`)) {
        document.getElementById(`${counter.textContent}`).textContent = `${counter.textContent} has been liked ${likes_hash[`${counter.textContent}`]} times`
    } else {
        li = document.createElement('li')
        li.id = `${counter.textContent}`
        li.textContent = `${counter.textContent} has been liked ${likes_hash[`${counter.textContent}`]} times`
        document.querySelector('ul.likes').appendChild(li)
    }
}

//Event Handlers
function pause(){
    clearInterval(clock)
    pause_button.style.display = 'none'
    resume_button.style.display = ''
    plus.removeEventListener('click',  increment)
    minus.removeEventListener('click', decrement)   
}
function resume(){
    let num = counter.textContent
    clock = setInterval(increment, 1000)
    resume_button.style.display = 'none'
    pause_button.style.display = ''
    plus.addEventListener('click', increment)
    minus.addEventListener('click', decrement)
}
function submit_comment(){
    p = document.createElement('p')
    p.textContent = input.value
    document.getElementById('list').appendChild(p)
}

//Add Event Listener
plus.addEventListener('click', increment)
minus.addEventListener('click', decrement)
heart.addEventListener('click', like)
pause_button.addEventListener('click', pause)
resume_button.addEventListener('click', resume)
submit.addEventListener('click', function(e){
    e.preventDefault()
    submit_comment()
})

//Things to Call
count()