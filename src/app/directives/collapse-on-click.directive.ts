import {Directive, HostBinding, HostListener, Input, Output, EventEmitter} from '@angular/core';

@Directive({
  selector: '[collapse-on-click]',
  exportAs: 'collapsible'
})
export class CollapseOnClick {


  @Input('collapsed')
  isCollapsed = false;

  @Output('collapsed')
  collapsedOutput = new EventEmitter();

  get collapsed() {
    return this.isCollapsed;
  }

  @HostListener('click')
  toggle() {
    this.isCollapsed = !this.isCollapsed;
    this.collapsedOutput.emit(this.isCollapsed);
  }

}
