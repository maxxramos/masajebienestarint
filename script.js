/* ============================================================
   MASAJES BIENESTAR INTEGRAL — script.js
   ============================================================ */

/* ======================== SERVICE DATA ======================== */
const serviceData = {
    entrenador_personal: {
        icon: '<i class="fa-solid fa-dumbbell"></i>',
        title: 'Entrenador Personal',
        desc: `El entrenamiento personal es la forma más efectiva de alcanzar tus objetivos físicos con un plan diseñado exclusivamente para vos.

Cada programa parte de una evaluación inicial completa que permite identificar tu condición física actual, tus metas y cualquier limitación que debamos considerar. A partir de allí, construimos un plan progresivo y adaptado a tu ritmo.

<strong>¿Qué incluye?</strong>
• Evaluación física y postural inicial
• Plan de entrenamiento personalizado por objetivos (pérdida de peso, tonificación, fuerza, resistencia)
• Seguimiento continuo y ajuste del programa según tu evolución
• Corrección técnica en cada ejercicio para prevenir lesiones
• Orientación nutricional básica complementaria
• Sesiones individuales con atención 100% dedicada

<strong>¿Para quién es?</strong>
Para cualquier persona que quiera iniciar o mejorar su vida activa con acompañamiento profesional, ya sea principiante o deportista con experiencia previa.

Con esfuerzo, constancia y la guía correcta, los resultados siempre llegan.`
    },
    masaje_terapeutico: {
        icon: '<i class="fa-solid fa-hand-sparkles"></i>',
        title: 'Masaje Terapéutico',
        desc: `El masaje terapéutico es una técnica manual especializada orientada al alivio del dolor, la recuperación muscular y el bienestar general del cuerpo.

A través de maniobras específicas de presión, fricción y movilización, se trabaja sobre contracturas, tensiones acumuladas y puntos gatillo musculares, logrando resultados notables desde las primeras sesiones.

<strong>¿Qué tratamos?</strong>
• Contracturas cervicales, dorsales y lumbares
• Dolor crónico y agudo de origen muscular
• Rigidez articular y limitación de movilidad
• Estrés físico acumulado
• Migrañas y cefaleas tensionales
• Recuperación post-esfuerzo

<strong>¿Cómo funciona?</strong>
Cada sesión comienza con una evaluación del estado muscular del paciente, adaptando las técnicas a sus necesidades específicas para garantizar el mayor alivio posible.

El resultado: un cuerpo más libre, liviano y en equilibrio.`
    },
    masaje_deportivo: {
        icon: '<i class="fa-solid fa-person-running"></i>',
        title: 'Masaje Deportivo',
        desc: `El masaje deportivo es una herramienta fundamental para el rendimiento y la integridad física del deportista, tanto en la preparación previa como en la recuperación posterior al esfuerzo.

Diseñado para quienes practican deporte de forma regular o competitiva, trabaja directamente sobre los grupos musculares más exigidos según la disciplina de cada persona.

<strong>Beneficios:</strong>
• Preparación muscular óptima pre-entrenamiento o pre-competencia
• Reducción del tiempo de recuperación post-esfuerzo
• Prevención de lesiones musculares y tendinosas
• Mejora de la flexibilidad y rango de movimiento
• Eliminación de metabolitos acumulados (ácido láctico)
• Activación de la circulación y oxigenación muscular

<strong>¿Para quién es?</strong>
Para deportistas amateur y de alto rendimiento que buscan maximizar su desempeño físico y cuidar su cuerpo a largo plazo.

Invertir en tu recuperación es invertir en tu rendimiento.`
    },
    entrenador_futbol: {
        icon: '<i class="fa-solid fa-futbol"></i>',
        title: 'Entrenador Fútbol Lic. Pro',
        desc: `Con formación habilitada como entrenador de fútbol, Alejandro ofrece un servicio de entrenamiento técnico-táctico orientado al desarrollo integral del jugador, adaptado a todas las edades y niveles.

La metodología se basa en principios del fútbol moderno: trabajo técnico individual, comprensión táctica colectiva y desarrollo de las capacidades físicas específicas del deporte.

<strong>¿Qué se trabaja?</strong>
• Técnica individual: pase, recepción, conducción, remate, cabeceo
• Táctica grupal: posicionamiento, movimientos sin balón, presión y salida
• Físico específico: velocidad de reacción, potencia, resistencia aeróbica
• Mentalidad competitiva y trabajo en equipo
• Análisis y corrección de hábitos de juego

<strong>¿Para quién es?</strong>
Para jugadores en formación, amateurs que quieren mejorar su nivel, o equipos locales en busca de asistencia técnica profesional.

El fútbol se aprende, se trabaja y se disfruta.`
    },
    coaching_deportivo: {
        icon: '<i class="fa-solid fa-bullseye"></i>',
        title: 'Coaching Deportivo',
        desc: `El coaching deportivo trabaja la dimensión mental y emocional del rendimiento, un aspecto determinante que muchas veces marca la diferencia entre un deportista promedio y uno excepcional.

A través de herramientas de coaching orientadas al deporte, se trabaja en la construcción de una mentalidad ganadora, el manejo del estrés competitivo y el desarrollo de hábitos que potencian el rendimiento a largo plazo.

<strong>¿Qué trabajamos?</strong>
• Gestión del estrés y la presión competitiva
• Foco, concentración y rutinas de rendimiento
• Motivación intrínseca y objetivos a corto, mediano y largo plazo
• Confianza y autoestima deportiva
• Manejo de errores y resiliencia
• Visualización y preparación mental pre-competencia

<strong>¿Para quién es?</strong>
Para deportistas de cualquier nivel que quieren llevar su rendimiento al siguiente escalón o que atraviesan momentos de bloqueo o falta de motivación.

El cuerpo va donde la mente lo lleva.`
    },
    kinesiologo: {
        icon: '<i class="fa-solid fa-bone"></i>',
        title: 'Kinesiólogo Deportivo',
        desc: `La kinesiología deportiva combina el conocimiento del movimiento humano con técnicas de fisioterapia y rehabilitación para diagnosticar y tratar lesiones musculoesqueléticas en deportistas.

El objetivo es recuperar la función completa lo antes posible, minimizando el tiempo de baja y garantizando un retorno al deporte seguro y progresivo.

<strong>¿Qué se trata?</strong>
• Lesiones musculares: desgarros, contracturas, elongaciones
• Lesiones articulares: esguinces, tendinitis, bursitis
• Dolor de rodilla, tobillo, hombro, codo y muñeca
• Lesiones de columna relacionadas con la actividad deportiva
• Rehabilitación post-quirúrgica
• Prevención de lesiones recurrentes

<strong>¿Cómo es el proceso?</strong>
Evaluación funcional → diagnóstico → plan de rehabilitación individualizado → seguimiento hasta el alta deportiva.

Tu cuerpo puede recuperarse. Estamos para acompañarlo.`
    },
    quiropractico: {
        icon: '<i class="fa-solid fa-stethoscope"></i>',
        title: 'Quiropráctico',
        desc: `La quiropráctica es una disciplina enfocada en el diagnóstico y tratamiento manual de los trastornos del sistema musculoesquelético, con especial atención en la columna vertebral y su relación con el sistema nervioso.

Los ajustes quiroprácticos permiten restaurar la alineación vertebral, liberar presiones sobre nervios y articulaciones, y recuperar la movilidad y el bienestar general del cuerpo.

<strong>¿Qué tratamos?</strong>
• Dolor de espalda baja, media y cervical
• Hernias discales y protrusiones
• Ciática y pinzamientos nerviosos
• Dolor de cuello y tortícolis
• Cefaleas y migrañas de origen vertebral
• Mala postura crónica
• Dolor articular en hombros, rodillas y cadera

<strong>Beneficios del ajuste quiropráctico:</strong>
• Alivio del dolor desde la primera sesión en muchos casos
• Mejora de la movilidad y la postura
• Reducción de la inflamación y la tensión muscular
• Bienestar general del sistema nervioso

Un cuerpo bien alineado funciona mejor, en el deporte y en la vida cotidiana.`
    }
};

