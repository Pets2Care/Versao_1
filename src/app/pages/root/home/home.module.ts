import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';

import { CustomFeedComponent } from './custom-feed/custom-feed.component';
import { FeedHighlightModalComponent } from './feed-highlight-modal/feed-highlight-modal.component';
import { FeedHighlightComponent } from './feed-highlight/feed-highlight.component';
import { FeedComponent } from './feed/feed.component';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModule,
  ],
  declarations: [
    HomePage,
    FeedComponent,
    CustomFeedComponent,
    FeedHighlightComponent,
    FeedHighlightModalComponent,
  ],
})
export class HomePageModule {}
