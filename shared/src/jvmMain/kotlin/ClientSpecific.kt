import io.ktor.client.engine.*
import io.ktor.client.engine.cio.*

actual object ClientSpecific {
    actual val ktorEngine: HttpClientEngineFactory<*> = CIO
}