import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core'
import { Message } from '@stomp/stompjs'
import { Subscription } from 'rxjs'

// Services
import { RxStompService } from '../../common/services/rx-stomp.service'

// Interface
import { IMessage } from '../../common/models/message.interface'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit, OnDestroy {

  // @ts-ignore
  private rxStompServiceSubscription: Subscription

  messageList: IMessage[] = []

  constructor(
    private rxStompService: RxStompService
  ) {}

  ngOnInit(): void {
    this.rxStompServiceSubscription = this.rxStompService
      .watch('/queue/hello')
      .subscribe((message: Message) => {
          const newMessage: IMessage = {
            date: new Date(),
            body: message.body
          }

          this.messageList.push(newMessage)
        }
      )
  }

  ngOnDestroy() {
    if (this.rxStompServiceSubscription) {
      this.rxStompServiceSubscription.unsubscribe()
    }
  }

}
