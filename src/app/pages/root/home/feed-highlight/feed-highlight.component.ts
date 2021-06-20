import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Highlight } from 'src/app/shared/models/highlight.model';
import { HelperService } from 'src/app/shared/services/helper.service';

import { FeedHighlightModalComponent } from '../feed-highlight-modal/feed-highlight-modal.component';

@Component({
  selector: 'app-feed-highlight',
  templateUrl: './feed-highlight.component.html',
  styleUrls: ['./feed-highlight.component.scss'],
})
export class FeedHighlightComponent implements OnChanges {
  @Input() highlight: Highlight = null;
  public helperService: HelperService;

  constructor(
    private modalController: ModalController,
    helperService: HelperService,
  ) {
    this.helperService = helperService;
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.highlight = this.helperService.formatHighlight(
      changes.highlight.currentValue,
    );
  }

  async viewHighlight(): Promise<void> {
    console.log('viewHighlight -> this.highlight.id = ', this.highlight?.id);
    const modal = await this.modalController.create({
      component: FeedHighlightModalComponent,
      componentProps: {
        id: this.highlight?.id,
      },
    });
    modal.present();
  }
}
