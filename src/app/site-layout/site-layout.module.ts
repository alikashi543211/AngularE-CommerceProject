import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavigationComponent } from './navigation/navigation.component';



@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        NavigationComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        NavigationComponent
    ]
})
export class SiteLayoutModule { }
