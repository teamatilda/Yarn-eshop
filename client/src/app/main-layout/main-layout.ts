import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../routes/navbar/navbar';
import { Footer } from '../routes/footer/footer';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './main-layout.html',
})
export class MainLayout {}