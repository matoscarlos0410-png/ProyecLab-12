/* =========================================================
   PROYECLAB V10
   JAVASCRIPT COMPLETO
   ========================================================= */

"use strict";


/* =========================================================
   DATOS DE PROYECTLAB
   ========================================================= */

const places = {

    comida: [

        {
            name: "Mari Mar Restaurante",
            icon: "🍽️",
            desc: "Restaurante local identificado en Sausal.",
            location: "Sausal 13700",
            history:
                "Mari Mar forma parte de la oferta gastronómica local de Sausal. Se presenta en ProyecLab como una opción para conocer la comida y los negocios de la comunidad. No se añade una fecha de fundación porque no se encontró información pública suficiente para confirmarla.",
            maps: "Mari Mar Restaurante Sausal La Libertad"
        },

        {
            name: "Restaurante & Cevichería Keylita",
            icon: "🐟",
            desc: "Restaurante y cevichería de la comunidad.",
            location: "Sausal 13700",
            history:
                "Restaurante & Cevichería Keylita forma parte de la oferta gastronómica identificada para Sausal. ProyecLab evita atribuirle fechas de fundación o antecedentes que no estén respaldados por información pública verificable.",
            maps: "Restaurante Cevichería Keylita Sausal La Libertad"
        },

        {
            name: "Restaurant Liz",
            icon: "🍴",
            desc: "Restaurante ubicado en la localidad de Sausal.",
            location: "C. La Libertad 37, Sausal 13700",
            history:
                "Restaurant Liz es una opción gastronómica localizada en Sausal. Su tarjeta permite conocer su ubicación y facilita encontrarlo mediante Google Maps. La información histórica específica se mantiene prudente cuando no existe una fuente pública suficiente.",
            maps: "Restaurant Liz C La Libertad 37 Sausal"
        },

        {
            name: "Pollería Bendición de Dios",
            icon: "🍗",
            desc: "Pollería local de Sausal.",
            location: "C. Lima 35, Sausal 13700",
            history:
                "Pollería Bendición de Dios forma parte de los establecimientos de comida identificados para el directorio de ProyecLab. Se incluye como una alternativa gastronómica local sin inventar una fecha de fundación.",
            maps: "Pollería Bendición de Dios C Lima 35 Sausal"
        },

        {
            name: "Pollería Yayita",
            icon: "🍗",
            desc: "Pollería incluida en el directorio de ProyecLab.",
            location:
                "Registro público: Chicama 13700 · ubicación en Sausal por confirmar",
            history:
                "Pollería Yayita se incluye en ProyecLab porque forma parte de las opciones solicitadas para el proyecto. La información pública disponible apunta a Chicama, por lo que la página mantiene la advertencia de que su ubicación exacta en Sausal debe verificarse.",
            maps: "Pollería Yayita Chicama La Libertad"
        }

    ],


    servicios: [

        {
            name: "Sausal / Bodega",
            icon: "🛒",
            desc: "Comercio local para compras cotidianas.",
            location: "C. Lima 57, Sausal 13700",
            history:
                "Las bodegas y pequeños comercios cumplen una función cotidiana en las comunidades, acercando productos de uso diario a los vecinos. ProyecLab la presenta como una opción comercial local.",
            maps: "Sausal Bodega C Lima 57 Sausal"
        },

        {
            name: "Lavandería de Ropa Doña Luzmila",
            icon: "🧺",
            desc: "Servicio local de lavandería.",
            location: "Sausal, La Libertad",
            history:
                "Es un servicio orientado a necesidades cotidianas de la comunidad. ProyecLab evita añadir una fecha de inicio cuando no existe información pública verificable.",
            maps: "Lavandería de Ropa Doña Luzmila Sausal"
        },

        {
            name: "Servicio Móvil Lescano",
            icon: "📱",
            desc: "Servicio local identificado en el directorio.",
            location: "Sausal, La Libertad",
            history:
                "Se incluye como un servicio local identificado para el directorio de trabajo de ProyecLab. Los detalles históricos y operativos deben confirmarse directamente con el establecimiento.",
            maps: "Servicio Móvil Lescano Sausal La Libertad"
        },

        {
            name: "Mercado de Abastos de Sausal",
            icon: "🛍️",
            desc: "Espacio comercial de abastecimiento de la comunidad.",
            location: "Sausal, Chicama, Ascope, La Libertad",
            history:
                "El Mercado de Abastos de Sausal aparece en información pública relacionada con el abastecimiento y comercio de la comunidad. Los mercados cumplen una función importante al concentrar productos y actividades comerciales para la población.",
            maps: "Mercado de Abastos de Sausal"
        }

    ],


    educacion: [

        {
            name: "I.E. José Carlos Mariátegui",
            icon: "🎓",
            desc: "Institución educativa de Sausal.",
            location: "Sausal, Chicama, Ascope, La Libertad",
            history:
                "La I.E. José Carlos Mariátegui registra que fue creada el 17 de octubre de 1965 para atender a estudiantes de Sausal y sus anexos. La institución forma parte de la historia educativa de la comunidad y desarrolla actividades educativas, culturales y deportivas.",
            maps: "I.E. José Carlos Mariátegui Sausal La Libertad"
        },

        {
            name: "I.E. 81971 Alfonso Ugarte",
            icon: "🏫",
            desc: "Institución educativa vinculada a la comunidad.",
            location: "Sausal, La Libertad",
            history:
                "La institución educativa forma parte de la oferta educativa vinculada a Sausal. ProyecLab muestra información de ubicación y evita agregar datos históricos no confirmados por una fuente pública.",
            maps: "I.E. 81971 Alfonso Ugarte Sausal"
        },

        {
            name: "Jardines de Sausal",
            icon: "🌱",
            desc: "Referencia para educación inicial de la comunidad.",
            location: "Sausal, La Libertad",
            history:
                "La educación inicial cumple una función importante en la formación de los niños de la comunidad. Para obtener el nombre y ubicación exactos de un jardín específico se recomienda verificar la institución correspondiente.",
            maps: "educación inicial jardín Sausal La Libertad"
        }

    ],


    lugares: [

        {
            name: "Plaza de Sausal",
            icon: "🏞️",
            desc: "Espacio central y punto de encuentro de la comunidad.",
            location: "Sausal, Chicama, Ascope, La Libertad",
            history:
                "La plaza es uno de los espacios públicos de referencia de una comunidad. En Sausal representa un lugar de encuentro, circulación y realización de actividades comunitarias.",
            maps: "Plaza de Sausal Chicama La Libertad"
        },

        {
            name: "Parque Infantil Noli",
            icon: "🛝",
            desc: "Espacio recreativo para la comunidad.",
            location: "Sausal, La Libertad",
            history:
                "El Parque Infantil Noli es presentado en ProyecLab como un espacio destinado a recreación y encuentro comunitario, especialmente para actividades familiares y de esparcimiento.",
            maps: "Parque Infantil Noli Sausal"
        },

        {
            name: "Plazuela El Maestro",
            icon: "🌳",
            desc: "Espacio público de Sausal.",
            location: "Sausal, La Libertad",
            history:
                "Las plazuelas forman parte de los espacios públicos de encuentro y circulación de los vecinos. ProyecLab incluye la Plazuela El Maestro como referencia dentro de los lugares de la comunidad.",
            maps: "Plazuela El Maestro Sausal"
        },

        {
            name: "Piscina de Sausal",
            icon: "🏊",
            desc: "Espacio recreativo y deportivo de la comunidad.",
            location: "Sausal, La Libertad",
            history:
                "La Municipalidad Distrital de Chicama ha difundido información relacionada con actividades y apertura de la piscina de Sausal. Es un espacio vinculado al deporte, la recreación y actividades comunitarias.",
            maps: "Piscina de Sausal Chicama"
        },

        {
            name: "Cerro 1 de Mayo",
            icon: "⛰️",
            desc: "Lugar asociado a actividades y tradiciones locales.",
            location: "Sausal, La Libertad",
            history:
                "Fuentes locales sobre las tradiciones de Sausal mencionan actividades relacionadas con la subida al cerro 1 de Mayo. ProyecLab lo presenta como una referencia paisajística y cultural de la comunidad.",
            maps: "Cerro 1 de Mayo Sausal"
        }

    ],


    instituciones: [

        {
            name: "Municipalidad del Centro Poblado de Sausal",
            icon: "🏛️",
            desc: "Entidad de representación y gestión local.",
            location: "Sausal, Chicama, Ascope, La Libertad",
            history:
                "La Municipalidad del Centro Poblado de Sausal aparece en documentación pública relacionada con la organización territorial y la gestión de asuntos locales de la comunidad.",
            maps: "Municipalidad Sausal Chicama"
        },

        {
            name: "Centro de Salud Alto Perú Sausal",
            icon: "🏥",
            desc: "Establecimiento de atención en salud de la localidad.",
            location: "Sausal, La Libertad",
            history:
                "El establecimiento forma parte de los servicios institucionales orientados a la atención de la población de la comunidad. ProyecLab evita agregar datos históricos que no hayan sido confirmados.",
            maps: "Centro de Salud Alto Perú Sausal"
        },

        {
            name: "Comisaría Rural Sausal",
            icon: "🚓",
            desc: "Dependencia policial vinculada a la localidad.",
            location: "Sausal, La Libertad",
            history:
                "La Comisaría Rural Sausal forma parte de las instituciones relacionadas con la seguridad y atención ciudadana de la localidad. Los datos operativos actuales deben verificarse directamente con la fuente oficial.",
            maps: "Comisaría Rural Sausal"
        }

    ],


    transporte: [

        {
            name: "Terminal Terrestre Sausal",
            icon: "🚌",
            desc: "Punto de transporte de la localidad.",
            location: "Sausal, La Libertad",
            history:
                "Los terminales y puntos de transporte cumplen una función importante al conectar a los habitantes con otras localidades cercanas. ProyecLab lo incluye como referencia para la movilidad de Sausal.",
            maps: "Terminal Terrestre Sausal"
        },

        {
            name: "Estación de Colectivos Sausal – Casa Grande",
            icon: "🚐",
            desc: "Punto de salida y conexión de colectivos.",
            location: "Sausal, La Libertad",
            history:
                "Los colectivos forman parte de la movilidad cotidiana entre Sausal y otras localidades. Los horarios y disponibilidad pueden cambiar, por lo que deben verificarse antes de viajar.",
            maps: "Estación de Colectivos Sausal Casa Grande"
        }

    ],


    cultura: [

        {
            name: "Virgen del Rosario",
            icon: "🙏",
            desc: "Festividad religiosa mencionada entre las tradiciones locales.",
            location: "Sausal, La Libertad",
            history:
                "La Virgen del Rosario aparece entre las celebraciones religiosas mencionadas en información institucional y local sobre Sausal. Forma parte de las expresiones religiosas y comunitarias de la localidad.",
            maps: "Virgen del Rosario Sausal"
        },

        {
            name: "Señor de los Milagros",
            icon: "🕊️",
            desc: "Celebración religiosa presente en referencias locales.",
            location: "Sausal, La Libertad",
            history:
                "El Señor de los Milagros aparece entre las celebraciones religiosas mencionadas en información sobre las tradiciones de Sausal.",
            maps: "Señor de los Milagros Sausal"
        },

        {
            name: "Virgen de la Puerta",
            icon: "🌟",
            desc: "Tradición religiosa mencionada en información local.",
            location: "Sausal, La Libertad",
            history:
                "La Virgen de la Puerta figura entre las celebraciones religiosas citadas en información relacionada con las tradiciones de Sausal.",
            maps: "Virgen de la Puerta Sausal"
        },

        {
            name: "Subida al cerro 1 de Mayo",
            icon: "🥾",
            desc: "Actividad tradicional mencionada por una fuente local.",
            location: "Sausal, La Libertad",
            history:
                "Una fuente local dedicada a las tradiciones de Sausal menciona la subida al cerro 1 de Mayo como una actividad vinculada a las prácticas comunitarias.",
            maps: "Cerro 1 de Mayo Sausal"
        }

    ]

};


