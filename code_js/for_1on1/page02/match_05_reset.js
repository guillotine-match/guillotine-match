// reset 버튼 클릭

function resetClicked(btn_id){
    
    // portrait reset
    portBox1.style.display = "block";
    portBox2.style.display = "none";
    portBox3.style.display = "none";

    // audio stop
    vic_sound1.pause();
    vic_sound2.pause();

    // radio reset
    for(i = 0; i < ele.length; i++) {
        if(ele[i].type == "radio") {
            ele [i] .checked = false;
        }
    }
    // 변수 리셋
    m1=0; m2=0; winner="an";
    


    // shift 박스 reset
    for( var i = 0; i < total_match; i++ ){
        let sboxes; 
        sboxes = sboxList.item(i); 
        sboxes.style.display="none";
    }
    let current_box; 
    current_box = sboxList.item(0); 
    current_box.style.display="block";
    matchIndex=0;

    // gradient CSS loading (reset)
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
        link.href = '../code_css/for_1on1/page02/_reset.css';
        link.media = 'all';
        head.appendChild(link);
    }  

    //  리셋 소리
    anchor.load();
    anchor.play();

    // scroll reset
    if(btn_id=='resetAll'){document.getElementById('Guillotine').scrollIntoView();} 

    //승리 텍스트 reset
    let mem1 = document.getElementById('team1ID');
    let mem2 = document.getElementById('team2ID');
    mem1.innerHTML = mem1.className;
    mem2.innerHTML = mem2.className;
    mem1.style.display = "none";
    mem2.style.display = "none";

    // audio display none
    audio_area_ID = document.getElementById("audio_area_ID"); 
    audio_area_ID.style.display="none";
}

