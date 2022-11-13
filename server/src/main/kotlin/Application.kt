
import events.EventModel
import io.ktor.http.*
import io.ktor.serialization.kotlinx.json.*
import io.ktor.server.application.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import io.ktor.server.plugins.contentnegotiation.*
import io.ktor.server.plugins.cors.routing.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import kotlinx.serialization.json.Json

fun main() {
    embeddedServer(Netty, port = 8080, host = "0.0.0.0") {
        install(ContentNegotiation) {
            json(Json {
                prettyPrint = true
                isLenient = true
            })
        }

        install(CORS) {
            allowMethod(HttpMethod.Get)
            allowMethod(HttpMethod.Post)
            allowHeader(HttpHeaders.AccessControlAllowHeaders)
            allowHeader(HttpHeaders.ContentType)
            allowHeader(HttpHeaders.AccessControlAllowOrigin)
            allowHeader(HttpHeaders.Cookie)
            allowCredentials = true
            maxAgeInSeconds = 1
            anyHost()
        }

        configureRouting()

    }.start(wait = true)
}

val eventModels = arrayOf(
    EventModel("Evernt 1", "Warsaw"),
    EventModel("Evernt 2", "NY"),
    EventModel("Evernt 3", "Colorado"),
    EventModel("Evernt 4", "Berlin"),
)

fun Application.configureRouting() {
    routing {
        get("/") {
            call.respond(eventModels)
        }
    }
}

