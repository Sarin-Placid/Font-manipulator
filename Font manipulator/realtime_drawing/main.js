function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,110)

    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotPoses);
}
function modelloaded()
{
    console.log("Posenet is initialized")
}
function draw()
{
background("#0B87E8");

}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results)
    }
}
