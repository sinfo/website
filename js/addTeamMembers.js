var urlDO = "https://sinfo.ams3.cdn.digitaloceanspaces.com/static/28-sinfo/fotosComissao/";

let memberDict = {'André Pelica': urlDO + 'AndrePelica.jpg', 
'Andreia Pereira': urlDO + 'AndreiaPereira.jpg',
'Baltasar Dinis': urlDO + 'BaltasarDinis.jpg',
'Beatriz Feliciano': urlDO + 'BeatrizFeliciano.jpg',
'Beatriz Toscano': urlDO + 'BeatrizToscano.jpg',
'Bernardo Lourenço': urlDO + 'BernardoLourenco.jpg',
'Catarina Alegria': urlDO + 'CatarinaAlegria.jpg',
'Daniela Regina': urlDO + 'DanielaRegina.jpg',
'Diogo Pacheco': urlDO + 'DiogoPacheco.jpg',
'Gastão Faria': urlDO + 'GastaoFaria.jpg',
'Joana Ferreira': urlDO + 'JoanaFerreira.jpg',
'João Andrade': urlDO + 'JoãoAndrade.jpg',
'João Dias': urlDO + 'JoaoDias.jpg',
'João Pina': urlDO + 'JoaoPina.jpg',
'João Rodrigues': urlDO + 'JoãoRodrigues.jpg',
'João Sanches': urlDO + 'JoaoSanches.jpg',
'Madalena Santos': urlDO + 'MadalenaSantos.jpg',
'Margarida Ferro': urlDO + 'MargaridaFerro.jpg',
'Maria Forjó': urlDO + 'MariaForjo.jpg',
'Mariana Cintrão': urlDO + 'MarianaCintrao.jpg',
'Marta Ambrósio': urlDO + 'MartaAmbrosio.jpg',
'Marta Ferreira': urlDO + 'MartaFerreira.jpg',
'Miguel Regouga': urlDO + 'MiguelRegouga.jpg',
'Miguel Rocha': urlDO + 'MiguelRocha.jpg',
'Miguel Trinca': urlDO + 'Miguel Trinca.jpg',
'Pedro Maximino': urlDO + 'PedroMaximino.jpg',
'Pedro Nunes': urlDO + 'PedroNunes.jpg',
'Pedro Rodrigues': urlDO + 'PedroRodrigues.jpg',
'Sara Franco': urlDO + 'SaraFranco.jpg'
};

function addTeamMember(name, imageURL){
    var outerDiv = document.createElement('div');
    var innerDiv = document.createElement('div');
    outerDiv.className = 'col-xs-12 col-sm-2 col-md';
    innerDiv.className = 'box whitebox teamBox fontColor';

    var image = document.createElement("img");
    image.src = imageURL;
    image.style = "border-radius: 50%;";
    image.alt = "";

    var break1 = document.createElement('br');
    var break2 = document.createElement('br');

    var header = document.createElement('h4');
    const splitName = name.split(" ");
    header.innerHTML = `${splitName[0]}<br>${splitName[1]}`;

    innerDiv.appendChild(image);  
    innerDiv.appendChild(break1);  
    innerDiv.appendChild(break2); 
    innerDiv.appendChild(header); 

    outerDiv.appendChild(innerDiv);

    document.getElementById("team_div").appendChild(outerDiv);  
}

function addMembers(){
    for(var name in memberDict) {
        addTeamMember(name, memberDict[name]);
    }
}