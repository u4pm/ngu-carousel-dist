import { __decorate } from "tslib";
import { Component, HostBinding } from '@angular/core';
var NguTileComponent = /** @class */ (function () {
    function NguTileComponent() {
        this.classes = true;
    }
    __decorate([
        HostBinding('class.item')
    ], NguTileComponent.prototype, "classes", void 0);
    NguTileComponent = __decorate([
        Component({
            // tslint:disable-next-line:component-selector
            selector: 'ngu-tile',
            template: "<div class=\"tile\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
            styles: [":host{padding:10px;box-sizing:border-box}.tile{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)}"]
        })
    ], NguTileComponent);
    return NguTileComponent;
}());
export { NguTileComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd1LXRpbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd1LWNhcm91c2VsLyIsInNvdXJjZXMiOlsibGliL25ndS10aWxlL25ndS10aWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRdkQ7SUFBQTtRQUM2QixZQUFPLEdBQUcsSUFBSSxDQUFDO0lBQzVDLENBQUM7SUFENEI7UUFBMUIsV0FBVyxDQUFDLFlBQVksQ0FBQztxREFBZ0I7SUFEL0IsZ0JBQWdCO1FBTjVCLFNBQVMsQ0FBQztZQUNULDhDQUE4QztZQUM5QyxRQUFRLEVBQUUsVUFBVTtZQUNwQiw2RUFBc0M7O1NBRXZDLENBQUM7T0FDVyxnQkFBZ0IsQ0FFNUI7SUFBRCx1QkFBQztDQUFBLEFBRkQsSUFFQztTQUZZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ25ndS10aWxlJyxcclxuICB0ZW1wbGF0ZVVybDogJ25ndS10aWxlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnbmd1LXRpbGUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd1VGlsZUNvbXBvbmVudCB7XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pdGVtJykgY2xhc3NlcyA9IHRydWU7XHJcbn1cclxuIl19