let tabFunc = function () {
    let tabs = document.querySelectorAll('.tabs__item');
    let tabContents = document.querySelectorAll('.tabs__content');
    // let tabs = document.querySelectorAll('.tabs__item');
    // console.log(tabs);

    for (let tab of tabs) {
        tab.addEventListener('click', selectTabNav)
    }

    function selectTabNav() {
        for (let tab of tabs) {
            // console.log(tab)
            tab.classList.remove('tabs__isActive')
        }
        this.classList.add('tabs__isActive');
        let tabName = this.getAttribute('data-tabName');
        selectTabContent(tabName);
    }
    function selectTabContent(tabName) {
        for (let tab of tabContents) {
            // console.log(tab)
            tab.classList.remove('isActive')
        }
        // this.classList.add('tabs__isActive');
        let tab = document.getElementsByClassName(tabName)
        tab[0].classList.add('isActive');
    }
}

// const postData = async (url = '', data = {name:'yogesh', email: 'yogesh@makitweb.com'}) => {
//     // Формируем запрос
//     const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         // Данные
//         body: JSON.stringify(data)
//     });
//     return response.json();
// }

let formHandler = function () {
    let sendBtn = document.querySelector('.contact__button');
    let form = document.querySelector('.secondForm');
    let formSender = form.getAttribute('action');

    // form.addEventListener('submit', submitForm )

    function submit(e){
        e.preventDefault();
        const formData = new FormData(secondForm);
        // const formData = new FormData(this);
        fetch(formSender, {
            method: 'POST',
            body: formData
        }).then(function (responce) {
            return responce.text();
        }).then(function (text){
            console.log(text);
        }).catch(function (error){
            console.log(error);
        })
    }

    sendBtn.addEventListener('click', (e) => {
        // form.submit();
        // submitForm(e);

        // postData(formSender, { message: 42 })
        //     .then((data) => {
        //         console.log(34);
        //     });
        // let name = document.querySelector('#name').value;

        // const xhtml = new XMLHttpRequest();
        // xhtml.onload = function() {
        //     document.getElementById("txtHint").innerHTML = this.responseText;
        // }
        // xhtml.open("POST", formSender);
        // xhtml.setRequestHeader("Content-Type", "application/json");
        // // xhtml.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        // xhtml.send();
    })
}

tabFunc();
// formHandler();


//-------------------example from learnjs_________________________
// <form name="person">
//     <input name="name" value="Петя">
//         <input name="surname" value="Васечкин">
// </form>
//
// <script>
//     // заполним FormData данными из формы
//     let formData = new FormData(document.forms.person);
//
//     // добавим ещё одно поле
//     formData.append("middle", "Иванович");
//
//     // отправим данные
//     let xhr = new XMLHttpRequest();
//     xhr.open("POST", "/article/xmlhttprequest/post/user");
//     xhr.send(formData);
//
//     xhr.onload = () => alert(xhr.response);
// </script>