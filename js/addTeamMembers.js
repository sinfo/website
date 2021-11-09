var urlDO = "https://sinfo.ams3.cdn.digitaloceanspaces.com/static/29-sinfo/fotosComissao/";

let memberDict = {'André Morgado': urlDO + 'AndreMorgado.webp', 
'André Romão': urlDO + 'AndreRomao.webp', 
'Andreia Pereira': urlDO + 'AndreiaPereira.webp',
'Baltasar Dinis': urlDO + 'BaltasarDinis.webp',
'Beatriz Feliciano': urlDO + 'BeatrizFeliciano.webp',
'Bernardo Lourenço': urlDO + 'BernardoLourenco.webp',
'Catarina Alegria': urlDO + 'CatarinaAlegria.webp',
'Daniela Regina': urlDO + 'DanielaRegina.webp',
'Diogo Pacheco': urlDO + 'DiogoPacheco.webp',
'Inês Alves': urlDO + 'InesAlves.webp',
'Joana Ferreira': urlDO + 'JoanaIsabel.webp',
'João Andrade': urlDO + 'JoaoAndrade.webp',
'João Pina': urlDO + 'JoaoPina.webp',
'João Rodrigues': urlDO + 'JoaoRodrigues.webp',
'Larissa Tomaz': urlDO + 'LarissaTomaz.webp',
'Madalena Santos': urlDO + 'MadalenaSantos.webp',
'Margarida Ferro': urlDO + 'MargaridaFerro.webp',
'Maria Forjó': urlDO + 'MariaForjo.webp',
'Mariana Cintrão': urlDO + 'MarianaCintrao.webp',
'Marta Ambrósio': urlDO + 'MartaAmbrosio.webp',
'Miguel Trinca': urlDO + 'MiguelTrinca.webp',
'Miguel Vicente': urlDO + 'MiguelVicente.webp',
'Pedro Maximino': urlDO + 'PedroMaximino.webp',
'Pedro Nunes': urlDO + 'PedroNunes.webp',
'Rodrigo Silva': urlDO + 'RodrigoSilva.webp',
'Sofia Morgado': urlDO + 'SofiaMorgado.webp',
'Tiago Franco': urlDO + 'TiagoFranco.webp'
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