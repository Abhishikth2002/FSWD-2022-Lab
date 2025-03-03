import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';



const routes: Routes = [
  { path: 'Home',component: HomeComponent},
  { path: 'About',component: AboutComponent},
  { path: 'Service',component: ServiceComponent},
  { path: 'Contact',component: ContactComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
