function preload(){

}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
video.hide();
poseNet_var=ml5.poseNet(video,modelLoaded);
poseNet_var.on('pose',gotPoses);
}
function gotPoses(results)
{
if(results.length > 0){
    console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y-10;
console.log(noseX,noseY);
}
}
function draw(){
    image(video,0,0,300,300);
    
   }
   function modelLoaded(){
    console.log("poseNet has been successfully loaded");
}
   function saveimage(){
    save('filterapp.png');
}