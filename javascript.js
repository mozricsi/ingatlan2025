const properties = [
    {
        title: "Modern lakás Budapest belvárosában",
        location: "Budapest, V. kerület",
        rooms: 3,
        size: 75,
        price: "85M Ft"
    },
    {
        title: "Családi ház kerttel",
        location: "Debrecen, kertváros",
        rooms: 5,
        size: 120,
        price: "68M Ft"
    },
    {
        title: "Panorámás apartman",
        location: "Pécs, Mecsekoldal",
        rooms: 2,
        size: 55,
        price: "45M Ft"
    },
    // 9 további hirdetés
];

const container = document.getElementById('properties');

properties.forEach(property => {
    const propertyDiv = document.createElement('div');
    propertyDiv.classList.add('property');
    propertyDiv.innerHTML = `
        <h2>${property.title}</h2>
        <p><strong>Helyszín:</strong> ${property.location}</p>
        <p><strong>Szobák száma:</strong> ${property.rooms}</p>
        <p><strong>Alapterület:</strong> ${property.size} m²</p>
        <p><strong>Ár:</strong> ${property.price}</p>
        <button onclick="sendInquiry('${property.title}')">Érdeklődöm</button>
    `;
    container.appendChild(propertyDiv);
});

function sendInquiry(propertyTitle) {
    const email = "mozric721@hengersor.hu";
    const subject = `Érdeklődés: ${propertyTitle}`;
    const body = `Tisztelt Hirdető,\n\nÉrdeklődöm a következő ingatlan iránt: ${propertyTitle}. Kérem, vegyék fel velem a kapcsolatot.\n\nÜdvözlettel,\n[Az Ön neve]`;

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
