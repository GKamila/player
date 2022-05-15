let play_btn = document.querySelector('#play i')
let pause_btn = document.querySelector('#pause i')
let stop_btn = document.querySelector('#stop i')

let audio = new Audio('music.mp3')

play_btn.addEventListener('click', function(){
    if(audio.paused == true){
        audio.play()
    }
})
pause_btn.addEventListener('click', function(){
    if(!audio.paused){
        audio.pause()
    }
})
stop_btn.addEventListener('click', function(){
    audio.pause()
    audio.currentTime = 0
})