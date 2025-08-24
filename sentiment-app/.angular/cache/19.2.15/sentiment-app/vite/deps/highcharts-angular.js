import "./chunk-UUX4HQZE.js";
import {
  isPlatformServer
} from "./chunk-BO3V2222.js";
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  Directive,
  ElementRef,
  Injectable,
  InjectionToken,
  PLATFORM_ID,
  afterRenderEffect,
  computed,
  effect,
  inject,
  input,
  makeEnvironmentProviders,
  model,
  output,
  setClassMetadata,
  signal,
  untracked,
  ɵɵHostDirectivesFeature,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable
} from "./chunk-AOPXV6X7.js";
import {
  __async
} from "./chunk-3OV72XIM.js";

// node_modules/highcharts-angular/fesm2022/highcharts-angular.mjs
var HIGHCHARTS_LOADER = new InjectionToken("HIGHCHARTS_LOADER");
var HIGHCHARTS_ROOT_MODULES = new InjectionToken("HIGHCHARTS_ROOT_MODULES");
var HIGHCHARTS_OPTIONS = new InjectionToken("HIGHCHARTS_OPTIONS");
var HIGHCHARTS_CONFIG = new InjectionToken("HIGHCHARTS_CONFIG");
var HighchartsChartService = class _HighchartsChartService {
  constructor() {
    this.writableHighcharts = signal(null);
    this.highcharts = this.writableHighcharts.asReadonly();
    this.loader = inject(HIGHCHARTS_LOADER);
    this.globalOptions = inject(HIGHCHARTS_OPTIONS, {
      optional: true
    });
    this.globalModules = inject(HIGHCHARTS_ROOT_MODULES, {
      optional: true
    });
  }
  loadHighchartsWithModules(partialConfig) {
    return __async(this, null, function* () {
      const highcharts = yield this.loader();
      yield Promise.all([...this.globalModules?.() ?? [], ...partialConfig?.modules?.() ?? []]);
      return highcharts;
    });
  }
  load(partialConfig) {
    this.loadHighchartsWithModules(partialConfig).then((highcharts) => {
      if (this.globalOptions) {
        highcharts.setOptions(this.globalOptions);
      }
      setTimeout(() => this.writableHighcharts.set(highcharts), 100);
    });
  }
  static {
    this.ɵfac = function HighchartsChartService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HighchartsChartService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _HighchartsChartService,
      factory: _HighchartsChartService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HighchartsChartService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var HighchartsChartDirective = class _HighchartsChartDirective {
  keepChartUpToDate() {
    effect(() => {
      this.update();
      this.chart()?.update(this.options(), true, this.oneToOne());
    });
  }
  destroyChart() {
    const chart = this.chart();
    if (chart) {
      chart.destroy();
    }
  }
  constructor() {
    this.constructorType = input("chart");
    this.oneToOne = input(false);
    this.options = input.required();
    this.update = model();
    this.chartInstance = output();
    this.destroyRef = inject(DestroyRef);
    this.el = inject(ElementRef);
    this.platformId = inject(PLATFORM_ID);
    this.relativeConfig = inject(HIGHCHARTS_CONFIG, {
      optional: true
    });
    this.highchartsChartService = inject(HighchartsChartService);
    this.constructorChart = computed(() => {
      const highCharts = this.highchartsChartService.highcharts();
      if (highCharts) {
        return highCharts[this.constructorType()];
      }
      return void 0;
    });
    this.chart = computed(() => {
      return this.constructorChart()?.(
        this.el.nativeElement,
        // Use untracked, so we don't re-create new chart everytime options change
        untracked(() => this.options()),
        // Use Highcharts callback to emit chart instance, so it is available as early
        // as possible. So that Angular is already aware of the instance if Highcharts raise
        // events during the initialization that happens before coming back to Angular
        (createdChart) => this.chartInstance.emit(createdChart)
      );
    });
    if (this.platformId && isPlatformServer(this.platformId)) {
      return;
    }
    this.highchartsChartService.load(this.relativeConfig);
    this.destroyRef.onDestroy(() => this.destroyChart());
    afterRenderEffect(() => {
      if (this.update()) {
        this.update.set(false);
      }
    });
    this.keepChartUpToDate();
  }
  static {
    this.ɵfac = function HighchartsChartDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HighchartsChartDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _HighchartsChartDirective,
      selectors: [["", "highchartsChart", ""]],
      inputs: {
        constructorType: [1, "constructorType"],
        oneToOne: [1, "oneToOne"],
        options: [1, "options"],
        update: [1, "update"]
      },
      outputs: {
        update: "updateChange",
        chartInstance: "chartInstance"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HighchartsChartDirective, [{
    type: Directive,
    args: [{
      selector: "[highchartsChart]"
    }]
  }], () => [], null);
})();
var HighchartsChartComponent = class _HighchartsChartComponent {
  static {
    this.ɵfac = function HighchartsChartComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HighchartsChartComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _HighchartsChartComponent,
      selectors: [["highcharts-chart"]],
      features: [ɵɵHostDirectivesFeature([{
        directive: HighchartsChartDirective,
        inputs: ["constructorType", "constructorType", "oneToOne", "oneToOne", "options", "options", "update", "update"],
        outputs: ["chartInstance", "chartInstance", "updateChange", "updateChange"]
      }])],
      decls: 0,
      vars: 0,
      template: function HighchartsChartComponent_Template(rf, ctx) {
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HighchartsChartComponent, [{
    type: Component,
    args: [{
      selector: "highcharts-chart",
      template: "",
      hostDirectives: [{
        directive: HighchartsChartDirective,
        inputs: ["constructorType", "oneToOne", "options", "update"],
        outputs: ["chartInstance", "updateChange"]
      }],
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
var emptyModuleFactoryFunction = () => [];
var defaultInstanceFactoryFunction = () => import("./highcharts-W5AHH2AE.js").then((m) => m.default);
function provideHighchartsInstance(instance) {
  return makeEnvironmentProviders([{
    provide: HIGHCHARTS_LOADER,
    useValue: instance ?? defaultInstanceFactoryFunction
  }]);
}
function provideHighchartsOptions(options) {
  return makeEnvironmentProviders([{
    provide: HIGHCHARTS_OPTIONS,
    useValue: options
  }]);
}
function provideHighchartsRootModules(modules) {
  return makeEnvironmentProviders([{
    provide: HIGHCHARTS_ROOT_MODULES,
    useValue: modules
  }]);
}
function providePartialHighcharts(config) {
  return {
    provide: HIGHCHARTS_CONFIG,
    useValue: config
  };
}
function provideHighcharts(config = {}) {
  const providers = [provideHighchartsInstance(config.instance), provideHighchartsRootModules(config.modules ?? emptyModuleFactoryFunction)];
  if (config.options) {
    providers.push(provideHighchartsOptions(config.options));
  }
  return makeEnvironmentProviders(providers);
}
export {
  HighchartsChartComponent,
  HighchartsChartDirective,
  provideHighcharts,
  providePartialHighcharts
};
//# sourceMappingURL=highcharts-angular.js.map
