import React from 'react';
import './App.css';
import {events, Platform} from "./kotlin";
import EventModel = events.EventModel;

function App(this: any) {
    let vm = new events.EventsViewModel()
    events.observeEvents(vm,
        (events: Array<EventModel>) => {
            console.log(1)
            console.log(events[0])
        }
    )

    vm.onEnter()

    // events.observeEvents(this, (e: Array<events.EventModel>) => {
    //     console.log(e)
    // })
    return (
        <div className="App">
            <h1>The platform is {Platform.platformName}</h1>
        </div>
    );
}

export default App;
