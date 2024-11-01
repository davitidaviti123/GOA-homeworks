window.onload = function() {
    let posX = 0; 
    let posY = 0;
    let direction = "right";
    let box = document.getElementById('box');
    let t = setInterval(move, 10);

    function move() {
        if (direction === "right") {
            posX += 1;
            box.style.left = posX + 'px';
            if (posX >= 150) {
                direction = "down";
            }
        } else if (direction === "down") {
            posY += 1;
            box.style.top = posY + 'px';
            if (posY >= 50) {
                direction = "left";
            }
        } else if (direction === "left") {
            posX -= 1;
            box.style.left = posX + 'px';
            if (posX <= 0) {
                direction = "up";
            }
        } else if (direction === "up") {
            posY -= 1;
            box.style.top = posY + 'px';
            if (posY <= 0) {
                direction = "right";
            }
        }
    }
};