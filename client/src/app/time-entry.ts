export interface Entry {
    id: number;
    date: string | null;
    weekday: string | number | null;
    start: number | string;
    end: number | string;
    duration: number | string | null;
}