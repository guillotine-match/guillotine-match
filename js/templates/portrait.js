function make_portrait(){
    let portrait = `

    <div class="winner_portrait_box0" id="portrait_box0_ID">
        <img    class="winner_portrait0" 
                src="../src/img/anon.jpg"
                onclick="doImgPop('../src/img/anon.jpg')"/>
    </div>

    <div id="team1box" style="display:none">
        <div id="team1ID">${t1_name} 승리!!</div>
        <div class="winner_portrait_box1" id="portrait_box1_ID">
            <img    class="winner_portrait1" 
                    src="../src/img/${page_num}/vic_team1.jpg"
                    onclick="doImgPop('../src/img/${page_num}/vic_team1.jpg')"/>
        </div>
    </div>

    <div id="team2box"  style="display:none">
        <div id="team2ID">${t2_name} 승리!!</div>
        <div class="winner_portrait_box2" id="portrait_box2_ID">
            <img    class="winner_portrait2" 
                    src="../src/img/${page_num}/vic_team2.jpg" 
                    onclick="doImgPop('../src/img/${page_num}/vic_team2.jpg')"/>
        </div>
    </div>


    `;
    document.write(portrait);
}
make_portrait();