function makeList_qrow(){
    for(let i=0; i<sbox_num; i++){arr[i]='';}
    for(i=0; i<sbox_num; i++){
        arr[i] += 
        `
        <div class="q_row">
            <div class="numbering">&nbsp;${i+1}.</div><div class="queries"> ${fight_about[i]} </div>
            <div class="radios">
                <div class="tabButton">
                    <li><input type="radio" name="qstion${i}" onclick="func(this.name); func2(this.className);" class="member1" id="y${i}"><label for="y${i}">${LP_name[i]}</label></li>
                    <li><input type="radio" name="qstion${i}" onclick="func(this.name); func2(this.className);" class="member2" id="n${i}"><label for="n${i}">${RP_name[i]}</label></li>
                </div>
            </div>
        </div><hr>
        `
        document.write(arr[i]);
    }
}
makeList_qrow();