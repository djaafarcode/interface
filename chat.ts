import { animaleCompagnie } from "./interface-animal-compagnie";


// Class && Method CHAT
export class Chat implements animaleCompagnie{
    //Ceci équivaut a ce qui suit juste en-dessous. 
    constructor(public name: string,public couleur:string) {}
    /*name: string;
    couleur: string;
    chasser: void;
    
    constructor(name: string, couleur:string, chasser: void) {
        this.name;
        this.couleur; 
        this.chasser;
    }
    */
    //Implement les method de l'interface.
    seGrater(): void {
        console.log("Le chat se gratte.");
    }
    manger(aliment): void {
        console.log("Le chat mange" + aliment);
    }
    emettreSons(): string {
         return "le chat miaule";
    }

    chasser(): void {
        console.log("Le chat chasse");
    }
}