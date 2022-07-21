//Spaghetthi Bolognese
let recipe3 = ['x Tomaten', 'x Baselikum', 'x Zwiebeln',
    'x Knoblauck', 'g Nuddeln', 'g Käse',
    'ml Olivenöl', 'x Tomatenmark'];
let recipeContent3 = [2, 2, 1, 5, 500, 200, 50, 1];

function SpagehttiBolognese(){

    let content = document.getElementById('content');

    content.innerHTML ='';
    content.innerHTML +=`
    <div class="banner">

    <div class="menus">
        <div class="banner_icon">
            <img id="lasagne" src="img/bolonese.jpg">
            <div class="recipe">

                <div class="recipe_icons">
                    <img src="img/clock-regular.svg">
                    <span>30 min</span>
                </div>

                <div class="recipe_icons">
                    <img src="img/icons/brain-solid.svg">
                    <span>Easy</span>
                </div>

                <div class="recipe_icons">
                    <img src="img/icons/calendar-alt-regular.svg">
                    <span>20.01,2021</span>
                </div>

            </div>
        </div>
        <div class="menus_text">
            <h1>Spagetti Bolonese</h1>
            <p><b>Wusstest du !</b></p>
            <p>Ein Rezept für Spaghetti bolognese wurde vermutlich erstmals
                 1917 in den Vereinigten Staaten veröffentlicht.</p>
        </div>
    </div>

</div>

<div id="recipe1">

</div>



<div class="coocking_way">

    <h2>Zubereitung</h2>
    <p>
    Schalotten und Knoblauch schälen und in feine Würfel schneiden. Karotten, Sellerie und Lauch putzen bzw. schälen und alles in sehr feine Würfel schneiden.
    Olivenöl in einem großen Topf erhitzen. Rinderhack zugeben, stark anbraten und dabei möglichst wenig rühren. Gemüse, Schalotten und Knoblauch zugeben und ebenfalls anbraten. Tomatenmark hinzufügen und kurz mit anschwitzen.
    Dann alles mit Rinderbrühe ablöschen. Anschließend die passierten Tomaten, Salz, Pfeffer, Ahornsirup und Oregano dazugeben.
    Aufkochen, Hitze reduzieren und die Soße zugedeckt ca. 45 Minuten schmoren. Eventuell nochmals abschmecken.
    Spaghetti in kochendem Salzwasser in 8-10 Minuten bis zur gewünschten Bissfestigkeit garen. Aus dem Nudelwasser nehmen und in eine Pfanne geben. Etwa eine Kelle von dem Nudelwasser und die Soße hinzugeben. Alles schwenken.
    Den Parmesan reiben und zur Seite stellen. Petersilie und Basilikum fein schneiden.
    Spaghetti mit der Bolognese auf Tellern anrichten und nach Belieben mit Petersilie und Basilikum garnieren. Zum Schluss den geriebenen Parmesan und ein paar Spritzer Olivenöl über die Bolognese geben.
    </p>

</div>

<div class="owner">

    <img src="img/users-solid.svg">
    <h3>Rezept erstelt von useren Koch-Team</h3>

</div>`;
renderRecipe3();
}

function renderRecipe3() {

    let RecipeContent = document.getElementById('recipe1');
    RecipeContent.innerHTML += `
    <div class="portion">
       <div class="btn">
          <span>Zutaten für</span>
          <input id="nummber" type="nummber" placeholder="z.B.4">
          <button onclick="clacPortion3()">Portionen</button>
       </div>
     <div id="menu1" class="menu">
     </div>
    </div>
    `;
    showRecipe3();
}

function showRecipe3() {
    
    let menuContent = document.getElementById('menu1');
    for (let i = 0; i < recipe3.length; i++) {
        const element = recipe3[i];
        const element2 = recipeContent3[i];
        menuContent.innerHTML += `
       <div class="ingrends">
       <span id="result">${element2}  ${element}</span>
       </div>
     `;
    }
}


function clacPortion3() {

    document.getElementById('menu1').innerHTML = '';
    let a = document.getElementById('nummber').value;
    if (a < 1 || a > 100){
        alert('Bitte wählen Sie mindestns eine Portion und maximal 100 Portion');
    }else if(isNaN(a)){
        alert('Bitte geben Sie eine Zahl ein');
    }
    else {
        for (let i = 0; i < recipe3.length; i++) {
            const element = recipe3[i];
            const element2 = recipeContent3[i];
            document.getElementById('menu1').innerHTML += `
          <div class="ingrends">
            <span id="result">${((a / 4) * element2)} ${element}</span>
          </div>
         `;
        }
    }
    document.getElementById('nummber').value = '';
}