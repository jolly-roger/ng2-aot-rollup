/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../../app/app.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '@angular/forms/src/directives';
import * as import6 from '@angular/forms/src/form_providers';
import * as import7 from '@angular/http/src/http_module';
import * as import8 from '@angular/common/src/localization';
import * as import9 from '@angular/core/src/application_init';
import * as import10 from '@angular/core/src/testability/testability';
import * as import11 from '@angular/core/src/application_ref';
import * as import12 from '@angular/core/src/linker/compiler';
import * as import13 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import14 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import15 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import16 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import17 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import18 from '@angular/core/src/animation/animation_queue';
import * as import19 from '@angular/core/src/linker/view_utils';
import * as import20 from '@angular/platform-browser/src/browser/title';
import * as import21 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import22 from '@angular/http/src/backends/browser_xhr';
import * as import23 from '@angular/http/src/base_response_options';
import * as import24 from '@angular/http/src/backends/xhr_backend';
import * as import25 from '@angular/http/src/base_request_options';
import * as import27 from './app.component.ngfactory';
import * as import28 from '@angular/core/src/application_tokens';
import * as import29 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import30 from '@angular/platform-browser/src/dom/events/key_events';
import * as import31 from '@angular/core/src/zone/ng_zone';
import * as import32 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import33 from '@angular/core/src/console';
import * as import34 from '@angular/core/src/i18n/tokens';
import * as import35 from '@angular/core/src/error_handler';
import * as import36 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import37 from '@angular/platform-browser/src/dom/animation_driver';
import * as import38 from '@angular/core/src/render/api';
import * as import39 from '@angular/core/src/security';
import * as import40 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import41 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import42 from '@angular/http/src/interfaces';
import * as import43 from '@angular/http/src/http';
var AppModuleInjector = (function (_super) {
    __extends(AppModuleInjector, _super);
    function AppModuleInjector(parent) {
        _super.call(this, parent, [import27.AppComponentNgFactory], [import27.AppComponentNgFactory]);
    }
    Object.defineProperty(AppModuleInjector.prototype, "_LOCALE_ID_7", {
        get: function () {
            if ((this.__LOCALE_ID_7 == null)) {
                (this.__LOCALE_ID_7 = 'en-US');
            }
            return this.__LOCALE_ID_7;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgLocalization_8", {
        get: function () {
            if ((this.__NgLocalization_8 == null)) {
                (this.__NgLocalization_8 = new import8.NgLocaleLocalization(this._LOCALE_ID_7));
            }
            return this.__NgLocalization_8;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ApplicationRef_13", {
        get: function () {
            if ((this.__ApplicationRef_13 == null)) {
                (this.__ApplicationRef_13 = this._ApplicationRef__12);
            }
            return this.__ApplicationRef_13;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Compiler_14", {
        get: function () {
            if ((this.__Compiler_14 == null)) {
                (this.__Compiler_14 = new import12.Compiler());
            }
            return this.__Compiler_14;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_ID_15", {
        get: function () {
            if ((this.__APP_ID_15 == null)) {
                (this.__APP_ID_15 = import28._appIdRandomProviderFactory());
            }
            return this.__APP_ID_15;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DOCUMENT_16", {
        get: function () {
            if ((this.__DOCUMENT_16 == null)) {
                (this.__DOCUMENT_16 = import4._document());
            }
            return this.__DOCUMENT_16;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_17", {
        get: function () {
            if ((this.__HAMMER_GESTURE_CONFIG_17 == null)) {
                (this.__HAMMER_GESTURE_CONFIG_17 = new import13.HammerGestureConfig());
            }
            return this.__HAMMER_GESTURE_CONFIG_17;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_18", {
        get: function () {
            if ((this.__EVENT_MANAGER_PLUGINS_18 == null)) {
                (this.__EVENT_MANAGER_PLUGINS_18 = [
                    new import29.DomEventsPlugin(),
                    new import30.KeyEventsPlugin(),
                    new import13.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_17)
                ]);
            }
            return this.__EVENT_MANAGER_PLUGINS_18;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EventManager_19", {
        get: function () {
            if ((this.__EventManager_19 == null)) {
                (this.__EventManager_19 = new import14.EventManager(this._EVENT_MANAGER_PLUGINS_18, this.parent.get(import31.NgZone)));
            }
            return this.__EventManager_19;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSharedStylesHost_20", {
        get: function () {
            if ((this.__DomSharedStylesHost_20 == null)) {
                (this.__DomSharedStylesHost_20 = new import15.DomSharedStylesHost(this._DOCUMENT_16));
            }
            return this.__DomSharedStylesHost_20;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationDriver_21", {
        get: function () {
            if ((this.__AnimationDriver_21 == null)) {
                (this.__AnimationDriver_21 = import4._resolveDefaultAnimationDriver());
            }
            return this.__AnimationDriver_21;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomRootRenderer_22", {
        get: function () {
            if ((this.__DomRootRenderer_22 == null)) {
                (this.__DomRootRenderer_22 = new import16.DomRootRenderer_(this._DOCUMENT_16, this._EventManager_19, this._DomSharedStylesHost_20, this._AnimationDriver_21, this._APP_ID_15));
            }
            return this.__DomRootRenderer_22;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RootRenderer_23", {
        get: function () {
            if ((this.__RootRenderer_23 == null)) {
                (this.__RootRenderer_23 = import32._createConditionalRootRenderer(this._DomRootRenderer_22, this.parent.get(import32.NgProbeToken, null), this.parent.get(import11.NgProbeToken, null)));
            }
            return this.__RootRenderer_23;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSanitizer_24", {
        get: function () {
            if ((this.__DomSanitizer_24 == null)) {
                (this.__DomSanitizer_24 = new import17.DomSanitizerImpl());
            }
            return this.__DomSanitizer_24;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Sanitizer_25", {
        get: function () {
            if ((this.__Sanitizer_25 == null)) {
                (this.__Sanitizer_25 = this._DomSanitizer_24);
            }
            return this.__Sanitizer_25;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationQueue_26", {
        get: function () {
            if ((this.__AnimationQueue_26 == null)) {
                (this.__AnimationQueue_26 = new import18.AnimationQueue(this.parent.get(import31.NgZone)));
            }
            return this.__AnimationQueue_26;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ViewUtils_27", {
        get: function () {
            if ((this.__ViewUtils_27 == null)) {
                (this.__ViewUtils_27 = new import19.ViewUtils(this._RootRenderer_23, this._Sanitizer_25, this._AnimationQueue_26));
            }
            return this.__ViewUtils_27;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_IterableDiffers_28", {
        get: function () {
            if ((this.__IterableDiffers_28 == null)) {
                (this.__IterableDiffers_28 = import3._iterableDiffersFactory());
            }
            return this.__IterableDiffers_28;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_KeyValueDiffers_29", {
        get: function () {
            if ((this.__KeyValueDiffers_29 == null)) {
                (this.__KeyValueDiffers_29 = import3._keyValueDiffersFactory());
            }
            return this.__KeyValueDiffers_29;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_SharedStylesHost_30", {
        get: function () {
            if ((this.__SharedStylesHost_30 == null)) {
                (this.__SharedStylesHost_30 = this._DomSharedStylesHost_20);
            }
            return this.__SharedStylesHost_30;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Title_31", {
        get: function () {
            if ((this.__Title_31 == null)) {
                (this.__Title_31 = new import20.Title());
            }
            return this.__Title_31;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RadioControlRegistry_32", {
        get: function () {
            if ((this.__RadioControlRegistry_32 == null)) {
                (this.__RadioControlRegistry_32 = new import21.RadioControlRegistry());
            }
            return this.__RadioControlRegistry_32;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_BrowserXhr_33", {
        get: function () {
            if ((this.__BrowserXhr_33 == null)) {
                (this.__BrowserXhr_33 = new import22.BrowserXhr());
            }
            return this.__BrowserXhr_33;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ResponseOptions_34", {
        get: function () {
            if ((this.__ResponseOptions_34 == null)) {
                (this.__ResponseOptions_34 = new import23.BaseResponseOptions());
            }
            return this.__ResponseOptions_34;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XSRFStrategy_35", {
        get: function () {
            if ((this.__XSRFStrategy_35 == null)) {
                (this.__XSRFStrategy_35 = import7._createDefaultCookieXSRFStrategy());
            }
            return this.__XSRFStrategy_35;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XHRBackend_36", {
        get: function () {
            if ((this.__XHRBackend_36 == null)) {
                (this.__XHRBackend_36 = new import24.XHRBackend(this._BrowserXhr_33, this._ResponseOptions_34, this._XSRFStrategy_35));
            }
            return this.__XHRBackend_36;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RequestOptions_37", {
        get: function () {
            if ((this.__RequestOptions_37 == null)) {
                (this.__RequestOptions_37 = new import25.BaseRequestOptions());
            }
            return this.__RequestOptions_37;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Http_38", {
        get: function () {
            if ((this.__Http_38 == null)) {
                (this.__Http_38 = import7.httpFactory(this._XHRBackend_36, this._RequestOptions_37));
            }
            return this.__Http_38;
        },
        enumerable: true,
        configurable: true
    });
    AppModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._ApplicationModule_1 = new import3.ApplicationModule();
        this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule, null));
        this._InternalFormsSharedModule_3 = new import5.InternalFormsSharedModule();
        this._FormsModule_4 = new import6.FormsModule();
        this._HttpModule_5 = new import7.HttpModule();
        this._AppModule_6 = new import1.AppModule();
        this._ErrorHandler_9 = import4.errorHandler();
        this._ApplicationInitStatus_10 = new import9.ApplicationInitStatus(this.parent.get(import9.APP_INITIALIZER, null));
        this._Testability_11 = new import10.Testability(this.parent.get(import31.NgZone));
        this._ApplicationRef__12 = new import11.ApplicationRef_(this.parent.get(import31.NgZone), this.parent.get(import33.Console), this, this._ErrorHandler_9, this, this._ApplicationInitStatus_10, this.parent.get(import10.TestabilityRegistry, null), this._Testability_11);
        return this._AppModule_6;
    };
    AppModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import3.ApplicationModule)) {
            return this._ApplicationModule_1;
        }
        if ((token === import4.BrowserModule)) {
            return this._BrowserModule_2;
        }
        if ((token === import5.InternalFormsSharedModule)) {
            return this._InternalFormsSharedModule_3;
        }
        if ((token === import6.FormsModule)) {
            return this._FormsModule_4;
        }
        if ((token === import7.HttpModule)) {
            return this._HttpModule_5;
        }
        if ((token === import1.AppModule)) {
            return this._AppModule_6;
        }
        if ((token === import34.LOCALE_ID)) {
            return this._LOCALE_ID_7;
        }
        if ((token === import8.NgLocalization)) {
            return this._NgLocalization_8;
        }
        if ((token === import35.ErrorHandler)) {
            return this._ErrorHandler_9;
        }
        if ((token === import9.ApplicationInitStatus)) {
            return this._ApplicationInitStatus_10;
        }
        if ((token === import10.Testability)) {
            return this._Testability_11;
        }
        if ((token === import11.ApplicationRef_)) {
            return this._ApplicationRef__12;
        }
        if ((token === import11.ApplicationRef)) {
            return this._ApplicationRef_13;
        }
        if ((token === import12.Compiler)) {
            return this._Compiler_14;
        }
        if ((token === import28.APP_ID)) {
            return this._APP_ID_15;
        }
        if ((token === import36.DOCUMENT)) {
            return this._DOCUMENT_16;
        }
        if ((token === import13.HAMMER_GESTURE_CONFIG)) {
            return this._HAMMER_GESTURE_CONFIG_17;
        }
        if ((token === import14.EVENT_MANAGER_PLUGINS)) {
            return this._EVENT_MANAGER_PLUGINS_18;
        }
        if ((token === import14.EventManager)) {
            return this._EventManager_19;
        }
        if ((token === import15.DomSharedStylesHost)) {
            return this._DomSharedStylesHost_20;
        }
        if ((token === import37.AnimationDriver)) {
            return this._AnimationDriver_21;
        }
        if ((token === import16.DomRootRenderer)) {
            return this._DomRootRenderer_22;
        }
        if ((token === import38.RootRenderer)) {
            return this._RootRenderer_23;
        }
        if ((token === import17.DomSanitizer)) {
            return this._DomSanitizer_24;
        }
        if ((token === import39.Sanitizer)) {
            return this._Sanitizer_25;
        }
        if ((token === import18.AnimationQueue)) {
            return this._AnimationQueue_26;
        }
        if ((token === import19.ViewUtils)) {
            return this._ViewUtils_27;
        }
        if ((token === import40.IterableDiffers)) {
            return this._IterableDiffers_28;
        }
        if ((token === import41.KeyValueDiffers)) {
            return this._KeyValueDiffers_29;
        }
        if ((token === import15.SharedStylesHost)) {
            return this._SharedStylesHost_30;
        }
        if ((token === import20.Title)) {
            return this._Title_31;
        }
        if ((token === import21.RadioControlRegistry)) {
            return this._RadioControlRegistry_32;
        }
        if ((token === import22.BrowserXhr)) {
            return this._BrowserXhr_33;
        }
        if ((token === import23.ResponseOptions)) {
            return this._ResponseOptions_34;
        }
        if ((token === import42.XSRFStrategy)) {
            return this._XSRFStrategy_35;
        }
        if ((token === import24.XHRBackend)) {
            return this._XHRBackend_36;
        }
        if ((token === import25.RequestOptions)) {
            return this._RequestOptions_37;
        }
        if ((token === import43.Http)) {
            return this._Http_38;
        }
        return notFoundResult;
    };
    AppModuleInjector.prototype.destroyInternal = function () {
        this._ApplicationRef__12.ngOnDestroy();
    };
    return AppModuleInjector;
}(import0.NgModuleInjector));
export var AppModuleNgFactory = new import0.NgModuleFactory(AppModuleInjector, import1.AppModule);
//# sourceMappingURL=app.module.ngfactory.js.map