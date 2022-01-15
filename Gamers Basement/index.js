
const apexPlayerImg = ['Aceu.png'];
const CSGOPlayerImg = ['AmaNEk.png'];
let apexplayer01, apexplayer02, apexplayer03, apexplayer04, apexplayer05;
let csgoplayer01, csgoplayer02, csgoplayer03, csgoplayer04, csgoplayer05;
let valorantplayer01, valorantplayer02, valorantplayer03, valorantplayer04, valorantplayer05;
let searchResults;
let apex_NRG, apex_TSM, apex_TeamLiquid, apex_Cloud9, apex_G2;

function apex_random_select() {
    for(var i=0; i<5; i++) {
        //    
    }
    apexplayer01 = document.getElementById("apexplayer01");
    apexplayer01.src = 'srcpack/Apex_Gamers/Aceu.png';
    
}

function csgo_random_select() {

}

function valorant_random_select() {

}

function apexBtnClick() {
    apex_NRG = document.getElementById("apex_NRG");
    apex_NRG.addEventListener("click", function(){document.getElementById("apexTeamBtn").innerHTML = "NRG"}, false);
    apex_TSM = document.getElementById("apex_TSM");
    apex_TSM.addEventListener("click", function(){document.getElementById("apexTeamBtn").innerHTML = "Team SoloMid"}, false);
    apex_TeamLiquid = document.getElementById("apex_TeamLiquid");
    apex_TeamLiquid.addEventListener("click", function(){document.getElementById("apexTeamBtn").innerHTML = "Team Liquid"}, false);
    apex_Cloud9 = document.getElementById("apex_Cloud9");
    apex_Cloud9.addEventListener("click", function(){document.getElementById("apexTeamBtn").innerHTML = "Cloud9"}, false);
    apex_G2 = document.getElementById("apex_G2");
    apex_G2.addEventListener("click", function(){document.getElementById("apexTeamBtn").innerHTML = "G2 Esports"}, false);
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