document.getElementById("plus").onclick = function(){
    document.getElementById("stars").style.display = "block";
     document.getElementById("plus").style.display = "none";
     document.getElementById("minus").style.display = "block";
}
document.getElementById("minus").onclick = function () {
  document.getElementById("stars").style.display = "none";
  document.getElementById("minus").style.display = "none";
  document.getElementById("plus").style.display = "block";
};