/* ======================== DOM REFERENCES ======================== */
const hamburger     = document.getElementById('hamburger');
const navLinks      = document.getElementById('navLinks');
const navbar        = document.getElementById('navbar');
const modalOverlay  = document.getElementById('modalOverlay');
const modalClose    = document.getElementById('modalClose');
const modalIcon     = document.getElementById('modalIcon');
const modalTitle    = document.getElementById('modalTitle');
const modalDesc     = document.getElementById('modalDesc');
const carouselTrack = document.getElementById('carouselTrack');
const prevBtn       = document.getElementById('prevBtn');
const nextBtn       = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('carouselDots');

/* ======================== HAMBURGER MENU ======================== */
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
    });
});

/* ======================== NAVBAR ON SCROLL ======================== */
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ======================== ACTIVE NAV LINK ON SCROLL ======================== */
const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 100;

    sections.forEach(section => {
        const top    = section.offsetTop;
        const height = section.offsetHeight;
        const id     = section.getAttribute('id');

        if (scrollY >= top && scrollY < top + height) {
            navAnchors.forEach(a => {
                a.classList.remove('active');
                if (a.getAttribute('href') === `#${id}`) {
                    a.classList.add('active');
                }
            });
        }
    });
}, { passive: true });

/* ======================== SCROLL REVEAL ======================== */
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ======================== SERVICE MODALS ======================== */
function openModal(key) {
    const data = serviceData[key];
    if (!data) return;

    modalIcon.innerHTML    = data.icon;
    modalTitle.textContent = data.title;
    modalDesc.innerHTML    = data.desc.replace(/\n/g, '<br>');

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    modalClose.focus();
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

document.querySelectorAll('.service-card[data-service]').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.service));
});

