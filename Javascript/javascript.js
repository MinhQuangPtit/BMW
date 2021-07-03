
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document)

// 2 nút series và body types
const seriesBtn = $('.series')         
const bodyTypesBtn = $('.body-types')
// 2 element chứa các nút chỉ mục 
const listItem1 = $('.item-1')
const listItem2 = $('.item-2')
// 2 danh sách chi tiết các nút chỉ mục
const listBtn1 = $$('.item-1>li')
const listBtn2 = $$('.item-2>li')
// 2 danh sách car của series và body types
const listSeriesCar = $$('.series-item')
const listBodyCar = $$('.body-types-item')


seriesBtn.onclick = function() { 
    seriesBtn.classList.add('style-onclick')
    bodyTypesBtn.classList.remove('style-onclick')

    listItem1.classList.add('active-flex')
    listItem2.classList.remove('active-flex')
    
    while($('.tabs-items .style-onclick'))$('.tabs-items .style-onclick').classList.remove('style-onclick')
    while($('.tabs-cars .active-flex')) $('.tabs-cars .active-flex').classList.remove('active-flex')
    listBtn1[1].classList.add('style-onclick')
    listSeriesCar[1].classList.add('active-flex')
    
}
bodyTypesBtn.onclick = function() { 
    bodyTypesBtn.classList.add('style-onclick')
    seriesBtn.classList.remove('style-onclick')

    listItem2.classList.add('active-flex')
    listItem1.classList.remove('active-flex')

    while($('.tabs-items .style-onclick'))$('.tabs-items .style-onclick').classList.remove('style-onclick')
    while($('.tabs-cars .active-flex')) $('.tabs-cars .active-flex').classList.remove('active-flex')
    listBtn2[0].classList.add('style-onclick')
    listBodyCar[0].classList.add('active-flex')
}

listBtn1.forEach( function(member,index) {
    const tabCar = listSeriesCar[index]
    member.onclick = function() {
        while($('.tabs-items .style-onclick'))$('.tabs-items .style-onclick').classList.remove('style-onclick')
        this.classList.add('style-onclick')
        
        if($('.tabs-cars .active-flex')) $('.tabs-cars .active-flex').classList.remove('active-flex')
        if(tabCar)tabCar.classList.add('active-flex')
    }
})

listBtn2.forEach( function(member,index) {
    const tabCar = listBodyCar[index]
    member.onclick = function() {
        while($('.tabs-items .style-onclick'))$('.tabs-items .style-onclick').classList.remove('style-onclick')
        this.classList.add('style-onclick')
        
        if($('.tabs-cars .active-flex')) $('.tabs-cars .active-flex').classList.remove('active-flex')
        if(tabCar)tabCar.classList.add('active-flex')
    }
})

    // search

const nav = $('.nav');
const btnSearch = $('.search-btn');
const btnCloseSearch = $('.icon-close-search');
const overlay = $('.search-overlay');
const body = $('body')
console.log(body)
btnSearch.onclick = function() {
    if( !nav.classList.contains('nav__on--search')){
        nav.classList.add('nav__on--search')
    }
    else{
        nav.classList.remove('nav__on--search');
    }
}

btnCloseSearch.onclick = function() {
    if(nav.classList.contains('nav__on--search')) nav.classList.remove('nav__on--search')
}

overlay.onclick = function() {
    if(nav.classList.contains('nav__on--search')) nav.classList.remove('nav__on--search')
}
