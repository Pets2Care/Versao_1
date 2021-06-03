import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Highlight } from 'src/app/shared/models/highlight.model';
import { HelperService } from 'src/app/shared/services/helper.service';

import { FeedHighlightModalComponent } from '../feed-highlight-modal/feed-highlight-modal.component';

@Component({
  selector: 'app-feed-highlight',
  templateUrl: './feed-highlight.component.html',
  styleUrls: ['./feed-highlight.component.scss'],
})
export class FeedHighlightComponent {
  @Input() item: Highlight = null;
  public helperService: HelperService;

  constructor(
    private modalController: ModalController,
    helperService: HelperService,
  ) {
    this.helperService = helperService;
  }

  async viewHighlight(): Promise<void> {
    console.log('viewHighlight -> this.item.id = ', this.item?.id);
    const modal = await this.modalController.create({
      component: FeedHighlightModalComponent,
      componentProps: {
        title: this.item?.title,
        content: this.item?.content,
        createdAt: this.item?.createdAt,
      },
    });
    modal.present();
  }
}
