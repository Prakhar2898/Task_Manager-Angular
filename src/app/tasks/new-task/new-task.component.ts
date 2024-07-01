import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task/task.modle';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() submit = new EventEmitter<NewTask>();
  taskTitle = '';
  taskSummary = '';
  taskDate = '';

  onCancel() {
    this.cancel.emit();
  }
  onSubmit() {
    this.submit.emit({
      title: this.taskTitle,
      summary: this.taskSummary,
      dueDate: this.taskDate

    })
  }
}
