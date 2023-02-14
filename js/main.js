console.log(
    " ______        __                                                                              ________                     __  __  __ \n"+
    "|\\     \\      |  \\                                                                            |        \\                   |  \\|  \\|  \\\n"+
    " \\EEEEEE      | EE  ______  __     __   ______         __    __   ______   __    __           | EEEEEEEE__     __  ______  | EE| EE| EE\n"+
    "  | EE        | EE /      \\|  \\   /  \\ /      \\       |  \\  |  \\ /      \\ |  \\  |  \\          | EE__   |  \\   /  \\|      \\ | EE| EE| EE\n"+
    "  | EE        | EE|  EEEEEE\\\\EE\\ /  EE|  EEEEEE\\      | EE  | EE|  EEEEEE\\| EE  | EE          | EE  \\   \\EE\\ /  EE \\EEEEEE\\| EE| EE| EE\n"+
    "  | EE        | EE| EE  | EE \\EE\\  EE | EE    EE      | EE  | EE| EE  | EE| EE  | EE          | EEEEE    \\EE\\  EE /      EE \\EE \\EE \\EE\n"+
    " _| EE_       | EE| EE__/ EE  \\EE EE  | EEEEEEEE      | EE__/ EE| EE__/ EE| EE__/ EE __       | EE_____   \\EE EE |  EEEEEEE __  __  __ \n"+
    "|   EE \\      | EE \\EE    EE   \\EEE    \\EE     \\       \\EE    EE \\EE    EE \\EE    EE|  \\      | EE     \\   \\EEE   \\EE    EE|  \\|  \\|  \\\n"+
    " \\EEEEEE       \\EE  \\EEEEEE     \\E      \\EEEEEEE       _\\EEEEEEE  \\EEEEEE   \\EEEEEE | EE       \\EEEEEEEE    \\E     \\EEEEEEE \\EE \\EE \\EE\n"+
    "                                                      |  \\__| EE                     \\E                                                \n"+
    "                                                       \\EE    EE                                                                       \n"+
    "                                                        \\EEEEEE                                                                        "
)

let messages = [
    "Eva is absolutely cute!",
    "YES! Eva is cute.",
    "Eva is completely cute!",
    "Eva is beyond cute!",
    "Eva is positively cute!",
    "Eva is certainly cute!",
    "Eva sure is cute!",
    "Eva is definitely cute.",
    "Eva is totally cute!",
    "Eva is extremely cute!",
    "Eva is the cutest!",
    "Eva is very cute!",
]

let wheel = document.querySelector('.spinner'),
    spinBtn = document.querySelector('.spinBtn'),
    fullRotations = 0,
    whichGreen = 0,
    epsilon = 0,
    wheelSound = new Audio('sounds/prizeWheel.mp3'),
    spinSound = new Audio('sounds/partyPopper.mp3');

function celebrate(msg){
    document.getElementsByTagName('title')[0].innerHTML = msg;
    document.getElementsByTagName('link')[0].href = 'favicon2.ico';
    console.log(msg);
}

function spin(){
    wheelSound.play();
    fullRotations += Math.floor(2*Math.random()) + 2; // between 2-4 full rotations
    whichGreen = Math.floor(12*Math.random());
    epsilon = Math.floor(120*Math.random()-60)/10;
    let theta = 360 * fullRotations + 30 * whichGreen + epsilon;
    wheel.style.transform = `rotate(${theta}deg)`;
    setTimeout(((uuid,idx)=>{
    let myId = uuid;
    let myIdx = idx;
    return ()=>{
        if (fullRotations === myId){
            celebrate(messages[myIdx]);
        }
    }})(fullRotations, whichGreen),5*1000);
}

spinBtn.onclick = spin;
