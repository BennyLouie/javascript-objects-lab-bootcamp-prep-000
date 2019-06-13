var recipes = {'eggs': '3 cups'}

function updateObjectWithKeyAndValue(recipes, ingredient, amount) {
  return Object.assign({}, recipes, {[ingredient]: amount})
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, ingredient, amount) {
  recipes[ingredient] = amount
  return recipes
}

function deleteFromObjectsByKey(recipes, ingredient) {
  var newRecipes = 
}