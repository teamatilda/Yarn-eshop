import { Component} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-admin-header',
  templateUrl: './admin-header.html',
  styleUrl: './admin-header.css',
})
export class AdminHeader {}