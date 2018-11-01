import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.service';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  equipo: any[] = [];
  cargada = false;

  constructor(private http: HttpClient) {
    console.log('sevicio pahina');
    this.cargarEquipo();
    this.cargarInfo();
  }

  private cargarInfo() {
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
        console.log(resp);
      });
  }

  private cargarEquipo() {
    this.http.get('https://angular-html-7baac.firebaseio.com/equipo.json')
      .subscribe((resp: any) => {
        this.equipo = resp;
        console.log('datos firebase', resp);
      })
  }
}
