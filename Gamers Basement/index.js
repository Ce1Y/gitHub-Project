const CSGOTeam = ['Astralis', 'G2 Esports', 'Natus Vincere', 'Team Liquid', 'Team Vitality'];
const VALORANTeam = ['Acend', 'Fnatic', 'Gambit', 'SENTINELS', 'Team Liquid']
const apexPlayerImg = ['Aceu.png'];
const CSGOPlayerImg = ['blameF.png', 'gla1ve.png', 'k0nfig.png', 'Lucky.png', 'Xyp9x.png',
    'EliGE.png', 'FalleN.png', 'grim.png', 'NAF.png', 'Stewie2k.png',
    'AmaNEk.png', 'huNter.png', 'JACKZ.png', 'kennyS.png', 'Niko.png',
    'b1t.png', 'Boombl4.png', 'electronic.png', 'Perfecto.png', 's1mple.png',
    'apex.png', 'kyojin.png', 'misutaaa.png', 'shox.png', 'ZywOo.png'
];
const ValorantPlayerImg = [''];

let apexplayer01, apexplayer02, apexplayer03, apexplayer04, apexplayer05;
let csgoplayer01, csgoplayer02, csgoplayer03, csgoplayer04, csgoplayer05;
let valorantplayer01, valorantplayer02, valorantplayer03, valorantplayer04, valorantplayer05;
let searchResults;
let apex_NRG, apex_TSM, apex_TeamLiquid, apex_Cloud9, apex_G2;
//////////////////////////////////////////////////////////
let csgo_NatusVincere, csgo_G2Esports, csgo_Astralis, csgo_TeamVitality, csgo_TeamLiquid;
let valorant_Acend, valorant_Fnatic, valorant_Gambit, valorant_SENTINELS, valorant_TeamLiquid;
let visit = new Array(25);

function apex_random_select() {
    for (var i = 0; i < 5; i++) {
        //    
    }
    apexplayer01 = document.getElementById("apexplayer01");
    apexplayer01.src = 'srcpack/Apex_Gamers/Aceu.png';



}

function csgo_random_select() {
    for (var i = 0; i < 25; i++)
        visit[i] = 0;
    for (var i = 0; i < 5; i++) {
        var Team_number = Math.floor(Math.random() * 5)
        if (Team_number == 0) {

        }
        else if (Team_number == 1) {

        }
        else if (Team_number == 2) {
            while (1) {
                var Player_number = Math.floor(10 + Math.random() * 5); //10~14
                if (visit[Player_number] != 1) {
                    visit[Player_number] = 1;
                    var img = document.getElementById("csgoplayer0" + idnum);
                    img.src = 'srcpack/CSGO_Gamers/' + CSGOTeam[2] + CSGOPlayerImg[Player_number] ;
                    var name= document.getElementById("csgoplayer0" + idnum +"_name");
                    name.setAttribute("href", apexPlayerImg[number] + '.html');
                    ///.innerHTML = apexPlayerImg[number];
                    break;
                }
            }
        }
        else if (Team_number == 3) {

        }
        else if (Team_number == 4) {

        }

    }




    csgoplayer01 = document.getElementById("csgoplayer01");
    csgoplayer01.src = 'srcpack/CSGO_Gamers/'; //+ "" + CSGOPlayerImg[0] + "" 'srcpack/CSGO_Gamers/blameF.png'
    /*csgoplayer02 = document.getElementById("csgoplayer02");
    csgoplayer02.src = 'srcpack/CSGO_Gamers/' + '';
    csgoplayer03 = document.getElementById("csgoplayer03");
    csgoplayer03.src = 'srcpack/CSGO_Gamers/' + '';
    csgoplayer04 = document.getElementById("csgoplayer04");
    csgoplayer04.src = 'srcpack/CSGO_Gamers/' + '';
    csgoplayer05 = document.getElementById("csgoplayer05");
    csgoplayer05.src = 'srcpack/CSGO_Gamers/' + '';*/

}

function valorant_random_select() {
    valorantplayer01 = document.getElementById("valorantplayer01");
    valorantplayer01.src = 'srcpack/VALORANT_Gamers/' + '';
    valorantplayer02 = document.getElementById("valorantplayer02");
    valorantplayer02.src = 'srcpack/VALORANT_Gamers/' + '';
    valorantplayer03 = document.getElementById("valorantplayer03");
    valorantplayer03.src = 'srcpack/VALORANT_Gamers/' + '';
    valorantplayer04 = document.getElementById("valorantplayer04");
    valorantplayer04.src = 'srcpack/VALORANT_Gamers/' + '';
    valorantplayer05 = document.getElementById("valorantplayer05");
    valorantplayer05.src = 'srcpack/VALORANT_Gamers/' + '';

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

function valorantBtnClick() {
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
    apex_NRG.addEventListener("click", function () { document.getElementById("apexTeamBtn").innerHTML = "NRG" }, false);
    apex_TSM = document.getElementById("apex_TSM");
    apex_TSM.addEventListener("click", function () { document.getElementById("apexTeamBtn").innerHTML = "Team SoloMid" }, false);
    apex_TeamLiquid = document.getElementById("apex_TeamLiquid");
    apex_TeamLiquid.addEventListener("click", function () { document.getElementById("apexTeamBtn").innerHTML = "Team Liquid" }, false);
    apex_Cloud9 = document.getElementById("apex_Cloud9");
    apex_Cloud9.addEventListener("click", function () { document.getElementById("apexTeamBtn").innerHTML = "Cloud9" }, false);
    apex_G2 = document.getElementById("apex_G2");
    apex_G2.addEventListener("click", function () { document.getElementById("apexTeamBtn").innerHTML = "G2 Esports" }, false);
}

function search() {
    //TODO
}

function start() {
    apexBtnClick();
    csgoBtnClick();
    valorantBtnClick();
    apex_random_select();
    csgo_random_select();
    valorant_random_select();
}

window.addEventListener("load", start, false)