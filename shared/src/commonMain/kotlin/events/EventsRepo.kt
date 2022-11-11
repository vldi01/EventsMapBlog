package events

import ClientConstants
import io.ktor.client.*
import io.ktor.client.call.*
import io.ktor.client.request.*

class EventsRepo(private val client: HttpClient) {
    suspend fun getEvents(): List<EventModel> = client.get("${ClientConstants.SERVER_URL}/").body()
}