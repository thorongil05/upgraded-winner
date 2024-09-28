import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerTableComponent } from './player-table/player-table.component';
import { StartingCarouselComponent } from './starting-carousel/starting-carousel.component';
import { RolePipe } from './pipes/RolePipe';
import { TeamPipe } from './pipes/TeamPipe';
import { StartingMainComponent } from './starting-main/starting-main.component';
import { RulePipe } from './pipes/RulePipe';
import { MatDialogModule } from '@angular/material/dialog';
import { PlayerFormComponent } from './player-form/player-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    PlayerTableComponent,
    StartingCarouselComponent,
    RolePipe,
    TeamPipe,
    RulePipe,
    StartingMainComponent,
    PlayerFormComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [StartingMainComponent],
})
export class StartingModule {}
