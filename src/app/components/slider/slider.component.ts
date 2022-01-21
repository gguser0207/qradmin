import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'hello',
    template: `<h1>Hello {{name}}!</h1>`,
    styles: [`h1 { font-family: Lato; }`]
  })

export class SliderComponent {
    
      @Input() name: string;
    }
    

