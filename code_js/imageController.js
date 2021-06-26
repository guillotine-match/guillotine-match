	

	// Zoom In & Out JS
function zoomIn(event) {
	event.target.style.transform = "scale(1.2)";
	event.target.style.zIndex = 1;
	event.target.style.transition = "all 0.5s";
}

function zoomOut(event) {
	event.target.style.transform = "scale(1)";
	event.target.style.zIndex = 0;
	event.target.style.transition = "all 0.5s";
}



	// 이미지 원본 띄우기 JS
	function doImgPop(img){ 
	img1= new Image(); 
	img1.src=(img); 
	imgControll(img); 
	} 

	function imgControll(img){ 
	if((img1.width!=0)&&(img1.height!=0)){ 
		viewImage(img); 
	} 
	else{ 
		controller="imgControll('"+img+"')"; 
		intervalID=setTimeout(controller,20); 
	} 
	}
	function viewImage(img){ 
	W=img1.width; 
	H=img1.height; 
	O="width="+W+",height="+H+",scrollbars=yes"; 
	imgWin=window.open("","",O); 
	imgWin.document.write("<html><head><title>이미지 상세보기</title></head>");
	imgWin.document.write("<body topmargin=0 leftmargin=0>");
	imgWin.document.write("<img src="+img+" onclick='self.close()' style='cursor:pointer;' title ='클릭하시면 창이 닫힙니다.'>");
	imgWin.document.close();
	}