import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { checkNumModule } from './CheckNumber/checknumber.module'

@NgModule({
  imports: [BrowserModule,checkNumModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
