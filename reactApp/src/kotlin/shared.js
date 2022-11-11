(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_io_ktor_ktor_client_content_negotiation, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json, kotlin_io_ktor_ktor_serialization_kotlinx_json, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_io_ktor_ktor_client_core) {
    'use strict';
    //region block: imports
    var imul = Math.imul;
    var objectMeta = kotlin_kotlin.$_$.ca;
    var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
    var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
    var Unit_getInstance = kotlin_kotlin.$_$.z4;
    var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
    var THROW_CCE = kotlin_kotlin.$_$.oc;
    var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
    var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
    var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
    var getStringHashCode = kotlin_kotlin.$_$.i9;
    var classMeta = kotlin_kotlin.$_$.c9;
    var Plugin_getInstance = kotlin_io_ktor_ktor_client_content_negotiation.$_$.a;
    var Json$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
    var json$default = kotlin_io_ktor_ktor_serialization_kotlinx_json.$_$.a;
    var CoroutineImpl = kotlin_kotlin.$_$.p8;
    var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f1;
    var isInterface = kotlin_kotlin.$_$.t9;
    var listOf = kotlin_kotlin.$_$.z6;
    var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.a8;
    var emptyList = kotlin_kotlin.$_$.i6;
    var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v;
    var HttpClient = kotlin_io_ktor_ktor_client_core.$_$.h;
    var Job$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
    var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
    var launch$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
    var SuspendFunction1 = kotlin_kotlin.$_$.q8;
    var Js_getInstance = kotlin_io_ktor_ktor_client_core.$_$.a;
    var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
    var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
    var List = kotlin_kotlin.$_$.i5;
    var copyToArray = kotlin_kotlin.$_$.g6;
    var throwKotlinNothingValueException = kotlin_kotlin.$_$.nd;
    //endregion
    //region block: pre-declaration
    EventsViewModel$onEnter$slambda.prototype = Object.create(CoroutineImpl.prototype);
    EventsViewModel$onEnter$slambda.prototype.constructor = EventsViewModel$onEnter$slambda;
    observeEvents$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
    observeEvents$slambda$slambda.prototype.constructor = observeEvents$slambda$slambda;
    observeEvents$slambda.prototype = Object.create(CoroutineImpl.prototype);
    observeEvents$slambda.prototype.constructor = observeEvents$slambda;

    //endregion
    function Companion() {
        Companion_instance = this;
    }

    Companion.prototype.serializer = function () {
        return $serializer_getInstance();
    };
    Companion.$metadata$ = objectMeta('Companion');
    var Companion_instance;

    function Companion_getInstance() {
        if (Companion_instance == null)
            new Companion();
        return Companion_instance;
    }

    function $serializer() {
        $serializer_instance = this;
        var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('events.EventModel', this, 2);
        tmp0_serialDesc.u2i('name', false);
        tmp0_serialDesc.u2i('address', false);
        this.k41_1 = tmp0_serialDesc;
    }

    $serializer.prototype.z28 = function () {
        return this.k41_1;
    };
    $serializer.prototype.w2i = function () {
        var tmp$ret$2;
        // Inline function 'kotlin.arrayOf' call
        var tmp0_arrayOf = [StringSerializer_getInstance(), StringSerializer_getInstance()];
        var tmp$ret$1;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0_arrayOf;
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        return tmp$ret$2;
    };
    $serializer.prototype.b29 = function (decoder) {
        var tmp0_desc = this.k41_1;
        var tmp1_flag = true;
        var tmp2_index = 0;
        var tmp3_bitMask0 = 0;
        var tmp4_local0 = null;
        var tmp5_local1 = null;
        var tmp6_input = decoder.a2c(tmp0_desc);
        if (tmp6_input.o2c()) {
            tmp4_local0 = tmp6_input.k2c(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            tmp5_local1 = tmp6_input.k2c(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
        } else
            while (tmp1_flag) {
                tmp2_index = tmp6_input.p2c(tmp0_desc);
                switch (tmp2_index) {
                    case -1:
                        tmp1_flag = false;
                        break;
                    case 0:
                        tmp4_local0 = tmp6_input.k2c(tmp0_desc, 0);
                        tmp3_bitMask0 = tmp3_bitMask0 | 1;
                        break;
                    case 1:
                        tmp5_local1 = tmp6_input.k2c(tmp0_desc, 1);
                        tmp3_bitMask0 = tmp3_bitMask0 | 2;
                        break;
                    default:
                        throw UnknownFieldException_init_$Create$(tmp2_index);
                }
            }
        tmp6_input.b2c(tmp0_desc);
        return EventModel_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
    };
    $serializer.prototype.l41 = function (encoder, value) {
        var tmp0_desc = this.k41_1;
        var tmp1_output = encoder.a2c(tmp0_desc);
        tmp1_output.m2d(tmp0_desc, 0, value.m41_1);
        tmp1_output.m2d(tmp0_desc, 1, value.n41_1);
        tmp1_output.b2c(tmp0_desc);
    };
    $serializer.prototype.a29 = function (encoder, value) {
        return this.l41(encoder, value instanceof EventModel ? value : THROW_CCE());
    };
    $serializer.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
    var $serializer_instance;

    function $serializer_getInstance() {
        if ($serializer_instance == null)
            new $serializer();
        return $serializer_instance;
    }

    function EventModel_init_$Init$(seen1, name, address, serializationConstructorMarker, $this) {
        if (!(3 === (3 & seen1))) {
            throwMissingFieldException(seen1, 3, $serializer_getInstance().k41_1);
        }
        $this.m41_1 = name;
        $this.n41_1 = address;
        return $this;
    }

    function EventModel_init_$Create$(seen1, name, address, serializationConstructorMarker) {
        return EventModel_init_$Init$(seen1, name, address, serializationConstructorMarker, Object.create(EventModel.prototype));
    }

    function EventModel(name, address) {
        Companion_getInstance();
        this.m41_1 = name;
        this.n41_1 = address;
    }

    EventModel.prototype.q1y = function () {
        return this.m41_1;
    };
    EventModel.prototype.o41 = function () {
        return this.n41_1;
    };
    EventModel.prototype.component1 = function () {
        return this.m41_1;
    };
    EventModel.prototype.component2 = function () {
        return this.n41_1;
    };
    EventModel.prototype.copy = function (name, address) {
        return this.p41(name === void 1 ? this.m41_1 : name, address === void 1 ? this.n41_1 : address);
    };
    EventModel.prototype.p41 = function (name, address) {
        return new EventModel(name, address);
    };
    EventModel.prototype.q41 = function (name, address, $mask0, $handler) {
        if (!(($mask0 & 1) === 0))
            name = this.m41_1;
        if (!(($mask0 & 2) === 0))
            address = this.n41_1;
        return this.p41(name, address);
    };
    EventModel.prototype.toString = function () {
        return 'EventModel(name=' + this.m41_1 + ', address=' + this.n41_1 + ')';
    };
    EventModel.prototype.hashCode = function () {
        var result = getStringHashCode(this.m41_1);
        result = imul(result, 31) + getStringHashCode(this.n41_1) | 0;
        return result;
    };
    EventModel.prototype.equals = function (other) {
        if (this === other)
            return true;
        if (!(other instanceof EventModel))
            return false;
        var tmp0_other_with_cast = other instanceof EventModel ? other : THROW_CCE();
        if (!(this.m41_1 === tmp0_other_with_cast.m41_1))
            return false;
        if (!(this.n41_1 === tmp0_other_with_cast.n41_1))
            return false;
        return true;
    };
    EventModel.$metadata$ = classMeta('EventModel', undefined, undefined, {0: $serializer_getInstance});
    Object.defineProperty(EventModel.prototype, 'name', {
        configurable: true,
        get: EventModel.prototype.q1y
    });
    Object.defineProperty(EventModel.prototype, 'address', {
        configurable: true,
        get: EventModel.prototype.o41
    });

    function EventsRepo(client) {
        this.r41_1 = client;
    }

    EventsRepo.$metadata$ = classMeta('EventsRepo');

    function EventsViewModel$client$lambda($this$HttpClient) {
        var tmp = Plugin_getInstance();
        $this$HttpClient.q36(tmp, EventsViewModel$client$lambda$lambda);
        return Unit_getInstance();
    }

    function EventsViewModel$client$lambda$lambda($this$install) {
        var tmp = Json$default(null, EventsViewModel$client$lambda$lambda$lambda, 1, null);
        json$default($this$install, tmp, null, 2, null);
        return Unit_getInstance();
    }

    function EventsViewModel$client$lambda$lambda$lambda($this$Json) {
        $this$Json.o2u_1 = false;
        $this$Json.q2u_1 = true;
        $this$Json.l2u_1 = true;
        return Unit_getInstance();
    }

    function EventsViewModel$onEnter$slambda(this$0, resultContinuation) {
        this.a42_1 = this$0;
        CoroutineImpl.call(this, resultContinuation);
    }

    EventsViewModel$onEnter$slambda.prototype.r1e = function ($this$launch, $cont) {
        var tmp = this.s1e($this$launch, $cont);
        tmp.uh_1 = Unit_getInstance();
        tmp.vh_1 = null;
        return tmp.bi();
    };
    EventsViewModel$onEnter$slambda.prototype.ci = function (p1, $cont) {
        return this.r1e((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
    };
    EventsViewModel$onEnter$slambda.prototype.bi = function () {
        var suspendResult = this.uh_1;
        $sm: do
            try {
                var tmp = this.sh_1;
                switch (tmp) {
                    case 0:
                        this.th_1 = 2;
                        this.sh_1 = 1;
                        suspendResult = this.a42_1.c42_1.lz(listOf([new EventModel('qwe', 'aklasd'), new EventModel('qwe2', 'aklwfe222222asd'), new EventModel('qwe3', 'akla1123sd')]), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 1:
                        return Unit_getInstance();
                    case 2:
                        throw this.vh_1;
                }
            } catch ($p) {
                if (this.th_1 === 2) {
                    throw $p;
                } else {
                    this.sh_1 = this.th_1;
                    this.vh_1 = $p;
                }
            }
        while (true);
    };
    EventsViewModel$onEnter$slambda.prototype.s1e = function ($this$launch, completion) {
        var i = new EventsViewModel$onEnter$slambda(this.a42_1, completion);
        i.b42_1 = $this$launch;
        return i;
    };
    EventsViewModel$onEnter$slambda.$metadata$ = classMeta('EventsViewModel$onEnter$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);

    function EventsViewModel$onEnter$slambda_0(this$0, resultContinuation) {
        var i = new EventsViewModel$onEnter$slambda(this$0, resultContinuation);
        var l = function ($this$launch, $cont) {
            return i.r1e($this$launch, $cont);
        };
        l.$arity = 1;
        return l;
    }

    function EventsViewModel() {
        var tmp = this;
        var tmp$ret$0;
        // Inline function 'kotlin.collections.listOf' call
        tmp$ret$0 = emptyList();
        tmp.c42_1 = MutableStateFlow(tmp$ret$0);
        var tmp_0 = this;
        var tmp_1 = ClientSpecific_getInstance().g42_1;
        tmp_0.d42_1 = HttpClient(tmp_1, EventsViewModel$client$lambda);
        this.e42_1 = new EventsRepo(this.d42_1);
        var tmp_2 = this;
        tmp_2.f42_1 = CoroutineScope_0(Job$default(null, 1, null));
    }

    EventsViewModel.prototype.h42 = function () {
        return this.c42_1;
    };
    EventsViewModel.prototype.i42 = function () {
        return this.d42_1;
    };
    EventsViewModel.prototype.j42 = function () {
        return this.e42_1;
    };
    EventsViewModel.prototype.k42 = function () {
        return this.f42_1;
    };
    EventsViewModel.prototype.onEnter = function () {
        var tmp = CustomDispatchers_getInstance().l42_1;
        launch$default(this.f42_1, tmp, null, EventsViewModel$onEnter$slambda_0(this, null), 2, null);
    };
    EventsViewModel.$metadata$ = classMeta('EventsViewModel');
    Object.defineProperty(EventsViewModel.prototype, 'events', {
        configurable: true,
        get: EventsViewModel.prototype.h42
    });
    Object.defineProperty(EventsViewModel.prototype, 'client', {
        configurable: true,
        get: EventsViewModel.prototype.i42
    });
    Object.defineProperty(EventsViewModel.prototype, 'repo', {
        configurable: true,
        get: EventsViewModel.prototype.j42
    });
    Object.defineProperty(EventsViewModel.prototype, 'scope', {
        configurable: true,
        get: EventsViewModel.prototype.k42
    });

    function ClientSpecific() {
        ClientSpecific_instance = this;
        this.g42_1 = Js_getInstance();
    }

    ClientSpecific.$metadata$ = objectMeta('ClientSpecific');
    var ClientSpecific_instance;

    function ClientSpecific_getInstance() {
        if (ClientSpecific_instance == null)
            new ClientSpecific();
        return ClientSpecific_instance;
    }

    function CustomDispatchers() {
        CustomDispatchers_instance = this;
        this.l42_1 = Dispatchers_getInstance().nu_1;
        this.m42_1 = Dispatchers_getInstance().nu_1;
        this.n42_1 = Dispatchers_getInstance().ru();
    }

    CustomDispatchers.$metadata$ = objectMeta('CustomDispatchers');
    var CustomDispatchers_instance;

    function CustomDispatchers_getInstance() {
        if (CustomDispatchers_instance == null)
            new CustomDispatchers();
        return CustomDispatchers_instance;
    }

    function Platform() {
        Platform_instance = this;
        this.o42_1 = 'JS';
    }

    Platform.prototype.p42 = function () {
        return this.o42_1;
    };
    Platform.$metadata$ = objectMeta('Platform');
    Object.defineProperty(Platform.prototype, 'platformName', {
        configurable: true,
        get: Platform.prototype.p42
    });
    var Platform_instance;

    function Platform_getInstance() {
        if (Platform_instance == null)
            new Platform();
        return Platform_instance;
    }

    function observeEvents(_this__u8e3s4, callback) {
        return launch$default(_this__u8e3s4.f42_1, null, null, observeEvents$slambda_0(_this__u8e3s4, callback, null), 3, null);
    }

    function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
        this.q42_1 = function_0;
    }

    sam$kotlinx_coroutines_flow_FlowCollector$0.prototype.lz = function (value, $cont) {
        return this.q42_1(value, $cont);
    };
    sam$kotlinx_coroutines_flow_FlowCollector$0.$metadata$ = classMeta('sam$kotlinx_coroutines_flow_FlowCollector$0', [FlowCollector]);

    function observeEvents$slambda$slambda($callback, resultContinuation) {
        this.z42_1 = $callback;
        CoroutineImpl.call(this, resultContinuation);
    }

    observeEvents$slambda$slambda.prototype.b43 = function (it, $cont) {
        var tmp = this.c43(it, $cont);
        tmp.uh_1 = Unit_getInstance();
        tmp.vh_1 = null;
        return tmp.bi();
    };
    observeEvents$slambda$slambda.prototype.ci = function (p1, $cont) {
        return this.b43((!(p1 == null) ? isInterface(p1, List) : false) ? p1 : THROW_CCE(), $cont);
    };
    observeEvents$slambda$slambda.prototype.bi = function () {
        var suspendResult = this.uh_1;
        $sm: do
            try {
                var tmp = this.sh_1;
                if (tmp === 0) {
                    this.th_1 = 1;
                    this.z42_1(copyToArray(this.a43_1));
                    return Unit_getInstance();
                } else if (tmp === 1) {
                    throw this.vh_1;
                }
            } catch ($p) {
                throw $p;
            }
        while (true);
    };
    observeEvents$slambda$slambda.prototype.c43 = function (it, completion) {
        var i = new observeEvents$slambda$slambda(this.z42_1, completion);
        i.a43_1 = it;
        return i;
    };
    observeEvents$slambda$slambda.$metadata$ = classMeta('observeEvents$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);

    function observeEvents$slambda$slambda_0($callback, resultContinuation) {
        var i = new observeEvents$slambda$slambda($callback, resultContinuation);
        var l = function (it, $cont) {
            return i.b43(it, $cont);
        };
        l.$arity = 1;
        return l;
    }

    function observeEvents$slambda($this_observeEvents, $callback, resultContinuation) {
        this.l43_1 = $this_observeEvents;
        this.m43_1 = $callback;
        CoroutineImpl.call(this, resultContinuation);
    }

    observeEvents$slambda.prototype.r1e = function ($this$launch, $cont) {
        var tmp = this.s1e($this$launch, $cont);
        tmp.uh_1 = Unit_getInstance();
        tmp.vh_1 = null;
        return tmp.bi();
    };
    observeEvents$slambda.prototype.ci = function (p1, $cont) {
        return this.r1e((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
    };
    observeEvents$slambda.prototype.bi = function () {
        var suspendResult = this.uh_1;
        $sm: do
            try {
                var tmp = this.sh_1;
                switch (tmp) {
                    case 0:
                        this.th_1 = 2;
                        this.sh_1 = 1;
                        var tmp_0 = observeEvents$slambda$slambda_0(this.m43_1, null);
                        suspendResult = this.l43_1.c42_1.f10(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 1:
                        throwKotlinNothingValueException();
                        break;
                    case 2:
                        throw this.vh_1;
                }
            } catch ($p) {
                if (this.th_1 === 2) {
                    throw $p;
                } else {
                    this.sh_1 = this.th_1;
                    this.vh_1 = $p;
                }
            }
        while (true);
    };
    observeEvents$slambda.prototype.s1e = function ($this$launch, completion) {
        var i = new observeEvents$slambda(this.l43_1, this.m43_1, completion);
        i.n43_1 = $this$launch;
        return i;
    };
    observeEvents$slambda.$metadata$ = classMeta('observeEvents$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);

    function observeEvents$slambda_0($this_observeEvents, $callback, resultContinuation) {
        var i = new observeEvents$slambda($this_observeEvents, $callback, resultContinuation);
        var l = function ($this$launch, $cont) {
            return i.r1e($this$launch, $cont);
        };
        l.$arity = 1;
        return l;
    }

    //region block: post-declaration
    $serializer.prototype.x2i = typeParametersSerializers;
    //endregion
    //region block: exports
    function $jsExportAll$(_) {
        var $events = _.events || (_.events = {});
        $events.EventModel = EventModel;
        $events.EventModel.EventModel_init_$Create$ = EventModel_init_$Create$;
        Object.defineProperty($events.EventModel, 'Companion', {
            configurable: true,
            get: Companion_getInstance
        });
        Object.defineProperty($events.EventModel, '$serializer', {
            configurable: true,
            get: $serializer_getInstance
        });
        var $events = _.events || (_.events = {});
        $events.EventsViewModel = EventsViewModel;
        Object.defineProperty(_, 'Platform', {
            configurable: true,
            get: Platform_getInstance
        });
        var $events = _.events || (_.events = {});
        $events.observeEvents = observeEvents;
    }

    $jsExportAll$(_);
    //endregion
    return _;
}(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'), require('./ktor-ktor-client-content-negotiation-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-json-js-ir.js'), require('./ktor-ktor-serialization-kotlinx-json-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./ktor-ktor-client-core-js-ir.js')));

//# sourceMappingURL=shared.js.map
