export const joinString = (array, property) => {
  const joinedLanguages = array.map(element => element[property]).join(', ')

  return joinedLanguages
}
