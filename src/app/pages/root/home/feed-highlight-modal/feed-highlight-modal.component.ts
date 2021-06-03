import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { Highlight } from 'src/app/shared/models/highlight.model';
import { HelperService } from 'src/app/shared/services/helper.service';
import { HighlightsService } from 'src/app/shared/services/highlights.service';

@Component({
  selector: 'app-feed-highlight-modal',
  templateUrl: './feed-highlight-modal.component.html',
  styleUrls: ['./feed-highlight-modal.component.scss'],
})
export class FeedHighlightModalComponent implements OnInit {
  selectedHighlight: Highlight = null;
  helperService: HelperService;

  constructor(
    private navParams: NavParams,
    private modalController: ModalController,
    private highlightsService: HighlightsService,
    helperService: HelperService,
  ) {
    this.helperService = helperService;
  }

  ngOnInit(): void {
    const passedId = this.navParams.get('id');

    if (passedId) {
      //console.log('selected Id = ', passedId);
      this.highlightsService.fetchById(passedId).subscribe(result => {
        //console.log('result = ', result);
        this.selectedHighlight = result;
        //console.log('selectedPet = ', this.selectedPet);
      });
    }
  }

  closeModal(): void {
    this.modalController.dismiss();
  }
}
