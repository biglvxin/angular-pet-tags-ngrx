import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { PetTagActions } from 'src/app/models/pet-tag.actions';
import { initialTag, PetTag } from 'src/app/models/pet-tag.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  tagState$: Observable<PetTag>;
  private tagStateSubscription: Subscription;
  petTag: PetTag;
  done = false;
  // PetTag 会报错
  // constructor(private store: Store<PetTag>) {
  //   this.tagState$ = store.select('petTag');
  // }
  constructor(private store: Store<any>) {
    this.tagState$ = store.select('petTag');
  }

  ngOnInit() {
    this.tagStateSubscription = this.tagState$.subscribe((state) => {
      console.log(state);
      this.petTag = state;
      this.done = !!(this.petTag.shape && this.petTag.text);
    });
  }

  ngOnDestroy() {
    this.tagStateSubscription.unsubscribe();
  }
 
  selectShapeHandler(shape: string) {
    console.log(shape);
    this.store.dispatch({
      type: PetTagActions.SELECT_SHAPE,
      payload: shape
    });
  }
  selectFontHandler(fontType: string) {
    console.log(fontType);
    this.store.dispatch({
      type: PetTagActions.SELECT_FONT,
      payload: fontType
    });
  }

  addTextHandler(text: string) {
    console.log(text);
    this.store.dispatch({
      type: PetTagActions.ADD_TEXT,
      payload: text
    });
  }
  toggleClipHandler() {
    this.store.dispatch({
      type: PetTagActions.TOGGLE_CLIP
    });
  }

  toggleGemsHandler() {
    this.store.dispatch({
      type: PetTagActions.TOGGLE_GEMS
    });
  }

  submit() {
    this.store.dispatch({
      type: PetTagActions.COMPLETE,
      payload: true
    });
  }

}
