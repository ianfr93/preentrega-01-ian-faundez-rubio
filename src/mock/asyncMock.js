const productos = [
    {
      id: 1,
      titulo: "Laptop Lenovo ThinkPad X1 Carbon",
      precio: 1899.99,
      descripcion: "Laptop ultraligera con procesador Intel Core i7 y pantalla Full HD de 14 pulgadas.",
      imagen: "https://falabella.scene7.com/is/image/Falabella/gsc_129114842_5468651_1?wid=200&hei=200&qlt=70",
      stock: 10
    },
    {
      id: 2,
      titulo: "Smartphone Samsung Galaxy S20 Ultra",
      precio: 1199.99,
      descripcion: "Teléfono inteligente con cámara de 108MP, pantalla Dynamic AMOLED de 6.9 pulgadas y 5G.",
      imagen: "https://falabella.scene7.com/is/image/Falabella/gsc_118683455_2178377_1?wid=1500&hei=1500&qlt=70",
      stock: 15
    },
    {
      id: 3,
      titulo: "Monitor Gaming ASUS ROG Swift PG279Q",
      precio: 699.99,
      descripcion: "Monitor de gaming de 27 pulgadas con resolución WQHD, tecnología G-SYNC y frecuencia de actualización de 144Hz.",
      imagen: "https://falabella.scene7.com/is/image/Falabella/gsc_128587370_1?wid=200&hei=200&qlt=70",
      stock: 5
    },
    {
      id: 4,
      titulo: "Tablet Apple iPad Pro (2021)",
      precio: 999.99,
      descripcion: "Tablet con pantalla Liquid Retina XDR de 12.9 pulgadas, chip M1 y soporte para Apple Pencil de segunda generación.",
      imagen: "https://falabella.scene7.com/is/image/Falabella/gsc_116985417_1?wid=200&hei=200&qlt=70",
      stock: 20
    },
    {
      id: 5,
      titulo: "Cámara Mirrorless Sony Alpha a7 III",
      precio: 1999.99,
      descripcion: "Cámara digital sin espejo con sensor de imagen CMOS Exmor R de 24.2 MP, grabación de video 4K y estabilización de imagen de 5 ejes.",
      imagen: "https://falabella.scene7.com/is/image/Falabella/gsc_129115188_1?wid=200&hei=200&qlt=70",
      stock: 8
    },
    {
      id: 6,
      titulo: "Auriculares Inalámbricos Apple AirPods Pro",
      precio: 249.99,
      descripcion: "Auriculares inalámbricos con cancelación activa de ruido, modo de sonido ambiente y resistencia al agua y al sudor.",
      imagen: "https://falabella.scene7.com/is/image/Falabella/gsc_129113978_1?wid=200&hei=200&qlt=70",
      stock: 12
    },
    {
      id: 7,
      titulo: "Smartwatch Garmin Fenix 6 Pro",
      precio: 649.99,
      descripcion: "Smartwatch multideporte con GPS, monitorización de frecuencia cardíaca y seguimiento de actividad avanzado.",
      imagen: "https://falabella.scene7.com/is/image/Falabella/gsc_116858713_1?wid=200&hei=200&qlt=70",
      stock: 6
    },
    {
      id: 8,
      titulo: "Teclado Mecánico Corsair K95 RGB Platinum XT",
      precio: 199.99,
      descripcion: "Teclado gaming mecánico con interruptores Cherry MX Speed, retroiluminación RGB y controles multimedia dedicados.",
      imagen: "https://falabella.scene7.com/is/image/Falabella/gsc_127124590_1?wid=200&hei=200&qlt=70",
      stock: 18
    },
    {
      id: 9,
      titulo: "Impresora 3D Creality Ender 3 V2",
      precio: 299.99,
      descripcion: "Impresora 3D de sobremesa con volumen de impresión de 220 x 220 x 250 mm, pantalla táctil y función de recuperación de fallos de energía.",
      imagen: "https://falabella.scene7.com/is/image/Falabella/gsc_123606088_1?wid=200&hei=200&qlt=70",
      stock: 9
    },
    {
      id: 10,
      titulo: "Router Wi-Fi TP-Link Archer AX6000",
      precio: 299.99,
      descripcion: "Router Wi-Fi 6 de doble banda con velocidades de hasta 1148 Mbps en la banda de 2.4 GHz y 4804 Mbps en la banda de 5 GHz.",
      imagen: "https://falabella.scene7.com/is/image/Falabella/gsc_128290798_1?wid=200&hei=200&qlt=70",
      stock: 14
    },
    {
      id: 11,
      titulo: "Tarjeta Gráfica NVIDIA GeForce RTX 3080",
      precio: 699.99,
      descripcion: "Tarjeta gráfica de última generación con arquitectura Ampere, 10 GB de memoria GDDR6X y soporte para trazado de rayos en tiempo real.",
      imagen: "https://falabella.scene7.com/is/image/Falabella/gsc_128467829_1?wid=200&hei=200&qlt=70",
      stock: 4
    },
    {
      id: 12,
      titulo: "Altavoces Logitech Z906",
      precio: 349.99,
      descripcion: "Sistema de altavoces 5.1 con sonido envolvente THX, 500 vatios de potencia y múltiples opciones de conexión.",
      imagen: "https://falabella.scene7.com/is/image/Falabella/gsc_129210043_1?wid=200&hei=200&qlt=70",
      stock: 7
    },
    {
      id: 13,
      titulo: "SSD Samsung 970 EVO Plus 1TB",
      precio: 179.99,
      descripcion: "Unidad de estado sólido M.2 NVMe con velocidades de lectura/escritura de hasta 3500/3300 MB/s.",
      imagen: "https://falabella.scene7.com/is/image/Falabella/gsc_116906122_1?wid=200&hei=200&qlt=70",
      stock: 11
    },
    {
      id: 14,
      titulo: "Repetidor Wi-Fi TP-Link RE650",
      precio: 99.99,
      descripcion: "Repetidor de señal Wi-Fi AC2600 con tecnología 4x4 MU-MIMO y cuatro antenas externas.",
      imagen: "https://falabella.scene7.com/is/image/Falabella/gsc_129036841_1?wid=200&hei=200&qlt=70",
      stock: 13
    },
    {
      id: 15,
      titulo: "Micrófono Blue Yeti X",
      precio: 169.99,
      descripcion: "Micrófono USB con cuatro cápsulas de condensador, matriz LED y control de mezcla en tiempo real.",
      imagen: "https://falabella.scene7.com/is/image/Falabella/gsc_126211678_1?wid=200&hei=200&qlt=70",
      stock: 8
    },
    {
      id: 16,
      titulo: "Silla Gaming Secretlab Titan",
      precio: 399.99,
      descripcion: "Silla gaming ergonómica con soporte lumbar ajustable, reposabrazos 4D y cuero PU de primera calidad.",
      imagen: "https://falabella.scene7.com/is/image/Falabella/gsc_121184935_1?wid=200&hei=200&qlt=70",
      stock: 6
    },
    {
      id: 17,
      titulo: "Monitor Curvo Samsung Odyssey G9",
      precio: 1499.99,
      descripcion: "Monitor gaming curvo de 49 pulgadas con resolución QHD, frecuencia de actualización de 240Hz y tecnología HDR1000.",
      imagen: "https://falabella.scene7.com/is/image/Falabella/gsc_128711004_1?wid=200&hei=200&qlt=70",
      stock: 3
    },
    {
      id: 18,
      titulo: "Robot Aspirador iRobot Roomba i7+",
      precio: 799.99,
      descripcion: "Robot aspirador con tecnología de navegación vSLAM, base de autovaciado y compatibilidad con asistentes de voz.",
      imagen: "https://falabella.scene7.com/is/image/Falabella/gsc_118734321_1?wid=200&hei=200&qlt=70",
      stock: 5
    },
    {
      id: 19,
      titulo: "Webcam Logitech C920 HD Pro",
      precio: 79.99,
      descripcion: "Cámara web Full HD con enfoque automático, corrección de luz automática y micrófonos duales integrados.",
      imagen: "https://falabella.scene7.com/is/image/Falabella/gsc_127019468_1?wid=200&hei=200&qlt=70",
      stock: 10
    },
    {
      id: 20,
      titulo: "Teclado Gaming Razer Huntsman Elite",
      precio: 199.99,
      descripcion: "Teclado mecánico con switches óptico-mecánicos, retroiluminación RGB personalizable y reposamuñecas magnético.",
      imagen: "https://falabella.scene7.com/is/image/Falabella/gsc_124701254_1?wid=200&hei=200&qlt=70",
      stock: 8
    },
  ];
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });
  };
  