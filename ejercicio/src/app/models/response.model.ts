import { Film } from "./film.model";

export class ArrayResponse {
  public Search: Film[];
  public totalResults: number;
  public Response: boolean;
}

