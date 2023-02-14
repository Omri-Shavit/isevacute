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
    pop = [
        new Audio('sounds/partyPopper.mp3'),
        new Audio('sounds/partyPopper.mp3'),
        new Audio('sounds/partyPopper.mp3'),
        new Audio('sounds/partyPopper.mp3')
    ],
    message = document.querySelector('.message'),
    wheelContainer = document.querySelector('.container'),
    title = document.querySelector('title'),
    favi = document.querySelector('link');

function celebrate(msg){
    title.innerHTML = msg;
    favi.href = 'favicon2.ico';
    message.innerHTML = msg;
    message.style.display = 'default';
    message.style.transform = 'translateY(0%)'; // translate it up to correct spot
    setTimeout(()=>{
        message.style.transform = 'translateY(200%)'; // hide message
    },3*1000);
    for (let i=0; i<1+Math.floor(2*Math.random()); i++){
        setTimeout(()=>{
            pop[i].play();
            confetti({
                particleCount: 100,
                angle: 60,
                spread: 55,
                origin: { x: 0 }
            });
        },1000*Math.random());
    }
    for (let i=0; i<1+Math.floor(2*Math.random()); i++){
        setTimeout(()=>{
            pop[i+2].play();
            confetti({
                particleCount: 100,
                angle: 120,
                spread: 55,
                origin: { x: 1 }
            });
        },1000*Math.random());
    }
}

function spin(){
    wheelSound.currentTime = 0; wheelSound.play();
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
setTimeout(()=>{
    wheelContainer.style.display = 'flex';
}, 4000);
setTimeout(()=>{
    wheelContainer.style.transform = 'translateY(0%)';
}, 4100);
