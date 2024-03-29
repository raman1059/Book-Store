﻿# E-Commerce[DONE]

## A live demo is hosted on Azure: https://ramanbookstore.azurewebsites.net

#### Technology Stack :

* Angular 7+,
* RxJS 6+,
* NgRx 6,
* Angular Material 7+,
* Firebase 4+

#### The goal of the architecture and structure used in this application is to ensure :

* Scalability
* Modularity
* Separation of concerns ( less logic in the UI )
* Maintainability ( Redux => Time Traveller Debugger => )
* Be Reactive => Everything should be a stream

#### This sample application includes the following features :

* Modular application
* State Management
* Routing
* Reactive forms & validations
* Backend communication
* Real Time experience using WebSockets
* Material design

#### Application Modules
The application is splitted into several modules. The image below represents the modules implemented in this application.

- Core Module : Core of the application, it contains the core layout, menu and logo.
- Shared Module : Contains shared features such as Material mdoules and several utility classes.
- Catalog Module : Browse a collection of books and view the details of each books
- Review Module : Add review for a book, upvote or down vote a review in realtime => it's kind of debate about a book.
- Cart Module : Add books to cart, checkout and place order.

#### Each module in the application can be illustrated by 3 big parts :

* UI : represented by containers & components. This is the UI part that will be exported by each module.

* State Management : This part will manage the state of the module, dispatching actions and handling side effects.

* Services : side effects services like http services, websocket and local storage.

#### Now, let’s dig into each part of this architecture and explain its purpose:

* Components :

UI components such as menu, cart item and book navigator. These are dump components, they receive properties and communicate with the outside world via events. The interesting thing about dump components is the fact that they don’t have a state related to our application. It may happen to have a component with an internal state, but this state should not interfere with the application's state.

Example of Dump components :

Book Navigator: it receives current index and the count, and emits events when next and previous are clicked.

* Containers :

Components that defines the structure of the page are called Containers. They are also known as smart components. Containers are responsible of doing a subscribe to the store of the application in order to feed the dump components when the state of the application changes. Also, they listen to the events emitted by child components and thus dispatch actions to the store.

Examples of Smart components :

Selected book container : it represents the container of a selected book page, it contains the book navigator component, book details and review container related to that book. This container dispatches actions to load the details of the selected book and subscribe to the store in order to be notified when data has been loaded. Once data is received the container passes the value to its child components.

* Store

This is the single source of truth of our application. It contains the state of the entire application, the sotre is composed by the state of each feature module. The store will ensure that our application has a unidirectional data flow. Every action ( date range has changed, click, etc ) must be dispatched to the store, thus a reducer function will be invoked in order to calculate the new state of our application. The goal of having a single source of truth is to ensure the loose coupling between the components. Also, having a single state that describes the application would simplify the maintenance thanks to time traveling debugger.

* Actions

When we need to change the state of our application, we dispatch an action. Actions are a POJO represented by a type and an optional payload.

* Reducers

Reducers are responsible of calculating the new state of our application when an action is dispatched.

* Effects

One of the goal of this architecture is to write a predictable code as much as possible and to handle side effects ( which may bring unpredictability - such as http calls ) into separate units which we call Effects. For example, the catalog module has several side effects such as loading a list of books or the details of a single book from a rest API. Those side effects are handled by reactive blocks. a reactive block consists of subscribing to the stream of actions and then applying a filter to track actions that may cause side effects. Thereafter, a appropriate async service will be called to handle the side effect.

The effects blocks of catalog module are good example to understand the purpose of Effects.

## Development server

I have done my project work with npm because I have never used yarn before

Hit `npm install` on the terminal to install the dependencies and then Run `ng serve` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

