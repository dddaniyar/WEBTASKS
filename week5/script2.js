var bigImage=document.getElementById("bigImage");
var bigImg=bigImage.getElementsByTagName("img")[0];
var carousel=document.getElementById("carousel");
var images=carousel.getElementsByTagName("img");
for(var i=0;i<images.length;i++){
  images[i].addEventListener("click",changeImage);
}
function changeImage(event){
  bigImg.src=event.currentTarget.src;
}
