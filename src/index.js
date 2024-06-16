import { rerenderTree } from "./render";
import store from "./components/Data/State";

function getState(){
    return this._state;
}
rerenderTree(store.getState())