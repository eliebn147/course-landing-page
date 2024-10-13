import {Component, input, InputSignal} from '@angular/core';
import {Button} from "primeng/button";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    Button
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  buttonText = input<string>("Button");
  severity = input<
    | "secondary"
    | "success"
    | "info"
    | "warning"
    | "help"
    | "danger"
    | "primary"
    | null
    | undefined
  >("success");
  size = input<"small" | "large">("small");
  iconPos = input<"left" | "right" | "top" | "bottom">("left");
  icon = input<string>("");
  outlined = input<boolean>(false);
  style = input<any>();
  disabled = input<boolean>(false);
}
