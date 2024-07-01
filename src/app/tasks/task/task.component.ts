import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Task } from './task.modle';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Input({ required: true }) taskId !: string;
  @Output() taskCompleted = new EventEmitter();

  userTaskCompleted() {
    this.taskCompleted.emit(this.taskId);
  }
}
