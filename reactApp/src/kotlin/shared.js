(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var objectMeta = kotlin_kotlin.$_$.a;
  //endregion
  //region block: pre-declaration
  //endregion
  function Platform() {
    Platform_instance = this;
    this.a_1 = 'JS';
  }
  Platform.prototype.b = function () {
    return this.a_1;
  };
  Platform.$metadata$ = objectMeta('Platform');
  Object.defineProperty(Platform.prototype, 'platformName', {
    configurable: true,
    get: Platform.prototype.b
  });
  var Platform_instance;
  function Platform_getInstance() {
    if (Platform_instance == null)
      new Platform();
    return Platform_instance;
  }
  //region block: exports
  function $jsExportAll$(_) {
    Object.defineProperty(_, 'Platform', {
      configurable: true,
      get: Platform_getInstance
    });
  }
  $jsExportAll$(_);
  //endregion
  return _;
}(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js')));

//# sourceMappingURL=shared.js.map
