class RenderEngine(){
    constructor(){
        this.canvasEle = document.querySelector('canvas');
        this.context = this.canvasEle.getContext('2d');
        //坦克列表
        this.tankList = [];
        //生成坦克实例
        initTank();
        //绑定事件
        bindEvent();
        //开始渲染
        startRender();
    }
    initTank(){
        this.tankList.push(new Tank());
    }
    bindEvent(){
        this.canvasEle.addEventListener('keydown',(e)=>{
            console.log(e.keyCode)
        })
    }
    startRender(){

    }
    render(){

    }
}
RenderEngine()
