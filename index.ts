import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TreeNavigatorComponent, TreeNode} from "./src";

export {TreeNavigatorComponent, TreeNode};

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TreeNavigatorComponent
  ],
  exports: [
    TreeNavigatorComponent
  ]
})
export class TreeNavigatorModule {
}
