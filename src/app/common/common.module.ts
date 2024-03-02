import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { SideNavComponent } from './components/side-nav/side-nav.component';

@NgModule({
  declarations: [NavbarComponent, SideNavComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [NavbarComponent, SideNavComponent],
})
export class RaptoriumCommonModule { }
