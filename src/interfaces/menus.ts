import { MealType } from "./recipes";

interface Ingredient {
    unity: number;
    quantity: number;
    description: string;
}

interface Recipe {
    id: string;
    name: string;
    cover: number;
    totalCalories: number;
    ingredients: Ingredient[];
    prepares: string[];
}

export interface Meal {
    type: MealType;
    recipe: Recipe;
}

export interface Menu {
    id: string;
    created_at: string;
    updated_at: string;
    user: string;
    meals: {
        sunday: Meal[];
        monday: Meal[];
        tuesday: Meal[];
        wednesday: Meal[];
        thursday: Meal[];
        friday: Meal[];
        saturday: Meal[];
    };
}
