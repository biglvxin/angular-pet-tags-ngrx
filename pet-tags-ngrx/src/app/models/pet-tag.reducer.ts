import { Action } from '@ngrx/store';
import { PetTagActions } from './pet-tag.actions';
import { initialTag, PetTag } from './pet-tag.model';
// Action 会报错
// export function petTagReducer(state: PetTag = initialTag, action: Action) {
export function petTagReducer(state: PetTag = initialTag, action: any) {
    switch (action.type) {
        case PetTagActions.SELECT_SHAPE:
            return Object.assign({}, state, {
                shape: action.payload
            });
        case PetTagActions.SELECT_FONT:
            return Object.assign({}, state, {
                font: action.payload
            });
        case PetTagActions.ADD_TEXT:
            return Object.assign({}, state, {
                text: action.payload
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
                complete: action.payload
            });
        case PetTagActions.RESET:
            return Object.assign({}, state, initialTag);
        default:
            return state;
    }
}