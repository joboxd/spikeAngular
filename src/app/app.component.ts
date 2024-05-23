import { Component } from '@angular/core';
import { RouterLink, RouterOutlet,RouterModule,Routes, Router} from '@angular/router';
import { ModalComponentComponent } from './modal-component/modal-component.component';
import { HijoComponent } from "./hijo/hijo.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ModalComponentComponent, HijoComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    //Mensaje que manda desde el padre
  mensajePadre: String = "Pasando atributos del padre al hijo";
  //Mensaje que se recibe desde el hijo
  mensajeRecibido?: String;
  recibirMensaje($event : String){
    this.mensajeRecibido= $event;
  }
  
}
