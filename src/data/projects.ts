import muroHarariImg from '../assets/muro_harari.png';
import canchaScalaImg from '../assets/cancha_escuela_scala.png';
import playaDoradaImg from '../assets/playa_dorada.png';
import pacificCenterEscaleraImg from '../assets/pacific_center_escalera.png';
import pacificCenterLosaImg from '../assets/pacific_center_losa_bolos.png';
import cuartoBombasImg from '../assets/cuarto_bombas.png';
import galeraSevenSeasImg from '../assets/galera_seven_seas.png';
import helipuertoImg from '../assets/helipuerto.png';
import galeraPmaViejo from '../assets/galeraPanamaViejoImg.png';

// Importar imágenes de la galería del proyecto Muro Rompeolas
import muroRompeolas01 from '../assets/proyecto_01_muro_rompeolas/muro_rompeolas_01.png';
import muroRompeolas02 from '../assets/proyecto_01_muro_rompeolas/muro_rompeolas_02.png';
import muroRompeolas03 from '../assets/proyecto_01_muro_rompeolas/muro_rompeolas_03.png';
// Importar imagenes de la galeria del proyecto Cancha Multiuso Scala
import canchaScala01 from '../assets/proyecto_02_cancha_scala/cancha_scala_01.png';
import canchaScala02 from '../assets/proyecto_02_cancha_scala/cancha_scala_02.png';
import canchaScala03 from '../assets/proyecto_02_cancha_scala/cancha_scala_03.png';
// Import imagenes de la galeria del proyecto Playa Dorada
import playaDorada01 from '../assets/proyecto_03_playa_dorada/playa_dorada_01.png';
import playaDorada02 from '../assets/proyecto_03_playa_dorada/playa_dorada_02.png';
import playaDorada03 from '../assets/proyecto_03_playa_dorada/playa_dorada_03.png';
// Import imagenes de la galeria del proyecto Escalera Pacific Center
import escaleraPacific01 from '../assets/proyecto_04_escalera_pacific/escalera_pacific_01.png';
import escaleraPacific02 from '../assets/proyecto_04_escalera_pacific/escalera_pacific_02.png';
import escaleraPacific03 from '../assets/proyecto_04_escalera_pacific/escalera_pacific_03.png';
// Import imagenes de la losa de Jungla Bownling en Pacific Center
import losaBowling01 from '../assets/proyecto_05_losa_bowling/losa_bowling_01.png';
import losaBowling02 from '../assets/proyecto_05_losa_bowling/losa_bowling_02.png';
import losaBowling03 from '../assets/proyecto_05_losa_bowling/losa_bowling_03.png';
// Import imagenes del cuarto de bombas MELO
import ctoBomba01 from '../assets/proyecto_06_melo/melo_cto_bombas_01.png';
import ctoBomba02 from '../assets/proyecto_06_melo/melo_cto_bombas_02.png';
import ctoBomba03 from '../assets/proyecto_06_melo/melo_cto_bombas_03.png';
// Import imagenes galera seven seas
import galSeven01 from '../assets/proyecto_07_galera_seven_seas/galera_seven_01.png';
import galSeven02 from '../assets/proyecto_07_galera_seven_seas/galera_seven_02.png';
import galSeven03 from '../assets/proyecto_07_galera_seven_seas/galera_seven_03.png';
// Import imagenes helipuerto Pacific Center
import heliPuerto01 from '../assets/proyecto_08_helipuerto/helipuerto_01.png';
import heliPuerto02 from '../assets/proyecto_08_helipuerto/helipuerto_02.png';
import heliPuerto03 from '../assets/proyecto_08_helipuerto/helipuerto_03.png';
// Import imagenes galera 026 Panama Viejo
import galPmaViejo01 from '../assets/proyecto_09_galera_pma_viejo/galera_PmaViejo_01.png';
import galPmaViejo02 from '../assets/proyecto_09_galera_pma_viejo/galera_PmaViejo_02.png';



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
        muroRompeolas01,
        muroRompeolas02,
        muroRompeolas03,
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
        canchaScala01,
        canchaScala02,
        canchaScala03
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
        playaDorada01,
        playaDorada02,
        playaDorada03
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
        escaleraPacific01,
        escaleraPacific02,
        escaleraPacific03
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
    gallery: [
        losaBowling01,
        losaBowling02,
        losaBowling03
    ]
  },
  { 
    slug: "sistema-incendio-melo",
    name: "Sistema Contra Incendio MELO", 
    client: "MELO, S.A.", 
    year: "2022", 
    img: cuartoBombasImg,
    area: "60 m²",
    description: "Construcción del cuarto de bombas, la base del tanque y el montaje del tanque para el sistema contra incendios en la galera de MELO en Cabuya.",
    gallery: [
        ctoBomba01,
        ctoBomba03,
        ctoBomba02
    ]
  },
  { 
    slug: "techo-galera-seven-seas",
    name: "Cambio de Techo Galera Seven Seas", 
    client: "Tikal Intercontinental (ALISS)", 
    year: "2021", 
    img: galeraSevenSeasImg,
    area: "13,600 m²",
    description: "Reemplazo completo de la cubierta de techo de zinc por panel sándwich para mejorar el aislamiento térmico y la durabilidad en la Zona Libre de Colón.",
    gallery: [
        galSeven01,
        galSeven02,
        galSeven03
    ]
  },
  { 
    slug: "helipuerto-panama-clinic",
    name: "Helipuerto The Panama Clinic", 
    client: "Tikal Intercontinental", 
    year: "2018-2020", 
    img: helipuertoImg,
    area: "Costo por Administración",
    description: "Diseño, construcción y gestión completa de trámites para la aprobación del permiso de operación del helipuerto en Aeronáutica Civil, que actualmente cuenta con certificación aprobada por la AAC.",
    gallery: [
        heliPuerto01,
        heliPuerto02,
        heliPuerto03
    ]
  },
  {
    slug: "galera-panama-viejo",
    name: "Galera 026 de Panamá Viejo Business Center", 
    client: "Tecpa Group, S.A.", 
    year: "2018", 
    img: galeraPmaViejo,
    area: "1,470.00 m²",
    description: "Construcción de muro de fundaciones de galera. Proyecto Entregado",
    gallery: [
        galPmaViejo01,
        galPmaViejo02
    ]

  },
];