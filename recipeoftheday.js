//Panzerotti
let recipe1 = ['x Tomaten', 'x Baselikum', 'x Zwiebeln',
    'x Knoblauck', 'g Mehl', 'g Käse',
    'ml Olivenöl', 'x Ei'];
let recipeContent1 = [2, 2, 1, 5, 500, 200, 50, 1];

function recipeOfTheDay(){
    
    let content = document.getElementById('content');

    content.innerHTML ='';
    content.innerHTML +=`
<div class="banner">

<div class="menus">
    <div class="banner_icon">
        <img id="lasagne" src="img/Panzerotti.jpg">
        <div class="recipe">

            <div class="recipe_icons">
                <img src="img/clock-regular.svg">
                <span>25 min</span>
            </div>

            <div class="recipe_icons">
                <img src="img/icons/brain-solid.svg">
                <span>medium</span>
            </div>

            <div class="recipe_icons">
                <img src="img/icons/calendar-alt-regular.svg">
                <span>20.10,2021</span>
            </div>

        </div>
    </div>
    <div class="menus_text">
        <h1>Panzerotti</h1>
        <p><b>Wusstest du !</b></p>
        <p>In der Gegend um Neapel werden die panzerotti aus einem Teig mit Ei und Butter hergestellt, mit einer Mischung aus Ricotta, Eigelb, Schinkenwürfeln, gehackter Petersilie, Zimt und Pfeffer gefüllt,
             mit geschlagenem Eigelb bestrichen und in heißem Öl gebacken.</p>
    </div>
</div>

</div>

<div id="recipe1">

</div>



<div class="coocking_way">

<h2>Zubereitung</h2>
<p>
Schüttet zuerst euer Mehl in eine Schüssel. Löst die Hefe in einer kleinen Schale mit Wasser und dem Zucker. Fügt 3 TL Salz zusammen mit dem Olivenöl zum Mehl hinzu und schüttet die Hefemischung hinzu. Fangt nun an zu kneten und gießt immer wieder von eurem Wasser hinzu. Das macht ihr so lange, bis ein glatter Teig entstanden ist. Lasst diesen zugedeckt für eine Stunde ruhen.
Schneidet währenddessen euren Mozzarella in grobe Würfel und lasst ihn in einem Sieb etwas abtropfen. Gebt die passierten Tomaten in eine Schüssel, würzt sie mit allen Gewürzen. Vermischt sie dann mit eurem Mozzarella und stellt die Schüssel beiseite.
Erhitzt, kurz bevor ihr die den Teig aus der Schüssel holt, das Öl zum Frittieren in einem Topf. Zerteilt euren Panzerotti-Teig in 10 gleich große Stücke. Diese rollt ihr dann einfach mit einem Nudelholz auf eurer bemehlten Arbeitsfläche aus. Die Teigstücke sollten ungefähr handtellergroß werden. Gebt mit einem Esslöffel die Füllung auf die eine Hälfte des Teigs und schlagt die leere Hälfte darüber. Drückt die Enden aneinander, schlagt sie einmal um und drückt sie mit den Zinken einer Gabel fest. Das macht ihr so lange, bis alle 10 Panzerotti fertig sind.
Jetzt wollen die Teigtaschen frittiert werden. Das dauert ungefähr, je nach Temperatur des Öls, zwischen 4-6 Minuten. Wendet sie, während sie im Öl brutzeln, mehrmals, damit sie von allen Seiten gleichmäßig goldbraun werden. Gebt sie dann zum Abtropfen auf ein Küchentuch, welches überschüssiges Öl aufsaugt. Wenn ihr alle Panzerotti frittiert habt, serviert sie direkt und heiß. Lasst es euch schmecken!
</p>

</div>

<div class="owner">

<img src="img/users-solid.svg">
<h3>Rezept erstelt von useren Koch-Team</h3>

</div>
`;
renderRecipe1();
}




//-------------------------------------------------RecipeFunctions----------------------------------//
function renderRecipe1() {

    let RecipeContent = document.getElementById('recipe1');
    RecipeContent.innerHTML += `
    <div class="portion">
       <div class="btn">
          <span>Zutaten für</span>
          <input id="nummber" type="nummber" placeholder="z.B.4">
          <button onclick="clacPortion1()">Portionen</button>
       </div>
     <div id="menu1" class="menu">
     </div>
    </div>
    `;
    showRecipe1();
}



function showRecipe1() {
    
    let menuContent = document.getElementById('menu1');
    for (let i = 0; i < recipe1.length; i++) {
        const element = recipe1[i];
        const element2 = recipeContent1[i];
        menuContent.innerHTML += `
       <div class="ingrends">
       <span id="result">${element2}  ${element}</span>
       </div>
     `;
    }
}


function clacPortion1() {

    document.getElementById('menu1').innerHTML = '';
    let a = document.getElementById('nummber').value;
    if (a < 1 || a > 100){
        alert('Bitte wählen Sie mindestns eine Portion und maximal 100 Portion');
    }else if(isNaN(a)){
        alert('Bitte geben Sie eine Zahl ein');
    }
    else {
        for (let i = 0; i < recipe1.length; i++) {
            const element = recipe1[i];
            const element2 = recipeContent1[i];
            document.getElementById('menu1').innerHTML += `
          <div class="ingrends">
            <span id="result">${((a / 4) * element2)} ${element}</span>
          </div>
         `;
        }
    }
    document.getElementById('nummber').value = '';
}
