import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs'

// Services
import { RxStompService } from '../../common/services/rx-stomp.service'

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit, OnDestroy {
  // @ts-ignore
  private rxStompServiceSubscription: Subscription

  isConnected: number = 0

  constructor(
    private rxStompService: RxStompService
  ) {}

  ngOnInit(): void {
    this.rxStompServiceSubscription = this.rxStompService
      .connectionState$
      .subscribe((data: number) => {
        this.isConnected = data
      })
  }

  ngOnDestroy() {
    if (this.rxStompServiceSubscription) {
      this.rxStompServiceSubscription.unsubscribe()
    }
  }

}
