import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserItem } from './user-item/user-item';
import { HelloWorld } from './hello-world/hello-world';
import { UserList } from './user-list/user-list';

@Component({
  imports: [RouterOutlet, UserItem, HelloWorld, UserList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-data');
}
