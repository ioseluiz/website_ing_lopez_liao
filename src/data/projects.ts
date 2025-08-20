import muroHarariImg from '../assets/muro_harari.png';
import canchaScalaImg from '../assets/cancha_escuela_scala.png';
import playaDoradaImg from '../assets/playa_dorada.png';
import pacificCenterEscaleraImg from '../assets/pacific_center_escalera.png';
import pacificCenterLosaImg from '../assets/pacific_center_losa_bolos.png';
import cuartoBombasImg from '../assets/cuarto_bombas.png';
import galeraSevenSeasImg from '../assets/galera_seven_seas.png';
import helipuertoImg from '../assets/helipuerto.png';

export const projects = [
  { 
    slug: "muro-rompeolas-harari",
    name: "Muro Rompeolas Familia Harari", 
    client: "Sr. Max Harari", 
    year: "2024", 
    img: muroHarariImg,
    area: "456.00 m²",
    description: "Construcción de muro de retención y rompeolas frente a tablaestaca colapsada para protección costera.",
    gallery: [
        "https://placehold.co/800x600/008080/FFFFFF?text=Foto+1",
        "https://placehold.co/800x600/008080/FFFFFF?text=Foto+2",
        "https://placehold.co/800x600/008080/FFFFFF?text=Foto+3",
    ]
  },
  { 
    slug: "cancha-multiuso-scala",
    name: "Cancha Multiuso Escuela Scala", 
    client: "Tecpa Group", 
    year: "2024", 
    img: canchaScalaImg,
    area: "660.00 m²",
    description: "Construcción de una cancha techada multiuso para la Escuela Scala en Penonomé, incluyendo estructura de acero y cubierta.",
    gallery: [
        "https://placehold.co/800x600/008080/FFFFFF?text=Foto+1",
        "https://placehold.co/800x600/008080/FFFFFF?text=Foto+2",
    ]
  },
  { 
    slug: "playa-dorada",
    name: "Proyecto Playa Dorada (9 casas)", 
    client: "Grupo Los Pueblos", 
    year: "2023", 
    img: playaDoradaImg,
    area: "770.00 m²",
    description: "Construcción completa de 9 residencias unifamiliares del modelo 'Arena' en el proyecto Playa Dorada.",
    gallery: [
        "https://placehold.co/800x600/008080/FFFFFF?text=Foto+1",
    ]
  },
  { 
    slug: "escalera-puente-pacific-center",
    name: "Escalera y Puente en Pacific Center", 
    client: "Tikal Intercontinental", 
    year: "2023", 
    img: pacificCenterEscaleraImg,
    area: "No especificado",
    description: "Fabricación e instalación de una estructura de acero compleja para una escalera arquitectónica y un puente de conexión dentro de Pacific Center.",
    gallery: [
        "https://placehold.co/800x600/008080/FFFFFF?text=Foto+1",
        "https://placehold.co/800x600/008080/FFFFFF?text=Foto+2",
    ]
  },
  { 
    slug: "losa-bolos-pacific-center",
    name: "Losa para Bolos en Pacific Center", 
    client: "Tikal Intercontinental", 
    year: "2023", 
    img: pacificCenterLosaImg,
    area: "630.00 m²",
    description: "Construcción de una losa estructural de acero diseñada específicamente para soportar las pistas de bolos en Pacific Center.",
    gallery: []
  },
  { 
    slug: "sistema-incendio-melo",
    name: "Sistema Contra Incendio MELO", 
    client: "MELO, S.A.", 
    year: "2022", 
    img: cuartoBombasImg,
    area: "60 m²",
    description: "Construcción del cuarto de bombas, la base del tanque y el montaje del tanque para el sistema contra incendios en la galera de MELO en Cabuya.",
    gallery: []
  },
  { 
    slug: "techo-galera-seven-seas",
    name: "Cambio de Techo Galera Seven Seas", 
    client: "Tikal Intercontinental (ALISS)", 
    year: "2021", 
    img: galeraSevenSeasImg,
    area: "13,600 m²",
    description: "Reemplazo completo de la cubierta de techo de zinc por panel sándwich para mejorar el aislamiento térmico y la durabilidad en la Zona Libre de Colón.",
    gallery: []
  },
  { 
    slug: "helipuerto-panama-clinic",
    name: "Helipuerto The Panama Clinic", 
    client: "Tikal Intercontinental", 
    year: "2018-2020", 
    img: helipuertoImg,
    area: "Costo por Administración",
    description: "Diseño, construcción y gestión completa de trámites para la aprobación del permiso de operación del helipuerto en Aeronáutica Civil, que actualmente cuenta con certificación aprobada por la AAC.",
    gallery: []
  },
];