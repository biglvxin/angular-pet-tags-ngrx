import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tag-shape',
  templateUrl: './tag-shape.component.html',
  styleUrls: ['./tag-shape.component.css']
})
export class TagShapeComponent implements OnInit {
  tagShape: string;
  @Output() selectShapeEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  selectShape(shape: string) {
    this.selectShapeEvent.emit(shape);
  }

}
