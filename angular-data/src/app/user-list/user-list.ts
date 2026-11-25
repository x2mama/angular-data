import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-user-list',
  styleUrl: './user-list.css',
  templateUrl: './user-list.html',
})
export class UserList {
  names: string[];  // il nostro vettore di stringhe
  constructor() {
    this.names = ['Ari', 'Carlos', 'Felipe', 'Nate']; // lo riempiamo
  }
}
