window.Tank = class Tank{
    constructor(x,y,face='front'){
        //初始位置
        this.positionX = x;
        this.positionY = y;
        //朝向：front back left right
        this.face = face ;
        //帧位置，显示不同的贴图
        this.frameIndex = 0;
        //加速度
        this.dx = 2;
        this.dy = 2;
    }
    go(face){
        switch (true) {
            case face === 'front':
                this.positionY -= this.dy
                this.face = 'front';
                break;
            case face === 'left':
                this.positionX -= this.dx
                this.face = 'left';
                break;
            case face === 'right':
                this.positionX += this.dx
                this.face = 'right';
                break;
            case face === 'back':
                this.positionY += this.dy
                this.face = 'back';
                break;
            default:
        }
        this.frameIndex++;
        if(this.frameIndex == 8){
            this.frameIndex =0 ;
        }
    }
}
