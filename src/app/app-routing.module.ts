import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [{path: '', redirectTo: 'home', pathMatch: 'full'}, {path: 'home', loadChildren: () => import('./main/views/home/home.module').then(m => m.HomeModule)}, {path: 'user', loadChildren: () => import('./main/views/user/user.module').then(m => m.UserModule)}, {path: 'body-data', loadChildren: () => import('./main/views/body-data/body-data.module').then(m => m.BodyDataModule)}, {path: 'login', loadChildren: () => import('./main/views/login/login.module').then(m => m.LoginModule)},];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
