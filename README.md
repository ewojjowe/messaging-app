<p align="center">
 <img src="https://p79.f0.n0.cdn.getcloudapp.com/items/bLuBY5EO/ec9e72d4-e3ca-4e12-824f-f119ecf3a60e.jpeg?source=viewer&v=2bd7269628df5b9939a2c8acf5c76df9" alt="Messaging App"></a>
</p>

<h3 align="center">The Documentation Compendium</h3>

---

## Table of Contents

- [About](#about)
- [Deliverables](#deliverables)
- [Acceptance Criteria](#acceptance_criteria)
- [Development server](#server)


## About: <a name = "about"></a>

This messaging app was written with the [Angular](https://angular.io/) framework.
It uses [RxStomp](https://github.com/stomp-js/rx-stomp) to connect with to
**RabbitMQ** messaging server via **WebSockets**. A wrapper over
[STOMP.js](https://github.com/stomp-js/stompjs) which exposes the STOMP operations
as RxJS Observables. It provides almost all operations provided by the underlying
library. 

## Deliverables: <a name = "deliverables"></a>

- All code that is written as part of this test should be submitted to us for review. The files
themselves can be sent directly to us via email or file sharing (Google Drive, Dropbox, etc.), or
the code can be committed to a public Github repository, and the link to that repository can be
provided to us.

## Acceptance Criteria: <a name = "acceptance_criteria"></a>

- Should connect to provided rabbitmq messaging server via websockets
- Should be able to send a message using the provided server
- Should show current connection status of the application
- Should show a history or list of any messages sent

## Development server: <a name = "server"></a>

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

