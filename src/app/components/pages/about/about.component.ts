import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../../servicios/info-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public serviceInfo: InfoPaginaService) { }

  ngOnInit() {
    console.log('aqui', this.serviceInfo);
    
  }

}
