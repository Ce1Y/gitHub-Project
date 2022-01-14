
const apexPlayerImg = ['Aceu.png'];
const CSGOPlayerImg = ['AmaNEk.png'];
let apexplayer01, apexplayer02, apexplayer03, apexplayer04, apexplayer05;
let csgoplayer01, csgoplayer02, csgoplayer03, csgoplayer04, csgoplayer05;
let valorantplayer01, valorantplayer02, valorantplayer03, valorantplayer04, valorantplayer05;
let searchResults;
let apexNRG, apexTSM, apexTeamLiquid, apexCloud9, apexG2;

function apex_random_select() {
    for(var i=0; i<5; i++) {
        //    
    }
    apexplayer01 = document.getElementById("apexplayer01");
    apexplayer01.src = 'srcpack/Apex_Gamers/Aceu.png';
    // apexNRG = document.getElementById("apexNRG");
    // apexNRG.addEventListener("click", function(){document.getElementById("apexTeamBtn").innerHTML = "NRG"}, false);
}

function csgo_random_select() {

}

function valorant_random_select() {

}

function apexBtnClick() {
    apexNRG = document.getElementById("apexNRG");
    apexNRG.addEventListener("click", function(){document.getElementById("apexTeamBtn").innerHTML = "NRG"}, false);
    apexTSM = document.getElementById("apexTSM");
    apexTSM.addEventListener("click", function(){document.getElementById("apexTeamBtn").innerHTML = "Team SoloMid"}, false);
    apexTeamLiquid = document.getElementById("apexTeamLiquid");
    apexTeamLiquid.addEventListener("click", function(){document.getElementById("apexTeamBtn").innerHTML = "Team Liquid"}, false);
    apexCloud9 = document.getElementById("apexCloud9");
    apexCloud9.addEventListener("click", function(){document.getElementById("apexTeamBtn").innerHTML = "Cloud9"}, false);
    apexG2 = document.getElementById("apexG2");
    apexG2.addEventListener("click", function(){document.getElementById("apexTeamBtn").innerHTML = "G2 Esports"}, false);
}

function search() {
    //TODO
}

function start(){
    apex_random_select();
    csgo_random_select();
    valorant_random_select();
    apexBtnClick();

}

window.addEventListener("load", start, false)