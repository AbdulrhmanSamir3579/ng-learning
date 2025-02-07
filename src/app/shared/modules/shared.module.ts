import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';

const components: any[] = []
const modules: any[] = [
  CommonModule,
  TranslateModule
]

@NgModule({
  declarations: components,
  imports: modules,
  exports: [...components, ...modules],
})
export class SharedModule {
}
