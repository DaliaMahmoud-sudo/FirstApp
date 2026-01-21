import { Component } from '@angular/core';
import { Task } from '../navbar/task';
import { Navbar } from '../navbar/navbar';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  imports: [FormsModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
   taskList: Task[] = JSON.parse(localStorage.getItem("taskList") || "[]");

    title: string= '';
  createdAt: string ='';
  description: string = '';
  priority: 'high' | 'medium' | 'low' = 'medium';
  status: 'todo' | 'inprogress' | 'done' = 'todo';

onSubmit() {
    const newTask: Task = {
      createdAt: this.createdAt,
      title: this.title,
      description: this.description,
      dueDate: new Date().toISOString(),
      priority: this.priority,
      status: this.status,

    };

    this.saveTask(newTask);
    this.resetForm();
  }

  saveTask(task: Task) {
    this.taskList.push(task);
    localStorage.setItem("taskList", JSON.stringify(this.taskList));
  }
  resetForm() {
    this.title = '';
    this.description = '';
    this.createdAt = '';
    this.priority = 'medium';
  }


  change(index:number,status: 'todo' | 'inprogress' | 'done'){
    this.taskList[index].status=status;


      localStorage.setItem("taskList", JSON.stringify(this.taskList));
  }

count(status:string):number{
let count=0;
for(let task of this.taskList){
if(task.status===status){
count++;
}}
return count;
}
delete(index:number){
this.taskList.splice(index,1);
localStorage.setItem("taskList", JSON.stringify(this.taskList));
}
}
