
Status="";
object=[];


function preload(){
 

}


function  setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();



}

function start(){
    object_detector=ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML="status : detecting objects.";
    
}

function modelloaded(){
    console.log("modelloaded");
    Status=true;
    

}
function got_results(error,results)
{
if(error)
{console.error(error);}
else{
    console.log(results);
    object=results;

    
}


}
 

function draw(){
    image(video,0,0,380,380);

    if(Status!="")
    {
        r=random(255);
        g=random(255);
        b=random(255);

        object_detector.detect(video,got_results);
for(i=0;i<object.length;i++){
   
   

   document.getElementById("status").innerHTML="status : objects  detected";
   document.getElementById("num_obj").innerHTML="Number of Objects detected are : "+objects.length;
   fill(r,g,b);
   percent=floor(object[i].confidence*100);

   text(object[i].label+" "+percent+"%",object[i].x,object[i].y);
noFill();
stroke(r,g,b);
rect(object[i].x,object[i].y,object[i].width,object[i].height);
}
    }
}
