import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoAuthGuard } from './core/guards/no-auth.guard';
import { ValidarTokenGuard } from './core/guards/validar-token.guard';
import { PERMISSION } from './core/routes/internal.routes';
import { BaseComponent } from './layout/base/base.component';

const routes: Routes = [
  { path: 'auth',
    loadChildren: () => import('./views/auth/auth.module').then((m) => m.AuthModule),
    canActivate: [NoAuthGuard]
  },
  { path:'error',
    loadChildren: () => import('./views/errors/errors.module').then((m) => m.ErrorsModule),
  },
  {
    path:'',component:BaseComponent,
    children:[
      { path:'home',
        loadChildren: () => import ('./views/pages/home/home.module').then((m) => m.HomeModule),
        canActivate: [ValidarTokenGuard],
      },
      { path:'gestion',
        loadChildren: () => import ('./views/pages/gestion-personal/gestion-personal.module').then((m)=>m.GestionPersonalModule),
        canActivate: [ValidarTokenGuard],
        // data: {rol_menu: [PERMISSION.MENU_PERSONAS, PERMISSION.SUBMENU_PERSONAS]}
      },
      {
        path:'mantenimiento',
        loadChildren: () => import ('./views/pages/mantenimiento/mantenimiento.module').then((m)=>m.MantenimientoModule),
        canActivate: [ValidarTokenGuard],
        // data: {rol_menu: [PERMISSION.MENU_MANTENIMIENTO]}
      },
      {
        path:'dashboard',
        // loadChildren: () => import ('./views/pages/seguridad/seguridad.module').then((m)=>m.SeguridadModule),
        loadChildren: () => import ('./views/pages/Dashboard/seguridad.module').then((m)=> m.SeguridadModule),
      },
      {
        path:'factura',
        loadChildren: () => import ('./views/pages/facturacion/facturacion.module').then((m)=>m.FacturacionModule),
        canActivate: [ValidarTokenGuard],
        // data: {rol_menu: [PERMISSION.MENU_FACTURACION]}
      },

      { path: 'administracion',
      loadChildren: () => import('./views/pages/module-configuration/module-configuration.module').then(m => m.ModuleConfigurationModule)
      },

      { path: 'recursos',
      loadChildren: () => import('./views/pages/Recursos/recursos.module').then(m => m.RecursosModule)
      },

      { path: 'liquidacion',
      loadChildren: () => import('./views/pages/Liquidacion/Liquidacion.module').then(m => m.LiquidacionModule)
      },

      {path: '', redirectTo: 'home', pathMatch: 'full'},
      { path:'**', redirectTo:'/error/404' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}


