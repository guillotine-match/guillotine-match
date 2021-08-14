function make_nav(){
    let nav = 
    `
    <nav>
        <div class="links Jua" OnClick="location.href ='topmenu01.html'"><h3>공지사항</h3></div>
        <div class="links Jua" OnClick="location.href ='topmenu02.html'"><h3>업데이트</h3></div>
        <div class="links Jua" OnClick="location.href ='topmenu03.html'"><h3>Abou Us </h3></div>
        <div class="links Jua" OnClick="location.href ='topmenu04.html'"><h3>컨텐츠 건의</h3></div>
        <div class="links Jua" OnClick="location.href ='topmenu05.html'"><h3>커뮤니티</h3></div>
        <div class="links Jua" OnClick="location.href ='topmenu06.html'"><h3>Reference</h3></div>
    </nav>
    `;
    document.write(nav);
}
make_nav();