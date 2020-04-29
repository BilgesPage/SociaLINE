let data: number | string;
data = '8';
data = 8;

//-----------------------------------

export interface ICar
{
    color: string;
    model: string;
    topSpeed?: number;
}

const car1: ICar = {
    color: "white",
    model: "Audi"
}

const car2 : ICar = {
    color: "silver",
    model: "BMW",
    topSpeed: 100
}

export const cars = [car1, car2];

//-----------------------------------

const multiplyGeneric = (x: any, y: any) => { 
    return x*y;
}

const multiplyReturnString = (x: number, y: number): string => { 
    return (x*y).toString();
}

const multiplyVoid = (x: number, y: number): void => { 
    
}

//-----------------------------------