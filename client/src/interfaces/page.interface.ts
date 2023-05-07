
export interface HhData{
    count: string;
    juniorSalary: number;
    middleSalary: number;
    seniorSalary: number;
}
export interface AdvantagesData {
    title: string;
    description: string;
    _id: string;
}
export interface PageModel {
    _id: string;
    alias: string;
    title:string;
    tags:string[];
    description:string;
    hh: HhData;
    advantages: AdvantagesData[]
}