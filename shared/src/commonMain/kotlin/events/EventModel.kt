package events

import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.js.JsName

@JsExport
@Serializable
data class EventModel(
    @JsName("name")
    val name: String,
    val address: String,
)
