var c, ctx, tankimg;
var p1x, p1y, p1vx, p2x, p2y, p2vx, s1x, s1y, s1vx, s1vy, s2x, s2y, s2vx, s2vy, say,
    f1x = -40,
    f1y = -40,
    f2x = -40,
    f2y = -40,
    p1h = 100,
    p2h = 100,
    p1l = 3,
    p2l = 3,
    name1,
    name2;

function start() {
  
    name1 = prompt("Player 1");
    name2 = prompt("Player 2");
    
    c = document.getElementById("duk");
    ctx = c.getContext("2d");

    tankimg = document.getElementById("tankimg");
    exploimg = document.getElementById("exploimg");

    c.width = 1000;
    c.height = 600;
    
    
    window.setInterval(update, 20);

    p1x = c.width * 0.1;
    p1y = c.height * 0.8;
    p1vx = 0;
    p2x = c.width * 0.9;
    p2y = c.height * 0.8;
    p2vx = 0;
    s1x = -40;
    s1y = -40;
    s1vx = 0;
    s1vy = 0;
    say = 0;
    s2x = -40;
    s2y = -40;
    s2vx = 0;
    s2vy = 0;
    say = 0.05;


}

function update() {
    updatePositions();
    repaint();


}

function updatePositions() {
    p1x += p1vx;
    p1x += p1vx;

    p2x += p2vx;

    s1x += s1vx;
    s1y += s1vy;
    s1vy += say;

    s2x += s2vx;
    s2y += s2vy;
    s2vy += say;

    if (s2x > p1x && s2x < p1x + c.width * 0.05 && s2y > p1y && s2y < p1y + c.height * 0.05) {

        f1x = p1x;
        f1y = p1y;

        p1h -= 30;

        s2y = c.height;
        if (p2h < 0) {
            p2h = 100;
            p2l--;
        }

    }

    if (s1x > p2x && s1x < p2x + c.width * 0.05 && s1y > p2y && s1y < p2y + c.height * 0.05) {

        f2x = p2x;
        f2y = p2y;

        p2h -= 30;

        s1y = c.height;
        if (p2h < 0) {
            p2h = 100;
            p2l--;
        }


    }


}

function repaint() {

    ctx.clearRect(0, 0, c.width, c.height);
    paintTank(p1x, p1y);
    paintTank(p2x, p2y);

    paintShot(s1x, s1y);
    paintShot(s2x, s2y);

    paintFire(f1x, f1y);
    paintFire(f2x, f2y);

    paintInfo();
    
    ctx.font = "18px Arial";
    ctx.fillText(name1,850,95);
     ctx.font = "18px Arial";
    ctx.fillText(name2,850,115);

}

function paintTank(x, y) {

    ctx.drawImage(tankimg, x, y, c.width * 0.05, c.height * 0.05);

}

function Turnover(){
    

}

function paintShot(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
}

function paintFire(x, y) {
    ctx.drawImage(exploimg, x, y, c.width * 0.05, c.height * 0.05);
}


function paintInfo() {
    //helth
    ctx.fillStyle = "red";
    ctx.fillRect(50, 50, p1h, 10);
    ctx.fillRect(c.width - 150, 50, p2h, 10);
    ctx.fillStyle = "black";

    for (var i = 0; i < p1l; i++) {
        paintTank(i * c.width * 0.05, 0);
    }
    

}


function keyDown(e) {
    e.preventDefault();


    if (e.keyCode == 37) {
        p2vx = -c.width * 0.001;

    }
    if (e.keyCode == 39) {
        p2vx = c.width * 0.0005;
    }

    if (e.keyCode == 65) {
        p1vx = -c.width * 0.0005;

    }
    if (e.keyCode == 68) {
        p1vx = c.width * 0.001;
    }

    if (e.keyCode == 32) {

        s1x = p1x + c.width * 0.05;
        s1y = p1y;
        s1vx = 2;
        s1vy = -3;

    }
    if (e.keyCode == 13) {

        s2x = p2x;
        s2y = p2y;
        s2vx = -2;
        s2vy = -3;
    }



}

function keyUp(e) {
    if (e.keyCode == 37 || e.keyCode == 39) {
        p2vx = 0;
    }
    if (e.keyCode == 65 || e.keyCode == 68) {
        p1vx = 0;
    }

}