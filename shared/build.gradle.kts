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
            }
        }
        val jvmMain by getting
        val jsMain by getting
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