import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { CoreModule } from '../core/core.module';
import { AsideComponent } from './aside/aside.component';
import { BaseComponent } from './base/base.component';
import { FooterComponent } from './footer/footer.component';
import { MenuMobileComponent } from './header/menu-mobile/menu-mobile.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { BlockUIModule } from 'ng-block-ui';
import { HeaderComponent } from './header/header.component';
import { LogoutComponent } from './header/modal-logout/logout.component';
import { UserSectionComponent } from './header/user-section/user-section.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AsideComponent,
    FooterComponent,
    UserSectionComponent,
    BaseComponent,
    MenuMobileComponent,
    UserPanelComponent,
    LogoutComponent
  ],

  exports:[
    HeaderComponent,
    AsideComponent,
    FooterComponent,
    UserSectionComponent,
    BaseComponent,
    MenuMobileComponent,
    UserPanelComponent,
  ],

  imports: [
    // CommonModule,
    // FormsModule,
    // ReactiveFormsModule,
    // RouterModule,

    CoreModule,
    MaterialModule,

    BlockUIModule.forRoot(),
  ]
})
export class LayoutModule { }
