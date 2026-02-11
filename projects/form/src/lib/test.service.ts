import { Inject, Injectable } from '@angular/core';
import { FORM_MODIFIER_TOKEN, FormModifierPlugin } from '../public-api';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(@Inject(FORM_MODIFIER_TOKEN) private formService: FormModifierPlugin) {
    
  }
  
  test() {
    console.log('TestService test method called');
    this.formService.apply({} as any); // Just for demonstration, passing null
  }
}
