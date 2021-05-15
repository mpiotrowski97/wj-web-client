import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import {
  NbActionsModule, NbButtonModule,
  NbCardModule, NbContextMenuModule,
  NbIconModule, NbInputModule,
  NbLayoutModule,
  NbMenuModule, NbSelectModule,
  NbSidebarModule, NbSpinnerModule, NbTagModule, NbUserModule
} from '@nebular/theme';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExerciseCardComponent } from './components/exercises/exercise-card/exercise-card.component';
import { ExerciseFormComponent } from './components/exercises/exercise-form/exercise-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { TrainingPlanFormComponent } from './components/training-plans/training-plan-form/training-plan-form.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {HighchartsChartModule} from "highcharts-angular";


@NgModule({
  declarations: [MainComponent, SidebarComponent, HeaderComponent, FooterComponent, ExerciseCardComponent, ExerciseFormComponent, TrainingPlanFormComponent, DashboardComponent],
  exports: [
    ExerciseCardComponent,
    ExerciseFormComponent,
    TrainingPlanFormComponent
  ],
    imports: [
        CommonModule,
        MainRoutingModule,
        NbLayoutModule,
        NbSidebarModule,
        NbMenuModule,
        NbIconModule,
        NbActionsModule,
        NbCardModule,
        NbUserModule,
        NbContextMenuModule,
        NbButtonModule,
        ReactiveFormsModule,
        NbInputModule,
        CoreModule,
        NbSpinnerModule,
        NbSelectModule,
        NbTagModule,
        FormsModule,
        HighchartsChartModule
    ]
})
export class MainModule { }
