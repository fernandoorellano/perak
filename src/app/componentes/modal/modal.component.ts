import { Component } from '@angular/core';
import { ListadofireService } from '../../servicios/listadofire.service';
import { FirestoreService } from '../../servicios/firestore.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  constructor(public listadoFireServ : ListadofireService, public fireServ: FirestoreService) { }

  ngOnInit(): void {}

}
