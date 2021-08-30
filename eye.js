(function() {
    let moveArea = document.getElementsByClassName('move-area')[0]
    console.log(moveArea)
    moveArea.addEventListener('mousemove', function(event) {
        let eye = document.getElementsByClassName('eye')[0]

        console.log(eye.offsetLeft)
    })
}())