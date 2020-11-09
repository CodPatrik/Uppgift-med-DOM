
const annons = {
    id: 102,
    rubrik: "Lasses greatest hits",
    picture: "skiva.png",
    text: "Här kan ni lyysna till Lasses bästa låtar genom tidena från tidigt 60 tal till nutid"
}

let containerHandle;

window.onload = (event) => {
    console.log(event.type);
    init();
};

function init() {
    containerHandle = document.getElementById("itemContainer");
    createHtml(annons);
}

function createHtml(annons) {
    containerHandle.innerHTML += `
        <div class="smallItem">
        <img src="./pictures/${annons.picture}" style="height:100px; width:100px;">
        <h1>${annons.rubrik}</h1>          
        <p>${annons.text}</p>
        </div>
        `
}