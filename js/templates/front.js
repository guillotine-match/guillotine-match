function make_front(){
    let front = `
    <div class="battleTag">
        <br><h2>${battleTag}</h2><br>
    </div>

    <div class="battleTag_sub ">
        <h3>${battleTag} 단두대 매치</h3>
    </div>

    <div class="imgbundle" >
        <div class="imgbox">
            <div class="box1">
                <img src="../src/img/${page_num}/team1.jpg" 
                onmouseenter="zoomIn(event)" 
                onmouseleave="zoomOut(event)" 
                onclick="doImgPop('../src/img/${page_num}/team1.jpg')"/>
            </div>
            <div class="emptyBox"></div>
            <div class="box2">
                <img src="../src/img/${page_num}/team2.jpg" 
                onmouseenter="zoomIn(event)" 
                onmouseleave="zoomOut(event)" 
                onclick="doImgPop('../src/img/${page_num}/team2.jpg')"/>
            </div>
        </div>
        <div class="anchorExplain">
            대전 방식을 선택해 주세요
        </div>
        <div class="anchorBtnArea">
            <button onclick="toGuillotine()">단두대 매치</button>&nbsp;
            <button onclick="toQuickplay()">빠른 대전</button>
        </div>
    </div>

    `;
    document.write(front);
}
make_front();