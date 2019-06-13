var recipes = {'eggs': '3 cups'}

function updateObjectWithKeyAndValue(recipes, ingredient, amount) {
  return Object.assign({}, ingredient, amount)
}

