var tankPic = new Image();
tankPic.src = './tanks_sheet.png';
var animationFrames = [1,2,3,4,5,6,7,8];
var frameIndex = 0;
var canvasEle =  document.querySelector('canvas');
var context = canvasEle.getContext('2d');
var x = 50;
var y = 50;
var dx = 1;
var dy = 0;
var rotation = 90;
function drawScreen(){
    y = y +dy;
    x = x +dx;
    context.fiiStyle ='#aaa';
    context.fillRect(0,0,500,500);
    context.save()
    context.setTransform(1,0,0,1,0,0)
    var angle = rotation*Math.PI / 180;
    context.translate(x+16,y+16);
    context.rotate(angle)
    var sourceX = Math.floor(animationFrames[frameIndex] % 8)*32;
    var sourceY = Math.floor(animationFrames[frameIndex] /8)*32;
    context.drawImage(tankPic,sourceX,sourceY,32,32,-16,-16,32,32)
    context.restore()
    frameIndex++;
    if(frameIndex ==animationFrames.length){
        frameIndex =0 ;
    }
}


function gameLoop(){
    window.setTimeout(gameLoop,100);
    drawScreen()
}
gameLoop()
