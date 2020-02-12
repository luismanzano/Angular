import { Directive, Host, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: 'li[contar-clicks]'
})

export class ContarClicksDirective{
    @HostBinding('style.opacity') opacity: number = .1;
    nClicks = 0;
    @HostListener('click', ['$event.target']) onclick(btn){
        console.log('a', btn, "Numero de clicks", this.nClicks++);
        this.opacity += .1;
    }
}