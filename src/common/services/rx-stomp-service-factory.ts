import { RxStompService } from './rx-stomp.service'
import { wsRxStompConfig } from '../../app/ws-rx-stomp.config'

export function rxStompServiceFactory() {
  const rxStomp = new RxStompService()

  rxStomp.configure(wsRxStompConfig)
  rxStomp.activate()

  return rxStomp
}