/* =========================================================
   INFORMACIÓN DE CATEGORÍAS
   ========================================================= */

const meta = {

    comida: [
        "🍴 COMIDA",
        "Comida",
        "Restaurantes, cevicherías y pollerías de Sausal."
    ],

    servicios: [
        "🛠️ SERVICIOS",
        "Servicios",
        "Comercios y servicios locales."
    ],

    educacion: [
        "🎓 EDUCACIÓN",
        "Educación",
        "Colegios, escuelas y jardines."
    ],

    lugares: [
        "🌳 LUGARES",
        "Lugares",
        "Parques, plazas y espacios de la comunidad."
    ],

    instituciones: [
        "🏛️ INSTITUCIONES",
        "Instituciones",
        "Entidades y atención local."
    ],

    transporte: [
        "🚌 TRANSPORTE",
        "Transporte",
        "Terminales y puntos de movilidad."
    ],

    cultura: [
        "🎭 CULTURA",
        "Cultura",
        "Tradiciones, fiestas y actividades comunitarias."
    ]

};


/* =========================================================
   ELEMENTOS DEL DOM
   ========================================================= */

const $ = selector => document.querySelector(selector);

const $$ = selector =>
    Array.from(document.querySelectorAll(selector));


/* =========================================================
   ESTADO
   ========================================================= */

