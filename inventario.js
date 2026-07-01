
/**
 * @file inventario.js
 * @description Base de datos local y plano dinámico para CaseDex.
 * @author Josvar
 * @copyright © 2026 Josvar. Todos los derechos reservados.
 * Prohibida su reproducción o copia sin autorización explícita.
 */

// 💾 BASE DE DATOS LOCAL CON SERIES PARA LA EVOLUCIÓN
const bdInventario = {

    "iPhone 5": {
        marca: "Apple",
        serie: "5", 
        caracteristicas: { tamano: "Mediano", puerto: "Lightning", cantCamaras: "1 Cámara", silenciar: "Switch de Silencio", faceId: "Touch ID", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "XS", carcasas: "Ninguna" },
        ubicacion: { mueble: "C", numeroCajon: 2, nota: "ZONA C"}
    },

    "iPhone 6": {
        marca: "Apple",
        serie: "6", 
        caracteristicas: { tamano: "Mediano", puerto: "Lightning", cantCamaras: "1 Cámara", silenciar: "Switch de Silencio", faceId: "Touch ID", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone 7, iPhone 8", cubrecamaras: "iPhone 6 Plus", carcasas: "Ninguna" },
        ubicacion: { mueble: "C", numeroCajon: 2, nota: "ZONA C"}
    },

    "iPhone 6 Plus": {
        marca: "Apple",
        serie: "6", 
        caracteristicas: { tamano: "Mediano", puerto: "Lightning", cantCamaras: "1 Cámara", silenciar: "Switch de Silencio", faceId: "Touch ID", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone 7 Plus, iPhone 8 Plus", cubrecamaras: "iPhone 6", carcasas: "Ninguna" },
        ubicacion: { mueble: "C", numeroCajon: 11, nota: "ZONA C"}
    },

    "iPhone 7": {
        marca: "Apple",
        serie: "7", 
        caracteristicas: { tamano: "Mediano", puerto: "Lightning", cantCamaras: "1 Cámara", silenciar: "Switch de Silencio", faceId: "Touch ID", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone 8, iPhone SE 2020", cubrecamaras: "Ninguna", carcasas: "iPhone 8, iPhone SE (2020)" },
        ubicacion: { mueble: "C", numeroCajon: 2, nota: "ZONA C"}
    },

    "iPhone 7 Plus": {
        marca: "Apple",
        serie: "7", 
        caracteristicas: { tamano: "Mediano", puerto: "Lightning", cantCamaras: "2 Cámaras", silenciar: "Switch de Silencio", faceId: "Touch ID", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone 8 Plus", cubrecamaras: "Ninguna", carcasas: "iPhone 8 Plus" },
        ubicacion: { mueble: "C", numeroCajon: 11, nota: "ZONA C"}
    },

    "iPhone 8": {
        marca: "Apple",
        serie: "8", 
        caracteristicas: { tamano: "Mediano", puerto: "Lightning", cantCamaras: "1 Cámara", silenciar: "Switch de Silencio", faceId: "Touch ID", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone 7, iPhone SE 2020", cubrecamaras: "iPhone SE 2020", carcasas: "iPhone 7, iPhone SE (2020)" },
        ubicacion: { mueble: "C", numeroCajon: 2, nota: "ZONA C"}
    },

    "iPhone 8 Plus": {
        marca: "Apple",
        serie: "8", 
        caracteristicas: { tamano: "Mediano", puerto: "Lightning", cantCamaras: "2 Cámaras", silenciar: "Switch de Silencio", faceId: "Touch ID", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone 7 Plus", cubrecamaras: "Ninguna", carcasas: "iPhone 7 Plus" },
        ubicacion: { mueble: "C", numeroCajon: 11, nota: "ZONA C"}
    },
    
    "iPhone X": {
        marca: "Apple",
        serie: "10", 
        caracteristicas: { tamano: "Mediano", puerto: "Lightning", cantCamaras: "2 Cámaras", silenciar: "Switch de Silencio", faceId: "Notch Tradicional", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone XS, iPhone 11 Pro", cubrecamaras: "Ninguna", carcasas: "iPhone XS" },
        ubicacion: { mueble: "C", numeroCajon: 23, nota: "ZONA C"}
    },

    "iPhone XR": {
        marca: "Apple",
        serie: "10", 
        caracteristicas: { tamano: "Mediano", puerto: "Lightning", cantCamaras: "1 Cámara", silenciar: "Switch de Silencio", faceId: "Notch Tradicional", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone 11", cubrecamaras: "Ninguna", carcasas: "Ninguna" },
        ubicacion: { mueble: "C", numeroCajon: 29, nota: "ZONA C"}
    },

    "iPhone XS": {
        marca: "Apple",
        serie: "10", 
        caracteristicas: { tamano: "Mediano", puerto: "Lightning", cantCamaras: "2 Cámaras", silenciar: "Switch de Silencio", faceId: "Notch Tradicional", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone X, iPhone 11 Pro", cubrecamaras: "iPhone XS Max", carcasas: "iPhone X" },
        ubicacion: { mueble: "C", numeroCajon: 23, nota: "ZONA C"}
    },

    "iPhone XS Max": {
        marca: "Apple",
        serie: "10", 
        caracteristicas: { tamano: "Grande", puerto: "Lightning", cantCamaras: "2 Cámaras", silenciar: "Switch de Silencio", faceId: "Notch Tradicional", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone 11 Pro Max", cubrecamaras: "XS", carcasas: "iPhone 11 Pro Max" },
        ubicacion: { mueble: "C", numeroCajon: 20, nota: "ZONA C"}
    },

    "iPhone 11": {
        marca: "Apple",
        serie: "11", 
        caracteristicas: { tamano: "Mediano", puerto: "Lightning", cantCamaras: "2 Cámaras", silenciar: "Switch de Silencio", faceId: "Notch Tradicional", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone XR", cubrecamaras: "iPhone 12 Mini, iPhone 12", carcasas: "Ninguna" },
        ubicacion: { mueble: "C", numeroCajon: "21, 30", nota: "ZONA C"}
    },

    "iPhone 11 Pro": {
        marca: "Apple",
        serie: "11", 
        caracteristicas: { tamano: "Mediano", puerto: "Lightning", cantCamaras: "3 Cámaras", silenciar: "Switch de Silencio", faceId: "Notch Tradicional", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone X, iPhone XS", cubrecamaras: "iPhone 11 Pro Max", carcasas: "Ninguna" },
        ubicacion: { mueble: "C", numeroCajon: 12, nota: "ZONA C"}
    },

    "iPhone 11 Pro Max": {
        marca: "Apple",
        serie: "11", 
        caracteristicas: { tamano: "Grande", puerto: "Lightning", cantCamaras: "3 Cámaras", silenciar: "Switch de Silencio", faceId: "Notch Tradicional", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone XS Max", cubrecamaras: "iPhone 11 Pro", carcasas: "iPhone XS Max" },
        ubicacion: { mueble: "C", numeroCajon: 3, nota: "ZONA C"}
    },

    "iPhone SE 2020": {
        marca: "Apple",
        serie: "9", 
        caracteristicas: { tamano: "Mediano", puerto: "Lightning", cantCamaras: "1 Cámara", silenciar: "Switch de Silencio", faceId: "Touch ID", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone 7, iPhone 8", cubrecamaras: "iPhone 8", carcasas: "iPhone 7, iPhone 8" },
        ubicacion: { mueble: "C", numeroCajon: 2, nota: "ZONA C"}
    },

    "iPhone 12 Mini": {
        marca: "Apple",
        serie: "12", 
        caracteristicas: { tamano: "Pequeño", puerto: "Lightning", cantCamaras: "2 Cámaras", silenciar: "Switch de Silencio", faceId: "Notch Tradicional", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone 13 Mini", cubrecamaras: "iPhone 11, iPhone 12", carcasas: "Ninguna" },
        ubicacion: { mueble: "C", numeroCajon: 14, nota: "ZONA C"}
    },

    "iPhone 12": {
        marca: "Apple",
        serie: "12", 
        caracteristicas: { tamano: "Mediano", puerto: "Lightning", cantCamaras: "2 Cámaras", silenciar: "Switch de Silencio", faceId: "Notch Tradicional", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone 12 Pro", cubrecamaras: "iPhone 11, iPhone 12 Mini", carcasas: "iPhone 12 Pro" },
        ubicacion: { mueble: "C", numeroCajon: "4, 13", nota: "ZONA C"}
    },

    "iPhone 12 Pro": {
        marca: "Apple",
        serie: "12", 
        caracteristicas: { tamano: "Mediano", puerto: "Lightning", cantCamaras: "3 Cámaras", silenciar: "Switch de Silencio", faceId: "Notch Tradicional", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone 12", cubrecamaras: "iPhone 12 Pro Max", carcasas: "iPhone 12" },
        ubicacion: { mueble: "C", numeroCajon: "4, 13", nota: "ZONA C"}
    },

    "iPhone 12 Pro Max": {
        marca: "Apple",
        serie: "12", 
        caracteristicas: { tamano: "Grande", puerto: "Lightning", cantCamaras: "3 Cámaras", silenciar: "Switch de Silencio", faceId: "Notch Tradicional", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "iPhone 12 Pro", carcasas: "Ninguna" },
        ubicacion: { mueble: "C", numeroCajon: "22, 31", nota: "ZONA C"}
    },

    "iPhone 13 Mini": {
        marca: "Apple",
        serie: "13", 
        caracteristicas: { tamano: "Pequeño", puerto: "Lightning", cantCamaras: "2 Cámaras", silenciar: "Switch de Silencio", faceId: "Notch Tradicional", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone 12 Mini", cubrecamaras: "iPhone 13, iPhone 14, iPhone 14 Plus", carcasas: "Ninguna" },
        ubicacion: { mueble: "C", numeroCajon: 5, nota: "ZONA C"}
    },

    "iPhone 13": {
        marca: "Apple",
        serie: "13", 
        caracteristicas: { tamano: "Mediano", puerto: "Lightning", cantCamaras: "2 Cámaras", silenciar: "Switch de Silencio", faceId: "Notch Tradicional", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone 13 Pro, iPhone 14, iPhone 16e, iPhone 17e", cubrecamaras: "iPhone 13 Mini, iPhone 14, iPhone 14 Plus", carcasas: "iPhone 14" },
        ubicacion: { mueble: "A", numeroCajon: "1, 7, 14", nota: "ZONA A"}
    },

    "iPhone 13 Pro": {
        marca: "Apple",
        serie: "13", 
        caracteristicas: { tamano: "Mediano", puerto: "Lightning", cantCamaras: "3 Cámaras", silenciar: "Switch de Silencio", faceId: "Notch Tradicional", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone 13, iPhone 14, iPhone 16e, iPhone 17e", cubrecamaras: "iPhone 13 Pro Max", carcasas: "Ninguna" },
        ubicacion: { mueble: "A", numeroCajon: "20, 27", nota: "ZONA A"}
    },

    "iPhone 13 Pro Max": {
        marca: "Apple",
        serie: "13", 
        caracteristicas: { tamano: "Grande", puerto: "Lightning", cantCamaras: "3 Cámaras", silenciar: "Switch de Silencio", faceId: "Notch Tradicional", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone 14 Plus", cubrecamaras: "iPhone 13 Pro", carcasas: "Ninguna" },
        ubicacion: { mueble: "A", numeroCajon: "21, 28", nota: "ZONA A"}
    },

    "iPhone 14": {
        marca: "Apple",
        serie: "14", 
        caracteristicas: { tamano: "Mediano", puerto: "Lightning", cantCamaras: "2 Cámaras", silenciar: "Switch de Silencio", faceId: "Notch Tradicional", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone 13, iPhone 13 Pro, iPhone 16e, iPhone 17e", cubrecamaras: "iPhone 13 Mini, iPhone 13, iPhone 14 Plus", carcasas: "iPhone 13" },
        ubicacion: { mueble: "A", numeroCajon: "6, 13", nota: "ZONA A"}
    },

    "iPhone 14 Plus": {
        marca: "Apple",
        serie: "14", 
        caracteristicas: { tamano: "Grande", puerto: "Lightning", cantCamaras: "2 Cámaras", silenciar: "Switch de Silencio", faceId: "Notch Tradicional", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone 13 Pro Max", cubrecamaras: "iPhone 13 Mini, iPhone 13, iPhone 14", carcasas: "iPhone 15 Plus" },
        ubicacion: { mueble: "A", numeroCajon: "4, 11", nota: "ZONA A"}
    },

    "iPhone 14 Pro": {
        marca: "Apple",
        serie: "14",
        caracteristicas: { tamano: "Mediano", puerto: "Lightning", cantCamaras: "3 Cámaras", silenciar: "Switch de Silencio", faceId: "Isla dinámica", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "(iPhone 15, iPhone 16(?))", cubrecamaras: "iPhone 14 Pro Max", carcasas: "Ninguna" },
        ubicacion: { mueble: "A", numeroCajon: "5, 12", nota: "ZONA A"}
    },

    "iPhone 14 Pro Max": {
        marca: "Apple",
        serie: "14",
        caracteristicas: { tamano: "Grande", puerto: "Lightning", cantCamaras: "3 Cámaras + Lidar", silenciar: "Switch de Silencio", faceId: "Isla dinámica", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "14 Pro", carcasas: "Ninguna" },
        ubicacion: { mueble: "A", numeroCajon: "19, 26", nota: "ZONA A"}
    },

    "iPhone 15": {
        marca: "Apple",
        serie: "15",
        caracteristicas: { tamano: "Mediano", puerto: "USB-C", cantCamaras: "2 Cámaras", silenciar: "Switch de Silencio", faceId: "Isla dinámica", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone 14 Pro(?), iPhone 16", cubrecamaras: "iPhone 15 Plus", carcasas: "Ninguna" },
        ubicacion: { mueble: "A", numeroCajon: "3, 10, 22", nota: "ZONA A"}
    },

    "iPhone 15 Plus": {
        marca: "Apple",
        serie: "15",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "2 Cámaras", silenciar: "Switch de Silencio", faceId: "Isla dinámica", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone 16 Plus", cubrecamaras: "iPhone 15", carcasas: "iPhone 14 Plus" },
        ubicacion: { mueble: "A", numeroCajon: "18, 25", nota: "ZONA A"}
    },

    "iPhone 15 Pro": {
        marca: "Apple",
        serie: "15",
        caracteristicas: { tamano: "Mediano", puerto: "USB-C", cantCamaras: "3 Cámaras", silenciar: "Botón de Acción", faceId: "Isla dinámica", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "PENDIENTE...", cubrecamaras: "iPhone 15 Pro Max, iPhone 16 Pro/Pro Max, iPhone 17 Pro/Pro Max", carcasas: "Ninguna" },
        ubicacion: { mueble: "A", numeroCajon: "2, 9, 15", nota: "ZONA A"}
    },

    "iPhone 15 Pro Max": {
        marca: "Apple",
        serie: "15",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "3 Cámaras", silenciar: "Botón de Acción", faceId: "Isla dinámica", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "iPhone 15 Pro, iPhone 16 Pro/Pro Max, iPhone 17 Pro/Pro Max", carcasas: "Ninguna" },
        ubicacion: { mueble: "A", numeroCajon: "8, 17, 24", nota: "ZONA A"}
    },

    "iPhone 16e": {
        marca: "Apple",
        serie: "16", 
        caracteristicas: { tamano: "Mediano", puerto: "USB-C", cantCamaras: "1 Cámara", silenciar: "Botón de Acción", faceId: "Notch Tradicional", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone 13, iPhone 13 Pro, iPhone 14, iPhone 17e", cubrecamaras: "XS", carcasas: "iPhone 17e" },
        ubicacion: { mueble: "C", numeroCajon: "26, 35", nota: "ZONA C"}
    },

    "iPhone 16": {
        marca: "Apple",
        serie: "16", 
        caracteristicas: { tamano: "Mediano", puerto: "USB-C", cantCamaras: "2 Cámaras", silenciar: "Botón de Acción", faceId: "Isla dinámica", controlCamara: "Si tiene" },
        compatibilidades: { pantalla: "iPhone 15", cubrecamaras: "iPhone 16 Plus, iPhone 17", carcasas: "Ninguna" },
        ubicacion: { mueble: "C", numeroCajon: "9, 18", nota: "ZONA C"}
    },

    "iPhone 16 Plus": {
        marca: "Apple",
        serie: "16", 
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "2 Cámaras", silenciar: "Botón de Acción", faceId: "Isla dinámica", controlCamara: "Si tiene" },
        compatibilidades: { pantalla: "iPhone 15 Plus", cubrecamaras: "iPhone 16, iPhone 17", carcasas: "Ninguna" },
        ubicacion: { mueble: "C", numeroCajon: "8, 17", nota: "ZONA C"}
    },

    "iPhone 16 Pro": {
        marca: "Apple",
        serie: "16",
        caracteristicas: { tamano: "Mediano", puerto: "USB-C", cantCamaras: "3 Cámaras", silenciar: "Botón de Acción", faceId: "Isla dinámica", controlCamara: "Si tiene" },
        compatibilidades: { pantalla: "iPhone 17, iPhone 17 Pro", cubrecamaras: "iPhone 15 Pro/Pro Max, iPhone 16 Pro Max, iPhone 17 Pro/Pro Max", carcasas: "Ninguna" },
        ubicacion: { mueble: "A", numeroCajon: "16, 23", nota: "ZONA A"}
    },

    "iPhone 16 Pro Max": {
        marca: "Apple",
        serie: "16", 
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "3 Cámaras", silenciar: "Botón de Acción", faceId: "Isla dinámica", controlCamara: "Si tiene" },
        compatibilidades: { pantalla: "iPhone 17 Pro Max", cubrecamaras: "iPhone 15 Pro/Pro Max, iPhone 16 Pro, iPhone 17 Pro/Pro Max", carcasas: "Ninguna" },
        ubicacion: { mueble: "C", numeroCajon: "27, 36", nota: "ZONA C"}
    },

    "iPhone 17e": {
        marca: "Apple",
        serie: "17", 
        caracteristicas: { tamano: "Mediano", puerto: "USB-C", cantCamaras: "1 Cámara", silenciar: "Botón de Acción", faceId: "Notch Tradicional", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone 13, iPhone 13 Pro, iPhone 14, iPhone 16e", cubrecamaras: "XS", carcasas: "iPhone 16e" },
        ubicacion: { mueble: "C", numeroCajon: "26, 35", nota: "ZONA C" }
    },

    "iPhone 17": {
        marca: "Apple",
        serie: "17", 
        caracteristicas: { tamano: "Mediano", puerto: "USB-C", cantCamaras: "2 Cámaras", silenciar: "Botón de Acción", faceId: "Isla dinámica", controlCamara: "Si tiene" },
        compatibilidades: { pantalla: "iPhone 16 Pro, iPhone 17 Pro", cubrecamaras: "iPhone 16, iPhone 16 Plus", carcasas: "Ninguna" },
        ubicacion: { mueble: "C", numeroCajon: "7, 16", nota: "ZONA C" }
    },

    "iPhone Air": {
        marca: "Apple",
        serie: "17", 
        caracteristicas: { tamano: "Mediano", puerto: "USB-C", cantCamaras: "1 Cámara", silenciar: "Botón de Acción", faceId: "Isla dinámica", controlCamara: "Si tiene" },
        compatibilidades: { pantalla: "XS, 11 Pro", cubrecamaras: "XS", carcasas: "Ninguna" },
        ubicacion: { mueble: "C", numeroCajon: "25, 34", nota: "ZONA C" }
    },

    "iPhone 17 Pro": {
        marca: "Apple",
        serie: "17", 
        caracteristicas: { tamano: "Mediano", puerto: "USB-C", cantCamaras: "3 Cámaras", silenciar: "Botón de Acción", faceId: "Isla dinámica", controlCamara: "Si tiene" },
        compatibilidades: { pantalla: "iPhone 16 Pro, iPhone 17", cubrecamaras: "iPhone 15 Pro/Pro Max, iPhone 16 Pro/Pro Max, iPhone 17 Pro Max", carcasas: "Ninguna" },
        ubicacion: { mueble: "C", numeroCajon: "5, 14", nota: "ZONA C" }
    },

    "iPhone 17 Pro Max": {
        marca: "Apple",
        serie: "17", 
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "3 Cámaras", silenciar: "Botón de Acción", faceId: "Isla dinámica", controlCamara: "Si tiene" },
        compatibilidades: { pantalla: "iPhone 16 Pro Max", cubrecamaras: "iPhone 15 Pro/Pro Max, iPhone 16 Pro/Pro Max, iPhone 17 Pro", carcasas: "Ninguna" },
        ubicacion: { mueble: "C", numeroCajon: "24, 33", nota: "ZONA C" }
    },

};