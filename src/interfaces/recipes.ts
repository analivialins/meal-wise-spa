export type MealType = 0 | 1 | 2;

export interface Recipe {
    name: string;
    cover: number;
    totalCalories: number;
    type: MealType;
}