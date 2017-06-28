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
        this.tankList.push(new Tank(50,50));
    }
    bindEvent(){
        window.addEventListener('keypress',()=>{
            console.log(1)
            // todo 根据上下左右调用tank go 方法
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
            faceList = ['front','left','right','back'],
            animationFrames = [1,2,3,4,5,6,7,8],
            sourceX = Math.floor(animationFrames[frameIndex] % 8)*32,
            sourceY = Math.floor(animationFrames[frameIndex] /8)*32;
            context.save()
            context.translate(positionX+16,positionY+16);
            console.log(faceList.indexOf(face)*Math.PI/4)
            context.rotate(faceList.indexOf(face)*Math.PI/4)
            context.drawImage(pic,sourceX,sourceY,32,32,-16,-16,32,32)
            context.restore()
        })
    }
}
new RenderEngine()
