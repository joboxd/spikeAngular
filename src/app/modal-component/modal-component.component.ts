import { Component, EventEmitter, Input, Output } from '@angular/core';
import {ContadorComponent} from '../contador/contador.component'
@Component({
  selector: 'app-modal-component',
  standalone: true,
  imports: [ContadorComponent],
  templateUrl: './modal-component.component.html',
  styleUrl: './modal-component.component.css'
})
export class ModalComponentComponent {
  
}
