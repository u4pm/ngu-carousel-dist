import { __decorate } from "tslib";
import { NguCarouselPointDirective, NguCarouselItemDirective, NguCarouselNextDirective, NguCarouselPrevDirective, NguCarouselDefDirective, NguCarouselOutlet } from './ngu-carousel.directive';
import { NguItemComponent } from './ngu-item/ngu-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguCarousel } from './ngu-carousel/ngu-carousel.component';
import { NguTileComponent } from './ngu-tile/ngu-tile.component';
var NguCarouselModule = /** @class */ (function () {
    function NguCarouselModule() {
    }
    NguCarouselModule = __decorate([
        NgModule({
            imports: [CommonModule],
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
export { NguCarouselModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd1LWNhcm91c2VsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ndS1jYXJvdXNlbC8iLCJzb3VyY2VzIjpbImxpYi9uZ3UtY2Fyb3VzZWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wseUJBQXlCLEVBQ3pCLHdCQUF3QixFQUN4Qix3QkFBd0IsRUFDeEIsd0JBQXdCLEVBQ3hCLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDbEIsTUFBTSwwQkFBMEIsQ0FBQztBQUNsQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUtqRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUEyQmpFO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixpQkFBaUI7UUF6QjdCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztZQUN2QixPQUFPLEVBQUU7Z0JBQ1AsV0FBVztnQkFDWCxnQkFBZ0I7Z0JBQ2hCLGdCQUFnQjtnQkFDaEIseUJBQXlCO2dCQUN6Qix3QkFBd0I7Z0JBQ3hCLHdCQUF3QjtnQkFDeEIsd0JBQXdCO2dCQUN4Qix1QkFBdUI7Z0JBQ3ZCLGlCQUFpQjthQUNsQjtZQUNELFlBQVksRUFBRTtnQkFDWixXQUFXO2dCQUNYLGdCQUFnQjtnQkFDaEIsZ0JBQWdCO2dCQUNoQix5QkFBeUI7Z0JBQ3pCLHdCQUF3QjtnQkFDeEIsd0JBQXdCO2dCQUN4Qix3QkFBd0I7Z0JBQ3hCLHVCQUF1QjtnQkFDdkIsaUJBQWlCO2FBQ2xCO1NBQ0YsQ0FBQztPQUNXLGlCQUFpQixDQUFHO0lBQUQsd0JBQUM7Q0FBQSxBQUFqQyxJQUFpQztTQUFwQixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIE5ndUNhcm91c2VsUG9pbnREaXJlY3RpdmUsXHJcbiAgTmd1Q2Fyb3VzZWxJdGVtRGlyZWN0aXZlLFxyXG4gIE5ndUNhcm91c2VsTmV4dERpcmVjdGl2ZSxcclxuICBOZ3VDYXJvdXNlbFByZXZEaXJlY3RpdmUsXHJcbiAgTmd1Q2Fyb3VzZWxEZWZEaXJlY3RpdmUsXHJcbiAgTmd1Q2Fyb3VzZWxPdXRsZXRcclxufSBmcm9tICcuL25ndS1jYXJvdXNlbC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBOZ3VJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3UtaXRlbS9uZ3UtaXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQge1xyXG4gIEhhbW1lckdlc3R1cmVDb25maWcsXHJcbiAgSEFNTUVSX0dFU1RVUkVfQ09ORklHXHJcbn0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5ndUNhcm91c2VsIH0gZnJvbSAnLi9uZ3UtY2Fyb3VzZWwvbmd1LWNhcm91c2VsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5ndVRpbGVDb21wb25lbnQgfSBmcm9tICcuL25ndS10aWxlL25ndS10aWxlLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIE5ndUNhcm91c2VsLFxyXG4gICAgTmd1SXRlbUNvbXBvbmVudCxcclxuICAgIE5ndVRpbGVDb21wb25lbnQsXHJcbiAgICBOZ3VDYXJvdXNlbFBvaW50RGlyZWN0aXZlLFxyXG4gICAgTmd1Q2Fyb3VzZWxJdGVtRGlyZWN0aXZlLFxyXG4gICAgTmd1Q2Fyb3VzZWxOZXh0RGlyZWN0aXZlLFxyXG4gICAgTmd1Q2Fyb3VzZWxQcmV2RGlyZWN0aXZlLFxyXG4gICAgTmd1Q2Fyb3VzZWxEZWZEaXJlY3RpdmUsXHJcbiAgICBOZ3VDYXJvdXNlbE91dGxldFxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBOZ3VDYXJvdXNlbCxcclxuICAgIE5ndUl0ZW1Db21wb25lbnQsXHJcbiAgICBOZ3VUaWxlQ29tcG9uZW50LFxyXG4gICAgTmd1Q2Fyb3VzZWxQb2ludERpcmVjdGl2ZSxcclxuICAgIE5ndUNhcm91c2VsSXRlbURpcmVjdGl2ZSxcclxuICAgIE5ndUNhcm91c2VsTmV4dERpcmVjdGl2ZSxcclxuICAgIE5ndUNhcm91c2VsUHJldkRpcmVjdGl2ZSxcclxuICAgIE5ndUNhcm91c2VsRGVmRGlyZWN0aXZlLFxyXG4gICAgTmd1Q2Fyb3VzZWxPdXRsZXRcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3VDYXJvdXNlbE1vZHVsZSB7fVxyXG4iXX0=