modalClose.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

/* ======================== REVIEWS CAROUSEL ======================== */
const cards       = Array.from(carouselTrack.querySelectorAll('.review-card'));
const totalSlides = cards.length;
let current = 0;
let autoplayInterval;

// Generate dots
cards.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.classList.add('dot');
    dot.setAttribute('aria-label', `Ir a reseña ${i + 1}`);
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
        goToSlide(i);
        resetAutoplay();
    });
    dotsContainer.appendChild(dot);
});

const dots = Array.from(dotsContainer.querySelectorAll('.dot'));

function goToSlide(index) {
    const normalized = ((index % totalSlides) + totalSlides) % totalSlides;

    cards[current].classList.remove('active');
    dots[current].classList.remove('active');

    current = normalized;

    cards[current].classList.add('active');
    dots[current].classList.add('active');
}

function startAutoplay() {
    autoplayInterval = setInterval(() => {
        goToSlide(current + 1);
    }, 5000);
}

function resetAutoplay() {
    clearInterval(autoplayInterval);
    startAutoplay();
}

if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        goToSlide(current - 1);
        resetAutoplay();
    });
}

if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        goToSlide(current + 1);
        resetAutoplay();
    });
}

startAutoplay();

// Touch / swipe support
let touchStartX = 0;

carouselTrack.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
}, { passive: true });

carouselTrack.addEventListener('touchend', (e) => {
    const delta = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) {
        goToSlide(delta > 0 ? current + 1 : current - 1);
        resetAutoplay();
    }
}, { passive: true });

/* ======================== SMOOTH SCROLL (offset navbar) ======================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();
        const top = target.offsetTop - 72;
        window.scrollTo({ top, behavior: 'smooth' });
    });
});
