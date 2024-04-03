const White_keys = ['z','x','c','q','w','e','r','t','y','u','i','o','p','[',']','v','b','n','m',',','.','/']
const Black_keys = ['s','d','2','3','4','6','7','9','0','-','g','h','k','l',';']

const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')


keys.forEach(key => {
    key.addEventListener('click', () => playnote(key))
})

document.addEventListener('keydown', e=>{
    if(e.repeat) return
    const key= e.key
    const WhiteKeyIndex = White_keys.indexOf(key)
    const BlackKeyIndex = Black_keys.indexOf(key)

    if(WhiteKeyIndex >-1) playnote(whiteKeys[WhiteKeyIndex])
    if(BlackKeyIndex >-1) playnote(blackKeys[BlackKeyIndex])
})

function playnote(key) {
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0
    noteAudio.play()   
    key.classList.add('active')
    noteAudio.addEventListener('ended',() => {
        key.classList.remove('active')
    })
}