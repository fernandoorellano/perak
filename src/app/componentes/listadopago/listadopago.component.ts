import { Component, OnInit } from '@angular/core';
import { FechaService } from 'src/app/servicios/fecha.service';

@Component({
  selector: 'app-listadopago',
  templateUrl: './listadopago.component.html',
  styleUrls: ['./listadopago.component.css']
})
export class ListadopagoComponent implements OnInit {

    fechaActual: any = new Date();

  constructor(public listadoServ: FechaService) { }

  ngOnInit(): void {
  }

}
