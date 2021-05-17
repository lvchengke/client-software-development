//编写代码实现对联广告，先定义几个广告参数，便
//于灵活使用，比如广告的宽、高、图片等。
var ad_width = "100px";
var ad_height = "250px";
var ad_img = "img/ad1.jpg";
var close_img = "img/close.png";
//创建广告容器的div
var ad_left = document.createElement("div");
ad_left.style.width = ad_width;
ad_left.style.height = ad_height;
ad_left.style.padding = "0px";
ad_left.style.position = "absolute";
ad_left.style.left = "30px";
ad_left.style.top = "20px";
//创建 img 元素，并加入到 ad_left 中，作为广告图片
var adimg = document.createElement("img");
adimg.src = ad_img;
ad_left.appendChild(adimg);
// 创建关闭按钮，并加入到 ad_left 中
var closeimg = document.createElement("img");
closeimg.src = close_img;
closeimg.style.width = "50px";
closeimg.style.position = "relative";
closeimg.style.left = "50px";
closeimg.style.top = "-20px";
closeimg.style.cursor = "pointer";
ad_left.appendChild(closeimg);
// 将 ad_left 添加到 html 中
document.documentElement.appendChild(ad_left);
//  注册事件，实现关闭广告功能
ad_left.addEventListener("click", function() {
    this.style.display = "none";
});
// 编写代码，实现对联广告随滚动条移动。
window.addEventListener("scroll", function() {
    var st1 = this.document.documentElement.scrollTop || document.body.scrollTop;
    ad_left.style.top = (st1 + 20) + "px";
});

//创建广告容器的div
var ad_right = document.createElement("div");
ad_right.style.width = ad_width;
ad_right.style.height = ad_height;
ad_right.style.padding = "0px";
ad_right.style.position = "absolute";
ad_right.style.right = "30px";
ad_right.style.top = "20px";

//创建 img 元素，并加入到 ad_right 中，作为广告图片    
var adimg = document.createElement("img");
adimg.src = ad_img;
ad_right.appendChild(adimg);
//加入关闭按钮     189000759-吕承珂
var closeimg2 = document.createElement("img");
closeimg2.src = close_img;
closeimg2.style.width = "50px";
closeimg2.style.position = "relative";
closeimg2.style.left = "0px";
closeimg2.style.top = "-20px";
closeimg2.style.cursor = "pointer";
ad_right.appendChild(closeimg2);
// 将 ad_right 添加到 html 中
document.documentElement.appendChild(ad_right);
//  注册事件，实现关闭广告功能
ad_right.addEventListener("click", function() {
    this.style.display = "none";
});
// 实现对联广告随滚动条移动。
window.addEventListener("scroll", function() {
    var st2 = this.document.documentElement.scrollTop || document.body.scrollTop;
    ad_right.style.top = (st2 + 20) + "px";
});