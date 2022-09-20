export function persistentState(state) {
  localStorage.setItem("savedItems", JSON.stringify(state))
}

export function loadState() {
  const actualState = localStorage.getItem("savedItems")

  if (actualState) {
    return JSON.parse(actualState)
  } else {
    return []
  }
}