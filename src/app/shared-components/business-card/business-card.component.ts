import { Component, OnInit, Input } from '@angular/core';
import { BusinessCard } from './business-card.model';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.css']
})
export class BusinessCardComponent implements OnInit {
  @Input() businessCard: BusinessCard;
  @Input() wrapperCssClass: string;
  
  constructor() { }

  ngOnInit() {
  }
}
