import { Time } from "@angular/common";

export interface Task {
  createdAt: string ;
  description: string;
  dueDate: string;
  priority: 'high' | 'medium' | 'low';
  status: 'todo' | 'inprogress' | 'done' ;
  title: string;
}
