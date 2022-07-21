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