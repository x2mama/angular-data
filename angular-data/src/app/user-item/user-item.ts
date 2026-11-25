import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-user-item',
  styleUrl: './user-item.css',
  templateUrl: './user-item.html',
})
export class UserItem {
  name: string;
  constructor() {
    this.name = 'Felipe';
  }
}
