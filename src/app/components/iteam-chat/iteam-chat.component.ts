import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iteam-chat',
  templateUrl: './iteam-chat.component.html',
  styleUrls: ['./iteam-chat.component.scss'],
  standalone: false,
})
export class IteamChatComponent  implements OnInit {
contacts: any;

  constructor() { }

  ngOnInit() {}

}
