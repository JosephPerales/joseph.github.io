
const titleMenu = document.querySelector(".menu__title");
const menuBody = document.querySelector(".menu__body");

titleMenu.addEventListener("click", ()=> {
  menuBody.classList.toggle("active")
})

//Prime Menu
const primeMenu = document.querySelector(".prime__menu__list");
const primeListItems = [...primeMenu.getElementsByClassName("list__item")].slice(1);

//Nest Menus
const nestMenus = document.querySelectorAll(".nesting__menu__list");
const nestMenuTilteItems = menuBody.getElementsByClassName("turn_back_menu") ;

//Sub Nest Menus
const subNestMenus = document.querySelectorAll(".sub__nesting__menu__list");
const subNestMenuTitleItems = menuBody.getElementsByClassName("turn__back__sub__menu");


// Función que activa y desactiva una clase
let currentMenu = primeMenu;
function activateMenu () {
  currentMenu.classList.remove("active");
  this.classList.add("active");
  currentMenu = menuBody.querySelector(".active")
} 

function addMenuListeners() {
  //Análisis medio complejo
  const mapForRouteMenus = primeListItems.map((item, index)=> [item, nestMenus[index], nestMenuTilteItems[index]]);

  //Añadiendo Listeners para menus-nestMenus
  mapForRouteMenus.map(([listItem, nestMenu, nestMenuTitle])=> {
    listItem.addEventListener("click", activateMenu.bind(nestMenu));
    nestMenuTitle.addEventListener("click", (activateMenu.bind(primeMenu)));
  });

  //Análisis complejo
  let mapForRouteSubMenus = [];
  [...nestMenus].map((item, indexMenu)=>{
    let forSubNests = item.querySelectorAll(".for__sub__nesting__list__item");
    if(forSubNests.length != 0){
      [...forSubNests].map((forSubNest)=> mapForRouteSubMenus.push([forSubNest, indexMenu]))
    }
  });
  mapForRouteSubMenus= mapForRouteSubMenus.map(([go,menuBackIndex], index) =>{
    return [go, subNestMenus[index], subNestMenuTitleItems[index], menuBody.querySelectorAll(".menu__list")[menuBackIndex + 1]]
  });

  //Añadiendo listeners para nestMenus-subNestMenus xd
  mapForRouteSubMenus.map(([go, menu_go , back, menu_back])=> {
    go.addEventListener("click", activateMenu.bind(menu_go))
    back.addEventListener("click", activateMenu.bind(menu_back))
  })
}

addMenuListeners();


//DESTOP


const navMenuItem = [...document.querySelectorAll(".nav__menu__item")].slice(0);
const menuBodys = [...document.querySelectorAll(".menu__body")];

function addDesktopMenuListeners() {
  let mergedMenusDesktop = navMenuItem.map((menu_nav, index)=> {
    return [menu_nav, menuBodys[index]]
  });

  const desktopMenu =document.querySelector(".desktop__nav__menu");
  let current;
  mergedMenusDesktop.map(([nav, body])=> {
    body.addEventListener("click", (e)=> {
      e.stopPropagation();
    })

    nav.addEventListener("click", ()=> {

      if(body.classList.contains("active")) { //el elemento es activo?

        body.classList.remove("active");
        return
      };
      
      if(desktopMenu.querySelector(".active") != null ) { //hay algun activo?
          desktopMenu.querySelector(".active").classList.remove("active");
      }

      body.classList.add("active");
    })
  });
};

addDesktopMenuListeners();