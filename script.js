const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

document.addEventListener("click", function(event){
    if(!nav.contains(event.target) && !bar.contains(event.target)){
        nav.classList.remove("active");
    }
})
