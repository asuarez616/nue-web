import {Component, OnInit} from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [MatSlideToggleModule, MatButtonModule, MatDividerModule,]
})
export class HomePage implements OnInit {

  ngOnInit() {
  }
}
