function preload() {
    mariodie = loadSound("mariodie.wav");
    gameover = loadSound("gameover.wav");
    jump = loadSound("jump.wav");
    world_start = loadSound("world_start.wav");
    kick = loadSound("kick.wav");
    coin = loadSound("coin.wav");
    setSprite();
    MarioAnimation();
}

function setup() {
    canvas = createCanvas(600,600);
    canvas.parent('canvas');
    instalizeInSetup(mario);
    video = createCapture(VIDEO);
    video.size(300,300);
    video.parent("El juego esta en la consola (:");
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", obtener);
}

function modelLoaded() {
    console.log("El modelo ya se cargo (:")
}

function obtener(hola) {
    if (hola.lenght > 0) {
        console.log(hola);
        noseX = hola[0].pose.nose.x;
        noseY = hola[0].pose.nose.y;
    }    
}

function draw() {
    game();
}