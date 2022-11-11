package events

import ClientSpecific
import CustomDispatchers
import io.ktor.client.*
import io.ktor.client.plugins.contentnegotiation.*
import io.ktor.serialization.kotlinx.json.*
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Job
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.launch
import kotlinx.serialization.json.Json
import kotlin.js.JsExport

@JsExport
class EventsViewModel {
    val events = MutableStateFlow(listOf<EventModel>())

    // This should be in DI
    val client = HttpClient(ClientSpecific.ktorEngine) {
        install(ContentNegotiation) {
            json(Json {
                isLenient = false
                prettyPrint = true
                encodeDefaults = true
            })
        }
    }
    val repo = EventsRepo(client)
    val scope = CoroutineScope(Job())

    fun onEnter() {
        scope.launch(CustomDispatchers.io) {
//            events.emit(repo.getEvents())
            events.emit(
                listOf(
                    EventModel("qwe", "aklasd"),
                    EventModel("qwe2", "aklwfe222222asd"),
                    EventModel("qwe3", "akla1123sd"),
                )
            )
        }

    }
}