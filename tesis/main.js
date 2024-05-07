const DATA = {
    broca: [
        {
            title: "1",
            url: "https://vinculando.org/wp-content/uploads/kalins-pdf/singles/control-biologico-broca-cafe-hypothenemus-hampei-ferrari.pdf"
        },
        {
            title: "2",
            url: "https://repositorio.uncp.edu.pe/bitstream/handle/20.500.12894/7397/T010_77575917_T.pdf?sequence=1"
        },
        {
            title: "3",
            url: "https://juntadelcafe.org.pe/plaga-danaria-mas-del-5-de-la-produccion-de-cafe-este-2021/"
        },
        {
            title: "4",
            url: "https://mundocafeto.com/la-broca-del-cafeto/la-broca-o-barrenador-del-cafe/"
        }
    ],
    cafe: [
        {
            title: "1",
            url: "https://www.researchgate.net/publication/263162623_La_fenologia_del_cafe_una_herramienta_util_para_apoyar_la_toma_de_decisiones"
        },
        {
            title: "2",
            url: "https://cdn.www.gob.pe/uploads/document/file/3203515/REPORTE%20ESTAD%C3%8DSTICO%20CAFE%202021%20DICIEMBRE.pdf"
        },
        {
            title: "3",
            url: "https://biblioteca.cenicafe.org/bitstream/10778/4320/1/cenbook-0026_07.pdf"
        }
    ],
    aceite: [
        {
            title: "1",
            url: "https://repositorio.sena.edu.co/bitstream/handle/11404/1144/ACEITES_ESENCIALES_EXTRAIDOS_DE_PLANTAS_MEDICINALES_Y_AROMATICAS.pdf?sequence=1"
        },
        {
            title: "2",
            url: "https://www.thefreelibrary.com/Aceite+esencial+de+piper+crassinervum+para+el+control+de+sitophilus...-a0450800820"
        }
    ],
    matico: [
        {
            title: "1",
            url: "https://www.thefreelibrary.com/Aceite+esencial+de+piper+crassinervum+para+el+control+de+sitophilus...-a0450800820"
        }

    ],
    higuerilla: [
        {
            title: "1",
            url: "https://repositorio.lamolina.edu.pe/bitstream/handle/20.500.12996/5461/huamani-ticllahuanaco-edgar.pdf?sequence=3&isAllowed=y"
        },
        {
            title: "2",
            url: "http://repositorio.unu.edu.pe/handle/UNU/1876"
        },
        {
            title: "3",
            url: "https://www.researchgate.net/publication/322688001_Bioinsecticidas_para_el_control_de_plagas_de_almacen_y_su_relacion_con_la_calidad_fisiologica_de_la_semilla" 
        }
    ]
};

const sections = document.getElementsByClassName("for_section");

console.log("")
function renderSection(section) {
    section.innerHTML = `
    ${DATA[section.id.replace("for_", "")].map(function (item) {
        return `<a href="${item.url}">${item.title}</a>`
    })}
    `
}

broca.addEventListener("click", ()=> renderSection(for_broca));

cafe.addEventListener("click", ()=> renderSection(for_cafe));

aceite.addEventListener("click", ()=> renderSection(for_aceite));

matico.addEventListener("click", ()=> renderSection(for_matico));

higuerilla.addEventListener("click", ()=> renderSection(for_higuerilla));


