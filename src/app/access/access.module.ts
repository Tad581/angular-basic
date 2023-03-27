import { AccessRoutingModule } from './access-routing.module';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, AccessRoutingModule],
})
export class AccessModule {}
