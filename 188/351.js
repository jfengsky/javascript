String.prototype.lengthB = function() {
  var b = 0, l = this.length;
  if(l){
    for (var i = 0; i < l; i++){
      if(this.charCodeAt( i ) > 255){
        b += 2;
      }else {
        b ++;
      }
    }
    return b;
  } else {
    return 0
  }
};

var s = "String对象长度";

console.log(s.lengthB());