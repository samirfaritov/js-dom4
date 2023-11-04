let box = document.querySelector('.box')
// let active = false
let img = document.querySelector('img')

let src = 'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
let sr = 'https://t3.ftcdn.net/jpg/05/35/47/38/360_F_535473874_OWCa2ohzXXNZgqnlzF9QETsnbrSO9pFS.jpg'
let s = 'https://w.forfun.com/fetch/62/624e27fde335d49e2dd3c6b75c6027a3.jpeg'
let active = false

box.addEventListener('click', () => {
    active = !active
    // if (active) {
    //     box.classList.add('active')
    // } else{
    //     box.classList.remove('active')
    // }
    // box.classList.toggle('active')
    // console.log(box.classList.contains('active'));

    
    if(active) {
        
        img.setAttribute('src', src)
        if(active) {

            img.setAttribute('src', sr)
        }
    } else {
        img.setAttribute('src', s)
    }
    box.classList.toggle('img')
})