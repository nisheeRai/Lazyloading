import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ContactComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {

    config.backdrop = 'static';
    config.keyboard = false;
  }

  value = '';
  userName: string = "";
  submitted: boolean;
  contactForm: any;

  form = new FormGroup({
    Name: new FormControl('', [
      Validators.required
    ]),

    Address: new FormControl('',
      [Validators.pattern('[a-z A-Z0-9]*')
      ]),

    Pincode: new FormControl('',
      [Validators.pattern('[0-9]*'),
      Validators.maxLength(6),
      Validators.minLength(6)
      ]),

    Phone: new FormControl('',
      [Validators.required,
      Validators.maxLength(10),
      Validators.minLength(10)
      ]),

    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),

    Comment: new FormControl('')

  });

  update(value: string) {
    this.value = value;
  }

  get name() {
    return this.form.get('firstName')
  }

  ngOnInit() {
  }

  omit_special_char_no(event) {
    var k;
    k = event.charCode;
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32);
  }

  onSubmit() {
    this.submitted = true;
    this.form.reset();
  }

  open(content) {
    this.modalService.open(content);
  }
}

