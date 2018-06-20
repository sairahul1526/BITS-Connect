import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { QuicklinkComponent } from './quicklink/quicklink.component';
import { TimingsComponent } from './timings/timings.component';
import { TravelComponent } from './travel/travel.component';
import { PapersComponent } from './papers/papers.component';


const routes: Routes =[
  { path: 'home',  component: HomeComponent,
      children: [
      { path: 'events',      component: DashboardComponent },
      { path: 'calendar',   component: UserProfileComponent },
      { path: 'complaints',     component: TableListComponent },
      { path: 'mess',     component: TypographyComponent },
      { path: 'contacts',          component: IconsComponent },
      { path: 'buysell',           component: MapsComponent },
      { path: 'lostfound',  component: NotificationsComponent },
      { path: 'quicklinks',  component: QuicklinkComponent },
      { path: 'papers',     component: PapersComponent },
      { path: 'timings',  component: TimingsComponent },
      { path: 'travel',     component: TravelComponent },
      // { path: 'upgrade',        component: UpgradeComponent },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  exports: [
    RouterModule
  ],
})
export class HomeRoutingModule { }

