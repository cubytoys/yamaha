const productos = [
    { nombre: "Yamaha YAS-62", img: "https://images.unsplash.com/photo-1577369256636-2c077eec9abc?w=400&q=80&auto=format&fit=crop", desc: "Saxofón Alto Profesional. Cuerpo de latón amarillo, llaves doradas.", precio: "$3,299" },
    { nombre: "Yamaha YTS-82Z", img: "https://images.unsplash.com/photo-1471565661762-b9dfae862dbe?w=400&q=80&auto=format&fit=crop", desc: "Saxofón Tenor Serie Z. Máxima respuesta y proyección.", precio: "$4,199" },
    { nombre: "Yamaha YSS-875", img: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=400&q=80&auto=format&fit=crop", desc: "Saxofón Soprano Curvo. Excelente afinación y timbre.", precio: "$3,899" },
    { nombre: "Yamaha YBS-62", img: "https://images.unsplash.com/photo-1650894752164-ec6bfdafe4de?w=400&q=80&auto=format&fit=crop", desc: "Saxofón Barítono Profesional. Sonido potente y grave.", precio: "$5,499" },
    { nombre: "Yamaha YAS-480", img: "https://images.unsplash.com/photo-1528143358888-6d3c7f67bd5d?w=400&q=80&auto=format&fit=crop", desc: "Saxofón Alto Intermedio. Ideal para estudiantes avanzados.", precio: "$1,899" },
    { nombre: "Yamaha YTS-62", img: "https://images.unsplash.com/photo-1562593623-9731b885cd0d?w=400&q=80&auto=format&fit=crop", desc: "Saxofón Tenor Clásico. Timbre cálido y versátil.", precio: "$3,999" },
    { nombre: "Yamaha YSS-82Z", img: "https://images.unsplash.com/photo-1772597228283-b16931a1bfa8?w=400&q=80&auto=format&fit=crop", desc: "Saxofón Soprano Recto. Serie Z, ligero y preciso.", precio: "$3,699" },
    { nombre: "Yamaha YBS-82Z", img: "https://images.unsplash.com/photo-1748094924525-b1f825989382?w=400&q=80&auto=format&fit=crop", desc: "Saxofón Barítono Serie Z. Potencia y control total.", precio: "$6,299" }
];

const grid = document.getElementById('grid-productos');

productos.forEach(p => {
    const card = document.createElement('div');
    card.className = 'producto-card';
    const msg = encodeURIComponent(`Hola, quiero pedir el ${p.nombre} - ${p.precio}`);
    card.innerHTML = `
        <img src="${p.img}" alt="${p.nombre}">
        <h3>${p.nombre}</h3>
        <p class="desc">${p.desc}</p>
        <button class="btn-expandir">Ver información y precio</button>
        <div class="producto-info">
            <p><strong>Precio:</strong></p>
            <p class="precio">${p.precio}</p>
            <a class="btn-wa-producto" href="https://wa.me/50372250975?text=${msg}" target="_blank">Pedir por WhatsApp</a>
        </div>
    `;
    grid.appendChild(card);
});

document.querySelectorAll('.btn-expandir').forEach(btn => {
    btn.addEventListener('click', () => {
        const info = btn.nextElementSibling;
        info.classList.toggle('open');
        btn.textContent = info.classList.contains('open')
            ? 'Ocultar información'
            : 'Ver información y precio';
    });
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
    slides.forEach(s => s.classList.remove('active'));
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

document.querySelector('.prev').addEventListener('click', () => showSlide(currentSlide - 1));
document.querySelector('.next').addEventListener('click', () => showSlide(currentSlide + 1));

setInterval(() => showSlide(currentSlide + 1), 5000);

const telefono = document.getElementById('telefono');
telefono.textContent = '+503 7225 0975';

const btnWA = document.getElementById('btn-whatsapp');
btnWA.href = 'https://wa.me/50372250975?text=Hola%2C%20quiero%20pedir%20un%20saxof%C3%B3n%20Yamaha';