let currentCategory = "comida";


/* =========================================================
   GOOGLE MAPS
   ========================================================= */

function mapsUrl(query){

    const finalQuery =
        query + " Sausal La Libertad";

    return (
        "https://www.google.com/maps/search/?api=1&query=" +
        encodeURIComponent(finalQuery)
    );
}


/* =========================================================
   MOSTRAR CATEGORÍA
   ========================================================= */

function showCategory(category){

    if(!places[category]){
        return;
    }

    currentCategory = category;

    const information = meta[category];

    const currentLabel =
        $("#currentLabel");

    const currentTitle =
        $("#currentTitle");

    const currentDesc =
        $("#currentDesc");

    if(currentLabel){
        currentLabel.textContent =
            information[0];
    }

    if(currentTitle){
        currentTitle.textContent =
            information[1];
    }

    if(currentDesc){
        currentDesc.textContent =
            information[2];
    }


    const localSearch =
        $("#localSearch");

    if(localSearch){
        localSearch.value = "";
    }


    $$(".cat-card[data-cat]").forEach(card => {

        card.classList.toggle(
            "active",
            card.dataset.cat === category
        );

    });


    renderPlaces();

}


/* =========================================================
   RENDERIZAR TARJETAS
   ========================================================= */

function renderPlaces(){

    const cards =
        $("#cards");

    const empty =
        $("#empty");

    if(!cards){
        return;
    }


    const searchInput =
        $("#localSearch");

    const query =
        searchInput
            ? searchInput.value.trim().toLowerCase()
            : "";


    const list =
        places[currentCategory].filter(place => {

            const searchable = (

                place.name +
                " " +
                place.desc +
                " " +
                place.location

            ).toLowerCase();

            return searchable.includes(query);

        });


    cards.innerHTML = list.map((place,index) => {

        return `

            <article class="place-card">

                <div class="place-cover">
                    <span>${place.icon}</span>
                </div>

                <div class="place-body">

                    <small>
                        ${meta[currentCategory][1]}
                    </small>

                    <h3>
                        ${escapeHtml(place.name)}
                    </h3>

                    <p>
                        ${escapeHtml(place.desc)}
                    </p>

                    <div class="place-actions">

                        <button
                            type="button"
                            data-detail="${index}">
                            📖 Historia
                        </button>

                        <a
                            class="maps"
                            href="${mapsUrl(place.maps)}"
                            target="_blank"
                            rel="noopener noreferrer">
                            📍 Maps
                        </a>

                    </div>

                </div>

            </article>

        `;

    }).join("");


    if(empty){

        empty.classList.toggle(
            "hidden",
            list.length !== 0
        );

    }


    $$("[data-detail]").forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const index =
                    Number(
                        button.dataset.detail
                    );

                openModal(list[index]);

            }
        );

    });

}


