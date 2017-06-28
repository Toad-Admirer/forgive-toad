var Vector = function(x, y) {
  this.x = x;
  this.y = y;
};

Vector.prototype = {
  getMagnitude: function() { //向量长度
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  },
  add: function(vector) { //向量相加
    var v = new Vector();
    v.x = this.x + vector.x;
    v.y = this.y + vector.y;
    return v;
  },
  subtract: function(vector) { //向量相减
    var v = new Vector();
    v.x = this.x - vector.x;
    v.y = this.y - vector.y;
    return v;
  },
  dotProduct: function(vector) { //向量点乘
    return this.x * vector.x + this.y * vector.y;
  },
  edge: function(vector) {//两点得出向量
    return this.subtract(vector);
  },
  perpendicular: function() {//获取垂直向量
    var v = new Vector();
    v.x = this.y;
    v.y = 0 - this.x;
  },
  normalize: function() {//单位向量
    var v = new Vector(0, 0),
      m = this.getMagnitude();
    if (m != 0) {
      v.x = this.x / m;
      v.y = this.y / m;
    }
    return v;
  },
  normal: function(){//获取垂直向量的单位向量
    var p = this.perpendicular();
    return p.normalize;
  }
};
