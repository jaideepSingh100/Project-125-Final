difference = 0;

RightWrist = 0;

LeftWrist = 0;


function setup()
{
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    video = createCapture(VIDEO);
    video.size(550, 500);
    

poseNet = ml5.poseNet(video, modelLoaded);

poseNet.on('pose', gotPoses);

}

function modelLoaded()
{
    console.log("POSENET IS INITIALIZED");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        LeftWristX = results[0].pose.leftWrist.x;
        RightWristX = results[0].pose.rightWrist.x;
        difference = floor(LeftWristX - RightWristX);
        console.log("LEFT WRIST X = " + LeftWristX + "RIGHT WRIST X = " + RightWristX + "DIFFERENCE" + difference);

    }

    else
    {
        window.alert("NO POSES DIDECTED");
    }
}

function draw()
{
    background('#6C91C2');
    document.getElementById("font_size").innerHTML = "FONT SIZE OF THE TEXT WILL BE :-" + difference + "px";
    textSize(difference);
    fill('#FFE787');
    text('JAIDEEP', 50, 400);
    

}