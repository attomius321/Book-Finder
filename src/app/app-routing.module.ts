import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstQuestionComponent} from './questions/first-question/first-question.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '1', component: FirstQuestionComponent },
  { path: '',   redirectTo: '/1', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
