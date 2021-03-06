(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('ngu-carousel', ['exports', '@angular/common', '@angular/core', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory(global['ngu-carousel'] = {}, global.ng.common, global.ng.core, global.rxjs, global.rxjs.operators));
}(this, (function (exports, common, core, rxjs, operators) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    var NguCarouselStore = /** @class */ (function () {
        function NguCarouselStore(touch, vertical, interval, transform, button, visibleItems, deviceType, type, token, items, load, deviceWidth, carouselWidth, itemWidth, slideItems, itemWidthPer, itemLength, currentSlide, easing, speed, loop, dexVal, touchTransform, isEnd, isFirst, isLast, RTL, point, velocity) {
            if (touch === void 0) { touch = new Touch(); }
            if (vertical === void 0) { vertical = new Vertical(); }
            if (transform === void 0) { transform = new Transfrom(); }
            if (type === void 0) { type = 'fixed'; }
            if (token === void 0) { token = ''; }
            if (items === void 0) { items = 0; }
            if (load === void 0) { load = 0; }
            if (deviceWidth === void 0) { deviceWidth = 0; }
            if (carouselWidth === void 0) { carouselWidth = 0; }
            if (itemWidth === void 0) { itemWidth = 0; }
            if (slideItems === void 0) { slideItems = 0; }
            if (itemWidthPer === void 0) { itemWidthPer = 0; }
            if (itemLength === void 0) { itemLength = 0; }
            if (currentSlide === void 0) { currentSlide = 0; }
            if (easing === void 0) { easing = 'cubic-bezier(0, 0, 0.2, 1)'; }
            if (speed === void 0) { speed = 200; }
            if (loop === void 0) { loop = false; }
            if (dexVal === void 0) { dexVal = 0; }
            if (touchTransform === void 0) { touchTransform = 0; }
            if (isEnd === void 0) { isEnd = false; }
            if (isFirst === void 0) { isFirst = true; }
            if (isLast === void 0) { isLast = false; }
            if (RTL === void 0) { RTL = false; }
            if (point === void 0) { point = true; }
            if (velocity === void 0) { velocity = 1; }
            this.touch = touch;
            this.vertical = vertical;
            this.interval = interval;
            this.transform = transform;
            this.button = button;
            this.visibleItems = visibleItems;
            this.deviceType = deviceType;
            this.type = type;
            this.token = token;
            this.items = items;
            this.load = load;
            this.deviceWidth = deviceWidth;
            this.carouselWidth = carouselWidth;
            this.itemWidth = itemWidth;
            this.slideItems = slideItems;
            this.itemWidthPer = itemWidthPer;
            this.itemLength = itemLength;
            this.currentSlide = currentSlide;
            this.easing = easing;
            this.speed = speed;
            this.loop = loop;
            this.dexVal = dexVal;
            this.touchTransform = touchTransform;
            this.isEnd = isEnd;
            this.isFirst = isFirst;
            this.isLast = isLast;
            this.RTL = RTL;
            this.point = point;
            this.velocity = velocity;
        }
        return NguCarouselStore;
    }());
    var ItemsControl = /** @class */ (function () {
        function ItemsControl() {
        }
        return ItemsControl;
    }());
    var Vertical = /** @class */ (function () {
        function Vertical() {
        }
        return Vertical;
    }());
    var NguButton = /** @class */ (function () {
        function NguButton() {
        }
        return NguButton;
    }());
    var Touch = /** @class */ (function () {
        function Touch() {
        }
        return Touch;
    }());
    var Transfrom = /** @class */ (function () {
        function Transfrom(xs, sm, md, lg, all) {
            if (xs === void 0) { xs = 0; }
            if (sm === void 0) { sm = 0; }
            if (md === void 0) { md = 0; }
            if (lg === void 0) { lg = 0; }
            if (all === void 0) { all = 0; }
            this.xs = xs;
            this.sm = sm;
            this.md = md;
            this.lg = lg;
            this.all = all;
        }
        return Transfrom;
    }());
    var NguCarouselConfig = /** @class */ (function () {
        function NguCarouselConfig() {
        }
        return NguCarouselConfig;
    }());
    var NguCarouselOutletContext = /** @class */ (function () {
        function NguCarouselOutletContext(data) {
            this.$implicit = data;
        }
        return NguCarouselOutletContext;
    }());

    var NguCarouselItemDirective = /** @class */ (function () {
        function NguCarouselItemDirective() {
        }
        NguCarouselItemDirective = __decorate([
            core.Directive({
                // tslint:disable-next-line:directive-selector
                selector: '[NguCarouselItem]'
            })
        ], NguCarouselItemDirective);
        return NguCarouselItemDirective;
    }());
    var NguCarouselNextDirective = /** @class */ (function () {
        function NguCarouselNextDirective() {
        }
        NguCarouselNextDirective = __decorate([
            core.Directive({
                // tslint:disable-next-line:directive-selector
                selector: '[NguCarouselNext]'
            })
        ], NguCarouselNextDirective);
        return NguCarouselNextDirective;
    }());
    var NguCarouselPrevDirective = /** @class */ (function () {
        function NguCarouselPrevDirective() {
        }
        NguCarouselPrevDirective = __decorate([
            core.Directive({
                // tslint:disable-next-line:directive-selector
                selector: '[NguCarouselPrev]'
            })
        ], NguCarouselPrevDirective);
        return NguCarouselPrevDirective;
    }());
    var NguCarouselPointDirective = /** @class */ (function () {
        function NguCarouselPointDirective() {
        }
        NguCarouselPointDirective = __decorate([
            core.Directive({
                // tslint:disable-next-line:directive-selector
                selector: '[NguCarouselPoint]'
            })
        ], NguCarouselPointDirective);
        return NguCarouselPointDirective;
    }());
    var NguCarouselDefDirective = /** @class */ (function () {
        function NguCarouselDefDirective(template) {
            this.template = template;
        }
        NguCarouselDefDirective.ctorParameters = function () { return [
            { type: core.TemplateRef }
        ]; };
        NguCarouselDefDirective = __decorate([
            core.Directive({
                // tslint:disable-next-line:directive-selector
                selector: '[nguCarouselDef]'
            })
        ], NguCarouselDefDirective);
        return NguCarouselDefDirective;
    }());
    var NguCarouselOutlet = /** @class */ (function () {
        function NguCarouselOutlet(viewContainer) {
            this.viewContainer = viewContainer;
        }
        NguCarouselOutlet.ctorParameters = function () { return [
            { type: core.ViewContainerRef }
        ]; };
        NguCarouselOutlet = __decorate([
            core.Directive({
                // tslint:disable-next-line:directive-selector
                selector: '[nguCarouselOutlet]'
            })
            // tslint:disable-next-line:directive-class-suffix
        ], NguCarouselOutlet);
        return NguCarouselOutlet;
    }());

    var NguCarousel = /** @class */ (function (_super) {
        __extends(NguCarousel, _super);
        function NguCarousel(_el, _renderer, _differs, platformId, cdr) {
            var _this = _super.call(this) || this;
            _this._el = _el;
            _this._renderer = _renderer;
            _this._differs = _differs;
            _this.platformId = platformId;
            _this.cdr = cdr;
            _this.withAnim = true;
            _this.isHovered = false;
            _this.carouselLoad = new core.EventEmitter();
            // tslint:disable-next-line:no-output-on-prefix
            _this.onMove = new core.EventEmitter();
            _this._intervalController$ = new rxjs.Subject();
            _this.pointNumbers = [];
            return _this;
        }
        Object.defineProperty(NguCarousel.prototype, "dataSource", {
            get: function () {
                return this._dataSource;
            },
            set: function (data) {
                if (data) {
                    // console.log(data, this.dataSource);
                    // this.isFirstss++;
                    this._switchDataSource(data);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NguCarousel.prototype, "nextBtn", {
            /** The setter is used to catch the button if the button has ngIf
             * issue id #91
             */
            set: function (btn) {
                var _this = this;
                this.listener2 && this.listener2();
                if (btn) {
                    this.listener2 = this._renderer.listen(btn.nativeElement, 'click', function () {
                        return _this._carouselScrollOne(1);
                    });
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NguCarousel.prototype, "prevBtn", {
            /** The setter is used to catch the button if the button has ngIf
             * issue id #91
             */
            set: function (btn) {
                var _this = this;
                this.listener1 && this.listener1();
                if (btn) {
                    this.listener1 = this._renderer.listen(btn.nativeElement, 'click', function () {
                        return _this._carouselScrollOne(0);
                    });
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NguCarousel.prototype, "trackBy", {
            /**
             * Tracking function that will be used to check the differences in data changes. Used similarly
             * to `ngFor` `trackBy` function. Optimize Items operations by identifying a Items based on its data
             * relative to the function to know if a Items should be added/removed/moved.
             * Accepts a function that takes two parameters, `index` and `item`.
             */
            get: function () {
                return this._trackByFn;
            },
            set: function (fn) {
                if (core.isDevMode() &&
                    fn != null &&
                    typeof fn !== 'function' &&
                    console &&
                    console.warn) {
                    console.warn("trackBy must be a function, but received " + JSON.stringify(fn) + ".");
                }
                this._trackByFn = fn;
            },
            enumerable: true,
            configurable: true
        });
        NguCarousel.prototype.ngOnInit = function () {
            var _this = this;
            this._dataDiffer = this._differs
                .find([])
                .create(function (_i, item) {
                return _this.trackBy ? _this.trackBy(item.dataIndex, item.data) : item;
            });
        };
        NguCarousel.prototype.ngDoCheck = function () {
            this.arrayChanges = this._dataDiffer.diff(this.dataSource);
            if (this.arrayChanges && this._defDirec) {
                // console.log('Changes detected!');
                this._observeRenderChanges();
            }
        };
        NguCarousel.prototype._switchDataSource = function (dataSource) {
            this._dataSource = dataSource;
            if (this._defDirec) {
                this._observeRenderChanges();
            }
        };
        NguCarousel.prototype._observeRenderChanges = function () {
            var _this = this;
            var dataStream;
            if (this._dataSource instanceof rxjs.Observable) {
                dataStream = this._dataSource;
            }
            else if (Array.isArray(this._dataSource)) {
                dataStream = rxjs.of(this._dataSource);
            }
            if (dataStream) {
                this._dataSubscription = dataStream
                    .pipe(operators.takeUntil(this._intervalController$))
                    .subscribe(function (data) {
                    _this.renderNodeChanges(data);
                    _this.isLast = false;
                });
            }
        };
        NguCarousel.prototype.renderNodeChanges = function (data, viewContainer) {
            var _this = this;
            if (viewContainer === void 0) { viewContainer = this._nodeOutlet.viewContainer; }
            if (!this.arrayChanges)
                return;
            this.arrayChanges.forEachOperation(function (item, adjustedPreviousIndex, currentIndex) {
                // const node = this._defDirec.find(items => item.item);
                var node = _this._getNodeDef(data[currentIndex], currentIndex);
                if (item.previousIndex == null) {
                    var context = new NguCarouselOutletContext(data[currentIndex]);
                    context.index = currentIndex;
                    viewContainer.createEmbeddedView(node.template, context, currentIndex);
                }
                else if (currentIndex == null) {
                    viewContainer.remove(adjustedPreviousIndex);
                }
                else {
                    var view = viewContainer.get(adjustedPreviousIndex);
                    viewContainer.move(view, currentIndex);
                }
            });
            this._updateItemIndexContext();
            if (this.carousel) {
                this._storeCarouselData();
            }
            // console.log(this.dataSource);
        };
        /**
         * Updates the index-related context for each row to reflect any changes in the index of the rows,
         * e.g. first/last/even/odd.
         */
        NguCarousel.prototype._updateItemIndexContext = function () {
            var viewContainer = this._nodeOutlet.viewContainer;
            for (var renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
                var viewRef = viewContainer.get(renderIndex);
                var context = viewRef.context;
                context.count = count;
                context.first = renderIndex === 0;
                context.last = renderIndex === count - 1;
                context.even = renderIndex % 2 === 0;
                context.odd = !context.even;
                context.index = renderIndex;
            }
        };
        NguCarousel.prototype._getNodeDef = function (data, i) {
            // console.log(this._defDirec);
            if (this._defDirec.length === 1) {
                return this._defDirec.first;
            }
            var nodeDef = this._defDirec.find(function (def) { return def.when && def.when(i, data); }) ||
                this._defaultNodeDef;
            return nodeDef;
        };
        NguCarousel.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.carousel = this._el.nativeElement;
            this._inputValidation();
            this.carouselCssNode = this._createStyleElem();
            // this._buttonControl();
            if (common.isPlatformBrowser(this.platformId)) {
                this._carouselInterval();
                if (!this.vertical.enabled) {
                    this._touch();
                }
                this.listener3 = this._renderer.listen('window', 'resize', function (event) {
                    _this._onResizing(event);
                });
                this._onWindowScrolling();
            }
        };
        NguCarousel.prototype.ngAfterContentInit = function () {
            this._observeRenderChanges();
            this.cdr.markForCheck();
        };
        NguCarousel.prototype._inputValidation = function () {
            this.type = this.inputs.grid.all !== 0 ? 'fixed' : 'responsive';
            this.loop = this.inputs.loop || false;
            this.inputs.easing = this.inputs.easing || 'cubic-bezier(0, 0, 0.2, 1)';
            this.touch.active = this.inputs.touch || false;
            this.RTL = this.inputs.RTL ? true : false;
            this.interval = this.inputs.interval || null;
            this.velocity =
                typeof this.inputs.velocity === 'number'
                    ? this.inputs.velocity
                    : this.velocity;
            if (this.inputs.vertical && this.inputs.vertical.enabled) {
                this.vertical.enabled = this.inputs.vertical.enabled;
                this.vertical.height = this.inputs.vertical.height;
            }
            this.directionSym = this.RTL ? '' : '-';
            this.point =
                this.inputs.point && typeof this.inputs.point.visible !== 'undefined'
                    ? this.inputs.point.visible
                    : true;
            this._carouselSize();
        };
        NguCarousel.prototype.ngOnDestroy = function () {
            // clearInterval(this.carouselInt);
            this.carouselInt && this.carouselInt.unsubscribe();
            this._intervalController$.unsubscribe();
            this.carouselLoad.complete();
            this.onMove.complete();
            /** remove listeners */
            clearTimeout(this.onScrolling);
            for (var i = 1; i <= 4; i++) {
                var str = "listener" + i;
                this[str] && this[str]();
            }
        };
        NguCarousel.prototype._onResizing = function (event) {
            var _this = this;
            clearTimeout(this.onResize);
            this.onResize = setTimeout(function () {
                if (_this.deviceWidth !== event.target.outerWidth) {
                    _this._setStyle(_this.nguItemsContainer.nativeElement, 'transition', "");
                    _this._storeCarouselData();
                }
            }, 500);
        };
        /** Get Touch input */
        NguCarousel.prototype._touch = function () {
            var _this = this;
            if (this.inputs.touch) {
                var hammertime = new Hammer(this.touchContainer.nativeElement);
                hammertime.get('pan').set({ direction: Hammer.DIRECTION_HORIZONTAL });
                hammertime.on('panstart', function (ev) {
                    _this.carouselWidth = _this.nguItemsContainer.nativeElement.offsetWidth;
                    _this.touchTransform = _this.transform[_this.deviceType];
                    _this.dexVal = 0;
                    _this._setStyle(_this.nguItemsContainer.nativeElement, 'transition', '');
                });
                if (this.vertical.enabled) {
                    hammertime.on('panup', function (ev) {
                        _this._touchHandling('panleft', ev);
                    });
                    hammertime.on('pandown', function (ev) {
                        _this._touchHandling('panright', ev);
                    });
                }
                else {
                    hammertime.on('panleft', function (ev) {
                        _this._touchHandling('panleft', ev);
                    });
                    hammertime.on('panright', function (ev) {
                        _this._touchHandling('panright', ev);
                    });
                }
                hammertime.on('panend', function (ev) {
                    if (Math.abs(ev.velocity) >= _this.velocity) {
                        _this.touch.velocity = ev.velocity;
                        var direc = 0;
                        if (!_this.RTL) {
                            direc = _this.touch.swipe === 'panright' ? 0 : 1;
                        }
                        else {
                            direc = _this.touch.swipe === 'panright' ? 1 : 0;
                        }
                        _this._carouselScrollOne(direc);
                    }
                    else {
                        _this.dexVal = 0;
                        _this._setStyle(_this.nguItemsContainer.nativeElement, 'transition', 'transform 324ms cubic-bezier(0, 0, 0.2, 1)');
                        _this._setStyle(_this.nguItemsContainer.nativeElement, 'transform', '');
                    }
                });
                hammertime.on('hammer.input', function (ev) {
                    // allow nested touch events to no propagate, this may have other side affects but works for now.
                    // TODO: It is probably better to check the source element of the event and only apply the handle to the correct carousel
                    ev.srcEvent.stopPropagation();
                });
            }
        };
        /** handle touch input */
        NguCarousel.prototype._touchHandling = function (e, ev) {
            // vertical touch events seem to cause to panstart event with an odd delta
            // and a center of {x:0,y:0} so this will ignore them
            if (ev.center.x === 0) {
                return;
            }
            ev = Math.abs(this.vertical.enabled ? ev.deltaY : ev.deltaX);
            var valt = ev - this.dexVal;
            valt =
                this.type === 'responsive'
                    ? (Math.abs(ev - this.dexVal) /
                        (this.vertical.enabled
                            ? this.vertical.height
                            : this.carouselWidth)) *
                        100
                    : valt;
            this.dexVal = ev;
            this.touch.swipe = e;
            this._setTouchTransfrom(e, valt);
            this._setTransformFromTouch();
        };
        NguCarousel.prototype._setTouchTransfrom = function (e, valt) {
            var condition = this.RTL ? 'panright' : 'panleft';
            this.touchTransform =
                e === condition ? valt + this.touchTransform : this.touchTransform - valt;
        };
        NguCarousel.prototype._setTransformFromTouch = function () {
            if (this.touchTransform < 0) {
                this.touchTransform = 0;
            }
            var type = this.type === 'responsive' ? '%' : 'px';
            this._setStyle(this.nguItemsContainer.nativeElement, 'transform', this.vertical.enabled
                ? "translate3d(0, " + this.directionSym + this.touchTransform + type + ", 0)"
                : "translate3d(" + this.directionSym + this.touchTransform + type + ", 0, 0)");
        };
        /** this fn used to disable the interval when it is not on the viewport */
        NguCarousel.prototype._onWindowScrolling = function () {
            var top = this.carousel.offsetTop;
            var scrollY = window.scrollY;
            var heightt = window.innerHeight;
            var carouselHeight = this.carousel.offsetHeight;
            var isCarouselOnScreen = top <= scrollY + heightt - carouselHeight / 4 &&
                top + carouselHeight / 2 >= scrollY;
            if (isCarouselOnScreen) {
                this._intervalController$.next(1);
            }
            else {
                this._intervalController$.next(0);
            }
        };
        /** store data based on width of the screen for the carousel */
        NguCarousel.prototype._storeCarouselData = function () {
            this.deviceWidth = common.isPlatformBrowser(this.platformId)
                ? window.innerWidth
                : 1200;
            this.carouselWidth = this.carouselMain1.nativeElement.offsetWidth;
            if (this.type === 'responsive') {
                this.deviceType =
                    this.deviceWidth >= 1200
                        ? 'lg'
                        : this.deviceWidth >= 992
                            ? 'md'
                            : this.deviceWidth >= 768
                                ? 'sm'
                                : 'xs';
                this.items = this.inputs.grid[this.deviceType];
                this.itemWidth = this.carouselWidth / this.items;
            }
            else {
                this.items = Math.trunc(this.carouselWidth / this.inputs.grid.all);
                this.itemWidth = this.inputs.grid.all;
                this.deviceType = 'all';
            }
            this.slideItems = +(this.inputs.slide < this.items
                ? this.inputs.slide
                : this.items);
            this.load =
                this.inputs.load >= this.slideItems ? this.inputs.load : this.slideItems;
            this.speed =
                this.inputs.speed && this.inputs.speed > -1 ? this.inputs.speed : 400;
            this._carouselPoint();
        };
        /** Used to reset the carousel */
        NguCarousel.prototype.reset = function (withOutAnimation) {
            withOutAnimation && (this.withAnim = false);
            this.carouselCssNode.innerHTML = '';
            this.moveTo(0);
            this._carouselPoint();
        };
        /** Init carousel point */
        NguCarousel.prototype._carouselPoint = function () {
            // debugger;
            // if (this.userData.point.visible === true) {
            var Nos = this.dataSource.length - (this.items - this.slideItems);
            this.pointIndex = Math.ceil(Nos / this.slideItems);
            var pointers = [];
            if (this.pointIndex > 1 || !this.inputs.point.hideOnSingleSlide) {
                for (var i = 0; i < this.pointIndex; i++) {
                    pointers.push(i);
                }
            }
            this.pointNumbers = pointers;
            // console.log(this.pointNumbers);
            this._carouselPointActiver();
            if (this.pointIndex <= 1) {
                this._btnBoolean(1, 1);
            }
            else {
                if (this.currentSlide === 0 && !this.loop) {
                    this._btnBoolean(1, 0);
                }
                else {
                    this._btnBoolean(0, 0);
                }
            }
            // }
        };
        /** change the active point in carousel */
        NguCarousel.prototype._carouselPointActiver = function () {
            var i = Math.ceil(this.currentSlide / this.slideItems);
            this.activePoint = i;
            // console.log(this.data);
            this.cdr.markForCheck();
        };
        /** this function is used to scoll the carousel when point is clicked */
        NguCarousel.prototype.moveTo = function (slide, withOutAnimation) {
            // slide = slide - 1;
            withOutAnimation && (this.withAnim = false);
            if (this.activePoint !== slide && slide < this.pointIndex) {
                var slideremains = void 0;
                var btns = this.currentSlide < slide ? 1 : 0;
                switch (slide) {
                    case 0:
                        this._btnBoolean(1, 0);
                        slideremains = slide * this.slideItems;
                        break;
                    case this.pointIndex - 1:
                        this._btnBoolean(0, 1);
                        slideremains = this.dataSource.length - this.items;
                        break;
                    default:
                        this._btnBoolean(0, 0);
                        slideremains = slide * this.slideItems;
                }
                this._carouselScrollTwo(btns, slideremains, this.speed);
            }
        };
        /** set the style of the carousel based the inputs data */
        NguCarousel.prototype._carouselSize = function () {
            this.token = this._generateID();
            var dism = '';
            this.styleid = "." + this.token + " > .ngucarousel > .ngu-touch-container > .ngucarousel-items";
            if (this.inputs.custom === 'banner') {
                this._renderer.addClass(this.carousel, 'banner');
            }
            if (this.inputs.animation === 'lazy') {
                dism += this.styleid + " > .item {transition: transform .6s ease;}";
            }
            var itemStyle = '';
            if (this.vertical.enabled) {
                var itemWidth_xs = this.styleid + " > .item {height: " + this.vertical
                    .height / +this.inputs.grid.xs + "px}";
                var itemWidth_sm = this.styleid + " > .item {height: " + this.vertical
                    .height / +this.inputs.grid.sm + "px}";
                var itemWidth_md = this.styleid + " > .item {height: " + this.vertical
                    .height / +this.inputs.grid.md + "px}";
                var itemWidth_lg = this.styleid + " > .item {height: " + this.vertical
                    .height / +this.inputs.grid.lg + "px}";
                itemStyle = "@media (max-width:767px){" + itemWidth_xs + "}\n                    @media (min-width:768px){" + itemWidth_sm + "}\n                    @media (min-width:992px){" + itemWidth_md + "}\n                    @media (min-width:1200px){" + itemWidth_lg + "}";
            }
            else if (this.type === 'responsive') {
                var itemWidth_xs = this.inputs.type === 'mobile'
                    ? this.styleid + " .item {flex: 0 0 " + 95 /
                        +this.inputs.grid.xs + "%; width: " + 95 / +this.inputs.grid.xs + "%;}"
                    : this.styleid + " .item {flex: 0 0 " + 100 /
                        +this.inputs.grid.xs + "%; width: " + 100 / +this.inputs.grid.xs + "%;}";
                var itemWidth_sm = this.styleid + " > .item {flex: 0 0 " + 100 /
                    +this.inputs.grid.sm + "%; width: " + 100 / +this.inputs.grid.sm + "%}";
                var itemWidth_md = this.styleid + " > .item {flex: 0 0 " + 100 /
                    +this.inputs.grid.md + "%; width: " + 100 / +this.inputs.grid.md + "%}";
                var itemWidth_lg = this.styleid + " > .item {flex: 0 0 " + 100 /
                    +this.inputs.grid.lg + "%; width: " + 100 / +this.inputs.grid.lg + "%}";
                itemStyle = "@media (max-width:767px){" + itemWidth_xs + "}\n                    @media (min-width:768px){" + itemWidth_sm + "}\n                    @media (min-width:992px){" + itemWidth_md + "}\n                    @media (min-width:1200px){" + itemWidth_lg + "}";
            }
            else {
                itemStyle = this.styleid + " .item {flex: 0 0 " + this.inputs.grid.all + "px; width: " + this.inputs.grid.all + "px;}";
            }
            this._renderer.addClass(this.carousel, this.token);
            if (this.vertical.enabled) {
                this._renderer.addClass(this.nguItemsContainer.nativeElement, 'nguvertical');
                this._renderer.setStyle(this.carouselMain1.nativeElement, 'height', this.vertical.height + "px");
            }
            // tslint:disable-next-line:no-unused-expression
            this.RTL &&
                !this.vertical.enabled &&
                this._renderer.addClass(this.carousel, 'ngurtl');
            this._createStyleElem(dism + " " + itemStyle);
            this._storeCarouselData();
        };
        /** logic to scroll the carousel step 1 */
        NguCarousel.prototype._carouselScrollOne = function (Btn) {
            var itemSpeed = this.speed;
            var translateXval, currentSlide = 0;
            var touchMove = Math.ceil(this.dexVal / this.itemWidth);
            this._setStyle(this.nguItemsContainer.nativeElement, 'transform', '');
            if (this.pointIndex === 1) {
                return;
            }
            else if (Btn === 0 && ((!this.loop && !this.isFirst) || this.loop)) {
                var slide = this.slideItems * this.pointIndex;
                var currentSlideD = this.currentSlide - this.slideItems;
                var MoveSlide = currentSlideD + this.slideItems;
                this._btnBoolean(0, 1);
                if (this.currentSlide === 0) {
                    currentSlide = this.dataSource.length - this.items;
                    itemSpeed = 400;
                    this._btnBoolean(0, 1);
                }
                else if (this.slideItems >= MoveSlide) {
                    currentSlide = translateXval = 0;
                    this._btnBoolean(1, 0);
                }
                else {
                    this._btnBoolean(0, 0);
                    if (touchMove > this.slideItems) {
                        currentSlide = this.currentSlide - touchMove;
                        itemSpeed = 200;
                    }
                    else {
                        currentSlide = this.currentSlide - this.slideItems;
                    }
                }
                this._carouselScrollTwo(Btn, currentSlide, itemSpeed);
            }
            else if (Btn === 1 && ((!this.loop && !this.isLast) || this.loop)) {
                if (this.dataSource.length <=
                    this.currentSlide + this.items + this.slideItems &&
                    !this.isLast) {
                    currentSlide = this.dataSource.length - this.items;
                    this._btnBoolean(0, 1);
                }
                else if (this.isLast) {
                    currentSlide = translateXval = 0;
                    itemSpeed = 400;
                    this._btnBoolean(1, 0);
                }
                else {
                    this._btnBoolean(0, 0);
                    if (touchMove > this.slideItems) {
                        currentSlide =
                            this.currentSlide + this.slideItems + (touchMove - this.slideItems);
                        itemSpeed = 200;
                    }
                    else {
                        currentSlide = this.currentSlide + this.slideItems;
                    }
                }
                this._carouselScrollTwo(Btn, currentSlide, itemSpeed);
            }
            // cubic-bezier(0.15, 1.04, 0.54, 1.13)
        };
        /** logic to scroll the carousel step 2 */
        NguCarousel.prototype._carouselScrollTwo = function (Btn, currentSlide, itemSpeed) {
            // tslint:disable-next-line:no-unused-expression
            if (this.dexVal !== 0) {
                var val = Math.abs(this.touch.velocity);
                var somt = Math.floor((this.dexVal / val / this.dexVal) * (this.deviceWidth - this.dexVal));
                somt = somt > itemSpeed ? itemSpeed : somt;
                itemSpeed = somt < 200 ? 200 : somt;
                this.dexVal = 0;
            }
            if (this.withAnim) {
                this._setStyle(this.nguItemsContainer.nativeElement, 'transition', "transform " + itemSpeed + "ms " + this.inputs.easing);
                this.inputs.animation &&
                    this._carouselAnimator(Btn, currentSlide + 1, currentSlide + this.items, itemSpeed, Math.abs(this.currentSlide - currentSlide));
            }
            else {
                this._setStyle(this.nguItemsContainer.nativeElement, 'transition', "");
            }
            // console.log(this.dataSource);
            this.itemLength = this.dataSource.length;
            this._transformStyle(currentSlide);
            this.currentSlide = currentSlide;
            this.onMove.emit(this);
            this._carouselPointActiver();
            this._carouselLoadTrigger();
            this.withAnim = true;
            // if (currentSlide === 12) {
            //   this._switchDataSource(this.dataSource);
            // }
        };
        /** boolean function for making isFirst and isLast */
        NguCarousel.prototype._btnBoolean = function (first, last) {
            this.isFirst = !!first;
            this.isLast = !!last;
        };
        NguCarousel.prototype._transformString = function (grid, slide) {
            var collect = '';
            collect += this.styleid + " { transform: translate3d(";
            if (this.vertical.enabled) {
                this.transform[grid] =
                    (this.vertical.height / this.inputs.grid[grid]) * slide;
                collect += "0, -" + this.transform[grid] + "px, 0";
            }
            else {
                this.transform[grid] = (100 / this.inputs.grid[grid]) * slide;
                collect += "" + this.directionSym + this.transform[grid] + "%, 0, 0";
            }
            collect += "); }";
            return collect;
        };
        /** set the transform style to scroll the carousel  */
        NguCarousel.prototype._transformStyle = function (slide) {
            var slideCss = '';
            if (this.type === 'responsive') {
                slideCss = "@media (max-width: 767px) {" + this._transformString('xs', slide) + "}\n      @media (min-width: 768px) {" + this._transformString('sm', slide) + " }\n      @media (min-width: 992px) {" + this._transformString('md', slide) + " }\n      @media (min-width: 1200px) {" + this._transformString('lg', slide) + " }";
            }
            else {
                this.transform.all = this.inputs.grid.all * slide;
                slideCss = this.styleid + " { transform: translate3d(" + this.directionSym + this.transform.all + "px, 0, 0);";
            }
            this.carouselCssNode.innerHTML = slideCss;
        };
        /** this will trigger the carousel to load the items */
        NguCarousel.prototype._carouselLoadTrigger = function () {
            if (typeof this.inputs.load === 'number') {
                this.dataSource.length - this.load <= this.currentSlide + this.items &&
                    this.carouselLoad.emit(this.currentSlide);
            }
        };
        /** generate Class for each carousel to set specific style */
        NguCarousel.prototype._generateID = function () {
            var text = '';
            var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            for (var i = 0; i < 6; i++) {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            return "ngucarousel" + text;
        };
        /** handle the auto slide */
        NguCarousel.prototype._carouselInterval = function () {
            var _this = this;
            var container = this.carouselMain1.nativeElement;
            if (this.interval && this.loop) {
                this.listener4 = this._renderer.listen('window', 'scroll', function () {
                    clearTimeout(_this.onScrolling);
                    _this.onScrolling = setTimeout(function () {
                        _this._onWindowScrolling();
                    }, 600);
                });
                var play$_1 = rxjs.fromEvent(container, 'mouseleave').pipe(operators.mapTo(1));
                var pause$_1 = rxjs.fromEvent(container, 'mouseenter').pipe(operators.mapTo(0));
                var touchPlay$_1 = rxjs.fromEvent(container, 'touchstart').pipe(operators.mapTo(1));
                var touchPause$_1 = rxjs.fromEvent(container, 'touchend').pipe(operators.mapTo(0));
                var interval$_1 = rxjs.interval(this.inputs.interval.timing).pipe(operators.mapTo(1));
                setTimeout(function () {
                    _this.carouselInt = rxjs.merge(play$_1, touchPlay$_1, pause$_1, touchPause$_1, _this._intervalController$)
                        .pipe(operators.startWith(1), operators.switchMap(function (val) {
                        _this.isHovered = !val;
                        _this.cdr.markForCheck();
                        return val ? interval$_1 : rxjs.empty();
                    }))
                        .subscribe(function (res) {
                        _this._carouselScrollOne(1);
                    });
                }, this.interval.initialDelay);
            }
        };
        NguCarousel.prototype._updateItemIndexContextAni = function () {
            var viewContainer = this._nodeOutlet.viewContainer;
            for (var renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
                var viewRef = viewContainer.get(renderIndex);
                var context = viewRef.context;
                context.count = count;
                context.first = renderIndex === 0;
                context.last = renderIndex === count - 1;
                context.even = renderIndex % 2 === 0;
                context.odd = !context.even;
                context.index = renderIndex;
            }
        };
        /** animate the carousel items */
        NguCarousel.prototype._carouselAnimator = function (direction, start, end, speed, length, viewContainer) {
            var _this = this;
            if (viewContainer === void 0) { viewContainer = this._nodeOutlet.viewContainer; }
            var val = length < 5 ? length : 5;
            val = val === 1 ? 3 : val;
            var collectIndex = [];
            if (direction === 1) {
                for (var i = start - 1; i < end; i++) {
                    collectIndex.push(i);
                    val = val * 2;
                    var viewRef = viewContainer.get(i);
                    var context = viewRef.context;
                    context.animate = { value: true, params: { distance: val } };
                }
            }
            else {
                for (var i = end - 1; i >= start - 1; i--) {
                    collectIndex.push(i);
                    val = val * 2;
                    var viewRef = viewContainer.get(i);
                    var context = viewRef.context;
                    context.animate = { value: true, params: { distance: -val } };
                }
            }
            this.cdr.markForCheck();
            setTimeout(function () {
                _this._removeAnimations(collectIndex);
            }, speed * 0.7);
        };
        NguCarousel.prototype._removeAnimations = function (indexs) {
            var viewContainer = this._nodeOutlet.viewContainer;
            indexs.forEach(function (i) {
                var viewRef = viewContainer.get(i);
                var context = viewRef.context;
                context.animate = { value: false, params: { distance: 0 } };
            });
            this.cdr.markForCheck();
        };
        /** Short form for setElementStyle */
        NguCarousel.prototype._setStyle = function (el, prop, val) {
            this._renderer.setStyle(el, prop, val);
        };
        /** For generating style tag */
        NguCarousel.prototype._createStyleElem = function (datas) {
            var styleItem = this._renderer.createElement('style');
            if (datas) {
                var styleText = this._renderer.createText(datas);
                this._renderer.appendChild(styleItem, styleText);
            }
            this._renderer.appendChild(this.carousel, styleItem);
            return styleItem;
        };
        NguCarousel.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: core.IterableDiffers },
            { type: Object, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] },
            { type: core.ChangeDetectorRef }
        ]; };
        __decorate([
            core.Input('inputs')
        ], NguCarousel.prototype, "inputs", void 0);
        __decorate([
            core.Output('carouselLoad')
        ], NguCarousel.prototype, "carouselLoad", void 0);
        __decorate([
            core.Output('onMove')
        ], NguCarousel.prototype, "onMove", void 0);
        __decorate([
            core.Input('dataSource')
        ], NguCarousel.prototype, "dataSource", null);
        __decorate([
            core.ContentChildren(NguCarouselDefDirective)
        ], NguCarousel.prototype, "_defDirec", void 0);
        __decorate([
            core.ViewChild(NguCarouselOutlet, { static: true })
        ], NguCarousel.prototype, "_nodeOutlet", void 0);
        __decorate([
            core.ContentChild(NguCarouselNextDirective, /* TODO: add static flag */ { read: core.ElementRef })
        ], NguCarousel.prototype, "nextBtn", null);
        __decorate([
            core.ContentChild(NguCarouselPrevDirective, /* TODO: add static flag */ { read: core.ElementRef })
        ], NguCarousel.prototype, "prevBtn", null);
        __decorate([
            core.ViewChild('ngucarousel', { read: core.ElementRef, static: true })
        ], NguCarousel.prototype, "carouselMain1", void 0);
        __decorate([
            core.ViewChild('nguItemsContainer', { read: core.ElementRef, static: true })
        ], NguCarousel.prototype, "nguItemsContainer", void 0);
        __decorate([
            core.ViewChild('touchContainer', { read: core.ElementRef, static: true })
        ], NguCarousel.prototype, "touchContainer", void 0);
        __decorate([
            core.Input()
        ], NguCarousel.prototype, "trackBy", null);
        NguCarousel = __decorate([
            core.Component({
                // tslint:disable-next-line:component-selector
                selector: 'ngu-carousel',
                template: "<div #ngucarousel class=\"ngucarousel\">\r\n  <div #touchContainer class=\"ngu-touch-container\">\r\n    <div #nguItemsContainer class=\"ngucarousel-items\">\r\n      <ng-container nguCarouselOutlet></ng-container>\r\n    </div>\r\n  </div>\r\n  <div class=\"nguclearFix\"></div>\r\n  <ng-content select=\"[NguCarouselPrev]\"></ng-content>\r\n  <ng-content select=\"[NguCarouselNext]\"></ng-content>\r\n</div>\r\n<ng-content select=\"[NguCarouselPoint]\"></ng-content>\r\n",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                styles: [":host{display:block;position:relative}:host.ngurtl{direction:rtl}.ngucarousel{position:relative;overflow:hidden;height:100%}.ngucarousel .ngucarousel-items{position:relative;display:-webkit-box;display:flex;height:100%}.nguvertical{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.banner .ngucarouselPointDefault .ngucarouselPoint{position:absolute;width:100%;bottom:20px}.banner .ngucarouselPointDefault .ngucarouselPoint li{background:rgba(255,255,255,.55)}.banner .ngucarouselPointDefault .ngucarouselPoint li.active{background:#fff}.banner .ngucarouselPointDefault .ngucarouselPoint li:hover{cursor:pointer}.ngucarouselPointDefault .ngucarouselPoint{list-style-type:none;text-align:center;padding:12px;margin:0;white-space:nowrap;overflow:auto;box-sizing:border-box}.ngucarouselPointDefault .ngucarouselPoint li{display:inline-block;border-radius:50%;background:rgba(0,0,0,.55);padding:4px;margin:0 4px;-webkit-transition:.4s;transition:.4s}.ngucarouselPointDefault .ngucarouselPoint li.active{background:#6b6b6b;-webkit-transform:scale(1.8);transform:scale(1.8)}.ngucarouselPointDefault .ngucarouselPoint li:hover{cursor:pointer}.nguclearFix{clear:both}"]
            })
            // tslint:disable-next-line:component-class-suffix
            ,
            __param(3, core.Inject(core.PLATFORM_ID))
        ], NguCarousel);
        return NguCarousel;
    }(NguCarouselStore));

    var NguItemComponent = /** @class */ (function () {
        function NguItemComponent() {
            this.classes = true;
        }
        __decorate([
            core.HostBinding('class.item')
        ], NguItemComponent.prototype, "classes", void 0);
        NguItemComponent = __decorate([
            core.Component({
                // tslint:disable-next-line:component-selector
                selector: 'ngu-item',
                template: "<ng-content></ng-content>\r\n",
                styles: [""]
            })
        ], NguItemComponent);
        return NguItemComponent;
    }());

    var NguTileComponent = /** @class */ (function () {
        function NguTileComponent() {
            this.classes = true;
        }
        __decorate([
            core.HostBinding('class.item')
        ], NguTileComponent.prototype, "classes", void 0);
        NguTileComponent = __decorate([
            core.Component({
                // tslint:disable-next-line:component-selector
                selector: 'ngu-tile',
                template: "<div class=\"tile\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                styles: [":host{padding:10px;box-sizing:border-box}.tile{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)}"]
            })
        ], NguTileComponent);
        return NguTileComponent;
    }());

    var NguCarouselModule = /** @class */ (function () {
        function NguCarouselModule() {
        }
        NguCarouselModule = __decorate([
            core.NgModule({
                imports: [common.CommonModule],
                exports: [
                    NguCarousel,
                    NguItemComponent,
                    NguTileComponent,
                    NguCarouselPointDirective,
                    NguCarouselItemDirective,
                    NguCarouselNextDirective,
                    NguCarouselPrevDirective,
                    NguCarouselDefDirective,
                    NguCarouselOutlet
                ],
                declarations: [
                    NguCarousel,
                    NguItemComponent,
                    NguTileComponent,
                    NguCarouselPointDirective,
                    NguCarouselItemDirective,
                    NguCarouselNextDirective,
                    NguCarouselPrevDirective,
                    NguCarouselDefDirective,
                    NguCarouselOutlet
                ]
            })
        ], NguCarouselModule);
        return NguCarouselModule;
    }());

    exports.NguCarousel = NguCarousel;
    exports.NguCarouselConfig = NguCarouselConfig;
    exports.NguCarouselModule = NguCarouselModule;
    exports.NguCarouselStore = NguCarouselStore;
    exports.ɵa = ItemsControl;
    exports.ɵb = NguButton;
    exports.ɵc = NguCarouselItemDirective;
    exports.ɵd = NguCarouselNextDirective;
    exports.ɵe = NguCarouselPrevDirective;
    exports.ɵf = NguCarouselPointDirective;
    exports.ɵg = NguCarouselDefDirective;
    exports.ɵh = NguCarouselOutlet;
    exports.ɵi = NguItemComponent;
    exports.ɵj = NguTileComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngu-carousel.umd.js.map
