import store from "../store";

export function hasSword() {
  return store.getState().player.inventory.sword;
}
