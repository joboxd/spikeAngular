import { Component } from '@angular/core';
import { ModalComponentComponent } from "../../modal-component/modal-component.component";
import { HijoComponent } from "../../hijo/hijo.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [ModalComponentComponent, HijoComponent]
})
export class HomeComponent {
  title = 'holissssss';



  //Mensaje que manda desde el padre
  mensajePadre: String = "Pasando atributos del padre al hijo";
  //Mensaje que se recibe desde el hijo
  mensajeRecibido?: String;
  recibirMensaje($event : String){
    this.mensajeRecibido= $event;
  }
}
