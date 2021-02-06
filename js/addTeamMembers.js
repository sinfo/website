let memberDict = {'André Pelica': 'images/team/AndreiaPereira.jpg', 
'Andreia Pereira': 'images/team/AndrePelica.jpg',
'Baltasar Dinis': 'images/team/BaltasarDinis.jpg',
'Beatriz Feliciano': 'images/team/BeatrizFeliciano.jpg',
'Beatriz Toscano': 'images/team/BeatrizToscano.jpg',
'Bernardo Lourenço': 'images/team/BernardoLourenco.jpg',
'Catarina Alegria': 'images/team/CatarinaAlegria.jpg',
'Daniela Regina': 'images/team/DanielaRegina.jpg',
'Diogo Pacheco': 'images/team/DiogoPacheco.jpg',
'Gastão Faria': 'images/team/GastaoFaria.jpg',
'Joana Ferreira': 'images/team/JoanaFerreiraJPG.jpg',
'João Andrade': 'images/team/JoãoAndrade.jpg',
'João Dias': 'images/team/JoaoDiasJPG.jpg',
'João Pina': 'images/team/JoaoPina.jpg',
'João Rodrigues': 'images/team/JoãoRodrigues.jpg',
'João Sanches': 'images/team/JoaoSanches.jpg',
'Madalena Santos': 'images/team/MadalenaSantos.jpg',
'Margarida Ferro': 'images/team/MargaridaFerro.jpg',
'Maria Forjó': 'images/team/MariaForjo.jpg',
'Mariana Cintrão': 'images/team/MarianaCintrao.jpg',
'Marta Ambrósio': 'images/team/MartaAmbrosioJPG.jpg',
'Marta Ferreira': 'images/team/MartaFerreira.jpg',
'Miguel Regouga': 'images/team/MiguelRegouga.jpg',
'Miguel Rocha': 'images/team/MiguelRochaJPG.jpg',
'Miguel Trinca': 'images/team/Miguel TrincaJPG.jpg',
'Pedro Maximino': 'images/team/PedroMaximino.jpg',
'Pedro Nunes': 'images/team/PedroNunes.jpg',
'Pedro Rodrigues': 'images/team/PedroRodrigues.jpg',
'Sara Franco': 'images/team/SaraFranco.jpg'
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