//creando plantilla (clase) que representa cualquier producto
export interface producto{
    id : string;
    nombre : string;
    fecha_lanzamiento : string;
    desarrollador: string;
    categoria : string;
    precio : number;
    imagenURL: string;
    comentario : string[];
}