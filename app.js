var prod = document.querySelector('.prod');
var comp = document.querySelector('.comp');
var conn = document.querySelector('.conn');

var prodPng = document.querySelector('.prodPng');
var compPng = document.querySelector('.compPng');
var connPng = document.querySelector('.connPng');

var headEle = document.querySelector('.headElement');

function showProd()
{
    var prodPng = document.querySelector('.prodPng');
    var div1 = document.createElement("div");
    div1.setAttribute("class", "menu");

    div1.innerHTML = `
    <ul>
        <li><a href=#>Overview</a></li>
        <li><a href=#>Pricing</a></li>
        <li><a href=#>Marketplace</a></li>
        <li><a href=#>Features</a></li>
        <li><a href=#>Integrations</a></li>
    </ul>`

    div1.style.top = '80px';
    div1.style.left = '200px';
    div1.style.display = 'none';

    headEle.appendChild(div1);

    var menu = document.querySelector(".menu");

    if(menu.style.display === 'none')
    {
        menu.style.display = 'block'
        prodPng.style.transform = 'rotate(180deg)';
    } else
    {
        menu.style.display = 'none';
        prodPng.style.transform = 'rotate(0deg)'
    }
}

prod.addEventListener('click', showProd);


function showComp()
{
    var compPng = document.querySelector('.compPng');
    var div2 = document.createElement("div");
    div2.setAttribute("class", "menu1");

    div2.innerHTML = `
    <ul>
        <li><a href=#>About</a></li>
        <li><a href=#>Team</a></li>
        <li><a href=#>Blog</a></li>
        <li><a href=#>Careers</a></li>
    </ul>`

    div2.style.top = '80px';
    div2.style.left = '330px';
    div2.style.display = 'none'

    headEle.appendChild(div2);

    var menu1 = document.querySelector(".menu1");

    if(menu1.style.display === 'none')
    {
        menu1.style.display = 'block';
        compPng.style.transform = 'rotate(180deg)'
    } else
    {
        menu1.style.display = 'none';
        compPng.style.transform = 'rotate(0deg)'
    }
}

comp.addEventListener('click', showComp);



function showConn()
{
    
    var connPng = document.querySelector('.connPng');
    var div3 = document.createElement("div");
    div3.setAttribute("class", "menu2");

    div3.innerHTML = `
    <ul>
        <li><a href=#>Contact</a></li>
        <li><a href=#>Newsletter</a></li>
        <li><a href=#>LinkedIn</a></li>
    </ul>`

    div3.style.top = '80px';
    div3.style.left = '450px';
    div3.style.display = 'none';

    headEle.appendChild(div3);

    var menu2 = document.querySelector(".menu2");

    if(menu2.style.display === 'none')
    {
        menu2.style.display = 'block';
        connPng.style.transform = 'rotate(180deg)'
    } else
    {
        menu2.style.display = 'none';
        connPng.style.transform = 'rotate(0deg)'
    }
}

conn.addEventListener('click', showConn);



var ham = document.querySelector('.hamburger');

function showHmaburgerMenu()
{
    var hamburgerMenu = document.querySelector(".hamburgerMenu");
    var prodPng1 = document.querySelector('.prodPng1');
    var prodDivCs = document.querySelector(".prodDivCs");
    var compPng1 = document.querySelector('.compPng1');
    var compDivCs = document.querySelector(".compDivCs");
    var connPng1 = document.querySelector('.connPng1');
    var connDivCs = document.querySelector(".connDivCs");

    if(hamburgerMenu.style.display === 'none')
    {
        hamburgerMenu.style.display = 'block';
    } else
    {
        hamburgerMenu.style.display = 'none';
        prodDivCs.style.display = 'none';
        prodPng1.style.transform = 'rotate(0deg)';
        compDivCs.style.display = 'none';
        compPng1.style.transform = 'rotate(0deg)';
        connDivCs.style.display = 'none';
        connPng1.style.transform = 'rotate(0deg)';
    }
}

ham.addEventListener('click', showHmaburgerMenu);



var prod1 = document.querySelector('.prod1');
var comp1 = document.querySelector('.comp1');
var conn1 = document.querySelector('.conn1');

var prodPng1 = document.querySelector('.prodPng1');
var compPng1 = document.querySelector('.compPng1');
var connPng1 = document.querySelector('.connPng1');


function showProdLi()
{
    var prodPng1 = document.querySelector('.prodPng1');
    var prodDiv = document.createElement("div");
    var prodLi = document.querySelector(".prodLi");
    prodDiv.setAttribute("class", "prodDivCs");

    prodDiv.innerHTML = `
        <ul>
            <li><a href="#">Overview</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Marketplace</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Integrations</a></li>
        </ul>`

    prodDiv.style.display = 'none';

    prodLi.appendChild(prodDiv);

    var prodDivCs = document.querySelector(".prodDivCs");

    if(prodDivCs.style.display === 'none')
    {
        prodDivCs.style.display = 'block';
        prodPng1.style.transform = 'rotate(180deg)';
    } else
    {
        prodDivCs.style.display = 'none';
        prodPng1.style.transform = 'rotate(0deg)';
    }
}

prod1.addEventListener('click', showProdLi);


function showCompLi()
{
    var compPng1 = document.querySelector('.compPng1');
    var compDiv = document.createElement("div");
    var compLi = document.querySelector(".compLi");
    compDiv.setAttribute("class", "compDivCs");

    compDiv.innerHTML = `
        <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
        </ul>`

    compDiv.style.display = 'none';

    compLi.appendChild(compDiv);

    var compDivCs = document.querySelector(".compDivCs");

    if(compDivCs.style.display === 'none')
    {
        compDivCs.style.display = 'block';
        compPng1.style.transform = 'rotate(180deg)';
    } else
    {
        compDivCs.style.display = 'none';
        compPng1.style.transform = 'rotate(0deg)';
    }
}

comp1.addEventListener('click', showCompLi);


function showConnLi()
{
    var connPng1 = document.querySelector('.connPng1');
    var connDiv = document.createElement("div");
    var connLi = document.querySelector(".connLi");
    connDiv.setAttribute("class", "connDivCs");

    connDiv.innerHTML = `
        <ul>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Newsletter</a></li>
            <li><a href="#">LinkedIn</a></li>
        </ul>`

    connDiv.style.display = 'none';

    connLi.appendChild(connDiv);

    var connDivCs = document.querySelector(".connDivCs");

    if(connDivCs.style.display === 'none')
    {
        connDivCs.style.display = 'block';
        connPng1.style.transform = 'rotate(180deg)';
    } else
    {
        connDivCs.style.display = 'none';
        connPng1.style.transform = 'rotate(0deg)';
    }
}

conn1.addEventListener('click', showConnLi);