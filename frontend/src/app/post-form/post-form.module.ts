import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostFormPageRoutingModule } from './post-form-routing.module';

import { PostFormPage } from './post-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostFormPageRoutingModule
  ],
  declarations: [PostFormPage]
})
export class PostFormPageModule {}
