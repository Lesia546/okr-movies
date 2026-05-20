function changeText(){

    let descriptions = [

        "Тут зібрані найатмосферніші фільми для затишного вечора.",

        "Добірки фільмів допоможуть знайти кіно під будь-який настрій.",

        "На сайті є романтичні, мотиваційні та психологічні фільми.",

        "Відкрийте для себе нові історії та незабутніх персонажів.",

        "Підбірки створені для любителів драми, фантастики та трилерів."
    ];

    let random = Math.floor(
        Math.random() * descriptions.length
    );

    document.getElementById("text").innerHTML =
        descriptions[random];
}

function addItem(){

    let movie = prompt(
        "Який фільм додати?"
    );

    if(movie){

        let li =
            document.createElement("li");

        li.textContent =
            movie +
            " — незабаром додамо на сайт";

        document
            .getElementById("recommendations")
            .append(li);
    }
}

function removeItem(){

    let first =
        document.querySelector(
            "#recommendations li"
        );

    if(first){

        alert(
            first.textContent 
        );

        first.remove();
    }

    else{

        alert(
            "Список рекомендацій порожній"
        );
    }
}

function dialogWithUser(){

    let name = prompt(
        "Як вас звати?"
    );

    let genre = prompt(
        "Який жанр вам подобається?"
    );

    let answer = confirm(
        "Хочете отримати рекомендації?"
    );

    if(answer){

        let recommendations = [];

        if(genre.toLowerCase() == "драма"){

            recommendations = [
                "Втеча з Шоушенка",
                "Зелена миля",
                "1+1"
            ];
        }

        else if(
            genre.toLowerCase() == "фантастика"
        ){

            recommendations = [
                "Інтерстеллар",
                "Початок",
                "Марсіянин"
            ];
        }

        else if(
            genre.toLowerCase() == "романтика"
        ){

            recommendations = [
                "Гордість і упередження",
                "Ла-Ла Ленд",
                "До зустрічі з тобою"
            ];
        }

        else{

            recommendations = [
                "Perfect Days",
                "Амелі",
                "Таємничий сад"
            ];
        }

        let message =
            name +
            ", рекомендуємо:\n";

        for(
            let i = 0;
            i < recommendations.length;
            i++
        ){

            message +=
                "- " +
                recommendations[i] +
                "\n";
        }

        alert(message);
    }

    else{

        alert(
            "Можливо іншим разом :)"
        );
    }
}

function developerInfo(lastName, firstName, position = "студентка"){
    alert(
        "Розробник: " + lastName + " " + firstName +
        "\nПосада: " + position
    );
}

function compareMovies(){

    let movie1 = prompt(
        "Введіть назву першого фільму:"
    );

    let movie2 = prompt(
        "Введіть назву другого фільму:"
    );

    let movies = {

        "У гонитві за щастям":
            document.getElementById("happinnes-time").textContent,

        "Куди приводять мрії":
            document.getElementById("dreams-time").textContent,

        "Реквієм за мрією":
            document.getElementById("requiem-time").textContent,

        "Perfect Days":
            document.getElementById("days-time").textContent
    };

    let time1 = Number(movies[movie1]);
    let time2 = Number(movies[movie2]);

    if(!time1 || !time2){

        alert("Фільм не знайдено в таблиці");
 
        return;
    }

    if(time1 > time2){
 
        alert(
            movie1 +
            " довший"
        );
    }
    else if(time2 > time1){

        alert(
            movie2 +
            " довший"
        );
    }
    else{

        alert(
            "Фільми однакові за тривалістю"
        );
    }
}

function changeBackground(){

    let color = prompt(
        "Який колір атмосфери бажаєте?"
    );

    document.body.style.background =
        color;

    alert(
        "Атмосферу змінено на 30 секунд"
    );

    setTimeout(function(){

        document.body.style.background =
            "#0b0f1a url('font.jpg')";

        document.body.style.backgroundSize =
            "cover";

    }, 30000);
}

function goToIMDb(){
    location.href = "https://www.imdb.com";
}

function changeGenres(){

    let items = document.querySelectorAll("#list li");

    items.forEach(function(item){
        item.style.color = "red";
    });
}

function replaceTitle(){
    let title = document.getElementById("title");

    title.outerHTML = "<h1 id='title'> Нові підбірки фільмів</h1>";
}

function changeNodeValue(){

    let textNode = document.getElementById("text").firstChild;

    textNode.data = "Текст змінено через nodeValue/data";
}

function prependItem(){

    let li = document.createElement("li");

    li.textContent = "Бойовик";

    document.getElementById("list").prepend(li);
}

