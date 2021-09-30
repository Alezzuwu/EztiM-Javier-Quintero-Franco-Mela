import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  private productos= [
    {
      id: '1',
      nombre: 'Resident Evil Village',
      fecha_lanzamiento: '21/21/21',
      desarrollador: 'uwu',
      categoria: 'juego coxino',
      precio: 1000,
      imagenURL: 'https://uvejuegos.com/img/caratulas/64645/Resident-Evil-Village-6773-1597925638.jpg',
      comentario: ['muito weno manito caralho', 'un manjar caralho']
    },
    {
      id: '2',
      nombre: 'Dead By Daylight',
      fecha_lanzamiento: '21/21/21',
      desarrollador: 'uwu',
      categoria: 'juego coxino',
      precio: 1000,
      imagenURL: 'https://i.3djuegos.com/juegos/12790/dead_by_daylight/fotos/ficha/dead_by_daylight-4789018.jpg',
      comentario: []
    },
    {
      id: '3',
      nombre: 'Celeste',
      fecha_lanzamiento: '21/21/21',
      desarrollador: 'uwu',
      categoria: 'juego coxino',
      precio: 1000,
      imagenURL: 'https://media.vandal.net/m/44239/celeste-2018128121116_11.jpg',
      comentario: []
    },
    {
      id: '4',
      nombre: 'Portal 2',
      fecha_lanzamiento: '21/21/21',
      desarrollador: 'uwu',
      categoria: 'juego coxino',
      precio: 1000,
      imagenURL: 'https://anongamez.com/wp-content/uploads/2019/11/MV5BNzEyNGM5YjgtYjFkMC00MTE1LTk1YjgtNjAyYjA2ODUzNzQwXkEyXkFqcGdeQXVyNjk2MTcyMDA@._V1_.jpg',
      comentario: []
    },
    {
      id: '5',
      nombre: 'Left 4 Dead 2',
      fecha_lanzamiento: '21/21/21',
      desarrollador: 'uwu',
      categoria: 'juego coxino',
      precio: 1000,
      imagenURL: 'https://media.vandal.net/m/10836/2009113124334_1.jpg',
      comentario: []
    },
    {
      id: '6',
      nombre: 'Shadow Of The Tomb raider',
      fecha_lanzamiento: '21/21/21',
      desarrollador: 'uwu',
      categoria: 'juego coxino',
      precio: 1000,
      imagenURL: 'https://i.pinimg.com/originals/01/50/bb/0150bbea7713274647062b7e45b05ac3.png',
      comentario: []
    },
    {
      id: '7',
      nombre: 'Devil May Cry 5',
      fecha_lanzamiento: '21/21/21',
      desarrollador: 'uwu',
      categoria: 'juego coxino',
      precio: 1000,
      imagenURL: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/06/dmc5-cover.jpg?itok=qWrxErJV',
      comentario: []
    },
    {
      id: '8',
      nombre: 'Lolcito',
      fecha_lanzamiento: '21/21/21',
      desarrollador: 'uwu',
      categoria: 'juego coxino',
      precio: 1000,
      imagenURL: 'https://as01.epimg.net/meristation/imagenes/2019/08/07/cover/719414081565191040.jpg',
      comentario: []
    },
    {
      id: '9',
      nombre: 'Genshin Impact',
      fecha_lanzamiento: '21/21/21',
      desarrollador: 'uwu',
      categoria: 'juego coxino',
      precio: 1000,
      imagenURL: 'https://media.vandal.net/m/75962/genshin-impact-20209417573364_1.jpg',
      comentario: []
    },
    {
      id: '10',
      nombre: 'Among Us',
      fecha_lanzamiento: '21/21/21',
      desarrollador: 'uwu',
      categoria: 'juego coxino',
      precio: 1000,
      imagenURL: 'https://i.kym-cdn.com/photos/images/newsfeed/001/966/661/fb8',
      comentario: []
    },

   ]

  constructor() { }

  //buscar
  getProductos(){
    //retornamos una lista de productos
    return [...this.productos]
  }
  //buscar por id 
  getProductosById(productoid : string){

    //se busca elemento por su id y se retorna un objeto
    return {
      ...this.productos.find(serv => {
        return serv.id === productoid})
      }
  }
  //agregar
  addproducto(tit : string, fecha : string, desarrollador : string, cat: string,precio : number, imgURL: string, com:string[]){
    //agregamos un producto nuevo a la lista
    // el id corresponde al ultimo elemento registrado + 1
    this.productos.push(
      {
        id: this.productos.length + 1 + "",
        nombre: tit,
        fecha_lanzamiento: fecha,
        desarrollador: desarrollador,
        categoria: cat,
        precio: precio,
        imagenURL: imgURL,
        comentario: com
      }
    )

  }
  //eliminar
  deleteProducto( productoid : string){
    // se busca un elemento por id y este elemento se quita de la lista
    //luego se sobreescribe la variable productos
    this.productos = this.productos.filter(serv =>{
                      return serv.id !== productoid
                    })

  }

}
