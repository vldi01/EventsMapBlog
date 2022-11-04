rootProject.name = "EventsMapBlog"

pluginManagement {
    repositories {
        mavenLocal()
        mavenCentral()
        gradlePluginPortal()
        google()
    }
}

include(":shared")
include(":server")
