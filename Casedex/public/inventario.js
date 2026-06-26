// 💾 BASE DE DATOS LOCAL CON SERIES PARA LA EVOLUCIÓN
const bdInventario = {

    "iPhone X": {
        marca: "Apple",
        serie: "10", 
        caracteristicas: { tamano: "Mediano", puerto: "Lightning", cantCamaras: "2 Cámaras", silenciar: "Switch de Silencio", faceId: "Notch Tradicional", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "XS, 11 Pro", cubrecamaras: "XS", carcasas: "iPhone XS" },
        ubicacion: { imagenUrl: "imagenes/mapa-cajon-4.png", nota: "Vitrina B - Pasillo Central - Cajón 4" }
    },

    "iPhone 13 Mini": {
        marca: "Apple",
        serie: "13", 
        caracteristicas: { tamano: "Pequeño", puerto: "Lightning", cantCamaras: "2 Cámaras", silenciar: "Switch de Silencio", faceId: "Notch Tradicional", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "12 Mini", cubrecamaras: "iPhone 13", carcasas: "Ninguna" },
        ubicacion: { imagenUrl: "imagenes/mapa-cajon-4.png", nota: "Vitrina B - Pasillo Central - Cajón 4" }
    },

    "iPhone 13": {
        marca: "Apple",
        serie: "13", 
        caracteristicas: { tamano: "Mediano", puerto: "Lightning", cantCamaras: "2 Cámaras", silenciar: "Switch de Silencio", faceId: "Notch Tradicional", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone 13 Pro, iPhone 14, iPhone 16e, iPhone 17e", cubrecamaras: "iPhone 13 Mini", carcasas: "iPhone 14" },
        ubicacion: { numeroCajon: 14, nota: "ZONA A" }
    },

    "iPhone 13 Pro": {
        marca: "Apple",
        serie: "13", 
        caracteristicas: { tamano: "Mediano", puerto: "Lightning", cantCamaras: "3 Cámaras", silenciar: "Switch de Silencio", faceId: "Notch Tradicional", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone 13, iPhone 14, iPhone 16e, iPhone 17e", cubrecamaras: "iPhone 13 Pro Max", carcasas: "Ninguna" },
        ubicacion: { numeroCajon: 20, nota: "ZONA A" }
    },

    "iPhone 13 Pro Max": {
        marca: "Apple",
        serie: "13", 
        caracteristicas: { tamano: "Grande", puerto: "Lightning", cantCamaras: "3 Cámaras", silenciar: "Switch de Silencio", faceId: "Notch Tradicional", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone 14 Plus", cubrecamaras: "iPhone 13 Pro", carcasas: "Ninguna" },
        ubicacion: { numeroCajon: 21, nota: "ZONA A" }
    },

    "iPhone 14": {
        marca: "Apple",
        serie: "14", 
        caracteristicas: { tamano: "Mediano", puerto: "Lightning", cantCamaras: "2 Cámaras", silenciar: "Switch de Silencio", faceId: "Notch Tradicional", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone 13", cubrecamaras: "iPhone 14 Plus", carcasas: "iPhone 13" },
        ubicacion: { numeroCajon: 13, nota: "ZONA A" }
    },

    "iPhone 14 Plus": {
        marca: "Apple",
        serie: "14", 
        caracteristicas: { tamano: "Grande", puerto: "Lightning", cantCamaras: "2 Cámaras", silenciar: "Switch de Silencio", faceId: "Notch Tradicional", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone 13 Pro Max", cubrecamaras: "iPhone 14", carcasas: "iPhone 15 Plus" },
        ubicacion: { numeroCajon: 11, nota: "ZONA A" }
    },

    "iPhone 14 Pro": {
        marca: "Apple",
        serie: "14",
        caracteristicas: { tamano: "Mediano", puerto: "Lightning", cantCamaras: "3 Cámaras", silenciar: "Switch de Silencio", faceId: "Isla dinámica", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone 15", cubrecamaras: "iPhone 14 Pro Max", carcasas: "Ninguna" },
        ubicacion: { numeroCajon: 12, nota: "ZONA A" }
    },

    "iPhone 14 Pro Max": {
        marca: "Apple",
        serie: "14",
        caracteristicas: { tamano: "Grande", puerto: "Lightning", cantCamaras: "3 Cámaras + Lidar", silenciar: "Switch de Silencio", faceId: "Isla dinámica", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "14 Pro", carcasas: "Ninguna" },
        ubicacion: { numeroCajon: 19, nota: "ZONA A" }
    },

    "iPhone 15": {
        marca: "Apple",
        serie: "15",
        caracteristicas: { tamano: "Mediano", puerto: "USB-C", cantCamaras: "2 Cámaras", silenciar: "Botón de Acción", faceId: "Isla dinámica", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone 14 Pro", cubrecamaras: "iPhone 15 Plus", carcasas: "Ninguna" },
        ubicacion: { numeroCajon: 10, nota: "ZONA A" }
    },

    "iPhone 15 Plus": {
        marca: "Apple",
        serie: "15",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "2 Cámaras", silenciar: "Botón de Acción", faceId: "Isla dinámica", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone 14 Pro Max REVISAR...", cubrecamaras: "iPhone 15", carcasas: "iPhone 14 Plus" },
        ubicacion: { numeroCajon: 18, nota: "ZONA A" }
    },

    "iPhone 15 Pro": {
        marca: "Apple",
        serie: "15",
        caracteristicas: { tamano: "Mediano", puerto: "USB-C", cantCamaras: "3 Cámaras", silenciar: "Botón de Acción", faceId: "Isla dinámica", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "PENDIENTE...", cubrecamaras: "iPhone 15 Pro Max, iPhone 16 Pro, iPhone 16 Pro Max, iPhone 17 Pro, iPhone 17 Pro Max", carcasas: "Ninguna" },
        ubicacion: { numeroCajon: 9, nota: "ZONA A" }
    },

    "iPhone 15 Pro Max": {
        marca: "Apple",
        serie: "15",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "3 Cámaras", silenciar: "Botón de Acción", faceId: "Isla dinámica", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "iPhone 15 Pro, iPhone 16 Pro, iPhone 16 Pro Max, iPhone 17 Pro, iPhone 17 Pro Max", carcasas: "Ninguna" },
        ubicacion: { numeroCajon: 17, nota: "ZONA A" }
    },

    "iPhone 16 Pro": {
        marca: "Apple",
        serie: "16",
        caracteristicas: { tamano: "Mediano", puerto: "USB-C", cantCamaras: "3 Cámaras", silenciar: "Botón de Acción", faceId: "Isla dinámica", controlCamara: "Si tiene" },
        compatibilidades: { pantalla: "iPhone 17 Pro", cubrecamaras: "iPhone 15 Pro, iPhone 15 Pro Max, iPhone 16 Pro Max, iPhone 17 Pro, iPhone 17 Pro Max", carcasas: "Ninguna" },
        ubicacion: { numeroCajon: 16, nota: "ZONA A" }
    }

};