/* =========================================================
   ESCAPAR TEXTO
   ========================================================= */

function escapeHtml(value){

    return String(value)

        .replaceAll("&","&amp;")
        .replaceAll("<","&lt;")
        .replaceAll(">","&gt;")
        .replaceAll('"',"&quot;")
        .replaceAll("'","&#039;");

}


/* =========================================================
   MODAL DE HISTORIA
   ========================================================= */

function openModal(place){

    if(!place){
        return;
    }

    const modal =
        $("#modal");

    const content =
        $("#modalContent");

    if(!modal || !content){
        return;
    }


    const whatsappText =
        "Hola, quiero información sobre " +
        place.name +
        " en Sausal.";


    content.innerHTML = `

        <small
            style="
                color:#20d9ff;
                font-weight:900;
                letter-spacing:.12em;
            ">
            ${escapeHtml(
                meta[currentCategory][1].toUpperCase()
            )}
        </small>

        <h2>
            ${place.icon}
            ${escapeHtml(place.name)}
        </h2>

        <div class="modal-meta">
            📍 ${escapeHtml(place.location)}
        </div>

        <p>
            ${escapeHtml(place.history)}
        </p>

        <p>
            <strong>
                Descripción:
            </strong>
            ${escapeHtml(place.desc)}
        </p>

        <div class="modal-buttons">

            <a
                href="${mapsUrl(place.maps)}"
                target="_blank"
                rel="noopener noreferrer">
                📍 Abrir Google Maps
            </a>

            <a
                href="https://wa.me/51972372645?text=${encodeURIComponent(whatsappText)}"
                target="_blank"
                rel="noopener noreferrer">
                💬 Consultar
            </a>

        </div>

    `;


    modal.classList.remove("hidden");

    document.body.style.overflow = "hidden";

}


