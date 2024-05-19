import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  // este es el mensaje que recibimos del padre
  @Input() recibehijo: String = "";

  //este es el mensaje que mandamos hacia el padre
  mensajeAEnviar: String = "";
  @Output() mensajeHijo = new EventEmitter<String>();
  enviarMensaje() {
    this.mensajeHijo.emit(this.mensajeAEnviar);
  }
}
