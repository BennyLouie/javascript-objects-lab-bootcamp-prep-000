var recipes = {'eggs': '3 cups'}

function updateObjectWithKeyAndValue(recipes, ingredient, amount) {
  newRecipe = Object.assign({}, ingredient, amount)
  return newRecipe
}

