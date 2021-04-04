import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { PetTagActions } from 'src/app/models/pet-tag.actions';
import { PetTag } from 'src/app/models/pet-tag.model';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent implements OnInit {
  tagState$: Observable<PetTag>;
  private tagStateSubscription: Subscription;
  petTag: PetTag;
  // PetTag 报错
  // constructor(private store: Store<PetTag>) {
  //   this.tagState$ = store.select('petTag');
  // }
  constructor(private store: Store<any>) {
    this.tagState$ = store.select('petTag');
  }

  ngOnInit(): void {
    this.tagStateSubscription = this.tagState$.subscribe((state) => {
      this.petTag = state;
    });
  }
  ngOnDestroy() {
    this.tagStateSubscription.unsubscribe();
  }

  newTag() {
    this.store.dispatch({
      type: PetTagActions.RESET
    });
  }


}