/* =========================================================
   CERRAR MODAL
   ========================================================= */

function closeModal(){

    const modal =
        $("#modal");

    if(!modal){
        return;
    }

    modal.classList.add("hidden");

    document.body.style.overflow = "";

}


/* =========================================================
   BÚSQUEDA GENERAL
   ========================================================= */

function globalSearch(){

    const input =
        $("#globalSearch");

    const box =
        $("#globalResults");

    if(!input || !box){
        return;
    }


    const query =
        input.value.trim().toLowerCase();


    if(!query){

        box.classList.add("hidden");

        box.innerHTML = "";

        return;

    }


    const results = [];


    for(
        const [category,list]
        of Object.entries(places)
    ){

        for(const place of list){

            const searchable = (

                place.name +
                " " +
                place.desc +
                " " +
                place.location +
                " " +
                place.history

            ).toLowerCase();


            if(
                searchable.includes(query)
            ){

                results.push({
                    category,
                    place
                });

            }

        }

    }


    const limited =
        results.slice(0,8);


    if(!limited.length){

        box.innerHTML = `

            <div class="global-result">

                <div>

                    <b>
                        No encontramos coincidencias.
                    </b>

                    <span>
                        Prueba con otra palabra.
                    </span>

                </div>

            </div>

        `;

    }else{

        box.innerHTML =
            limited.map(result => {

                return `

                    <div class="global-result">

                        <div>

                            <b>
                                ${result.place.icon}
                                ${escapeHtml(
                                    result.place.name
                                )}
                            </b>

                            <span>
                                ${meta[
                                    result.category
                                ][1]}
                                ·
                                ${escapeHtml(
                                    result.place.location
                                )}
                            </span>

                        </div>

                        <a
                            href="${mapsUrl(
                                result.place.maps
                            )}"
                            target="_blank"
                            rel="noopener noreferrer">
                            Maps →
                        </a>

                    </div>

                `;

            }).join("");

    }


    box.classList.remove("hidden");

}


/* =========================================================
   MENÚ MÓVIL
   ========================================================= */

