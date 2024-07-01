import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, UserComponent, TasksComponent]
})
export class AppComponent {
  user = DUMMY_USERS
  userId?: string;

  selectedUser(id: string) {
    console.log('The id of User: ' + id);
    this.userId = id;
    //this.message = this.message + "The user selected is: " + this.message;
  }
  get userDetails() {
    return this.user.find(u => u.id === this.userId);
  }
}
