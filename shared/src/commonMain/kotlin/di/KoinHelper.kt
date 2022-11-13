package di

import events.EventsViewModel
import org.koin.core.component.KoinComponent
import org.koin.core.component.inject

object KoinHelper : KoinComponent {
    val eventsViewModel: EventsViewModel by inject()
}