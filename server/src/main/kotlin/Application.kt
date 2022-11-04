
import io.ktor.serialization.kotlinx.json.*
import io.ktor.server.application.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import io.ktor.server.plugins.contentnegotiation.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import kotlinx.serialization.json.Json
import models.Event

fun main() {
    embeddedServer(Netty, port = 8080, host = "0.0.0.0") {
        install(ContentNegotiation) {
            json(Json {
                prettyPrint = true
                isLenient = true
            })
        }

        configureRouting()

    }.start(wait = true)
}

val events = arrayOf(
    Event("Evernt 1", "Warsaw"),
    Event("Evernt 2", "NY"),
    Event("Evernt 3", "Colorado"),
    Event("Evernt 4", "Berlin"),
)

fun Application.configureRouting() {
    routing {
        get("/") {
            call.respond(events)
        }
    }
}

