// Detta är en kommentar i javascript

// Skapar ett objekt som innehåller 
// variabler som innehåller värden som ska finnas med i annonsen.
// Dock kallas det för parametrar o inte variabler när det tillhör ett
// objekt men dom har samma uppgift att vara en "låda" som innehåller ett värde.

const annons = {
    id: 102,
    rubrik: "Lasses greatest hits",
    picture: "skiva.png",
    text: "Här kan ni lyysna till Lasses bästa låtar genom tidena från tidigt 60 tal till nutid"
}

// Man använder objekt för att samla alla värden som beskriver en o samma sak.


let containerHandle; // En variabel som ska vara global 
// dvs. kan kommas åt var som helst
// i programmet.



// Detta är en liten snutt kod som gör att programmet väntar med att köras
// tills dess att allt är inläst i minnet.
// HTML läses in rad efter rad och måste hinna läsas innan program körs.

window.onload = (event) => {
    console.log(event.type);
    init(); // När all HTML är inläst så körs funktionen init
};



// Denna funktion körs när all html kod är inläst.
function init() {

    containerHandle = document.getElementById("itemContainer");  // Hämta adressen till referens nod
    createHtml(annons);  // Skapar en annons genom att anropa funktionen createHtml och skicka med 
    // annons data till den funktionen.
    // annons är en global variabel.

    //createHtml("annan annons");
}

// Denna funktion lägger till all html kod som behövs för att visa en annons.
// Ni kan jämföra med det som är i kommentaren i html filen.
// Det enda som skiljer sig är ${variabel}.

function createHtml(annons) {
    containerHandle.innerHTML += `
        <div class="smallItem">
        <img src="./pictures/${annons.picture}" style="height:100px; width:100px;">
        <h1>${annons.rubrik}</h1>          
        <p>${annons.text}</p>
        </div>
        `

}