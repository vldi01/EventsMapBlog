package events

import kotlinx.serialization.Serializable
import kotlin.js.JsName

@Serializable
data class EventModel(
    @JsName("name")
    val name: String,
    val address: String,
)
