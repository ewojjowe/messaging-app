import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { RxStompService } from '../common/services/rx-stomp.service'
import { rxStompServiceFactory } from '../common/services/rx-stomp-service-factory';
import { MessagesComponent } from './messages/messages.component';
import { StatusComponent } from './status/status.component';
import { SendMessageComponent } from './send-message/send-message.component'

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    StatusComponent,
    SendMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: RxStompService,
      useFactory: rxStompServiceFactory,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
