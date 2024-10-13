import {Component, input, model, output} from '@angular/core';
import {DialogModule} from "primeng/dialog";
import {ButtonComponent} from "../button/button.component";

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    DialogModule,
    ButtonComponent
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  visible = model<boolean>(false);
  width = input<string>("");
  header = input<string>("");
  acceptButtonDisabled = input<boolean>(false);
  acceptButtonText = input<string>("");
  acceptClicked = output();
}
