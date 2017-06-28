var Shape = function(){

};

Shape.prototype = {
  collidesWith: function(otherShape){
    var axes = this.getAxes().concat(otherShape.getAxes());
    return !this.separationOnAxes(axes,otherShape);
  },
  getAxes: function(){

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

  }

};
