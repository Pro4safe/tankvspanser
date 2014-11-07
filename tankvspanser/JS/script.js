var c , ctx;
var p1x, 
    p1y, 
    p1vx,
    p2x, 
    p2y,
    p2vx,
    s1x,
    s1y,
    s1vx,
    s1vy,
    say;

function start(){
    c = document.getElementById("duk");
    ctx= c.getContext("2d");
    
    c.width= window.innerWidth;
    c.height= window.innerHeight;
    
    window.setInterval(update, 20);
    
    p1x=c.width * 0.1;
        p1y= c.height * 0.8;
        p1vx=0;
    p2x= c.width * 0.9; 
        p2y=c.height * 0.8; 
        p2vx=0;
        s1x=100;
        s1y=100;
        s1vx=2;
        s1vy=-3;
        say= 0.05;

}

function update(){
    updatePositions();
    repaint();


}

function updatePositions(){
    p1x += p1vx;
    p1x += p1vx;
    p2x += p2vx;
    s1x += s1vx;
    s1y += s1vy;
    s1vy += say;
}

function repaint(){
    
    ctx.clearRect(0,0,c.width, c.height);
    paintTank(p1x, p1y);
    paintTank(p2x, p2y);
    
    paintShot(s1x,s1y);
}

function paintTank(x, y){
    
    ctx.fillRect(x, y, c.width * 0.05, c.height * 0.05);
    
}

function paintShot(x, y){
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
}


function keyDown(e){
    e.preventDefault();
    
    
if(e.keyCode==37){
    p2vx= -c.width * 0.001;
    
    }
if(e.keyCode==39){
    p2vx = c.width * 0.0005;
    }

if(e.keyCode==65){
    p1vx= -c.width * 0.0005;
    
    }
if(e.keyCode==68){
    p1vx = c.width * 0.001;
    }

}

function keyUp(e){
    if (e.keyCode==37 || e.keyCode==39){
    p2vx= 0;
    }
    if (e.keyCode==65 || e.keyCode==68){
    p1vx= 0;
    }

}



