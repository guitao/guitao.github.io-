(function () {
    let moveArea = document.getElementsByClassName('move-area')[0]
    moveArea.addEventListener('mousemove', function (event) {
        let eye1 = document.getElementsByClassName('eye')[0]
        let eye2 = document.getElementsByClassName('eye')[1]
        let x = (eye1.offsetLeft) + (eye1.offsetWidth / 2);
        let y = (eye1.offsetTop) + (eye1.offsetHeight / 2);
        let rad = Math.atan2(event.x - x, event.y - y);
        let rot = (rad * (180 / Math.PI) * -1) + 180;
        eye1.style.transform = `rotate(${rot}deg)`

        let x2 = (eye2.offsetLeft) + (eye2.offsetWidth / 2);
        let y2 = (eye2.offsetTop) + (eye2.offsetHeight / 2);
        let rad2 = Math.atan2(event.x - x2, event.y - y2);
        let rot2 = (rad2 * (180 / Math.PI) * -1) + 180;
        eye2.style.transform = `rotate(${rot2}deg)`
    })
}())