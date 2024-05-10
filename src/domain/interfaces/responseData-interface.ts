import { Paging } from "./paging-interface";
import { Result } from "./result-interface";

export interface ResponseData {
    site_id: string;
    paging: Paging;
    results: Result[];
  }