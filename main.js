nosex=0;
nosey=0;
rightWrist=0;
leftWrist=0;
difference=0;
function setup(){
    video=createCapture(VIDEO)
    
    canvas=createCanvas(500,500)
    canvas.position(650,250)

    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotresults)
}
function modelLoaded(){
    console.log("model is loaded!");
}
function gotresults(result){
    if(result.length>0){
     console.log(result);
     nosex=result[0].pose.nose.x
     nosey=result[0].pose.nose.y
     console.log("nosex= "+nosex+"nosey= "+nosey);

     rightWrist=result[0].pose.rightWrist.x;
     leftWrist=result[0].pose.leftWrist.x;
     difference=floor(leftWrist-rightWrist)
     console.log("RW= "+rightWrist+"difference= "+difference);
     console.log("LW= "+leftWrist);
   
    }
}
function draw(){
    text_size=document.getElementById("text_s").innerHTML="Text Size is:- "+difference+"px"
    color_t=document.getElementById("color").value;
    text_w=document.getElementById("text").value
        background("lightgrey");
        textSize(difference);
        fill(color_t)
        text(text_w,nosex,nosey)

}