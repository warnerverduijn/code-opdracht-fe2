import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './faq/card/card.component';
import { AccordionComponent } from './faq/accordion/accordion.component';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FaqService } from './faq/faq.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AccordionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule
  ],
  providers: [
    FaqService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
