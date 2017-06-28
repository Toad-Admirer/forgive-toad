var Shape = function(){
  this.x = undefined;
  this.y = undefined;
  this.strokeStyle = 'rgba(255,253,208,0.9)';
  this.fillStyle = 'rgba(147,197,114,0.8)';
};

Shape.prototype = {
  collidesWith: function(otherShape){
    var axes = this.getAxes().concat(otherShape.getAxes());
    return !this.separationOnAxes(axes,otherShape);
  },
  separationOnAxes: function(axes,otherShape){
    for(var i=0;i<axes.length;i++){
      axis = axes[i];
      projection1 = otherShape.project(axis);
      projection2 = this.project(axis);
      if(!projection1.overlaps(projection2)){
        return true;
      }
    }
    return false;
  },
  project:function(axis){
    throw 'method not impl in Shape';
  },
  getAxes: function(){
    throw 'method not impl in Shape';
  },
  // Drawing methods
  createPath: function(ctx){
    throw 'method not impl in Shape';
  },
  fill:function(ctx){
    ctx.save();
    ctx.fillStyle = this.fillStyle;
    this.createPath(ctx);
    ctx.fill();
    ctx.restore();
  },
  stroke: function(ctx){
    ctx.save();
    ctx.strokeStyle = this.strokeStyle;
    this.createPath(ctx);
    ctx.stroke();
    ctx.restore();
  },
  isPointInPath: function(ctx,x,y){
    this.createPath(ctx);
    return ctx.isPointInPath(x,y);
  }

};
