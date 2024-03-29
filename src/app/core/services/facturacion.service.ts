import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_DYNAMO } from '../constants/url.constants';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FacturacionService {
  constructor(private http: HttpClient) {}

  getListEstados(obj: any) {
    return this.http.post(API_DYNAMO, obj);
  }

  getListGestores(obj: any) {
    return this.http.post(API_DYNAMO, obj);
  }

  getListProyectos(obj: any) {
    return this.http.post(API_DYNAMO, obj);
  }

  crearLiquidacion(obj: any) {
    return this.http.post(API_DYNAMO, obj);
  }

  duplicarLiquidacion(obj: any) {
    return this.http.post(API_DYNAMO, obj);
  }

  agregarFacturaCambios(obj: any) {
    return this.http.post(API_DYNAMO, obj);
  }

  actualizarLiquidacion(obj: any) {
    return this.http.post(API_DYNAMO, obj);
  }

  actualizacionMasiva(obj: any) {
    return this.http.post(API_DYNAMO, obj);
  }

  cargarFacturaById(obj: any) {
    return this.http.post(API_DYNAMO, obj);
  }

  getListLiquidaciones(obj: any) {
    return this.http.post(API_DYNAMO, obj);
  }

  getListValidarProy(obj: any) {
    return this.http.post(API_DYNAMO, obj);
  }

  actualizarVentaDeclarada(obj: any) {
    return this.http.post(API_DYNAMO, obj);
  }

  actualizarCertificacion(obj: any) {
    return this.http.post(API_DYNAMO, obj);
  }

  eliminarVentaDeclarada(obj: any) {
    return this.http.post(API_DYNAMO, obj);
  }

  eliminaFactura(obj: any) {
    return this.http.post(API_DYNAMO, obj);
  }

  eliminarLiquidacion(id: number) {
    return this.http.post(API_DYNAMO, id);
  }

  cargarOBuscarLiquidacion(obj: any) {
    return this.http.post(API_DYNAMO, obj);
  }

  agregarVentaDeclarada(obj: any) {
    return this.http.post(API_DYNAMO, obj);
  }

  agregarCertificacion(obj: any) {
    return this.http.post(API_DYNAMO, obj);
  }

  cargarVentaDeclarada(obj: any) {
    return this.http.post(API_DYNAMO, obj);
  }

  cargarVentaDeclaradaById(obj: any) {
    return this.http.post(API_DYNAMO, obj);
  }

  cargarFactura(obj: any) {
    return this.http.post(API_DYNAMO, obj);
  }

  getListEstadosFacturacion(obj: any) {
    return this.http.post(API_DYNAMO, obj);
  }

  getHistoricoCambiosEstado(obj: any) {
    return this.http.post(API_DYNAMO, obj);
  }

  exportListVD_Fact(obj: any){
    return this.http.post(API_DYNAMO, obj);
  }

  cargarOBuscarVentaDeclada(obj: any[]) {
    return this.http.post(API_DYNAMO, obj);
  }

  listaComentarioByID(obj: any[]) {
    return this.http.post(API_DYNAMO, obj);
  }

  // BASE_LIQUIDACION <> API_DYNAMO
  getLiquidacionById(idLiq: number): Observable<any>{
    return this.http.get(`${API_DYNAMO}/GetLiquidacionById/${idLiq}`).pipe(
      map((resp: any) => {
        console.log('DATA_BY_ID', resp.result);

        return resp.result;
      })
    );
  }
}

