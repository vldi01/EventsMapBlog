
object Versions {
    const val kotlinVersion = "1.7.20"
    const val kotlinCoroutines = "1.6.4"
    const val kotlinSerialization = "1.4.1"

    const val ktor = "2.1.0"
    const val logback = "1.4.4"

    const val compose = "1.3.0-alpha01-dev849"

    const val koin = "3.2.2"
}

object Kotlin {
    const val coroutinesCore = "org.jetbrains.kotlinx:kotlinx-coroutines-core:${Versions.kotlinCoroutines}"
    const val serialization = "org.jetbrains.kotlinx:kotlinx-serialization-json:${Versions.kotlinSerialization}"
}

object Koin {
    const val core = "io.insert-koin:koin-core:${Versions.koin}"
    const val ktor = "io.insert-koin:koin-ktor:${Versions.koin}"
    const val test = "io.insert-koin:koin-test:${Versions.koin}"
    const val android = "io.insert-koin:koin-android:${Versions.koin}"
    const val compose = "io.insert-koin:koin-androidx-compose:${Versions.koin}"
}

object KtorServer {
    const val core = "io.ktor:ktor-server-core-jvm:${Versions.ktor}"
    const val contentNegotiation = "io.ktor:ktor-server-content-negotiation-jvm:${Versions.ktor}"
    const val netty = "io.ktor:ktor-server-netty-jvm:${Versions.ktor}"
    const val cors = "io.ktor:ktor-server-cors:${Versions.ktor}"
    const val serialization = "io.ktor:ktor-serialization-kotlinx-json:${Versions.ktor}"
}

object KtorClient {
    const val core = "io.ktor:ktor-client-core:${Versions.ktor}"
    const val serialization = "io.ktor:ktor-serialization-kotlinx-json:${Versions.ktor}"
    const val contentNegotiation = "io.ktor:ktor-client-content-negotiation:${Versions.ktor}"
    const val cio = "io.ktor:ktor-client-cio:${Versions.ktor}"
    const val js = "io.ktor:ktor-client-js:${Versions.ktor}"
}
