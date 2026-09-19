/* Inteface for spots, server-side */

export interface Spot {
    id: number;
    image_url: string;
    text: string;
    sort_order: number;
}