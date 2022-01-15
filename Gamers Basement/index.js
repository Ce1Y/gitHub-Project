const apexTeam = [];
const csgoTeam = ['Astralis', 'G2 Esports', 'Natus Vincere', 'Team Liquid', 'Team Vitality'];
const valorantTeam = ['Acend', 'Fnatic', 'Gambit', 'SENTINELS', 'Team Liquid']
const apexPlayerImg = ['Aceu'];
const csgoPlayerImg = [
        'blameF', 'gla1ve', 'k0nfig', 'Lucky', 'Xyp9x',
        'AmaNEk', 'huNter', 'JACKZ', 'kennyS', 'Niko',
        'b1t', 'Boombl4', 'electronic', 'Perfecto', 's1mple',
        'EliGE', 'FalleN', 'grim', 'NAF', 'Stewie2k',
        'csgo_apex', 'kyojin', 'misutaaa', 'shox', 'ZywOo'
      ];
const valorantPlayerImg = [
        'bonecold', 'cned', 'kiles', 'starxo', 'zeek',
        'boaster', 'Derke', 'Doma', 'Magnum', 'mistic',
        'Chronicle', 'd3ffo', 'nats', 'redgar', 'Sheydos',
        'dapr', 'shahzam', 'sinatraa', 'tenz', 'zombs',
        'jamppi', 'kryptix', 'l1nk', 'scream', 'soulcas'
      ];

let apexplayer01, apexplayer02, apexplayer03, apexplayer04, apexplayer05;
let csgoplayer01, csgoplayer02, csgoplayer03, csgoplayer04, csgoplayer05;
let valorantplayer01, valorantplayer02, valorantplayer03, valorantplayer04, valorantplayer05;
let searchResults;
let apex_NRG, apex_TSM, apex_TeamLiquid, apex_Cloud9, apex_G2;
let csgo_NatusVincere, csgo_G2Esports, csgo_Astralis, csgo_TeamVitality, csgo_TeamLiquid;
let valorant_Acend, valorant_Fnatic, valorant_Gambit, valorant_SENTINELS, valorant_TeamLiquid;

function apex_random_select() {
  

}

