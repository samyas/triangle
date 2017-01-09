import { Component, AfterViewInit, Input, ContentChild, TemplateRef } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'edit-list',
  styleUrls: [
		    'edit-list.component.css'
  ],
  templateUrl: 'edit-list.component.html'
})
export class EditListComponent<T extends {id: string | number}> implements AfterViewInit {

    @ContentChild(TemplateRef)
    public itemTemplate: TemplateRef<Element>;
    
    @Input('items') items: Array<T>;


    ngAfterViewInit() {
    }



    addElement() {
      //let c: {new(...args: any[]): T; };
      //let d : T = new c();

      this.items.push(<T>(Object.assign({}, this.items[0], { id : 8 })));
    }

    deleteElement() {
    }
}