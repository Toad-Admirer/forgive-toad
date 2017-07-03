class RenderEngine{
    constructor(){
        //获取canvas环境&贴图等初始化
        this.init();
        //坦克列表
        this.tankList = [];
        //生成坦克实例
        this.initTank();
        //绑定事件
        this.bindEvent();
        //开始渲染
        this.startRender();
    }
    init(){
        let canvasEle = document.querySelector('canvas');
        this.context = canvasEle.getContext('2d');
        this.pic = new Image()
        this.pic.src = '../tanks_sheet.png';
    }
    initTank(){
        this.selfTank = new Tank(50,50);
        this.tankList.push(this.selfTank);
    }
    bindEvent(){
        let {selfTank} = this;
        window.addEventListener('keypress',(e)=>{
            let {keyCode} = e;
            switch (true) {
                case keyCode == 119: //前 W
                    selfTank.go('front')
                    break;
                case keyCode == 97: //左 A
                    selfTank.go('left')
                    break;
                case keyCode == 115: // 后S
                    selfTank.go('back')
                    break;
                case keyCode == 100: //右 D
                    selfTank.go('right')
                    break;
                default:
                    return
            }
        },false)
    }
    startRender(){
        this.render()
        window.requestAnimationFrame(this.startRender.bind(this));
    }
    render(){
        let {context,pic} = this;
        context.fiiStyle ='#aaa';
        context.fillRect(0,0,600,600);
        this.tankList.forEach((el)=>{
            let {face,positionX,positionY,frameIndex} =el,
            faceList = ['front','right','back','left'],
            animationFrames = [1,2,3,4,5,6,7,8],
            sourceX = Math.floor(animationFrames[frameIndex] % 8)*32,
            sourceY = Math.floor(animationFrames[frameIndex] /8)*32;
            context.save()
            context.translate(positionX+16,positionY+16);
            context.rotate(faceList.indexOf(face)*Math.PI/2)
            context.drawImage(pic,sourceX,sourceY,32,32,-16,-16,32,32)
            context.restore()
        })
    }
}
new RenderEngine()
