import {Component, Input, EventEmitter, Output, OnInit} from "@angular/core";
import {TreeNode} from "./tree-node";

@Component({
  selector: 'jb-tree-navigator',
  styleUrls: ['./tree-navigator.style.scss'],
  templateUrl: './tree-navigator.template.html',
})
export class TreeNavigatorComponent implements OnInit {
  @Input()
  treeRoot: TreeNode;
  @Output()
  onSelection = new EventEmitter<TreeNode>();
  private _breadCrumb: TreeNode[] = [];
  private _selection: TreeNode;
  private _children: TreeNode[];
  constructor() {
  }

  ngOnInit(): void {
    this.selectNode(this.treeRoot);
  }

  selectNode(node: TreeNode): void {
    this._selection = node;
    this._selection.children()
      .then(c => {
        if (c && c.length > 0) {
          this.setBreadcrumb(node);
          this._children = c;
        }
        this.onSelection.emit(this._selection);
      });
  }

  get breadCrumb(): TreeNode[] {
    return this._breadCrumb;
  }

  get children(): TreeNode[] {
    return this._children;
  }

  private setBreadcrumb(node: TreeNode): void {
    const nodeIndex = this._breadCrumb.indexOf(node);
    if (nodeIndex >= 0) {
      // If node exists in breadcrumb, reset breadcrumb
      // to the segment just before it.
      this._breadCrumb = this._breadCrumb.slice(0, nodeIndex);
    }
    this._breadCrumb.push(node);
  }
}
