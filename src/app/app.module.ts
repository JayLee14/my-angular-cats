import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { MainComponent } from './main/main.component';
import { CatComponent } from './cat/cat.component';
import { IntersectionObserverComponent } from './intersection-observer/intersection-observer.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    MainComponent,
    CatComponent,
    IntersectionObserverComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: MainComponent
      },
      {
        path: 'cats/:cat-id',
        component: CatComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
