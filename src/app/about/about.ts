import { Component, NgModule } from '@angular/core';
import { Task } from '../navbar/task';
import { Navbar } from '../navbar/navbar';
import { FormsModule, NgModel } from '@angular/forms';
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-about',
  imports: [FormsModule, NgClass],
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
  id: number = 0;

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
updateTask(index:number){
    this.title = this.taskList[index].title;
    this.description = this.taskList[index].description;
    this.createdAt = this.taskList[index].createdAt;
    this.priority = this.taskList[index].priority;
    document.querySelector(".update-btn")?.classList.remove("d-none");
    document.querySelector(".btn-add")?.classList.add("d-none");
    this.id=index;
}
update(){
  this.taskList[this.id].title=this.title;
  this.taskList[this.id].description=this.description;
  this.taskList[this.id].createdAt=this.createdAt;
  this.taskList[this.id].priority=this.priority;
  localStorage.setItem("taskList", JSON.stringify(this.taskList));
  this.resetForm();
      document.querySelector(".update-btn")?.classList.add("d-none");
    document.querySelector(".btn-add")?.classList.remove("d-none");
}
}
