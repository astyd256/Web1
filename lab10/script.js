curtains = document.getElementById("curtains");
lamp_head = document.getElementById("lamp-head");
lamp_switch = document.getElementById("lamp-switch");
rabbit = document.getElementById("rabbit");
pigeon = document.getElementById("pigeon");
lightisoff = true;

curtains.onclick = function() {
    curtains.style.animation = " 1s ease-in-out 0s 1 slideback forwards";
};

lamp_head.onclick = function() {
    lamp_switch.style.animation = "0.1s ease-in-out 0s 1 SwitchOff forwards";
    if (lightisoff)
    {
        document.getElementById("triangle").style.animation = "0.2s ease-in-out 0s 1 LightOn forwards";
        lightisoff = false;
        document.getElementById("stage").style.animation = "0.2s ease-in-out 0s 1 StageIn forwards";
    }
    else
    {
        document.getElementById("triangle").style.animation = "0.2s ease-in-out 0s 1 LightOff forwards";
        lightisoff = true;
        document.getElementById("stage").style.animation = "0.2s ease-in-out 0s 1 StageOut forwards";
    }
}

lamp_head.onmousedown = function() {
    lamp_switch.style.animation = "0.1s ease-in-out 0s 1 SwitchOn forwards";
}

rabbit.onclick = function() {
    rabbit.style.animation = " 0.5s ease-in-out 0s 1 RabbitIn forwards";   
    pigeon.style.animation = " 0.5s ease-in-out 0s 1 PigeonOut forwards";  
}

pigeon.onclick = function() {
    pigeon.style.animation = " 0.5s ease-in-out 0s 1 PigeonIn forwards";   
    rabbit.style.animation = " 0.5s ease-in-out 0s 1 RabbitOut forwards";  
}

