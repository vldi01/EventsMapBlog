import kotlinx.coroutines.CoroutineDispatcher

expect object CustomDispatchers {
    val io: CoroutineDispatcher
    val default: CoroutineDispatcher
    val main: CoroutineDispatcher
}