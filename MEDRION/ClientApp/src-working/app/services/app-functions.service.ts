import { Injectable } from '@angular/core';
import * as forEach from 'lodash/forEach';
import { FormGroup, FormControl } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class AppFunctionsService {

  constructor() { }

  getFormStructure(form: FormGroup, formFields) {
    forEach(formFields, (value, key) => {
      if (value && value.formFields) {
        form.addControl(key, new FormGroup({}))
        this.getLevelOneFormStructure(form, value.formFields, key);
      }
      form.addControl(key, new FormControl(null));
    })
  }

  getLevelOneFormStructure(form: FormGroup, formFields, levelOneKey) {
    forEach(formFields, (value, key) => {
      if (value && value.formFields) {
        form.controls[levelOneKey]['addControl'](key, new FormGroup({}))
        this.getLevelTwoFormStructure(form, value.formFields, levelOneKey, key);
      }
      form.controls[levelOneKey]['addControl'](key, new FormControl(null));
    })
  }

  getLevelTwoFormStructure(form: FormGroup, formFields, levelOneKey, levelTwoKey) {
    forEach(formFields, (value, key) => {
      form.controls[levelOneKey]['controls'][levelTwoKey]['addControl'](key, new FormControl(null));
    })
  }
}
