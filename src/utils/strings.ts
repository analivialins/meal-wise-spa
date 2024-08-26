import { Meal, Menu } from "../interfaces/menus";
import { Unit, units } from "./const";

type DayOfWeek = 'sunday' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday';

export const getMenuForToday = (menu: Menu): Meal[] => {
    const today: DayOfWeek = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase() as DayOfWeek;
    return menu.meals[today] || [];
};

export const getFormattedDate = () : string => {
    const now = new Date();
    const monthNames = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    const dayNames = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    const dayOfMonth = now.getDate();
    const monthName = monthNames[now.getMonth()];
    const dayName = dayNames[now.getDay()];
    
    return `${dayOfMonth} ${monthName} • ${dayName}`;
}

export const getUnitById = (id: number): Unit | null => {
    return units[id] || null;
  };