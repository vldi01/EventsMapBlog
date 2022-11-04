package models

import kotlinx.serialization.Serializable

@Serializable
data class Event(
    val name: String,
    val address: String,
)
