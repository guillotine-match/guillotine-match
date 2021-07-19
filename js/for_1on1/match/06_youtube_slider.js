//  Youtube API 로드
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

/**
 * 필수 onYouTubeIframeAPIReady 함수
 * 플레이어 API에 대한 JavaScript 다운로드 완료 시 API가 이 함수 호출
 */
var player1;
var player2;

function onYouTubeIframeAPIReady() {

    player1 = new YT.Player('youtube_Iframe1', {
        height: '200',            // <iframe> 태그 지정시 필요없음
        width: '315',             // <iframe> 태그 지정시 필요없음
        videoId: youtube_vid_01,   // <iframe> 태그 지정시 필요없음
        playerVars: {             // <iframe> 태그 지정시 필요없음
            'autoplay':     0, // 자동재생
            'autohide':     2, // 재생컨트롤이 자동으로 사라질지 여부
            'rel':          0, // 재생 후 유사동영상 
            'controls':     1, // 재생컨트롤 노출여부
            // 'controls':     0, // 재생컨트롤 노출여부
            'playsinline':  1, // 현페이지에서 재생
            'showinfo':     0, // 뭔지 모름
            'cc_load_policy': 0, // 사용자가 자막 껐을 때 노출할지
            'modestbranding'    : 1,        // 유튜브 로고 제거
            'wmode': "opaque",              // 유튜브랑 겹치는 다른 div 위로
            'wmode': 'transparent',         // 뭔지 모름
            'showinfo': 0,
        }
    });

    player2 = new YT.Player('youtube_Iframe2', {
        height: '200',            // <iframe> 태그 지정시 필요없음
        width: '315',             // <iframe> 태그 지정시 필요없음
        videoId: youtube_vid_02,   // <iframe> 태그 지정시 필요없음
        playerVars: {             // <iframe> 태그 지정시 필요없음
            'autoplay':     0, // 자동재생
            'autohide':     2, // 재생컨트롤이 자동으로 사라질지 여부
            'rel':          0, // 재생 후 유사동영상 
            'controls':     1, // 재생컨트롤 노출여부
            // 'controls':     0, // 재생컨트롤 노출여부
            'playsinline':  1, // 현페이지에서 재생
            'showinfo':     0, // 뭔지 모름
            'cc_load_policy': 0, // 사용자가 자막 껐을 때 노출할지
            'modestbranding'    : 1,        // 유튜브 로고 제거
            'wmode': "opaque",              // 유튜브랑 겹치는 다른 div 위로
            'wmode': 'transparent',         // 뭔지 모름
            'showinfo': 0,
        }
    });
}

function playYoutube() {
    // 플레이어 자동실행 (주의: 모바일에서는 자동실행되지 않음)
    if(m1>m2){player1.playVideo();}
    if(m1<m2){player2.playVideo();}
}
function pauseYoutube() {
    if(m1>m2){player1.pauseVideo();}
    if(m1<m2){player2.pauseVideo();}
}
function stopYoutube() {
    if(m1>m2){player1.seekTo(0, true);     // 영상의 시간을 0초로 이동시킨다.
        player1.stopVideo();}
    if(m1<m2){player2.seekTo(0, true);     // 영상의 시간을 0초로 이동시킨다.
        player2.stopVideo();}
}


// 볼륨 슬라이더
function volchange(){
    player1.setVolume(x);
    player2.setVolume(x);
}

function mobileChange(){
    player1.setVolume(x);
    player2.setVolume(x);
    alert();
}

const Vol = setInterval(volchange, 50);
let mousePosition=0;

function volchange2(){
    while(mousePosition==0){
        clearInterval(Vol);
    }
}

function mouseout(){
    mousePosition=1;
}

// 슬라이더 생성
var slider = document.getElementById("myRange");

// x 값 텍스트로 내보내기
var output = document.getElementById("value");
output.innerHTML = slider.value;
slider.oninput = function() {
output.innerHTML = this.value;
}

// x값 시작값에 대입
var start_value = slider.getAttribute("value");
var x = start_value;

// x값 이동에 따른 색상 부여
var color = 'linear-gradient(90deg, rgb(117, 252, 117)' + x + '% , rgb(214, 214, 214)' + x + '%)';
slider.style.background = color;

// 슬라이더의 x값 변경에 대한 event listener를
// 접속 가능한 기기별로 등록 (마우스, 터치)

slider.addEventListener("mousemove", xmove);
slider.addEventListener("touchmove", xmove);
slider.addEventListener("touchend", xmove);

function xmove (){
    x = slider.value;
    color = 'linear-gradient(90deg, rgb(117, 252, 117)' + x + '% , rgb(214, 214, 214)' + x + '%)';
    slider.style.background = color;
}






// 슬라이더 생성
var slider2 = document.getElementById("myRange");

// y 값 텍스트로 내보내기
var output2 = document.getElementById("value");
output.innerHTML = slider.value;
slider2.oninput = function() {
output.innerHTML = this.value;
}

// y값 시작값에 대입
var start_value2 = slider.getAttribute("value");
var y = start_value2;

// y값 이동에 따른 색상 부여
var color = 'linear-gradient(90deg, rgb(117, 252, 117)' + y + '% , rgb(214, 214, 214)' + y + '%)';
slider.style.background = color;

// 슬라이더의 y값 변경에 대한 event listener를
// 접속 가능한 기기별로 등록 (마우스, 터치)

slider.addEventListener("mousemove", ymove);
slider.addEventListener("touchmove", ymove);
function ymove (){
    y = slider.value;
    color = 'linear-gradient(90deg, rgb(117, 252, 117)' + y + '% , rgb(214, 214, 214)' + y + '%)';
    slider.style.background = color;
}
