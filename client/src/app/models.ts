export interface RecipeSummary {
  id: string;
  title: string;
}

export interface Recipe extends RecipeSummary {
  image: string;
  ingredients: string[];
  instruction: string;
}

export interface ResponseMessage {
  message: string
}


export class RecipeHolder {
  constructor(
  public title: string,
  public image: string,
  public ingredients: string[],
  public instruction: string,


  ){}

}
