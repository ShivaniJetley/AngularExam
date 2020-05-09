import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { checknumber } from './checknumber.component'

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [checknumber],
  exports: [checknumber],
})
export class checkNumModule {}
