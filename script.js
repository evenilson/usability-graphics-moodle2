function show(graphic, token) {
    var height = document.getElementById(graphic).style.height;

    if(token){
        if(checkfyShowAll){
            document.getElementById(graphic).style.height = '146px';
        }
        else if (height == "146px") {
            document.getElementById(graphic).style.height = '0px';
            graphicsOpen -= 1;
            if (graphicsOpen < 3 & fullGraphics == false) {
                document.getElementById('close').style.display = 'none';
            }
        } else {
            document.getElementById(graphic).style.height = '146px';
            graphicsOpen += 1;
            if (graphicsOpen >= 3) {
                document.getElementById('close').style.display = 'flex';
            }
        }
    }else{ 
        document.getElementById(graphic).style.height = '0px';   
        fullGraphics = false;   
    }
}

var graphicsOpen = 0;
var checkfyShowAll = false;
var fullGraphics = false;


function mountElement(token){
    for (let i = 1; i <= 18; i++) {
        let newGraphic = (`graphic${i}`);

        show(newGraphic, token);
    }
    checkfyShowAll = false;
}

function showAll() {
    checkfyShowAll = true;
    fullGraphics = true;

    mountElement(true)
    
    document.getElementById('close').style.display = 'flex';
}

function closeAll() {
    mountElement(false)
    document.getElementById('show').style.display = 'flex';
    document.getElementById('close').style.display = 'none';

    graphicsOpen = 0;
}

