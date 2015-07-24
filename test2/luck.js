names = ['刘南','张晨','脱咪','王青波','董倩','刘磊','李雷彪','候豆','周玉成','贺欢','李玲','徐蒙','吴富强','张欢'];
function luck(){
  var name = names[parseInt(names.length * Math.random())];
  names.pop(name);
  return name;
}
