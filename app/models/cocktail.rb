class Cocktail < ApplicationRecord
  has_many :doses, dependent: :destroy
  has_many :ingredients, through: :doses
  has_one_attached :picture
  validates :name, uniqueness: { case_sensitive: false }, presence: true
  validates :picture, presence: true
end
