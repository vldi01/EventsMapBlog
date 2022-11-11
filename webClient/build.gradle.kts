plugins {
    kotlin("js")
    id("org.jetbrains.compose") version Versions.compose
}

group = "com.diachuk"
version = "1.0"

dependencies {
    implementation(compose.web.core)
    implementation(compose.runtime)

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