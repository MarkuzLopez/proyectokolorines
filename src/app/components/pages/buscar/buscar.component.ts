import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../../servicios/productos.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  constructor(private router: ActivatedRoute, public productService: ProductosService) { }

  ngOnInit() {
    this.router.params
      .subscribe( params => { 
        console.log(params['termino']);
        this.productService.buscarProducto( params['termino'] );
      })
  }

}
