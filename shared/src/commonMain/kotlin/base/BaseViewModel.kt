package base

import CustomDispatchers
import kotlinx.coroutines.CancellationException
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Job
import kotlinx.coroutines.cancelChildren

open class BaseViewModel {
    protected val viewModelScope = CoroutineScope(CustomDispatchers.default + Job())

    open fun onEnter() {
    }

    open fun onClose() {
        viewModelScope.coroutineContext.cancelChildren(CancellationException("viewClosed"))
    }
}