function ID() {
  return Math.round(Math.random() * 1024 / 2)
}

export function addItem(text) {
  const item = {id: ID(), text: text, done: false}

  return {type:"ADD_ITEM", payload: item}
}

export function deleteItem(id) {
  return {type:"DELETE_ITEM", payload: id}
}

export function onDone(id) {
  return {type:"CHANGE_DONE", payload: id}
}