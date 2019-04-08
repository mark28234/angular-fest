import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../../models/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-facet',
  templateUrl: './facet.component.html',
  styleUrls: ['./facet.component.scss']
})
export class FacetComponent implements OnInit {
  categories: Category[];
  categoryFilterList: string[] = [];
  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
      this.list_to_tree(this.categories);
    });
  }
  list_to_tree(list) {
    let map = {},
      node,
      roots = [],
      i;
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
    let toggler = document.getElementsByClassName('caret');
    let i;

    for (i = 0; i < toggler.length; i++) {
      toggler[i].addEventListener('click', function() {
        this.parentElement.querySelector('.nested').classList.toggle('active');
        this.classList.toggle('caret-down');
      });
    }
  }
  categoryFilter(id) {
    if (this.categoryFilterList.includes(id)) {
      this.categoryFilterList = this.categoryFilterList.filter(
        (value) => value != id
      );
    } else {
      this.categoryFilterList.push(id);
    }
  }
}
