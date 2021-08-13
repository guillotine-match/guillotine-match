let sbox_temp=document.getElementById("sbox");

    let sbox_title=`
                    <div class="guillotine_Match" id="Guillotine">
                    <div class="match_title">단두대 매치</div>
                    <div id=current_Box></div>
                    <div id=selected_Box></div>
    `;
    sbox_temp.innerHTML = sbox_title;

    for(let i=0; i<sbox_num; i++){sarr[i]='';}
    for(i=0; i<sbox_num; i++){
        sarr[i] += 
        `
        <div class="shifting_boxes" id="${[i]}">
            <div class="fight_about">
                ${fight_about[i]}
            </div>
            <div class="match_ImageBox">
                <div class="Left_match_Imgbox">
                    <img src="../src/img/${page_num}/team1/${i+1}.jpg" 
                    class="tm1"
                    onmouseenter="zoomIn(event)" 
                    onmouseleave="zoomOut(event)" 
                    onclick="select(this.className)"/>
                </div>
                <div class="Right_match_Imgbox">
                    <img src="../src/img/${page_num}/team2/${i+1}.jpg" 
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
        sbox_temp.innerHTML+=sarr[i];
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
    sbox_temp.innerHTML+=sbox_bottom;