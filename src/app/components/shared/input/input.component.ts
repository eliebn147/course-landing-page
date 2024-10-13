import {Component, input, model, output} from '@angular/core';
import {NgClass, NgStyle} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ButtonDirective} from "primeng/button";
import {InputGroupModule} from "primeng/inputgroup";
import {FloatLabelModule} from "primeng/floatlabel";

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    NgClass,
    NgStyle,
    FormsModule,
    ButtonDirective,
    InputGroupModule,
    FloatLabelModule
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  placeholder = input<string>("");
  value = model<string>("");
  onIconClicked = output();
  onRightIconClicked = output();
  onClearClicked = output();
  ngModelChange = output();
  icon = input<string>("");
  iconRight = input<string>("");
  clearIcon = input(false);
  inputBorder = input(true);
  disabled = input(false);
  loading = input(false);
  numbersOnly = input(false);
  borderRadiusZero = input<boolean>(false);
  required = input<boolean>(false);
  label = input<string>("");
  onChange = output<any>();
  onBlur = output<any>();

  iconClicked() {
    this.onIconClicked.emit();
  }

  iconRightClicked() {
    this.onRightIconClicked.emit()
  }

  clearClicked() {
    this.value.set("");
    this.onClearClicked.emit();
  }
}

