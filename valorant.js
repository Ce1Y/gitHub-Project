let searchbtn, searchResults;

function search() {
    searchResults = document.getElementById("searchResults").value;
    searchResults = searchResults.toLowerCase();
    console.log(searchResults);
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
function start() {
    searchbtn = document.getElementById("searchbtn");
    searchbtn.addEventListener('click', search, false);
}

window.addEventListener("load", start, false);