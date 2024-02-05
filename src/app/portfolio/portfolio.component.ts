import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  getAttr(event:any):void {

    if(event.target.classList[0]=='leyar'){
    let myImg:any=document.querySelector('.spac-photo img')
    myImg.setAttribute('src',event.target.previousSibling.getAttribute('src'))
    document.querySelector('.spac-photo')?.classList.add('d-flex')
    document.querySelector('.spac-photo')?.classList.remove('d-none')
  }
  else if(event.target.getAttribute('fill')=='currentColor'){
    let myImg:any=document.querySelector('.spac-photo img')
    myImg.setAttribute('src',event.target.parentElement.parentElement.previousSibling.getAttribute('src'))
    document.querySelector('.spac-photo')?.classList.add('d-flex')
    document.querySelector('.spac-photo')?.classList.remove('d-none')
  }
  }
  close():void{
    document.querySelector('.spac-photo')?.classList.add('d-none')
    document.querySelector('.spac-photo')?.classList.remove('d-flex')
  }

}
