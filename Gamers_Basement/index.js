const apexTeam = ['Cloud9', 'G2 Esports', 'NRG', 'Others', 'Team SoloMid'];
const csgoTeam = ['Astralis', 'G2 Esports', 'Natus Vincere', 'Team Liquid', 'Team Vitality'];
const valorantTeam = ['Acend', 'Fnatic', 'Gambit', 'SENTINELS', 'Team Liquid']
const apexPlayerImg = [
  'Chappie', 'Grego', 'noted', 'Overpowered', 'PVPX',
  'Dezignful', 'Gentrifyinq', 'Mimu', 'Phantasy', 'Resultuh',
  'Aceu', 'Lulu', 'nafen', 'rogue', 'sweetdreams',
  'faide', 'genburten', 'iiztimmy', 'selly', 'stormen',
  'albralelie', 'daltoosh', 'imperialhal', 'reps', 'verhulst'
];
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
let apex_NRG, apex_TSM, apex_Others, apex_Cloud9, apex_G2;
let csgo_NatusVincere, csgo_G2Esports, csgo_Astralis, csgo_TeamVitality, csgo_TeamLiquid;
let valorant_Acend, valorant_Fnatic, valorant_Gambit, valorant_SENTINELS, valorant_TeamLiquid;
let searchbtn, searchResults;

function search() {
  searchResults = document.getElementById("searchResults").value;
  searchResults.toLowerCase();
  switch (searchResults) {
    /*apex  */
    case 'aceu':
      window.open('Aceu.html');
      break;
    case 'lulu':
      window.open('Lulu.html');
      break;
    case 'nafen':
      window.open('nafen.html');
      break;
    case 'rogue':
      window.open('rogue.html');
      break;
    case 'sweetdreams':
      window.open('sweetdreams.html');
      break;

    case 'dezignful':
      window.open('Dezignful.html');
      break;
    case 'gentrifyinq':
      window.open('Gentrifyinq.html');
      break;
    case 'mimu':
      window.open('Mimu.html');
      break;
    case 'phantasy':
      window.open('Phantasy.html');
      break;
    case 'resultuh':
      window.open('Resultuh.html');
      break;

    case 'chappie':
      window.open('Chappie.html');
      break;
    case 'grego':
      window.open('Grego.html');
      break;
    case 'noted':
      window.open('noted.html');
      break;
    case 'overpowered':
      window.open('Overpowered.html');
      break;
    case 'pvpx':
      window.open('PVPX.html');
      break;

    case 'albralelie':
      window.open('albralelie.html');
      break;
    case 'daltoosh':
      window.open('daltoosh.html');
      break;
    case 'imperialhal':
      window.open('imperialhal.html');
      break;
    case 'reps':
      window.open('reps.html');
      break;
    case 'verhulst':
      window.open('verhulst.html');
      break;


    case 'faide':
      window.open('faide.html');
      break;
    case 'genburten':
      window.open('genburten.html');
      break;
    case 'iiztimmy':
      window.open('iiztimmy.html');
      break;
    case 'selly':
      window.open('selly.html');
      break;
    case 'stormen':
      window.open('stormen.html');
      break;
    /* csgo */
    case 'blamef':
      window.open('blameF.html');
      break;
    case 'gla1ve':
      window.open('gla1ve.html');
      break;
    case 'k0nfig':
      window.open('k0nfig.html');
      break;
    case 'lucky':
      window.open('Lucky.html');
      break;
    case 'xyp9x':
      window.open('Xyp9x.html');
      break;

    case 'amanek':
      window.open('AmaNEk.html');
      break;
    case 'hunter':
      window.open('huNter.html');
      break;
    case 'jackz':
      window.open('JACKZ.html');
      break;
    case 'kennys':
      window.open('kennyS.html');
      break;
    case 'niko':
      window.open('Niko.html');
      break;

    case 'b1t':
      window.open('b1t.html');
      break;
    case 'boombl4':
      window.open('Boombl4.html');
      break;
    case 'electronic':
      window.open('electronic.html');
      break;
    case 'perfecto':
      window.open('Perfecto.html');
      break;
    case 's1mple':
      window.open('s1mple.html');
      break;

    case 'elige':
      window.open('EliGE.html');
      break;
    case 'fallen':
      window.open('FalleN.html');
      break;
    case 'grim':
      window.open('grim.html');
      break;
    case 'naf':
      window.open('NAF.html');
      break;
    case 'stewie2k':
      window.open('Stewie2k.html');
      break;

    case 'apex':
      window.open('csgo_apex.html');
      break;
    case 'kyojin':
      window.open('kyojin.html');
      break;
    case 'misutaaa':
      window.open('misutaaa.html');
      break;
    case 'shox':
      window.open('shox.html');
      break;
    case 'zywoo':
      window.open('ZywOo.html');
      break;
    /* valorant */
    case 'bonecold':
      window.open('bonecold.html');
      break;
    case 'cned':
      window.open('cned.html');
      break;
    case 'kiles':
      window.open('kiles.html');
      break;
    case 'starxo':
      window.open('starxo.html');
      break;
    case 'zeek':
      window.open('zeek.html');
      break;

    case 'boaster':
      window.open('boaster.html');
      break;
    case 'derke':
      window.open('Derke.html');
      break;
    case 'doma':
      window.open('Doma.html');
      break;
    case 'magnum':
      window.open('Magnum.html');
      break;
    case 'mistic':
      window.open('mistic.html');
      break;

    case 'chronicle':
      window.open('Chronicle.html');
      break;
    case 'd3ffo':
      window.open('d3ffo.html');
      break;
    case 'nats':
      window.open('nats.html');
      break;
    case 'redgar':
      window.open('redgar.html');
      break;
    case 'sheydos':
      window.open('Sheydos.html');
      break;

    case 'dapr':
      window.open('dapr.html');
      break;
    case 'shahzam':
      window.open('shahzam.html');
      break;
    case 'sinatraa':
      window.open('sinatraa.html');
      break;
    case 'tenz':
      window.open('tenz.html');
      break;
    case 'zombs':
      window.open('zombs.html');
      break;

    case 'jamppi':
      window.open('jamppi.html');
      break;
    case 'kryptix':
      window.open('kryptix.html');
      break;
    case 'l1nk':
      window.open('l1nk.html');
      break;
    case 'scream':
      window.open('scream.html');
      break;
    case 'soulcas':
      window.open('soulcas.html');
      break;
    

  }
}

