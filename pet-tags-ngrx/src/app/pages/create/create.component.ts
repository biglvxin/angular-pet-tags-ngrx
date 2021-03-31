import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PetTagActions } from 'src/app/models/pet-tag.actions';
import { initialTag, PetTag } from 'src/app/models/pet-tag.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  petTag:PetTag;
  constructor(private store: Store<PetTag>) { }

  ngOnInit(): void {
  }
 
  selectShapeHandler(shape: string) {
    console.log(shape);
    this.petTag.shape = shape;
    this.store.dispatch({
      type: PetTagActions.SELECT_SHAPE,
      payload: shape
    });
  }
  selectFontHandler(fontType: string) {
    this.store.dispatch({
      type: PetTagActions.SELECT_FONT,
      payload: fontType
    });
  }

  addTextHandler(text: string) {
    this.store.dispatch({
      type: PetTagActions.ADD_TEXT,
      payload: text
    });
  }

}
