import { Injectable, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modalRef?: BsModalRef;
  columnId: string | undefined;
  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>, columnId: string) {
    this.columnId = columnId;
    this.modalRef = this.modalService.show(template);
  };

};
