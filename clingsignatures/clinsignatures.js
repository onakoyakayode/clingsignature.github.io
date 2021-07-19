const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling
        if(accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight +"px"
        }
        else {
            accordionItemBody.style.maxHeight = 0;
        }
    })
})


const contact = document.getElementById("contact");
const list = document.getElementById("dropdown");

list.style.display = "none"

contact.addEventListener("click", () => {
    if (list.style.display == "none") {
        list.style.display = "block"
    } else {
        list.style.display ="none"
    }
});


const but = document.getElementById('toggled');

but.addEventListener('click', function(){
    const mkList = document.getElementById('list');
    if (mkList.classList.contains('d-flex')){
        mkList.classList.remove('d-flex')
    } else {
        mkList.classList.add('d-flex')
    }
});