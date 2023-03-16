import { Component, OnInit } from "@angular/core";
import { FaqService } from "../faq.service";
import { VraagData } from "../vraagdata.interface";

@Component({
    selector: 'faq-card',
    styleUrls: ['card.component.scss'],
    templateUrl: 'card.component.html',
})

export class CardComponent implements OnInit {
    vragen: VraagData[] = [];

    constructor(private faqService: FaqService) { }

    ngOnInit() {
        this.loadVragen();
    }

    loadVragen() {
        return this.faqService
            .getVragen$()
            .subscribe((data: VraagData[]) => this.vragen = data);
    }
}