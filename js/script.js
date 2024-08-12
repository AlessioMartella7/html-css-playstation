
// section new-games

// importiamo dal DOM
const gallery = document.querySelector('.gallery');
gallery.classList.add('row', 'row-cols-2', 'row-cols-sm-3', 'row-cols-xxl-6');

//creiamo un ciclo per la nostra galleria con 12 thumbnail nella
for(let i = 1; i <= 12; i++) {
    // isoliamo i multipli di 2 e mettiamo all'interno l'img di Crash
    if(i % 2 === 0 ) {
        gallery.innerHTML += `<div class="col gy-4"><img class="img-fluid rounded-4" src="img/crash-bandicoot-4-its-about-time-store-art.jpg" alt="crash"><p class="text-white fs-6 fw-bold mt-2"> Crash Bandicoot 4: It's About Time </p>
        </div>` ;
    }
    //mettiamo all'interno dei rimanenti l'img di tony-hawks
    else {
        gallery.innerHTML += `<div class="col gy-4"><img class="img-fluid rounded-4" src="img/tony-hawks-pro-skater-1-2-store-art.jpg" alt="tony"><p class="text-white fs-6 fw-bold mt-2"> Tony Hawk™ Pro Skater™ 1 + 2 </p>
        </div>` ;
        console.log('gallery', gallery)
    }
    
}






