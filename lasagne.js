//Lasagne
let recipe2 = ['x Tomaten', 'x Karotten', 'x Zwiebeln',
    'x Knoblauck', 'x Lasagne Blätter', 'g Käse',
    'ml Olivenöl', 'x Tomatenmark'];
let recipeContent2 = [2, 2, 1, 5, 10, 200, 50, 1];

function Lasagne(){
    let content = document.getElementById('content');

    content.innerHTML ='';
    content.innerHTML +=`
    <div class="banner">

    <div class="menus">
        <div class="banner_icon">
            <img id="lasagne" src="img/lasagne.jpg">
            <div class="recipe">

                <div class="recipe_icons">
                    <img src="img/clock-regular.svg">
                    <span>15 min</span>
                </div>

                <div class="recipe_icons">
                    <img src="img/icons/brain-solid.svg">
                    <span>medium</span>
                </div>

                <div class="recipe_icons">
                    <img src="img/icons/calendar-alt-regular.svg">
                    <span>20.01,2021</span>
                </div>

            </div>
        </div>
        <div class="menus_text">
            <h1>Lasagne</h1>
            <p><b>Wusstest du !</b></p>
            <p>Die Römer nutzten in der Antike eine im Mittelmeerraum verbreitete Technik,
                flache Teigblätter herzustellen, die dann zu Streifen weiterverarbeitet und gekocht wurden.
                Diese Blätter wurden <b>lagana</b> genannt,
                worauf sich das heutige <b>lasagna</b> zurückführen lässt.</p>
        </div>
    </div>

</div>

<div id="recipe1">

</div>



<div class="coocking_way">

    <h2>Zubereitung</h2>
    <p>Knoblauch, Zwiebeln und Karotte schälen und fein würfeln. Staudensellerie putzen und ebenfalls fein würfeln. Linsen in ein Sieb geben, mit kaltem Wasser abspülen und gut abtropfen lassen.
    Öl in einem Topf erhitzen. Zwiebeln und Knoblauch zugeben und 1 Minute braten. Karotten und Sellerie hinzufügen und 2 Minuten mitbraten. Tomatenmark zugeben und leicht anrösten. Mit Tomaten und Gemüsefond ablöschen. Oregano, Kreuzkümmel hinzufügen, mit Salz und Pfeffer würzen. Linsen zugeben und 5-6 Minuten leicht köcheln lassen.
    Für die Béchamelsoße Margarine in einem kleinen Topf schmelzen. Mehl zugeben und ohne Farbe anschwitzen. Mandeldrink unter Rühren untermischen. Unter Rühren aufkochen, damit eine Bindung entsteht. Mit Salz würzen und zur Seite schieben. 5-6 TL abnehmen und beiseitestellen.
    </p>

</div>

<div class="owner">

    <img src="img/users-solid.svg">
    <h3>Rezept erstelt von useren Koch-Team</h3>

</div>
`;
renderRecipe2();
}
function renderRecipe2() {

    let RecipeContent = document.getElementById('recipe1');
    RecipeContent.innerHTML += `
    <div class="portion">
       <div class="btn">
          <span>Zutaten für</span>
          <input id="nummber" type="nummber" placeholder="z.B.4">
          <button onclick="clacPortion2()">Portionen</button>
       </div>
     <div id="menu1" class="menu">
     </div>
    </div>
    `;
    showRecipe2();
}



function showRecipe2() {
    
    let menuContent = document.getElementById('menu1');
    for (let i = 0; i < recipe2.length; i++) {
        const element = recipe2[i];
        const element2 = recipeContent2[i];
        menuContent.innerHTML += `
       <div class="ingrends">
       <span id="result">${element2}  ${element}</span>
       </div>
     `;
    }
}


function clacPortion2() {

    document.getElementById('menu1').innerHTML = '';
    let a = document.getElementById('nummber').value;
    if (a < 1 || a > 100){
        alert('Bitte wählen Sie mindestns eine Portion und maximal 100 Portion');
    }else if(isNaN(a)){
        alert('Bitte geben Sie eine Zahl ein');
    }
    else {
        for (let i = 0; i < recipe2.length; i++) {
            const element = recipe2[i];
            const element2 = recipeContent2[i];
            document.getElementById('menu1').innerHTML += `
          <div class="ingrends">
            <span id="result">${((a / 4) * element2)} ${element}</span>
          </div>
         `;
        }
    }
    document.getElementById('nummber').value = '';
}
