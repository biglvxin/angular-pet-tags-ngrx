import { Action } from '@ngrx/store';
import { PetTagActions } from './pet-tag.actions';
import { initialTag, PetTag } from './pet-tag.model';

export function petTagReducer(state: PetTag = initialTag, action: Action) {
    console.log(state);
    console.log(action);
    switch (action.type) {
        case PetTagActions.SELECT_SHAPE:
            return Object.assign({}, state, {
                shape: state.shape
            });
        case PetTagActions.SELECT_FONT:
            return Object.assign({}, state, {
                font: state.font
            });
        case PetTagActions.ADD_TEXT:
            return Object.assign({}, state, {
                text: state.text
            });
        case PetTagActions.TOGGLE_CLIP:
            return Object.assign({}, state, {
                clip: !state.clip
            });
        case PetTagActions.TOGGLE_GEMS:
            return Object.assign({}, state, {
                gems: !state.gems
            });
        case PetTagActions.COMPLETE:
            return Object.assign({}, state, {
                complete: state.complete
            });
        case PetTagActions.RESET:
            return Object.assign({}, state, initialTag);
        default:
            return state;
    }
}