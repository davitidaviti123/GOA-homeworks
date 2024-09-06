const child = document.getElementById("child-container");  // მოგვაქვს Child დივი

let left = 0;               // ვქმნით მიმართულების ელემენტებს
let y = 0;
let direct = "right"

const moveRight = setInterval(function(){      
    if(direct == "right"){                      
        left++;
        if(left == 300){
            direct = "bottom"
        }
    } else if(direct == "bottom"){
        y++;
        if(y == 300){
            direct = "left";                      // ვაკეთებთ ანიმაციას Child-ისთვის
        }
    } else if(direct == "left"){
        left--;
        if(left == 0){
            direct = "top"
        }
    } else{
        y--;
        if(y == 0 && left == 0){
            clearInterval(moveRight);
        }
    }

    child.style.left = left + 'px';              // ვაკეთებთ ისე რომ დაეტყოს ანიმაცია
    child.style.top = y + 'px';
}, 10);