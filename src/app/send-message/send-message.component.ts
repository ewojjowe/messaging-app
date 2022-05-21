import { Component, OnInit } from '@angular/core';

// Services
import { RxStompService } from '../../common/services/rx-stomp.service'

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent implements OnInit {

  message: string = ''

  constructor(
    private rxStompService: RxStompService
  ) {

  }

  ngOnInit(): void {
  }

  handleSendMessage() {
    this.rxStompService.publish({ destination: '/queue/hello', body: this.message });
    this.message = ''
  }
}
