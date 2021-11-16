function samyak(){
  var clock = document.getElementById('clock')
  var cd = new Date();
  var h = cd.getHours();
  var m = cd.getMinutes();
  var s = cd.getSeconds();

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  clock.innerText = `${h}:${m}:${s}`
  setTimeout(samyak, 1000)
}
samyak();
