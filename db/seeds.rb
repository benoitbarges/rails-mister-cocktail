require 'json'
require 'open-uri'

puts "Cleaning database..."
Ingredient.destroy_all

url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
data = open(url).read
ingredients = JSON.parse(data)
ingredients["drinks"].each do |ingredient|
  Ingredient.create(name: ingredient["strIngredient1"])
end

puts "Finished!"
