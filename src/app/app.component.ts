import { Component } from '@angular/core';
import {
  FormGroup,
  FormArray,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fb: FormBuilder;
  newForm = new FormGroup({
    projectName: new FormControl(null, [
      Validators.required,
      this.forbiddenName
    ]),
    mail: new FormControl(null, [Validators.required, Validators.email]),
    projectStatus: new FormArray([])
  });
  forbiddenProjectName = 'Test';

  forbiddenName(control: FormControl): { [s: string]: boolean } {
    if (this.newForm.controls.projectName.value === this.forbiddenProjectName) {
      return { nameIsForbidden: true };
    } else {
      return null;
    }
  }
}
