import {Component, input, model} from '@angular/core';
import {InputTextareaModule} from "primeng/inputtextarea";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-textbox',
  standalone: true,
  imports: [
    InputTextareaModule,
    FormsModule
  ],
  templateUrl: './textbox.component.html',
  styleUrl: './textbox.component.scss'
})
export class TextboxComponent {
  label = input<string>("Label");
  value = model("");
}
