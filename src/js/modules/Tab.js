/*
tab-nav__item — кнопка чтобы переключать табы
tab — контент 
для tab-nav__item'a нужно давать атрибут в pug файле data-tab-name. Например .tab-nav__item(data-tab-name="tmpl-hh__tab-1");
и в зависимости от этого прописать такой же класс к контенту(tab). То есть наш .tab будет .tab.tab-1 
*/

function Tab() {
  let tabNav = document.querySelectorAll(".tmpl-hh__tab-nav__item"),
  tabContent = document.querySelectorAll(".tmpl-hh__tab"),
  tabName;
  tabNav.forEach(item => {
    item.addEventListener('click', selectTabNav);
  });

  function selectTabNav() {
    tabNav.forEach(item => {
      item.classList.remove("tmpl-hh__tab-nav__item--active");
    })
    this.classList.add("tmpl-hh__tab-nav__item--active");
    tabName = this.getAttribute("data-tab-name");
    selectTabContent(tabName);
  }

  function selectTabContent(tabName) {
    tabContent.forEach(item => {
      item.classList.contains(tabName) ? item.classList.add("tmpl-hh__tab--active") : item.classList.remove("tmpl-hh__tab--active")
    })
  }
  
  document.querySelector(".tmpl-hh__tab-nav__item").click();

  let tabNav2 = document.querySelectorAll(".tmpl-hh__tab-nav__item2"),
  tabContent2 = document.querySelectorAll(".tmpl-hh__tab2"),
  tabName2;
  tabNav2.forEach(item => {
    item.addEventListener('click', selectTabNav2);
  });

  function selectTabNav2() {
    tabNav2.forEach(item => {
      item.classList.remove("tmpl-hh__tab-nav__item2--active");
    })
    this.classList.add("tmpl-hh__tab-nav__item2--active");
    tabName2 = this.getAttribute("data-tab-name2");
    selectTabContent2(tabName2);
  }

  function selectTabContent2(tabName2) {
    tabContent2.forEach(item => {
      item.classList.contains(tabName2) ? item.classList.add("tmpl-hh__tab2--active") : item.classList.remove("tmpl-hh__tab2--active")
    })
  }
  
  document.querySelector(".tmpl-hh__tab-nav__item2").click();
}

export default Tab;