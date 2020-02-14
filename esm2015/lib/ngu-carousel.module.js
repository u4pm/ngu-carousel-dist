import { __decorate } from "tslib";
import { NguCarouselPointDirective, NguCarouselItemDirective, NguCarouselNextDirective, NguCarouselPrevDirective, NguCarouselDefDirective, NguCarouselOutlet } from './ngu-carousel.directive';
import { NguItemComponent } from './ngu-item/ngu-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguCarousel } from './ngu-carousel/ngu-carousel.component';
import { NguTileComponent } from './ngu-tile/ngu-tile.component';
let NguCarouselModule = class NguCarouselModule {
};
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
export { NguCarouselModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd1LWNhcm91c2VsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ndS1jYXJvdXNlbC8iLCJzb3VyY2VzIjpbImxpYi9uZ3UtY2Fyb3VzZWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wseUJBQXlCLEVBQ3pCLHdCQUF3QixFQUN4Qix3QkFBd0IsRUFDeEIsd0JBQXdCLEVBQ3hCLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDbEIsTUFBTSwwQkFBMEIsQ0FBQztBQUNsQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUtqRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUEyQmpFLElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0NBQUcsQ0FBQTtBQUFwQixpQkFBaUI7SUF6QjdCLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztRQUN2QixPQUFPLEVBQUU7WUFDUCxXQUFXO1lBQ1gsZ0JBQWdCO1lBQ2hCLGdCQUFnQjtZQUNoQix5QkFBeUI7WUFDekIsd0JBQXdCO1lBQ3hCLHdCQUF3QjtZQUN4Qix3QkFBd0I7WUFDeEIsdUJBQXVCO1lBQ3ZCLGlCQUFpQjtTQUNsQjtRQUNELFlBQVksRUFBRTtZQUNaLFdBQVc7WUFDWCxnQkFBZ0I7WUFDaEIsZ0JBQWdCO1lBQ2hCLHlCQUF5QjtZQUN6Qix3QkFBd0I7WUFDeEIsd0JBQXdCO1lBQ3hCLHdCQUF3QjtZQUN4Qix1QkFBdUI7WUFDdkIsaUJBQWlCO1NBQ2xCO0tBQ0YsQ0FBQztHQUNXLGlCQUFpQixDQUFHO1NBQXBCLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgTmd1Q2Fyb3VzZWxQb2ludERpcmVjdGl2ZSxcclxuICBOZ3VDYXJvdXNlbEl0ZW1EaXJlY3RpdmUsXHJcbiAgTmd1Q2Fyb3VzZWxOZXh0RGlyZWN0aXZlLFxyXG4gIE5ndUNhcm91c2VsUHJldkRpcmVjdGl2ZSxcclxuICBOZ3VDYXJvdXNlbERlZkRpcmVjdGl2ZSxcclxuICBOZ3VDYXJvdXNlbE91dGxldFxyXG59IGZyb20gJy4vbmd1LWNhcm91c2VsLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE5ndUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL25ndS1pdGVtL25ndS1pdGVtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7XHJcbiAgSGFtbWVyR2VzdHVyZUNvbmZpZyxcclxuICBIQU1NRVJfR0VTVFVSRV9DT05GSUdcclxufSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmd1Q2Fyb3VzZWwgfSBmcm9tICcuL25ndS1jYXJvdXNlbC9uZ3UtY2Fyb3VzZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmd1VGlsZUNvbXBvbmVudCB9IGZyb20gJy4vbmd1LXRpbGUvbmd1LXRpbGUuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTmd1Q2Fyb3VzZWwsXHJcbiAgICBOZ3VJdGVtQ29tcG9uZW50LFxyXG4gICAgTmd1VGlsZUNvbXBvbmVudCxcclxuICAgIE5ndUNhcm91c2VsUG9pbnREaXJlY3RpdmUsXHJcbiAgICBOZ3VDYXJvdXNlbEl0ZW1EaXJlY3RpdmUsXHJcbiAgICBOZ3VDYXJvdXNlbE5leHREaXJlY3RpdmUsXHJcbiAgICBOZ3VDYXJvdXNlbFByZXZEaXJlY3RpdmUsXHJcbiAgICBOZ3VDYXJvdXNlbERlZkRpcmVjdGl2ZSxcclxuICAgIE5ndUNhcm91c2VsT3V0bGV0XHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE5ndUNhcm91c2VsLFxyXG4gICAgTmd1SXRlbUNvbXBvbmVudCxcclxuICAgIE5ndVRpbGVDb21wb25lbnQsXHJcbiAgICBOZ3VDYXJvdXNlbFBvaW50RGlyZWN0aXZlLFxyXG4gICAgTmd1Q2Fyb3VzZWxJdGVtRGlyZWN0aXZlLFxyXG4gICAgTmd1Q2Fyb3VzZWxOZXh0RGlyZWN0aXZlLFxyXG4gICAgTmd1Q2Fyb3VzZWxQcmV2RGlyZWN0aXZlLFxyXG4gICAgTmd1Q2Fyb3VzZWxEZWZEaXJlY3RpdmUsXHJcbiAgICBOZ3VDYXJvdXNlbE91dGxldFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5ndUNhcm91c2VsTW9kdWxlIHt9XHJcbiJdfQ==