// 실시간 멤버 점수 조회
function func(e){
    let k1=0;
    let k2=0;
    for(i = 0; i < ele.length; i++) {
        if(ele[i].type == "radio") {

            if (ele[i].className == "member1"){
                if((ele[i].checked)){
                    k1++;
                }
            }
            else if (ele[i].className == "member2"){
                if((ele[i].checked)){
                    k2++;
                }
            }
        }
    }
    m1=k1;
    m2=k2;
}
function func2(e){ //라디오버튼 클릭시 이벤트
    
    // 라디오버튼 클릭음
    if(e=="member1"){
        selected1.load();
        selected1.play();
    }
    else if(e=="member2"){
        selected2.load();
        selected2.play();
    } 
    // portrait reset
    portBox1.style.display = "block";
    portBox2.style.display = "none";
    portBox3.style.display = "none";

    // audio stop
    vic_sound1.pause();
    vic_sound2.pause();

    document.styleSheets[1].disabled = true; //player1
    document.styleSheets[2].disabled = true; //player2
}