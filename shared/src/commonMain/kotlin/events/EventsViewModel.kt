package events

import CustomDispatchers
import base.BaseViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch

class EventsViewModel(private val repo: EventsRepo) : BaseViewModel() {
    private val _events = MutableStateFlow(listOf<EventModel>())
    val events = _events.asStateFlow()

    override fun onEnter() {
        viewModelScope.launch(CustomDispatchers.io) {
            _events.emit(repo.getEvents())
        }

    }
}