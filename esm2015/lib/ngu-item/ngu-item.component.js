import { __decorate } from "tslib";
import { Component, HostBinding } from '@angular/core';
let NguItemComponent = class NguItemComponent {
    constructor() {
        this.classes = true;
    }
};
__decorate([
    HostBinding('class.item')
], NguItemComponent.prototype, "classes", void 0);
NguItemComponent = __decorate([
    Component({
        // tslint:disable-next-line:component-selector
        selector: 'ngu-item',
        template: "<ng-content></ng-content>\r\n",
        styles: [""]
    })
], NguItemComponent);
export { NguItemComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd1LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd1LWNhcm91c2VsLyIsInNvdXJjZXMiOlsibGliL25ndS1pdGVtL25ndS1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRdkQsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUFBN0I7UUFDNkIsWUFBTyxHQUFHLElBQUksQ0FBQztJQUM1QyxDQUFDO0NBQUEsQ0FBQTtBQUQ0QjtJQUExQixXQUFXLENBQUMsWUFBWSxDQUFDO2lEQUFnQjtBQUQvQixnQkFBZ0I7SUFONUIsU0FBUyxDQUFDO1FBQ1QsOENBQThDO1FBQzlDLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLHlDQUFzQzs7S0FFdkMsQ0FBQztHQUNXLGdCQUFnQixDQUU1QjtTQUZZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ25ndS1pdGVtJyxcclxuICB0ZW1wbGF0ZVVybDogJ25ndS1pdGVtLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnbmd1LWl0ZW0uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd1SXRlbUNvbXBvbmVudCB7XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pdGVtJykgY2xhc3NlcyA9IHRydWU7XHJcbn1cclxuIl19