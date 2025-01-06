const adsContainer = document.getElementById('ads');
const adForm = document.getElementById('adForm');


adForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    const ad = document.createElement('div');
    ad.classList.add('ad');

    ad.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <button onclick="sendInterest('${title}')">Érdekel</button>
    `;

    adsContainer.appendChild(ad);

    adForm.reset(); 
});


function sendInterest(adTitle) {
    const name = prompt("Add meg a neved:");
    const address = prompt("Add meg az e-mail címed:");
    const phone = prompt("Add meg a telefonszámod:");

    if (name && address && phone) {
        const emailBody = `
            Érdeklődő adatai:
            Név: ${name}
            Cím: ${address}
            Telefonszám: ${phone}

            Érdeklődés a következő hirdetés iránt: ${adTitle}
        `;
        window.location.href = `mailto:iskola@example.com?subject=Érdeklődés: ${adTitle}&body=${encodeURIComponent(emailBody)}`;
    } else {
        alert("Minden adatot meg kell adnod az érdeklődéshez!");
    }
}