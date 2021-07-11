
// team1_stylesheet_on
function team1_stylesheet_on(){
    var linkNode = document.getElementsByTagName('link')[11];
    linkNode.parentNode.removeChild(linkNode);
    var cssId = 'myCss2';
    if (!document.getElementById(cssId))
    {
        var head  = document.getElementsByTagName('head')[0];
        var link  = document.createElement('link');
        link.id   = cssId;
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = '../_css/for_1on1/page04/an_p1.css';
        link.media = 'all';
        head.appendChild(link);
    }   
}

// team2_stylesheet_on
function team2_stylesheet_on(){
    var linkNode = document.getElementsByTagName('link')[11];
    linkNode.parentNode.removeChild(linkNode);
    var cssId = 'myCss3';
    if (!document.getElementById(cssId))
    {
        var head  = document.getElementsByTagName('head')[0];
        var link  = document.createElement('link');
        link.id   = cssId;
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = '../_css/for_1on1/page04/an_p2.css';
        link.media = 'all';
        head.appendChild(link);
    }  
}

// reset_gradient
function reset_gradient(){
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
        link.href = '../_css/for_1on1/page04/_reset.css';
        link.media = 'all';
        head.appendChild(link);
    } 
}