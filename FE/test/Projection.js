var Projection = function(min,max){
  this.min = min;
  this.max = max;
};

Projection.prototype = {
  overlaps: function(projection){//TODO
    return this.max > projection.min && this.min < projection.max;
  }
};
