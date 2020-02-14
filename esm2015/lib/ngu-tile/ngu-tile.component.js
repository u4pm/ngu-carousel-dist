import { __decorate } from "tslib";
import { Component, HostBinding } from '@angular/core';
let NguTileComponent = class NguTileComponent {
    constructor() {
        this.classes = true;
    }
};
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
export { NguTileComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd1LXRpbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd1LWNhcm91c2VsLyIsInNvdXJjZXMiOlsibGliL25ndS10aWxlL25ndS10aWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRdkQsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUFBN0I7UUFDNkIsWUFBTyxHQUFHLElBQUksQ0FBQztJQUM1QyxDQUFDO0NBQUEsQ0FBQTtBQUQ0QjtJQUExQixXQUFXLENBQUMsWUFBWSxDQUFDO2lEQUFnQjtBQUQvQixnQkFBZ0I7SUFONUIsU0FBUyxDQUFDO1FBQ1QsOENBQThDO1FBQzlDLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLDZFQUFzQzs7S0FFdkMsQ0FBQztHQUNXLGdCQUFnQixDQUU1QjtTQUZZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ25ndS10aWxlJyxcclxuICB0ZW1wbGF0ZVVybDogJ25ndS10aWxlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnbmd1LXRpbGUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd1VGlsZUNvbXBvbmVudCB7XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pdGVtJykgY2xhc3NlcyA9IHRydWU7XHJcbn1cclxuIl19