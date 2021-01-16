let memberDict = {'André Pelica': 'images/student-hacky.png', 
'Andreia Pereira': 'images/student-hacky.png',
'Baltasar Dinis': 'images/student-hacky.png',
'Beatriz Feliciano': 'images/student-hacky.png',
'Beatriz Toscano': 'images/student-hacky.png',
'Bernardo Lourenço': 'images/student-hacky.png',
'Catarina Alegria': 'images/student-hacky.png',
'Daniela Regina': 'images/student-hacky.png',
'Diogo Pacheco': 'images/student-hacky.png',
'Gastão Faria': 'images/student-hacky.png',
'Joana Ferreira': 'images/student-hacky.png',
'João Andrade': 'images/student-hacky.png',
'João Dias': 'images/student-hacky.png',
'João Pina': 'images/student-hacky.png',
'João Rodrigues': 'images/student-hacky.png',
'João Sanches': 'images/student-hacky.png',
'Madalena Santos': 'images/student-hacky.png',
'Margarida Ferro': 'images/student-hacky.png',
'Maria Forjó': 'images/student-hacky.png',
'Mariana Cintrão': 'images/student-hacky.png',
'Marta Ambrósio': 'images/student-hacky.png',
'Marta Ferreira': 'images/student-hacky.png',
'Miguel Regouga': 'images/student-hacky.png',
'Miguel Rocha': 'images/student-hacky.png',
'Miguel Trinca': 'images/student-hacky.png',
'Pedro Maximino': 'images/student-hacky.png',
'Pedro Nunes': 'images/student-hacky.png',
'Pedro Rodrigues': 'images/student-hacky.png',
'Sara Franco': 'images/student-hacky.png'
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