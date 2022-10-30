plugins {
    kotlin("multiplatform")
}

kotlin {
    js(IR) {
        moduleName = "shared"
        useCommonJs()
        browser()

        binaries.library()
    }

    sourceSets {
        val commonMain by getting
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