function setupMenu(){

    const menu =
        $("#menu");

    const nav =
        $("#nav");

    if(!menu || !nav){
        return;
    }


    menu.addEventListener(
        "click",
        () => {

            nav.classList.toggle("open");

        }
    );


    $$("#nav a").forEach(link => {

        link.addEventListener(
            "click",
            () => {

                nav.classList.remove(
                    "open"
                );

            }
        );

    });

}


/* =========================================================
   BOTÓN VOLVER ARRIBA
   ========================================================= */

function setupTopButton(){

    const button =
        $("#top");

    if(!button){
        return;
    }


    button.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top:0,
                behavior:"smooth"
            });

        }
    );


    function update(){

        button.classList.toggle(
            "hidden",
            window.scrollY < 500
        );

    }


    window.addEventListener(
        "scroll",
        update,
        {passive:true}
    );


    update();

}


/* =========================================================
   OBSERVADOR DEL MENÚ
   ========================================================= */

function setupSectionObserver(){

    const sections =
        $$("main section[id]");

    const links =
        $$("#nav a");


    if(!sections.length){
        return;
    }


    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if(!entry.isIntersecting){
                        return;
                    }


                    links.forEach(link => {

                        const active =
                            link.getAttribute("href") ===
                            "#" + entry.target.id;

                        link.classList.toggle(
                            "active",
                            active
                        );

                    });

                });

            },

            {
                rootMargin:
                    "-25% 0px -65% 0px"
            }

        );


    sections.forEach(section => {

        observer.observe(section);

    });

}


/* =========================================================
   CATEGORÍAS
   ========================================================= */

function setupCategories(){

    $$(".cat-card[data-cat]")
        .forEach(card => {

            card.addEventListener(
                "click",
                () => {

                    showCategory(
                        card.dataset.cat
                    );


                    const explorer =
                        $("#explorador");

                    if(explorer){

                        explorer.scrollIntoView({
                            behavior:"smooth",
                            block:"start"
                        });

                    }

                }
            );

        });

}


/* =========================================================
   BUSCADOR LOCAL
   ========================================================= */

function setupLocalSearch(){

    const input =
        $("#localSearch");

    const clear =
        $("#clearLocal");


    if(input){

        input.addEventListener(
            "input",
            renderPlaces
        );

    }


    if(clear){

        clear.addEventListener(
            "click",
            () => {

                if(input){
                    input.value = "";
                }

                renderPlaces();

                if(input){
                    input.focus();
                }

            }
        );

    }

}


/* =========================================================
   BUSCADOR GENERAL
   ========================================================= */

function setupGlobalSearch(){

    const input =
        $("#globalSearch");

    const clear =
        $("#globalClear");


    if(input){

        input.addEventListener(
            "input",
            globalSearch
        );

    }


    if(clear){

        clear.addEventListener(
            "click",
            () => {

                if(input){
                    input.value = "";
                }

                globalSearch();

                if(input){
                    input.focus();
                }

            }
        );

    }


    document.addEventListener(
        "click",
        event => {

            const box =
                $("#globalResults");

            const search =
                $("#globalSearch");


            if(!box || !search){
                return;
            }


            if(
                !box.contains(event.target) &&
                event.target !== search
            ){

                box.classList.add(
                    "hidden"
                );

            }

        }
    );

}


/* =========================================================
   MODAL
   ========================================================= */

function setupModal(){

    const close =
        $("#closeModal");

    const modal =
        $("#modal");


    if(close){

        close.addEventListener(
            "click",
            closeModal
        );

    }


    if(modal){

        modal.addEventListener(
            "click",
            event => {

                if(
                    event.target === modal
                ){

                    closeModal();

                }

            }
        );

    }


    document.addEventListener(
        "keydown",
        event => {

            if(event.key === "Escape"){

                closeModal();

            }

        }
    );

}


/* =========================================================
   INICIO
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        setupCategories();

        setupLocalSearch();

        setupGlobalSearch();

        setupModal();

        setupMenu();

        setupTopButton();

        setupSectionObserver();


        /* Categoría inicial */

        showCategory("comida");


        /* Botón volver arriba */

        const top =
            $("#top");

        if(top){

            top.classList.add(
                "hidden"
            );

        }

    }
);
