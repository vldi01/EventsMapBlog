plugins {
    kotlin("js")
    id("org.jetbrains.compose") version Versions.compose
}

group = "com.diachuk"
version = "1.0"

dependencies {
    implementation(compose.web.core)
    implementation(compose.runtime)

    implementation(Kotlin.coroutinesCore)

    implementation(Koin.core)

    implementation(project(":shared"))
}

kotlin {
    js(IR) {
        browser()
        binaries.executable()
    }
}

rootProject.extensions.configure<org.jetbrains.kotlin.gradle.targets.js.nodejs.NodeJsRootExtension> {
    versions.webpackCli.version = "4.10.0"
}