import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CategoryList } from '../../../models/category.model';
import { AppState } from '../../../app.state';
import * as CategorylActions from '../../../actions/category.actions';
import * as productlActions from '../../../actions/product.actions';

@Component({
  selector: 'app-facet',
  templateUrl: './facet.component.html',
  styleUrls: ['./facet.component.scss']
})
export class FacetComponent implements OnInit {
  $categories: Observable<CategoryList>;
  categories: any;
  categoryFilterList: string[]=[];
  constructor(private store: Store<AppState>, private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.$categories = this.store.select('categoryList');
    this.$categories.subscribe(result => {
      this.categories = result;
      this.list_to_tree(result);
      this.cd.detectChanges();
      this.treeStructureMenu();
    }
    );
    this.store.dispatch(new CategorylActions.LoadCategory());

  }
  list_to_tree(list) { 
    var map = {}, node, roots = [], i;
    for (i = 0; i < list.length; i += 1) {
        map[list[i].id] = i; // initialize the map
        list[i].children = []; // initialize the children
    }
    for (i = 0; i < list.length; i += 1) {
        node = list[i];
        if (node.parent !== 0) {
            // if you have dangling branches check that map[node.parentId] exists
            list[map[node.parent]].children.push(node);
        } else {
            roots.push(node);
        }
    }
    this.categories = roots;
}
  treeStructureMenu() {
    let toggler = document.getElementsByClassName("caret");
    let i;

    for (i = 0; i < toggler.length; i++) {
      toggler[i].addEventListener("click", function () {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-down");
      });
    }
  }
  categoryFilter(id) {
    if(this.categoryFilterList.includes(id)){
      this.categoryFilterList = this.categoryFilterList.filter( value => value!= id)
    }else{
      this.categoryFilterList.push(id);
    }
   // this.store.dispatch(new productlActions.LoadProduct('',this.categoryFilterList))
  }

  

}
