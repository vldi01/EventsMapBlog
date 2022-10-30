buildscript {
    repositories {
        mavenLocal()
        mavenCentral()
        google()
    }

    dependencies {
        classpath("org.jetbrains.kotlin:kotlin-gradle-plugin:1.7.20")
        classpath("org.jetbrains.kotlin:kotlin-allopen:1.7.20")
    }
}

allprojects {
    repositories {
        mavenLocal()
        mavenCentral()
        gradlePluginPortal()
        google()
    }
}