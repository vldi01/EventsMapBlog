package di

import ClientSpecific
import events.EventsRepo
import events.EventsViewModel
import io.ktor.client.*
import io.ktor.client.plugins.contentnegotiation.*
import io.ktor.client.plugins.websocket.*
import io.ktor.serialization.kotlinx.*
import io.ktor.serialization.kotlinx.json.*
import kotlinx.serialization.json.Json
import org.koin.core.module.dsl.singleOf
import org.koin.dsl.module

val sharedModule = module {
    single<HttpClient> {
        HttpClient(ClientSpecific.ktorEngine) {
            install(ContentNegotiation) {
                json(Json {
                    isLenient = false
                    prettyPrint = true
                    encodeDefaults = true
                })
            }
            install(WebSockets) {
                contentConverter = KotlinxWebsocketSerializationConverter(Json)
            }
        }
    }

    // ViewModels
    singleOf(::EventsViewModel)

    // Repos
    singleOf(::EventsRepo)
}