function setup(){
    vid=createCapture(VIDEO);
    vid.size(500,500)
    vid.position(100,100);
    can=createCanvas(400,400);
    can.position(800,150);
    modl=ml5.poseNet(vid, onLoad);
    modl.on('pose', onRes);
}
function draw(){
    background("#d8d8d8");
}
function onLoad(){console.log("Model Loaded");}
function onRes(results){
    console.log(results);
}