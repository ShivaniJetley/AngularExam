import { Component } from '@angular/core'

@Component({
  selector: 'checkNum',
  templateUrl: 'checknumber.component.html',
})
export class checknumber {

  public numberval1 = null
  public numberval2 = null
  public finaltext = null

  validateNum(){
    if(!isNaN(this.numberval1) && !isNaN(this.numberval1) && this.numberval1 > 0 && this.numberval2 > 0)
    {
    if(this.numberval1 != null && this.numberval2 != null)
    {
      let counter = 0
      this.finaltext = ''
      for (let index = this.numberval1; index < this.numberval2; index++) {
        if(index % 2 == 0)
        {
          counter++
          this.finaltext = this.finaltext + index + ','
        }        
      }
      this.finaltext  = "There are " + counter + " even numbers " + this.finaltext
    }
  }
  else
  {
    this.finaltext  = "Either of the input is not valid"
  }
}
}