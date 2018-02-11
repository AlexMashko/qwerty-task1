function sidebar_open() {
   document.getElementById("sidebar").style.cssText="display:block; min-width:25%;transform:scaleX:1.2;";
  document.getElementById("sidebar-open-button").style.display = "none";
 
 
}
function sidebar_close() {
  document.getElementById("sidebar").style.display = "none";
  document.getElementById("sidebar").style.minWidth = "0%";
  document.getElementById("sidebar-open-button").style.left = "12%";
  document.getElementById("sidebar-open-button").style.display = "block";
  
}

function change_font_p(){
	var pFontSize=document.getElementById("fontSizeInput").value;
	var selectFontFamily=document.getElementById("fontFamilySelect").value;
	var paragraphsAll= document.querySelector('.content').getElementsByTagName('p');
	if (pFontSize<=24&&pFontSize>=8) {
		for (var i = 0; i <= paragraphsAll.length-1; i++) {
			paragraphsAll[i].style.fontSize=pFontSize;
		}
	}
	for (var i = 0; i <= paragraphsAll.length-1; i++) {
			paragraphsAll[i].style.fontFamily=selectFontFamily;
	}
}



window.onscroll = function() {//change position for fixed elements
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  //console.log(scrolled + 'px');
  var sidebarOpenButton=document.querySelector("#sidebar-open-button");
  var sidebar=document.querySelector(".sidebar-content");
  var headerHeight=document.querySelector("header").clientHeight+document.querySelector(".subheader").clientHeight;
  var pageHeight=document.documentElement.scrollHeight;
  var clientHeight=document.body.clientHeight;
  if(scrolled>=headerHeight){
     sidebarOpenButton.style.position="fixed";
     sidebarOpenButton.style.top="10px";
     sidebar.style.position="fixed";
     sidebar.style.top="10px";

     if(scrolled>= +(pageHeight-(clientHeight)-100)){
     	sidebarOpenButton.style.position="absolute";
     	sidebar.style.position="absolute";
     	sidebar.style.top=scrolled-100;
  		
  	}
  }
  

  else{
  	 sidebarOpenButton.style.position="absolute";
     sidebarOpenButton.style.top="";
     sidebar.style.position="absolute";
     sidebar.style.top="";
  }
  //console.log(pageHeight-(clientHeight)-(scrolled-(100)));
}

function last_p_delete(){
	var paragraphs= document.querySelectorAll('.content p');
    var parent=paragraphs[paragraphs.length-1].parentElement;
    parent.removeChild(paragraphs[paragraphs.length-1]);
    //console.log(parent.removeChild(parent));
}
// ColorPicker
cp = ColorPicker(document.getElementById('pcr'), document.getElementById('picker'), 
function(hex, hsv, rgb, mousePicker, mousepcr) {
currentColor = hex;
     ColorPicker.positionIndicators(
     document.getElementById('pcr-indicator'),
     document.getElementById('picker-indicator'),
     mousepcr, mousePicker);
                     
    document.getElementById('hex').innerHTML = hex;
    document.getElementById('rgb').innerHTML = 'rgb(' + rgb.r.toFixed() + ',' + rgb.g.toFixed() + ',' + rgb.b.toFixed() + ')';
    document.getElementById('hsv').innerHTML = 'hsv(' + hsv.h.toFixed() + ',' + hsv.s.toFixed(2) + ',' + hsv.v.toFixed(2) + ')';
                     
    document.getElementById('pcr_bg').style.backgroundColor = hex;
    document.querySelector('.content-container  .content').style.backgroundColor = hex;
});
cp.setHex('#D4EDFB');
// ColorPicker end

var butonOpenPiccker =document.getElementsByClassName('buttonOpenColorPicker')[0];

function open_color_pikker(){
	var picker=document.getElementById("picker-container");
	if(picker.style.display=='none'){
		picker.style.display="block";
	}
	else{
		picker.style.display="none";
	}
}