

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
    back_forward = document.getElementById("back_forward");
    
    // sound ------- audio_click
    audio_click = document.getElementById("audio_click");

    
    // portrait Boxes
    anonBox = document.getElementById("portrait_box0_ID"); 
    team1box = document.getElementById("team1box"); 
    team2box = document.getElementById("team2box"); 
    
    sboxList = document.getElementsByClassName("shifting_boxes");
    total_match = sboxList.length;

    current_Box  = document.getElementById("current_Box");
    selected_Box = document.getElementById("selected_Box");


    // 처음 박스 시프터 함수 작동 시에는 1번 외 shiftbox 를 display none 한다
    boxShifter();
}

function ShowBoxIdx(){
    current_Box.innerHTML =('#'+(matchIndex+1));
    selected_Box.innerHTML=(selected_Box_num+'/'+total_match+' done');
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

