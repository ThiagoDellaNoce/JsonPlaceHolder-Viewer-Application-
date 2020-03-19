import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

import { TechComponent } from './tech.component';

import { TechRoutingModule } from './tech.routing.module';
import { PostsComponent } from './posts/posts.component';
import { AlbumsComponent } from './albums/albums.component';
import { TodosComponent } from './todos/todos.component';
import { HomeComponent } from './home/home.component';
import { DialogPost } from './posts/detalhes/dialog-post';

@NgModule({
  declarations: [
    TechComponent,
    
    HomeComponent,
    PostsComponent,
    AlbumsComponent,
    TodosComponent,

    DialogPost
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    AngularMaterialModule,
    TechRoutingModule
  ],
  entryComponents: [DialogPost],
})
export class TechModule { }
