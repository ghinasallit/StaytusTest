import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [

  {
    path: 'home',
    loadChildren: () => import('../modules/home.module').then(m => m.HomeModule),
    data: {
      title: '_Home'
    },
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'page-404',
    pathMatch: 'full'
  }];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'disabled',
      relativeLinkResolution: 'corrected',
      preloadingStrategy: PreloadAllModules,
      initialNavigation: 'enabled',

    })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
