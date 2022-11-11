type Nullable<T> = T | null | undefined
declare const __doNotImplementIt: unique symbol
type __doNotImplementIt = typeof __doNotImplementIt
export namespace events {
    class EventModel {
        constructor(name: string, address: string);

        get name(): string;

        get address(): string;

        component1(): string;

        component2(): string;

        copy(name?: string, address?: string): events.EventModel;

        toString(): string;

        hashCode(): number;

        equals(other: Nullable<any>): boolean;

        static EventModel_init_$Create$(seen1: number, name: Nullable<string>, address: Nullable<string>, serializationConstructorMarker: any/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): events.EventModel;

        static get Companion(): {
            serializer(): any/* kotlinx.serialization.KSerializer<events.EventModel> */;
        };

        static get $serializer(): {} & any/* kotlinx.serialization.internal.GeneratedSerializer<events.EventModel> */;
    }
}
export namespace events {
    class EventsViewModel {
        constructor();

        get events(): any/* kotlinx.coroutines.flow.MutableStateFlow<kotlin.collections.List<events.EventModel>> */;

        get client(): any/* io.ktor.client.HttpClient */;

        get repo(): any/* events.EventsRepo */;

        get scope(): any/* kotlinx.coroutines.CoroutineScope */;

        onEnter(): void;
    }
}
export const Platform: {
    get platformName(): string;
};
export namespace events {
    function observeEvents(_this_: events.EventsViewModel, callback: (p0: Array<events.EventModel>) => void): any/* kotlinx.coroutines.Job */;
}