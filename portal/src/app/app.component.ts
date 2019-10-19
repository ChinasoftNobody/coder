import {Component} from '@angular/core';
import {GroupModel} from './data/group.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Maysham';
  group: GroupModel = {name: '我的服务组'};
}
