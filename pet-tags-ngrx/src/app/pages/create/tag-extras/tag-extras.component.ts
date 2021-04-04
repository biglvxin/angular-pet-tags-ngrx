import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tag-extras',
  templateUrl: './tag-extras.component.html',
  styleUrls: ['./tag-extras.component.css']
})
export class TagExtrasComponent implements OnInit {
  tagClip: boolean;
  gems: boolean;
  @Output() toggleClipEvent = new EventEmitter;
  @Output() toggleGemsEvent = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }
  toggleClip() {
    this.toggleClipEvent.emit();
  }

  toggleGems() {
    this.toggleGemsEvent.emit();
  }

}
