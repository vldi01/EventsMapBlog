(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  function createMetadata(kind, name, interfaces, associatedObjectKey, associatedObjects, suspendArity, fastPrototype) {
    return {kind: kind, simpleName: name, interfaceId: kind === 'interface' ? -1 : undefined, interfaces: interfaces || [], associatedObjectKey: associatedObjectKey, associatedObjects: associatedObjects, suspendArity: suspendArity, fastPrototype: fastPrototype, $kClass$: undefined, interfacesCache: {isComplete: fastPrototype === undefined && (interfaces === undefined || interfaces.length === 0), implementInterfaceMemo: {}}};
  }
  function objectMeta(name, interfaces, associatedObjectKey, associatedObjects, suspendArity, fastPrototype) {
    return createMetadata('object', name, interfaces, associatedObjectKey, associatedObjects, suspendArity, fastPrototype);
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = objectMeta;
  //endregion
  return _;
}(module.exports));

//# sourceMappingURL=kotlin-kotlin-stdlib-js-ir.js.map
