

// 첫 실행 함수
function init() { 
    // 모든 input 요소 ele 객체로 반환
    ele = document.getElementsByTagName('input');

    result_Btn  = document.getElementById("resultbutton");
    refresh_Btn = document.getElementById('newPagebtn');

    // sound ------- guillotine/radio : select sound
    selected1 = document.getElementById("selected1");
    selected2 = document.getElementById("selected2");

    // sound ------- anchor move button
    anchor = document.getElementById("anchor");

    // sound ------- victory_sound
    vic_sound1 = document.getElementById("vic_sound1");
    vic_sound2 = document.getElementById("vic_sound2");

    // sound ------- reset + match
    reset_sound = document.getElementById("rewind");
    match_sound = document.getElementById("bladecut");

    // sound ------- guillotine : back - forward
    back_forward_1 = document.getElementById("back_forward_1");
    back_forward_2 = document.getElementById("back_forward_2");
    
    // sound ------- audio_click
    audio_click = document.getElementById("audio_click");

    
    // portraitBoxes
    portBox1 = document.getElementById("portrait_box0_ID"); 
    portBox2 = document.getElementById("portrait_box1_ID"); 
    portBox3 = document.getElementById("portrait_box2_ID"); 
    
    // audio display 
    audio_area_ID = document.getElementById("audio_area_ID"); 
    audio_area_ID.style.display="none";
    
    sboxList = document.getElementsByClassName("shifting_boxes");
    total_match = sboxList.length;

    // 처음 박스 시프터 함수 작동 시에는 1번 외 shiftbox 를 display none 한다
    boxShifter();
}

function toGuillotine(){
    anchor.load();
    anchor.play();
    document.getElementById('Guillotine').scrollIntoView();
}

function toQuickplay(){
    anchor.load();
    anchor.play();
    document.getElementById('QuickPlay').scrollIntoView();
}
