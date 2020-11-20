import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostFormPage } from './post-form.page';

const routes: Routes = [
  {
    path: '',
    component: PostFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostFormPageRoutingModule {}