function apex_random_select() {
  var apexVisit = new Array(25);
  var team_number, player_index;
  var img, name, introduction, href;
  //  initialize
  for (var i = 0; i < 25; i++)
    apexVisit[i] = 0;
  //  randomly select image
  for (var i = 1; i <= 5; i++) {
    team_number = Math.floor(Math.random() * 5);
    switch (team_number) {
      case 0:
        while (1) {
          player_index = Math.floor(Math.random() * 5); //0~4
          if (apexVisit[player_index] != 1) {
            apexVisit[player_index] = 1;
            img = document.getElementById('apexplayer0' + i + '_img');
            img.src = 'srcpack/Apex_Gamers/' + apexTeam[0] + '/' + apexPlayerImg[player_index] + '.png';
            name = document.getElementById('apexplayer0' + i + '_name');
            name.innerHTML = apexPlayerImg[player_index];
            introduction = document.getElementById('apexplayer0' + i + '_introduction');
            // introduction.innerHTML = //TODO
            href = document.getElementById('apexplayer0' + i + '_href')
            href.setAttribute('href', apexPlayerImg[player_index] + '.html');
            break;
          }
        }
        break;
      case 1:
        while (1) {
          player_index = Math.floor(5 + Math.random() * 5); //5~9
          if (apexVisit[player_index] != 1) {
            apexVisit[player_index] = 1;
            img = document.getElementById('apexplayer0' + i + '_img');
            img.src = 'srcpack/Apex_Gamers/' + apexTeam[1] + '/' + apexPlayerImg[player_index] + '.png';
            name = document.getElementById('apexplayer0' + i + '_name');
            name.innerHTML = apexPlayerImg[player_index];
            introduction = document.getElementById('apexplayer0' + i + '_introduction');
            // introduction.innerHTML = //TODO
            href = document.getElementById('apexplayer0' + i + '_href')
            href.setAttribute('href', apexPlayerImg[player_index] + '.html');
            break;
          }
        }
        break;
      case 2:
        while (1) {
          player_index = Math.floor(10 + Math.random() * 5); //10~14
          if (apexVisit[player_index] != 1) {
            apexVisit[player_index] = 1;
            img = document.getElementById('apexplayer0' + i + '_img');
            img.src = 'srcpack/Apex_Gamers/' + apexTeam[2] + '/' + apexPlayerImg[player_index] + '.png';
            name = document.getElementById('apexplayer0' + i + '_name');
            name.innerHTML = apexPlayerImg[player_index];
            introduction = document.getElementById('apexplayer0' + i + '_introduction');
            // introduction.innerHTML = //TODO
            href = document.getElementById('apexplayer0' + i + '_href')
            href.setAttribute('href', apexPlayerImg[player_index] + '.html');
            break;
          }
        }
        break;
      case 3:
        while (1) {
          player_index = Math.floor(15 + Math.random() * 5); //15~19
          if (apexVisit[player_index] != 1) {
            apexVisit[player_index] = 1;
            img = document.getElementById('apexplayer0' + i + '_img');
            img.src = 'srcpack/Apex_Gamers/' + apexTeam[3] + '/' + apexPlayerImg[player_index] + '.png';
            name = document.getElementById('apexplayer0' + i + '_name');
            name.innerHTML = apexPlayerImg[player_index];
            introduction = document.getElementById('apexplayer0' + i + '_introduction');
            // introduction.innerHTML = //TODO
            href = document.getElementById('apexplayer0' + i + '_href')
            href.setAttribute('href', apexPlayerImg[player_index] + '.html');
            break;
          }
        }
        break;
      case 4:
        while (1) {
          player_index = Math.floor(20 + Math.random() * 5); //20~24
          if (apexVisit[player_index] != 1) {
            apexVisit[player_index] = 1;
            img = document.getElementById('apexplayer0' + i + '_img');
            img.src = 'srcpack/Apex_Gamers/' + apexTeam[4] + '/' + apexPlayerImg[player_index] + '.png';
            name = document.getElementById('apexplayer0' + i + '_name');
            if (apexPlayerImg[player_index] == 'apex_apex')
              name.innerHTML = 'apex';
            else
              name.innerHTML = apexPlayerImg[player_index];
            introduction = document.getElementById('apexplayer0' + i + '_introduction');
            // introduction.innerHTML = //TODO
            href = document.getElementById('apexplayer0' + i + '_href')
            href.setAttribute('href', apexPlayerImg[player_index] + '.html');
            break;
          }
        }
        break;
    }
  }
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
    switch (team_number) {
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
            if (csgoPlayerImg[player_index] == 'csgo_apex')
              name.innerHTML = 'apex';
            else
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
    switch (team_number) {
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
  apex_NRG.addEventListener("click", function () {
    document.getElementById("apexTeamBtn").innerHTML = "NRG";
    var apexVisit = new Array(5);
    var player_index;
    var img, name, introduction, href;
    for (var i = 0; i < 5; i++)
      apexVisit[i] = 0;
    for (var i = 1; i <= 5; i++)
      while (1) {
        player_index = Math.floor(10 + Math.random() * 5); //10~14
        if (apexVisit[player_index] != 1) {
          apexVisit[player_index] = 1;
          img = document.getElementById('apexplayer0' + i + '_img');
          img.src = 'srcpack/Apex_Gamers/' + apexTeam[2] + '/' + apexPlayerImg[player_index] + '.png';
          name = document.getElementById('apexplayer0' + i + '_name');
          name.innerHTML = apexPlayerImg[player_index];
          introduction = document.getElementById('apexplayer0' + i + '_introduction');
          // introduction.innerHTML = //TODO
          href = document.getElementById('apexplayer0' + i + '_href')
          href.setAttribute('href', apexPlayerImg[player_index] + '.html');
          break;
        }
      }
  }, false);
  apex_G2 = document.getElementById("apex_G2");
  apex_G2.addEventListener("click", function () {
    document.getElementById("apexTeamBtn").innerHTML = "G2 Esports";
    var apexVisit = new Array(5);
    var player_index;
    var img, name, introduction, href;
    for (var i = 0; i < 5; i++)
      apexVisit[i] = 0;
    for (var i = 1; i <= 5; i++)
      while (1) {
        player_index = Math.floor(5 + Math.random() * 5); //5~9
        if (apexVisit[player_index] != 1) {
          apexVisit[player_index] = 1;
          img = document.getElementById('apexplayer0' + i + '_img');
          img.src = 'srcpack/Apex_Gamers/' + apexTeam[1] + '/' + apexPlayerImg[player_index] + '.png';
          name = document.getElementById('apexplayer0' + i + '_name');
          name.innerHTML = apexPlayerImg[player_index];
          introduction = document.getElementById('apexplayer0' + i + '_introduction');
          // introduction.innerHTML = //TODO
          href = document.getElementById('apexplayer0' + i + '_href')
          href.setAttribute('href', apexPlayerImg[player_index] + '.html');
          break;
        }
      }
  }, false);
  apex_TSM = document.getElementById("apex_TSM");
  apex_TSM.addEventListener("click", function () {
    document.getElementById("apexTeamBtn").innerHTML = "Team SoloMid";
    var apexVisit = new Array(5);
    var player_index;
    var img, name, introduction, href;
    for (var i = 0; i < 5; i++)
      apexVisit[i] = 0;
    for (var i = 1; i <= 5; i++)
      while (1) {
        player_index = Math.floor(20 + Math.random() * 5); //20~24
        if (apexVisit[player_index] != 1) {
          apexVisit[player_index] = 1;
          img = document.getElementById('apexplayer0' + i + '_img');
          img.src = 'srcpack/Apex_Gamers/' + apexTeam[4] + '/' + apexPlayerImg[player_index] + '.png';
          name = document.getElementById('apexplayer0' + i + '_name');
          if (apexPlayerImg[player_index] == 'csgo_apex')
            name.innerHTML = 'apex';
          else
            name.innerHTML = apexPlayerImg[player_index];
          introduction = document.getElementById('apexplayer0' + i + '_introduction');
          // introduction.innerHTML = //TODO
          href = document.getElementById('apexplayer0' + i + '_href')
          href.setAttribute('href', apexPlayerImg[player_index] + '.html');
          break;
        }
      }
  }, false);
  apex_Others = document.getElementById("apex_Others");
  apex_Others.addEventListener("click", function () {
    document.getElementById("apexTeamBtn").innerHTML = "Others";
    var apexVisit = new Array(5);
    var player_index;
    var img, name, introduction, href;
    for (var i = 0; i < 5; i++)
      apexVisit[i] = 0;
    for (var i = 1; i <= 5; i++)
      while (1) {
        player_index = Math.floor(15 + Math.random() * 5); //15~19
        if (apexVisit[player_index] != 1) {
          apexVisit[player_index] = 1;
          img = document.getElementById('apexplayer0' + i + '_img');
          img.src = 'srcpack/Apex_Gamers/' + apexTeam[3] + '/' + apexPlayerImg[player_index] + '.png';
          name = document.getElementById('apexplayer0' + i + '_name');
          name.innerHTML = apexPlayerImg[player_index];
          introduction = document.getElementById('apexplayer0' + i + '_introduction');
          // introduction.innerHTML = //TODO
          href = document.getElementById('apexplayer0' + i + '_href')
          href.setAttribute('href', apexPlayerImg[player_index] + '.html');
          break;
        }
      }



  }, false);

  apex_Cloud9 = document.getElementById("apex_Cloud9");
  apex_Cloud9.addEventListener("click", function () {
    document.getElementById("apexTeamBtn").innerHTML = "Cloud9";
    var apexVisit = new Array(5);
    var player_index;
    var img, name, introduction, href;
    for (var i = 0; i < 5; i++)
      apexVisit[i] = 0;
    for (var i = 1; i <= 5; i++)
      while (1) {
        player_index = Math.floor(0 + Math.random() * 5); //0~4
        if (apexVisit[player_index] != 1) {
          apexVisit[player_index] = 1;
          img = document.getElementById('apexplayer0' + i + '_img');
          img.src = 'srcpack/Apex_Gamers/' + apexTeam[0] + '/' + apexPlayerImg[player_index] + '.png';
          name = document.getElementById('apexplayer0' + i + '_name');
          name.innerHTML = apexPlayerImg[player_index];
          introduction = document.getElementById('apexplayer0' + i + '_introduction');
          // introduction.innerHTML = //TODO
          href = document.getElementById('apexplayer0' + i + '_href')
          href.setAttribute('href', apexPlayerImg[player_index] + '.html');
          break;
        }
      }
  }, false);

}

function csgoBtnClick() {
  csgo_NatusVincere = document.getElementById("csgo_NatusVincere");
  csgo_NatusVincere.addEventListener("click", function () {
    document.getElementById("csgoTeamBtn").innerHTML = "Natus Vincere";
    var csgoVisit = new Array(5);
    var player_index;
    var img, name, introduction, href;
    for (var i = 0; i < 5; i++)
      csgoVisit[i] = 0;
    for (var i = 1; i <= 5; i++)
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
  }, false);
  csgo_G2Esports = document.getElementById("csgo_G2Esports");
  csgo_G2Esports.addEventListener("click", function () {
    document.getElementById("csgoTeamBtn").innerHTML = "G2 Esports";
    var csgoVisit = new Array(5);
    var player_index;
    var img, name, introduction, href;
    for (var i = 0; i < 5; i++)
      csgoVisit[i] = 0;
    for (var i = 1; i <= 5; i++)
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
  }, false);
  csgo_Astralis = document.getElementById("csgo_Astralis");
  csgo_Astralis.addEventListener("click", function () {
    document.getElementById("csgoTeamBtn").innerHTML = "Astralis";
    var csgoVisit = new Array(5);
    var player_index;
    var img, name, introduction, href;
    for (var i = 0; i < 5; i++)
      csgoVisit[i] = 0;
    for (var i = 1; i <= 5; i++)
      while (1) {
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
    for (var i = 0; i < 5; i++)
      csgoVisit[i] = 0;
    for (var i = 1; i <= 5; i++)
      while (1) {
        player_index = Math.floor(20 + Math.random() * 5); //20~24
        if (csgoVisit[player_index] != 1) {
          csgoVisit[player_index] = 1;
          img = document.getElementById('csgoplayer0' + i + '_img');
          img.src = 'srcpack/CSGO_Gamers/' + csgoTeam[4] + '/' + csgoPlayerImg[player_index] + '.png';
          name = document.getElementById('csgoplayer0' + i + '_name');
          if (csgoPlayerImg[player_index] == 'csgo_apex')
            name.innerHTML = 'apex';
          else
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
    for (var i = 0; i < 5; i++)
      csgoVisit[i] = 0;
    for (var i = 1; i <= 5; i++)
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
  }, false);

}

function valorantBtnClick() {
  valorant_Acend = document.getElementById("valorant_Acend");
  valorant_Acend.addEventListener("click", function () {
    document.getElementById("valorantTeamBtn").innerHTML = "Acend";
    var valorantVisit = new Array(5);
    var player_index;
    var img, name, introduction, href;
    for (var i = 0; i < 5; i++)
      valorantVisit[i] = 0;
    for (var i = 1; i <= 5; i++)
      while (1) {
        player_index = Math.floor(0 + Math.random() * 5); //0~4
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
  }, false);
  valorant_Fnatic = document.getElementById("valorant_Fnatic");
  valorant_Fnatic.addEventListener("click", function () {
    document.getElementById("valorantTeamBtn").innerHTML = "Fnatic";
    var valorantVisit = new Array(5);
    var player_index;
    var img, name, introduction, href;
    for (var i = 0; i < 5; i++)
      valorantVisit[i] = 0;
    for (var i = 1; i <= 5; i++)
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
  }, false);
  valorant_Gambit = document.getElementById("valorant_Gambit");
  valorant_Gambit.addEventListener("click", function () {
    document.getElementById("valorantTeamBtn").innerHTML = "Gambit";
    var valorantVisit = new Array(5);
    var player_index;
    var img, name, introduction, href;
    for (var i = 0; i < 5; i++)
      valorantVisit[i] = 0;
    for (var i = 1; i <= 5; i++)
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
  }, false);
  valorant_SENTINELS = document.getElementById("valorant_SENTINELS");
  valorant_SENTINELS.addEventListener("click", function () {
    document.getElementById("valorantTeamBtn").innerHTML = "SENTINELS";
    var valorantVisit = new Array(5);
    var player_index;
    var img, name, introduction, href;
    for (var i = 0; i < 5; i++)
      valorantVisit[i] = 0;
    for (var i = 1; i <= 5; i++)
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
  }, false);
  valorant_TeamLiquid = document.getElementById("valorant_TeamLiquid");
  valorant_TeamLiquid.addEventListener("click", function () {
    document.getElementById("valorantTeamBtn").innerHTML = "Team Liquid";
    var valorantVisit = new Array(5);
    var player_index;
    var img, name, introduction, href;
    for (var i = 0; i < 5; i++)
      valorantVisit[i] = 0;
    for (var i = 1; i <= 5; i++)
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

  }, false);
}

function start() {
  apexBtnClick();
  csgoBtnClick();
  valorantBtnClick();
  apex_random_select();
  csgo_random_select();
  valorant_random_select();
  searchbtn = document.getElementById("searchbtn");
  console.log(searchbtn);
  searchbtn.addEventListener("click", search, false);
}

window.addEventListener("load", start, false)