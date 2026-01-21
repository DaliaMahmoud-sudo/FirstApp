import { Component } from '@angular/core';
import { Task } from './task';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-navbar',
  imports: [FormsModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {


}
