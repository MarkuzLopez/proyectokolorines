import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Producto } from "../interfaces/producto.interface";


@Injectable({
  providedIn: "root"
})
export class ProductosService {
  cargando = true;

  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    //  declaracion de promesa para indicar que cargo de manera correcta
    return new Promise((resolve, reject) => {
      this.http
        .get("https://angular-html-7baac.firebaseio.com/productos_idx2.json")
        .subscribe((resp: Producto[]) => {
          console.log(resp);
          this.productos = resp;
          this.cargando = false;
          resolve();
        });
    });
  }

  getProducto(id: string) {
    return this.http.get(
      `https://angular-html-7baac.firebaseio.com/productos2/${id}.json`
    );
  }

  buscarProducto(termino: string) {
  
    if(this.cargarProductos.length === 0) { 
      /// cargar productos
      this.cargarProductos().then( () => { 
        // ejecutar despues de tener los productos
        // aplicar filtros
        this.filtrarProductos(termino);
      });
    } else { 
      this.filtrarProductos(termino);
    }
  }

  private filtrarProductos(termino: string) {   
    this.productosFiltrado = []; // se setea el arreglo para que no siga concatenando el buscar con las demas palabras
  
    termino = termino.toLowerCase(); /// convertir a minisculas o mayusculas no recuerdo jajaa XD

    this.productos.forEach( prod =>  { 

      const tituloLower =  prod.titulo.toLocaleLowerCase(); /// varianble temporal para el titulo

      if(prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0 ) {           
  
        this.productosFiltrado.push(prod); //para mostratr en el template 
      }

    })
    
  }
}
