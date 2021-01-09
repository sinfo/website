let memberDict = {'André Pelica': 'images/karen.jpg', 
'Andreia Pereira': 'images/karen.jpg',
'Baltasar Dinis': 'images/karen.jpg',
'Beatriz Feliciano': 'images/karen.jpg',
'Beatriz Toscano': 'images/karen.jpg',
'Bernardo Lourenço': 'images/karen.jpg',
'Catarina Alegria': 'images/karen.jpg',
'Daniela Regina': 'images/karen.jpg',
'Diogo Pacheco': 'images/karen.jpg',
'Gastão Faria': 'images/karen.jpg',
'Joana Ferreira': 'images/karen.jpg',
'João Andrade': 'images/karen.jpg',
'João Dias': 'images/karen.jpg',
'João Pina': 'images/karen.jpg',
'João Rodrigues': 'images/karen.jpg',
'João Sanches': 'images/karen.jpg',
'Madalena Santos': 'images/karen.jpg',
'Margarida Ferro': 'images/karen.jpg',
'Maria Forjó': 'images/karen.jpg',
'Mariana Cintrão': 'images/karen.jpg',
'Marta Ambrósio': 'images/karen.jpg',
'Marta Ferreira': 'images/karen.jpg',
'Miguel Regouga': 'images/karen.jpg',
'Miguel Rocha': 'images/karen.jpg',
'Miguel Trinca': 'images/karen.jpg',
'Pedro Maximino': 'images/karen.jpg',
'Pedro Nunes': 'images/karen.jpg',
'Pedro Rodrigues': 'images/karen.jpg',
'Sara Franco': 'images/karen.jpg'
};

function addTeamMember(name, imageURL){
    var outerDiv = document.createElement('div');
    var innerDiv = document.createElement('div');
    outerDiv.className = 'col-xs-12 col-sm-2 col-md';
    innerDiv.className = 'box whitebox fontColor';

    var image = document.createElement("img");
    image.src = imageURL;
    image.style = "border-radius: 50%;";
    image.alt = "";

    var break1 = document.createElement('br');
    var break2 = document.createElement('br');

    var header = document.createElement('h4');
    header.innerHTML = name;

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