export type MealType = 0 | 1 | 2;

export interface Ingredients {
    quantity: number;
    unity: number;
    description: string;

}
export interface Recipe {
    name: string;
    cover: number;
    totalCalories: number;
    ingredients:Ingredients[]; 
    prepares: string[];
    type: MealType;
}