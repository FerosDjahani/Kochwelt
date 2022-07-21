
function showMobileMenu(){

    document.getElementById('mob-menu').classList.add('d-show');
}


function hideMobileMenu(){

    document.getElementById('mob-menu').classList.remove('d-show');
}
//--------------------------Links----------------------------//
function imprint(){
    let content = document.getElementById('content');

    content.innerHTML ='';
    content.innerHTML +=`
    <div class="imprint"> 
    <b> Impressum</b><br>
    Chefkoch Thomas<br>
    Kochstr. 29<br>
    81669 München<br>
    
    vertretungsberechtigte Gesellschafter: Chefkoch Thomas<br>
    
    E-Mail: info@kochwelt.com<br>
    
    Umsatzsteuer-Id: DE11111111<br>


    </div>
    `;
}

function contact(){
    let content = document.getElementById('content');

    content.innerHTML ='';
    content.innerHTML +=`
<div class="contact-title">
<h1> Contact Us</h1>
</div>

<div class="contact">
<div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Email Addresse</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
  </div>
  <div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label">Deine Nachricht</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
</div>`;
}

function home(){
    let content = document.getElementById('content');

    content.innerHTML ='';
    content.innerHTML +=`
    <div class="rezept-des-tages">

    <img src="img/Panzerotti.jpg">
    <button onclick="recipeOfTheDay()">Rezept öffnen</button>


</div>

<div class="all-menus">

    <div class="menu-choice">

        <div class="choice"> 
            <img src="img/lasagne.jpg">
            <button onclick="Lasagne()">Rezept öffnen</button>
        </div>
        <div class="choice">
            <img src="img/bolonese.jpg">
            <button onclick="SpagehttiBolognese()">Rezept öffnen</button>
        </div>
        <div class="choice">
            <img src="img/carpaccio.jpg">
            <button onclick="Carpacio()">Rezept öffnen</button>
        </div>

    </div>

</div>`;
}

//------------------------------recipes--------------------------------//


