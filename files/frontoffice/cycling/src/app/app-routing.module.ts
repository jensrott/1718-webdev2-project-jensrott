import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Pages */
import { HomePageComponent } from './home/pages/home-page/home-page.component';
import { AuctionsPageComponent } from './auctions/pages/auctions-page/auctions-page.component';
import { OfferPageComponent } from './offer/pages/offer-page/offer-page.component';
import { ContactPageComponent } from './contact/pages/contact-page/contact-page.component';
import { NoAccountPageComponent } from './profile/pages/noaccount-page/noaccount-page.component';
import { RegisterPageComponent } from './profile/pages/register-page/register-page.component';
import { NotFoundPageComponent } from './core/pages/not-found-page/not-found-page.component';
import { AuctionsDetailComponent } from './auctions/pages/auctions-detail/auctions-detail.component';

const routes: Routes = [
 {path: '', redirectTo: '/home', pathMatch: 'full'},
 {path: 'home', component: HomePageComponent},
 {path: 'products', component: AuctionsPageComponent},
 {path: 'create', component: NoAccountPageComponent},
 {path: 'register', component: RegisterPageComponent},
 {path: 'offer', component: OfferPageComponent},
 {path: 'contact', component: ContactPageComponent},
 {path: 'detail', component: AuctionsDetailComponent}, // Temporary
 {path: '404', component: NotFoundPageComponent},
 {path: '**', redirectTo: '/404'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  declarations: [],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
