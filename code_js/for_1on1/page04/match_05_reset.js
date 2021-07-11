// reset 버튼 클릭

function resetClicked(btn_id){

    //  reset_button_sound
    anchor.load();
    anchor.play();

    // reset 함수들
    portrait_reset();
    audio_stop();
    radio_reset();
    sbox_and_variable_reset();
    gradient_CSS_loading_reset();
    scroll_reset();
    winner_text_reset();
    audio_display_off();
} 

function portrait_reset(){
// portrait_reset
portBox1.style.display = "block";
portBox2.style.display = "none";
portBox3.style.display = "none";
}

function audio_stop(){
    vic_sound1.pause();
    vic_sound2.pause();
}
function radio_reset(){
    for(i = 0; i < ele.length; i++) {
        if(ele[i].type == "radio") {
            ele [i] .checked = false;
        }
    }
}
function sbox_and_variable_reset(){
    m1=0; m2=0; winner="an";
    matchIndex=0;
    selected_Box_num=0;
    ShowBoxIdx();
}

function gradient_CSS_loading_reset(){
    var linkNode = document.getElementsByTagName('link')[11];
    linkNode.parentNode.removeChild(linkNode);
    var cssId = 'myCss1';
    if (!document.getElementById(cssId))
    {
        var head  = document.getElementsByTagName('head')[0];
        var link  = document.createElement('link');
        link.id   = cssId;
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = '../code_css/for_1on1/page04/_reset.css';
        link.media = 'all';
        head.appendChild(link);
    }  
}


function scroll_reset(){
    if(btn_id=='resetAll'){
        document.getElementById('Guillotine').scrollIntoView();
    } 

}

function winner_text_reset(){
    let mem1 = document.getElementById('team1ID');
    let mem2 = document.getElementById('team2ID');
    mem1.innerHTML = mem1.className;
    mem2.innerHTML = mem2.className;
    mem1.style.display = "none";
    mem2.style.display = "none";
}

function audio_display_off(){
    audio_area_ID = document.getElementById("audio_area_ID"); 
    audio_area_ID.style.display="none";
}