function addAfter(){

    let p = document.createElement("p");

    p.textContent = "Новий абзац після списку";

    document.getElementById("list").after(p);
}

function replaceItem(){

    let first = document.querySelector("li");

    let newItem = document.createElement("li");

    newItem.textContent = "Трилер";

    first.replaceWith(newItem);
}

function writeMessage(){
    document.write("<h2>Сторінку змінено через document.write()</h2>");
}

function addTextNode(){

    let p = document.createElement("p");

    let text = document.createTextNode("Текст через createTextNode");

    p.append(text);

    document.body.append(p);
}

function searchMovie(){

    let movie = prompt(
        "Який фільм шукаєте?"
    );

    let text =
        document.getElementById("text");

    if(movie.toLowerCase() == "інтерстеллар"){

        text.innerHTML =
            "Знайдено: <a target='_blank' href='https://www.imdb.com/title/tt0816692/'>Інтерстеллар</a>";
    }

    else if(movie.toLowerCase() == "бійцівський клуб"){

        text.innerHTML =
            "Знайдено: <a target='_blank' href='https://www.imdb.com/title/tt0137523/'>Бійцівський клуб</a>";
    }

    else{

        text.innerHTML =
            "Фільм поки не знайдено на сайті";
    }
}





let actorList =
    document.getElementById("actor-list");

function highlightActor(event){

    if(event.target.closest("li")){

        let actors =
            document.querySelectorAll(
                "#actor-list li"
            );

        actors.forEach(function(actor){

            actor.classList.remove(
                "actor-active"
            );
        });

        event.target
            .closest("li")
            .classList.add(
                "actor-active"
            );
    }
}

actorList.addEventListener(
    "click",
    highlightActor
);

let actorMenu =
    document.getElementById("actor-menu");

let actorActions = {

    marvel(){

        document.getElementById(
            "actor-info"
        ).innerHTML =

            "Tom Hiddleston та Robert Downey Jr. стали відомими завдяки фільмам Marvel.";
    },

    drama(){

        document.getElementById(
            "actor-info"
        ).innerHTML =

            "Johnny Depp відомий своїми драматичними та емоційними ролями.";
    },

    fantasy(){

        document.getElementById(
            "actor-info"
        ).innerHTML =

            "Tom Hiddleston часто грає персонажів у фантастичних фільмах.";
    }
};

actorMenu.addEventListener(

    "click",

    function(event){

        let action =
            event.target.dataset.action;

        if(action){

            actorActions[action]();
        }
    }
);

let specialBtn =
    document.getElementById(
        "special-btn"
    );

function firstHandler(){

    alert(
        "Рекомендуємо переглянути: Інтерстеллар"
    );
}

function secondHandler(){

    alert(
        "Жанр фільму: фантастика"
    );
}

specialBtn.addEventListener(
    "click",
    firstHandler
);

specialBtn.addEventListener(
    "click",
    secondHandler
);


specialBtn.addEventListener(
    "mouseover",
    actorHandler
);


let movies =
    document.querySelectorAll(
        ".movie-card"
    );

let favoritesBox =
    document.getElementById(
        "favorites-box"
    );

let favoritesList =
    document.getElementById(
        "favorites-list"
    );

let currentMovie = null;

let shiftX = 0;
let shiftY = 0;

movies.forEach(function(movie){

    movie.addEventListener(

        "mousedown",

        function(event){

            currentMovie = movie;

            shiftX = event.offsetX;
            shiftY = event.offsetY;

            movie.style.position =
                "absolute";

            movie.style.zIndex =
                "1000";

            movie.style.cursor =
                "grabbing";
        }
    );

    movie.addEventListener(

        "mouseover",

        function(event){

            event.target.style.color =
                "gold";
        }
    );

    movie.addEventListener(

        "mouseout",

        function(event){

            event.target.style.color =
                "white";
        }
    );
});

document.addEventListener(

    "mousemove",

    function(event){

        if(currentMovie){

            currentMovie.style.left =
                event.pageX - shiftX + "px";

            currentMovie.style.top =
                event.pageY - shiftY + "px";
        }
    }
);

document.addEventListener(

    "mouseup",

    function(event){

        if(currentMovie){

            let box =
                favoritesBox.getBoundingClientRect();

            if(

                event.clientX > box.left &&
                event.clientX < box.right &&
                event.clientY > box.top &&
                event.clientY < box.bottom

            ){

                let li =
                    document.createElement("li");

                li.textContent =
                    currentMovie.dataset.title;

                favoritesList.append(li);

                alert(
                    "Фільм додано у добірку"
                );
            }

            currentMovie.style.cursor =
                "grab";

            currentMovie = null;
        }
    }
);