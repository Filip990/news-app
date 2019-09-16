import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalArticleComponent } from 'src/app/modal-article/modal-article.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() article;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openModal(article) {
    const ref = this.modalService.open(ModalArticleComponent);
    ref.componentInstance.data = article;
  }

}
