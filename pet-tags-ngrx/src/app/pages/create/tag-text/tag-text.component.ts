import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tag-text',
  templateUrl: './tag-text.component.html',
  styleUrls: ['./tag-text.component.css']
})
export class TagTextComponent implements OnInit {
  tagTextInput = '';
  fontType = 'sans-serif';
  @Output() selectFontEvent = new EventEmitter;
  @Output() addTextEvent = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }
  selectFont(fontType: string) {
    console.log(fontType);
    this.selectFontEvent.emit(fontType);
  }

  addText(text: string) {
    console.log(text);
    this.addTextEvent.emit(text);
  }

}
