import io.ktor.client.engine.*
import io.ktor.client.engine.js.*

actual object ClientSpecific {
    actual val ktorEngine: HttpClientEngineFactory<*> = Js
}