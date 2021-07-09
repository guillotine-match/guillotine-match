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
}