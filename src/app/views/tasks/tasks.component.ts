import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from '../../service/data-handler.service';
import {Task} from '../../model/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[];

  constructor(private dataHandlerService: DataHandlerService) {

  }

  ngOnInit(): void {
    this.dataHandlerService.tasksSubject.subscribe(tasks => this.tasks = tasks);
  }

  toggleTaskCompleted(task: Task) {
    task.completed = !task.completed;
  }
}