function csgo_random_select() {
    var csgoVisit = new Array(25);
    var team_number, player_index;
    var img, name, introduction, href;
//  initialize
    for (var i = 0; i < 25; i++)
        csgoVisit[i] = 0;
//  randomly select image
    for (var i = 1; i <= 5; i++) {
      team_number = Math.floor(Math.random() * 5);
        switch(team_number) {
          case 0:
            while (1) {
              player_index = Math.floor(Math.random() * 5); //0~4
              if (csgoVisit[player_index] != 1) {
                csgoVisit[player_index] = 1;
                img = document.getElementById('csgoplayer0' + i + '_img');
                img.src = 'srcpack/CSGO_Gamers/' + csgoTeam[0] + '/' + csgoPlayerImg[player_index] + '.png';
                name = document.getElementById('csgoplayer0' + i + '_name');
                name.innerHTML = csgoPlayerImg[player_index];
                introduction = document.getElementById('csgoplayer0' + i + '_introduction');
                // introduction.innerHTML = //TODO
                href = document.getElementById('csgoplayer0' + i + '_href')
                href.setAttribute('href', csgoPlayerImg[player_index] + '.html');
                break;
              }
            }
            break;
          case 1:
            while (1) {
              player_index = Math.floor(5 + Math.random() * 5); //5~9
              if (csgoVisit[player_index] != 1) {
                csgoVisit[player_index] = 1;
                img = document.getElementById('csgoplayer0' + i + '_img');
                img.src = 'srcpack/CSGO_Gamers/' + csgoTeam[1] + '/' + csgoPlayerImg[player_index] + '.png';
                name = document.getElementById('csgoplayer0' + i + '_name');
                name.innerHTML = csgoPlayerImg[player_index];
                introduction = document.getElementById('csgoplayer0' + i + '_introduction');
                // introduction.innerHTML = //TODO
                href = document.getElementById('csgoplayer0' + i + '_href')
                href.setAttribute('href', csgoPlayerImg[player_index] + '.html');
                break;
              }
            }
            break;
          case 2:
            while (1) {
              player_index = Math.floor(10 + Math.random() * 5); //10~14
              if (csgoVisit[player_index] != 1) {
                csgoVisit[player_index] = 1;
                img = document.getElementById('csgoplayer0' + i + '_img');
                img.src = 'srcpack/CSGO_Gamers/' + csgoTeam[2] + '/' + csgoPlayerImg[player_index] + '.png';
                name = document.getElementById('csgoplayer0' + i + '_name');
                name.innerHTML = csgoPlayerImg[player_index];
                introduction = document.getElementById('csgoplayer0' + i + '_introduction');
                // introduction.innerHTML = //TODO
                href = document.getElementById('csgoplayer0' + i + '_href')
                href.setAttribute('href', csgoPlayerImg[player_index] + '.html');
                break;
              }
            }
            break;
          case 3:
            while (1) {
              player_index = Math.floor(15 + Math.random() * 5); //15~19
              if (csgoVisit[player_index] != 1) {
                csgoVisit[player_index] = 1;
                img = document.getElementById('csgoplayer0' + i + '_img');
                img.src = 'srcpack/CSGO_Gamers/' + csgoTeam[3] + '/' + csgoPlayerImg[player_index] + '.png';
                name = document.getElementById('csgoplayer0' + i + '_name');
                name.innerHTML = csgoPlayerImg[player_index];
                introduction = document.getElementById('csgoplayer0' + i + '_introduction');
                // introduction.innerHTML = //TODO
                href = document.getElementById('csgoplayer0' + i + '_href')
                href.setAttribute('href', csgoPlayerImg[player_index] + '.html');
                break;
              }
            }
            break;
          case 4:
            while (1) {
              player_index = Math.floor(20 + Math.random() * 5); //20~24
              if (csgoVisit[player_index] != 1) {
                csgoVisit[player_index] = 1;
                img = document.getElementById('csgoplayer0' + i + '_img');
                img.src = 'srcpack/CSGO_Gamers/' + csgoTeam[4] + '/' + csgoPlayerImg[player_index] + '.png';
                name = document.getElementById('csgoplayer0' + i + '_name');
                name.innerHTML = csgoPlayerImg[player_index];
                introduction = document.getElementById('csgoplayer0' + i + '_introduction');
                // introduction.innerHTML = //TODO
                href = document.getElementById('csgoplayer0' + i + '_href')
                href.setAttribute('href', csgoPlayerImg[player_index] + '.html');
                break;
              }
            }
            break;
        }
    }
}

