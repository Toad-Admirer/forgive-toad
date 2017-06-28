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
        this.dx = 1;
        this.dy = 1;
    }
    // go(font){
    //     改变实例的参数
    // }
}
