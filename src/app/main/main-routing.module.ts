import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { MainGuard } from './guards/main.guard';
import { DashboardComponent } from "./pages/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [MainGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: DashboardComponent
      },
      {
        path: 'exercises',
        loadChildren: () => import('./pages/exercise/exercise.module').then(m => m.ExerciseModule)
      },
      {
        path: 'training-plans',
        loadChildren: () => import('./pages/training-plan/training-plan.module').then(m => m.TrainingPlanModule)
      },
      {
        path: 'trainings',
        loadChildren: () => import('./pages/training/training.module').then(m => m.TrainingModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