function valorant_random_select() {
  var valorantVisit = new Array(25);
  var team_number, player_index;
  var img, name, introduction, href;
//  initialize
  for (var i = 0; i < 25; i++)
      valorantVisit[i] = 0;
//  randomly select image
  for (var i = 1; i <= 5; i++) {
    team_number = Math.floor(Math.random() * 5);
      switch(team_number) {
        case 0:
          while (1) {
            player_index = Math.floor(Math.random() * 5); //0~4
            if (valorantVisit[player_index] != 1) {
              valorantVisit[player_index] = 1;
              img = document.getElementById('valorantplayer0' + i + '_img');
              img.src = 'srcpack/Valorant_Gamers/' + valorantTeam[0] + '/' + valorantPlayerImg[player_index] + '.png';
              name = document.getElementById('valorantplayer0' + i + '_name');
              name.innerHTML = valorantPlayerImg[player_index];
              introduction = document.getElementById('valorantplayer0' + i + '_introduction');
              // introduction.innerHTML = //TODO
              href = document.getElementById('valorantplayer0' + i + '_href')
              href.setAttribute('href', valorantPlayerImg[player_index] + '.html');
              break;
            }
          }
          break;
        case 1:
          while (1) {
            player_index = Math.floor(5 + Math.random() * 5); //5~9
            if (valorantVisit[player_index] != 1) {
              valorantVisit[player_index] = 1;
              img = document.getElementById('valorantplayer0' + i + '_img');
              img.src = 'srcpack/Valorant_Gamers/' + valorantTeam[1] + '/' + valorantPlayerImg[player_index] + '.png';
              name = document.getElementById('valorantplayer0' + i + '_name');
              name.innerHTML = valorantPlayerImg[player_index];
              introduction = document.getElementById('valorantplayer0' + i + '_introduction');
              // introduction.innerHTML = //TODO
              href = document.getElementById('valorantplayer0' + i + '_href')
              href.setAttribute('href', valorantPlayerImg[player_index] + '.html');
              break;
            }
          }
          break;
        case 2:
          while (1) {
            player_index = Math.floor(10 + Math.random() * 5); //10~14
            if (valorantVisit[player_index] != 1) {
              valorantVisit[player_index] = 1;
              img = document.getElementById('valorantplayer0' + i + '_img');
              img.src = 'srcpack/Valorant_Gamers/' + valorantTeam[2] + '/' + valorantPlayerImg[player_index] + '.png';
              name = document.getElementById('valorantplayer0' + i + '_name');
              name.innerHTML = valorantPlayerImg[player_index];
              introduction = document.getElementById('valorantplayer0' + i + '_introduction');
              // introduction.innerHTML = //TODO
              href = document.getElementById('valorantplayer0' + i + '_href')
              href.setAttribute('href', valorantPlayerImg[player_index] + '.html');
              break;
            }
          }
          break;
        case 3:
          while (1) {
            player_index = Math.floor(15 + Math.random() * 5); //15~19
            if (valorantVisit[player_index] != 1) {
              valorantVisit[player_index] = 1;
              img = document.getElementById('valorantplayer0' + i + '_img');
              img.src = 'srcpack/Valorant_Gamers/' + valorantTeam[3] + '/' + valorantPlayerImg[player_index] + '.png';
              name = document.getElementById('valorantplayer0' + i + '_name');
              name.innerHTML = valorantPlayerImg[player_index];
              introduction = document.getElementById('valorantplayer0' + i + '_introduction');
              // introduction.innerHTML = //TODO
              href = document.getElementById('valorantplayer0' + i + '_href')
              href.setAttribute('href', valorantPlayerImg[player_index] + '.html');
              break;
            }
          }
          break;
        case 4:
          while (1) {
            player_index = Math.floor(20 + Math.random() * 5); //20~24
            if (valorantVisit[player_index] != 1) {
              valorantVisit[player_index] = 1;
              img = document.getElementById('valorantplayer0' + i + '_img');
              img.src = 'srcpack/Valorant_Gamers/' + valorantTeam[4] + '/' + valorantPlayerImg[player_index] + '.png';
              name = document.getElementById('valorantplayer0' + i + '_name');
              name.innerHTML = valorantPlayerImg[player_index];
              introduction = document.getElementById('valorantplayer0' + i + '_introduction');
              // introduction.innerHTML = //TODO
              href = document.getElementById('valorantplayer0' + i + '_href')
              href.setAttribute('href', valorantPlayerImg[player_index] + '.html');
              break;
            }
          }
          break;
      }
  }
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

function csgoBtnClick() {
    csgo_NatusVincere = document.getElementById("csgo_NatusVincere");
    csgo_NatusVincere.addEventListener("click", function () { 
      document.getElementById("csgoTeamBtn").innerHTML = "Natus Vincere";
      var csgoVisit = new Array(5);
      var player_index;
      var img, name, introduction, href;
      for(var i=0; i<5; i++)
        csgoVisit[i] = 0;
      for(var i=1; i<=5; i++)
        while(1) {
          player_index = Math.floor(10 + Math.random() * 5); //10~14
          if (csgoVisit[player_index] != 1) {
            csgoVisit[player_index] = 1;
            img = document.getElementById('csgoplayer0' + i + '_img');
            img.src = 'srcpack/CSGO_Gamers/' + csgoTeam[2] + '/' + csgoPlayerImg[player_index] + '.png';
            name = document.getElementById('csgoplayer0' + i + '_name');
            name.innerHTML = csgoPlayerImg[player_index];
            introduction = document.getElementById('csgoplayer0' + i + '_introduction');
            // introduction.innerHTML = //TODO
            href = document.getElementById('csgoplayer0' + i + '_href')
            href.setAttribute('href', csgoPlayerImg[player_index] + '.html');
            break;
          }
        }
    }, false);
    csgo_G2Esports = document.getElementById("csgo_G2Esports");
    csgo_G2Esports.addEventListener("click", function () { 
      document.getElementById("csgoTeamBtn").innerHTML = "G2 Esports";
      var csgoVisit = new Array(5);
      var player_index;
      var img, name, introduction, href;
      for(var i=0; i<5; i++)
        csgoVisit[i] = 0;
      for(var i=1; i<=5; i++)
        while(1) {
          player_index = Math.floor(5 + Math.random() * 5); //5~9
          if (csgoVisit[player_index] != 1) {
            csgoVisit[player_index] = 1;
            img = document.getElementById('csgoplayer0' + i + '_img');
            img.src = 'srcpack/CSGO_Gamers/' + csgoTeam[1] + '/' + csgoPlayerImg[player_index] + '.png';
            name = document.getElementById('csgoplayer0' + i + '_name');
            name.innerHTML = csgoPlayerImg[player_index];
            introduction = document.getElementById('csgoplayer0' + i + '_introduction');
            // introduction.innerHTML = //TODO
            href = document.getElementById('csgoplayer0' + i + '_href')
            href.setAttribute('href', csgoPlayerImg[player_index] + '.html');
            break;
          }
        }
    }, false);
    csgo_Astralis = document.getElementById("csgo_Astralis");
    csgo_Astralis.addEventListener("click", function () { 
      document.getElementById("csgoTeamBtn").innerHTML = "Astralis";
      var csgoVisit = new Array(5);
      var player_index;
      var img, name, introduction, href;
      for(var i=0; i<5; i++)
        csgoVisit[i] = 0;
      for(var i=1; i<=5; i++)
        while(1) {
          player_index = Math.floor(0 + Math.random() * 5); //0~4
          if (csgoVisit[player_index] != 1) {
            csgoVisit[player_index] = 1;
            img = document.getElementById('csgoplayer0' + i + '_img');
            img.src = 'srcpack/CSGO_Gamers/' + csgoTeam[0] + '/' + csgoPlayerImg[player_index] + '.png';
            name = document.getElementById('csgoplayer0' + i + '_name');
            name.innerHTML = csgoPlayerImg[player_index];
            introduction = document.getElementById('csgoplayer0' + i + '_introduction');
            // introduction.innerHTML = //TODO
            href = document.getElementById('csgoplayer0' + i + '_href')
            href.setAttribute('href', csgoPlayerImg[player_index] + '.html');
            break;
          }
        }
    }, false);
    csgo_TeamVitality = document.getElementById("csgo_TeamVitality");
    csgo_TeamVitality.addEventListener("click", function () { 
      document.getElementById("csgoTeamBtn").innerHTML = "Team Vitality";
      var csgoVisit = new Array(5);
      var player_index;
      var img, name, introduction, href;
      for(var i=0; i<5; i++)
        csgoVisit[i] = 0;
      for(var i=1; i<=5; i++)
        while(1) {
          player_index = Math.floor(20 + Math.random() * 5); //20~24
          if (csgoVisit[player_index] != 1) {
            csgoVisit[player_index] = 1;
            img = document.getElementById('csgoplayer0' + i + '_img');
            img.src = 'srcpack/CSGO_Gamers/' + csgoTeam[4] + '/' + csgoPlayerImg[player_index] + '.png';
            name = document.getElementById('csgoplayer0' + i + '_name');
            name.innerHTML = csgoPlayerImg[player_index];
            introduction = document.getElementById('csgoplayer0' + i + '_introduction');
            // introduction.innerHTML = //TODO
            href = document.getElementById('csgoplayer0' + i + '_href')
            href.setAttribute('href', csgoPlayerImg[player_index] + '.html');
            break;
          }
        }
    }, false);
    csgo_TeamLiquid = document.getElementById("csgo_TeamLiquid");
    csgo_TeamLiquid.addEventListener("click", function () { 
      document.getElementById("csgoTeamBtn").innerHTML = "Team Liquid";
      var csgoVisit = new Array(5);
      var player_index;
      var img, name, introduction, href;
      for(var i=0; i<5; i++)
        csgoVisit[i] = 0;
      for(var i=1; i<=5; i++)
        while(1) {
          player_index = Math.floor(15 + Math.random() * 5); //15~19
          if (csgoVisit[player_index] != 1) {
            csgoVisit[player_index] = 1;
            img = document.getElementById('csgoplayer0' + i + '_img');
            img.src = 'srcpack/CSGO_Gamers/' + csgoTeam[3] + '/' + csgoPlayerImg[player_index] + '.png';
            name = document.getElementById('csgoplayer0' + i + '_name');
            name.innerHTML = csgoPlayerImg[player_index];
            introduction = document.getElementById('csgoplayer0' + i + '_introduction');
            // introduction.innerHTML = //TODO
            href = document.getElementById('csgoplayer0' + i + '_href')
            href.setAttribute('href', csgoPlayerImg[player_index] + '.html');
            break;
          }
        }
    }, false);
    
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