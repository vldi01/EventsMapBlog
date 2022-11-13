import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import di.KoinHelper
import di.sharedModule
import events.EventsViewModel
import org.jetbrains.compose.web.css.Color
import org.jetbrains.compose.web.css.backgroundColor
import org.jetbrains.compose.web.css.margin
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.dom.H1
import org.jetbrains.compose.web.dom.H3
import org.jetbrains.compose.web.dom.Text
import org.jetbrains.compose.web.renderComposable
import org.koin.core.context.startKoin

fun main() {
    startKoin {
        modules(sharedModule)
    }

    renderComposable(rootElementId = "root") {
        EventsList()
    }
}

@Composable
fun EventsList(vm: EventsViewModel = KoinHelper.eventsViewModel) {
    DisposableEffect(Unit) {
        vm.onEnter()
        onDispose {
            vm.onClose()
        }
    }

    val events by vm.events.collectAsState()
    events.forEach { event ->
        Div({
            style {
                margin(10.px)
                backgroundColor(Color.yellow)
            }
        }) {
            H1 {
                Text(event.name)
            }
            H3 {
                Text(event.address)
            }
        }
    }
}