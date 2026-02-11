// form-plugin.model.ts
import { InjectionToken } from '@angular/core';
import { FormGroup } from '@angular/forms';

export interface FormModifierPlugin {
  apply(form: FormGroup): void;
}

export const FORM_MODIFIER_TOKEN = new InjectionToken<FormModifierPlugin>('FORM_MODIFIER');