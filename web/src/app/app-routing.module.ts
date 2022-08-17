import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsFantasyComponent } from './rxjs-fantasy/rxjs-fantasy.component';

//#region custom component


//#endregion

const routes: Routes = [
  {path:'rxjs-fantasy', component: RxjsFantasyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
