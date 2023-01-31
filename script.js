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

tabFunc();