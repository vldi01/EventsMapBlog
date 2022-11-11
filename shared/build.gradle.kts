plugins {
    kotlin("multiplatform")
    kotlin("plugin.serialization")
}

kotlin {
    js(IR) {
        moduleName = "shared"
        useCommonJs()
        browser()

        binaries.library()
    }
    jvm()

    sourceSets {
        val commonMain by getting {
            dependencies {
                implementation(Kotlin.serialization)

                with(KtorClient) {
                    implementation(core)
                    implementation(serialization)
                    implementation(contentNegotiation)
                }
            }
        }
        val jvmMain by getting {
            dependencies {
                implementation(KtorClient.cio)
            }
        }
        val jsMain by getting {
            dependencies {
                implementation(KtorClient.js)
            }
        }
    }
}

tasks.withType<org.jetbrains.kotlin.gradle.tasks.KotlinCompile> {
    kotlinOptions.jvmTarget = "16"
}

tasks.register("buildJs") {
    dependsOn("jsBrowserProductionLibraryDistribution")

    doLast {
        val from = File("$buildDir/productionLibrary")
        val into = File("$projectDir/../reactApp/src/kotlin")
        if (into.exists()) into.deleteRecursively()

        from.copyRecursively(into, true)
    }
}