import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  private formData: any;
  private data: any;

  constructor() { }

  setFormData(formData: any) {
    this.formData = formData;
  }

  getFormData() {
    return this.formData;
  }



  setloginData(data: any) {
    console.log("from service", data);
    this.data = data;
  }

  getloginData() {
   
    return this.data;
  }
}