package events

import kotlinx.coroutines.launch

@JsExport
fun EventsViewModel.observeEvents(
    callback: (Array<EventModel>) -> Unit
) = scope.launch {
    events.collect {
        callback.invoke(it.toTypedArray())
    }
}