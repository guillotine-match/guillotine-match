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
    selected_Box_num=m1+m2;
    boxShifter();
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

    //  reset
    anonBox.style.display = "block";
    team1box.style.display = "none";
    team2box.style.display = "none";

    reset_gradient();
    
    // youtube reset
    player1.stopVideo();
    player2.stopVideo();
    youtubeBox.style.display = "none";	// 
    youtube_Iframe1.style.display = "none";	// 
    youtube_Iframe2.style.display = "none";	// 
}

