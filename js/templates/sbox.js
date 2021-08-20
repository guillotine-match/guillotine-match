    makeList_sbox();

function makeList_sbox(){

    let sbox_title=`
                    <div class="guillotine_Match" id="Guillotine">
                    <div class="match_title">단두대 매치</div>
                    <div id=current_Box></div>
                    <div id=selected_Box></div>
    `;
    document.write(sbox_title);

    // 768px 이하 스크린에서는 확대 버튼이 없음
    if (matchMedia("screen and (max-width: 768px)").matches) {
        for(let i=0; i<sbox_num; i++){arr[i]='';}
        for(i=0; i<sbox_num; i++){
            arr[i] += 
            `
            <div class="shifting_boxes" id="${[i]}">
                <div class="fight_about">
                    ${fight_about[i]}
                </div>
                <div class="match_ImageBox">
                    <div class="Left_match_Imgbox">
                        <img src="../src/img/${page_num}/team1/${i+1}.jpg"
                        id="p1_${i}"
                        class="tm1"
                        onmouseenter="zoomIn(event)" 
                        onmouseleave="zoomOut(event)" 
                        onclick="select(this.className)"/>
                    </div>
                    <div class="Right_match_Imgbox">
                        <img src="../src/img/${page_num}/team2/${i+1}.jpg" 
                        id="p2_${i}"
                        class="tm2"
                        onmouseenter="zoomIn(event)" 
                        onmouseleave="zoomOut(event)" 
                        onclick="select(this.className)"/>
                    </div>
                </div>
                <div class="Left_palyer_name">  ${LP_name[i]} </div>
                <div class="Right_palyer_name"> ${RP_name[i]} </div>
            </div>
            `
            document.write(arr[i]);
        }
    }

    // 769px 이상 스크린에서는 확대 버튼이 있음
    if (matchMedia("screen and (min-width: 769px)").matches) {
        for(let i=0; i<sbox_num; i++){arr[i]='';}
        for(i=0; i<sbox_num; i++){
            arr[i] += 
            `
            <div class="shifting_boxes" id="${[i]}" style="display:none">
                <div class="fight_about">
                    ${fight_about[i]}
                </div>
                <div class="match_ImageBox">
                    <div class="Left_match_Imgbox">
                        <div class="popUpIcon1" id="popUpIcon1ID"><img src="../src/img/iconbox/scale-up.png" onclick="LscaleUp(this.id)" id="s1_${i}"></div>
                        <img src="../src/img/${page_num}/team1/${i+1}.jpg"
                        id="p1_${i}"
                        class="tm1"
                        onmouseenter="zoomIn(event)" 
                        onmouseleave="zoomOut(event)" 
                        onclick="select(this.className)"/>
                    </div>
                    <div class="Right_match_Imgbox">
                        <div class="popUpIcon2" id="popUpIcon2ID"><img src="../src/img/iconbox/scale-up.png" onclick="RscaleUp(this.id)" id="s1_${i}"></div>
                        <img src="../src/img/${page_num}/team2/${i+1}.jpg" 
                        id="p2_${i}"
                        class="tm2"
                        onmouseenter="zoomIn(event)" 
                        onmouseleave="zoomOut(event)" 
                        onclick="select(this.className)"/>
                    </div>
                </div>
                <div class="Left_palyer_name">  ${LP_name[i]} </div>
                <div class="Right_palyer_name"> ${RP_name[i]} </div>
            </div>
            `
            document.write(arr[i]);
        }
    }

    let sbox_bottom=`
    <!-- 버튼 Area 시작 -->
    <div class="area_for_6_button">
        <div class="match_control_area">
            <button class="match_controller" onclick="go_back();">&lt;</button>
            <button class="match_controller" onclick="showResult();">승부</button>
            <button class="match_controller" onclick="resetClicked(this.id)" id="resetG">리셋</button>
            <button class="match_controller" onclick="go_next();">&gt;</button>
        </div>
    </div>
</div>
    `;
    document.write(sbox_bottom);
}

function LscaleUp(sid){
    let tempString = sid.substring(3,);
    doImgPop(`../src/img/${page_num}/team1/${Number(tempString)+1}.jpg`);
}

function RscaleUp(sid){
    let tempString = sid.substring(3,)
    doImgPop(`../src/img/${page_num}/team2/${Number(tempString)+1}.jpg`);
}