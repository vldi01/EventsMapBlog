plugins {
    application
    kotlin("jvm")
}

application {
    mainClass.set("ApplicationKt")
}

repositories {
    mavenCentral()
}

dependencies {
    implementation(Kotlin.coroutinesCore)
    implementation(Kotlin.serialization)

    with(KtorServer) {
        implementation(core)
        implementation(contentNegotiation)
        implementation(netty)
        implementation(cors)
        implementation(serialization)
    }

    implementation(project(":shared"))
    implementation("ch.qos.logback:logback-classic:${Versions.logback}")

}

tasks {
    withType<org.jetbrains.kotlin.gradle.tasks.KotlinCompile> {
        kotlinOptions {
            jvmTarget = "16"
        }
    }
}