
const apexPlayerImg = ['Aceu.png'];
const CSGOPlayerImg = ['AmaNEk.png'];
let apexplayer01, apexplayer02, apexplayer03, apexplayer04, apexplayer05;
let csgoplayer01, csgoplayer02, csgoplayer03, csgoplayer04, csgoplayer05;
let valorantplayer01, valorantplayer02, valorantplayer03, valorantplayer04, valorantplayer05;
let searchResults;
let apex_NRG, apex_TSM, apex_TeamLiquid, apex_Cloud9, apex_G2;
//////////////////////////////////////////////////////////
let csgo_NatusVincere, csgo_G2Esports, csgo_Astralis, csgo_TeamVitality, csgo_TeamLiquid;
let valorant_Acend, valorant_Fnatic, valorant_Gambit, valorant_SENTINELS, valorant_TeamLiquid;


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

function csgoBtnClick() {
    csgo_NatusVincere = document.getElementById("csgo_NatusVincere");
    csgo_NatusVincere.addEventListener("click", function () { document.getElementById("csgoTeamBtn").innerHTML = "Natus Vincere" }, false);
    csgo_G2Esports = document.getElementById("csgo_G2Esports");
    csgo_G2Esports.addEventListener("click", function () { document.getElementById("csgoTeamBtn").innerHTML = "G2 Esports" }, false);
    csgo_Astralis = document.getElementById("csgo_Astralis");
    csgo_Astralis.addEventListener("click", function () { document.getElementById("csgoTeamBtn").innerHTML = "Astralis" }, false);
    csgo_TeamVitality = document.getElementById("csgo_TeamVitality");
    csgo_TeamVitality.addEventListener("click", function () { document.getElementById("csgoTeamBtn").innerHTML = "Team Vitality" }, false);
    csgo_TeamLiquid = document.getElementById("csgo_TeamLiquid");
    csgo_TeamLiquid.addEventListener("click", function () { document.getElementById("csgoTeamBtn").innerHTML = "Team Liquid" }, false);
}

function valorantBtnClick(){
    valorant_Acend = document.getElementById("valorant_Acend");
    valorant_Acend.addEventListener("click", function () { document.getElementById("valorantTeamBtn").innerHTML = "Acend" }, false);
    valorant_Fnatic = document.getElementById("valorant_Fnatic");
    valorant_Fnatic.addEventListener("click", function () { document.getElementById("valorantTeamBtn").innerHTML = "Fnatic" }, false);
    valorant_Gambit = document.getElementById("valorant_Gambit");
    valorant_Gambit.addEventListener("click", function () { document.getElementById("valorantTeamBtn").innerHTML = "Gambit" }, false);
    valorant_SENTINELS = document.getElementById("valorant_SENTINELS");
    valorant_SENTINELS.addEventListener("click", function () { document.getElementById("valorantTeamBtn").innerHTML = "SENTINELS" }, false);
    valorant_TeamLiquid = document.getElementById("valorant_TeamLiquid");
    valorant_TeamLiquid.addEventListener("click", function () { document.getElementById("valorantTeamBtn").innerHTML = "Team Liquid" }, false);


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
    apexBtnClick();
    csgoBtnClick();
    valorantBtnClick();
    apex_random_select();
    csgo_random_select();
    valorant_random_select();
}

window.addEventListener("load", start, false)