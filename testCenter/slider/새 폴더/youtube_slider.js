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
let m1=2;
let m2=3;
let youtube_video_ID1 = 'ntPf8AWw05A';
let youtube_video_ID2 = '31Rp5LemYeA';

function onYouTubeIframeAPIReady() {
    player1 = new YT.Player('youtube_Iframe1', {
        height: '200',            // <iframe> 태그 지정시 필요없음
        width: '315',             // <iframe> 태그 지정시 필요없음
        videoId: youtube_video_ID1,   // <iframe> 태그 지정시 필요없음
        playerVars: {             // <iframe> 태그 지정시 필요없음
            'autoplay':     0, // 자동재생
            'autohide':     2, // 재생컨트롤이 자동으로 사라질지 여부
            'rel':          0, // 재생 후 유사동영상 
            'controls':     1, // 재생컨트롤 노출여부
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
        videoId: youtube_video_ID2,   // <iframe> 태그 지정시 필요없음
        playerVars: {             // <iframe> 태그 지정시 필요없음
            'autoplay':     0, // 자동재생
            'autohide':     2, // 재생컨트롤이 자동으로 사라질지 여부
            'rel':          0, // 재생 후 유사동영상 
            'controls':     1, // 재생컨트롤 노출여부
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
var played = false;
function collectPlayCount(data) {
    if (data == YT.PlayerState.PLAYING && played == false) {
        // todo statistics
        played = true;
        console.log('statistics');
    }
}

// 볼륨 슬라이더
function volchange(){
    player1.setVolume(x);
    player2.setVolume(x);
}

const Vol = setInterval(volchange, 100);
let mousePosition=0;

function volchange2(){
    while(mousePosition==0){
        clearInterval(Vol);
    }
}

function mouseout(){
    mousePosition=1;
}

// 슬라이더 x 값 변화
var slider = document.getElementById("myRange");
var output = document.getElementById("value");

output.innerHTML = slider.value;

slider.oninput = function() {
output.innerHTML = this.value;
}

var start_value = slider.getAttribute("value");

var x = start_value;
var color = 'linear-gradient(90deg, rgb(117, 252, 117)' + x + '% , rgb(214, 214, 214)' + x + '%)';
slider.style.background = color;

slider.addEventListener("mousemove", function() {
    x = slider.value;
    color = 'linear-gradient(90deg, rgb(117, 252, 117)' + x + '% , rgb(214, 214, 214)' + x + '%)';
    slider.style.background = color;
});