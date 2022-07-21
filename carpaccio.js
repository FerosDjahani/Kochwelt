//Carpacio
let recipe4 = ['g Rindfleisch', 'x Baselikum', 'x Zwiebeln',
    'x Knoblauck', 'g Rocca', 'g Parmesan',
    'ml Olivenöl', 'x Walnüsse'];
let recipeContent4 = [200, 2, 1, 5, 100, 200, 50, 5];

function Carpacio(){

    let content = document.getElementById('content');
    
    content.innerHTML ='';
    content.innerHTML +=`
    <div class="banner">
    
                <div class="menus">
                    <div class="banner_icon">
                        <img id="lasagne" src="img/carpaccio.jpg">
                        <div class="recipe">
        
                            <div class="recipe_icons">
                                <img src="img/clock-regular.svg">
                                <span>20 min</span>
                            </div>
        
                            <div class="recipe_icons">
                                <img src="img/icons/brain-solid.svg">
                                <span>medium</span>
                            </div>
        
                            <div class="recipe_icons">
                                <img src="img/icons/calendar-alt-regular.svg">
                                <span>15.05,2021</span>
                            </div>
        
                        </div>
                    </div>
                    <div class="menus_text">
                        <h1>Carpaccio</h1>
                        <p><b>Wusstest du !</b></p>
                        <p>Carpaccio ist eine Vorspeise der italienischen Küche aus rohem luftgetrocknetem Rindfleisch. Entwickelt wurde es im Jahr 1950 in Harry’s Bar in Venedig von deren Inhaber Giuseppe Cipriani für seine Stammkundin Contessa Amalia Nani Mocenigo,
                             weil der Arzt ihr vom Verzehr gegarten Fleisches abgeraten hatte.</p>
                    </div>
                </div>
        
            </div>
    
            <div id="recipe1">
    
            </div>
    
    
    
            <div class="coocking_way">
    
                <h2>Zubereitung</h2>
                <p>4 Teller mit Balsamico beträufeln und mit einem Pinsel verteilen, so dass der gesamte Teller dünn bedeckt ist.
                Die Pinienkerne anrösten und den Rucola waschen.
                Die dünnen Rinderfilet-Scheiben, den Rucola und die Pinienkerne auf die Teller geben, und den Parmesan hauchdünn darüber hobeln. Jetzt mit Salz, Zitronensaft und Pfeffer würzen, das Olivenöl darüber träufeln. Ich nehme auch noch etwas Balsamico dazu.
                Dann in sofort mit dem Baguette servieren.
                Damit das Rinderfilet leichter in hauchdünne Scheiben geschnitten werden kann, friert man das Filet vorher etwas an. Dazu braucht man aber noch entweder ein sehr scharfes Messer, oder eine Aufschnittmaschine. Ansonsten kann man sich auch in der Art helfen, dass man die etwas dickeren Scheiben zwischen 2 Gefrierbeutel legt und mit einem Fleischklopfer oder einer Kasserolle vorsichtig flach klopft, oder das Filet beim Metzger aufschneiden lässt.
                </p>
    
            </div>
    
            <div class="owner">
    
                <img src="img/users-solid.svg">
                <h3>Rezept erstelt von useren Koch-Team</h3>
    
            </div>
    `;
    renderRecipe4();
    }
    
    function renderRecipe4() {

        let RecipeContent = document.getElementById('recipe1');
        RecipeContent.innerHTML += `
        <div class="portion">
           <div class="btn">
              <span>Zutaten für</span>
              <input id="nummber" type="nummber" placeholder="z.B.4">
              <button onclick="clacPortion4()">Portionen</button>
           </div>
         <div id="menu1" class="menu">
         </div>
        </div>
        `;
        showRecipe4();
    }
    
    
    
    function showRecipe4() {
        
        let menuContent = document.getElementById('menu1');
        for (let i = 0; i < recipe4.length; i++) {
            const element = recipe4[i];
            const element2 = recipeContent4[i];
            menuContent.innerHTML += `
           <div class="ingrends">
           <span id="result">${element2}  ${element}</span>
           </div>
         `;
        }
    }
    
    
    function clacPortion4() {
    
        document.getElementById('menu1').innerHTML = '';
        let a = document.getElementById('nummber').value;
        if (a < 1 || a > 100){
            alert('Bitte wählen Sie mindestns eine Portion und maximal 100 Portion');
        }else if(isNaN(a)){
            alert('Bitte geben Sie eine Zahl ein');
        }
        else {
            for (let i = 0; i < recipe4.length; i++) {
                const element = recipe4[i];
                const element2 = recipeContent4[i];
                document.getElementById('menu1').innerHTML += `
              <div class="ingrends">
                <span id="result">${((a / 4) * element2)} ${element}</span>
              </div>
             `;
            }
        }
        document.getElementById('nummber').value = '';
    }