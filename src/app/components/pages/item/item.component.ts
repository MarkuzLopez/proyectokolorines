import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/servicios/productos.service';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interfaces';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  productos: ProductoDescripcion;
  id: string;

  constructor(private route:  ActivatedRoute, public  productService: ProductosService) {

   }

  ngOnInit() {
    this.route.params.subscribe(paramaetro => { 
      this.productService.getProducto(paramaetro['id'])
        .subscribe( (producto: ProductoDescripcion) => {  
          this.productos = producto;
          this.id = paramaetro['id'];          
        })
    })
  }

}
