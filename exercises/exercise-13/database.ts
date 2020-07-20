import fs from "fs";

export class Database<T> {
  protected filename: string;
  protected fullTextSearchFieldNames: string[];

  constructor(filename: string, fullTextSearchFieldNames: string[]) {
    this.filename = filename;
    this.fullTextSearchFieldNames = fullTextSearchFieldNames;
  }

  async find(
    query: {
      [key in keyof T]?: {
        $gt?: number;
        $lt?: number;
        $eq?: string | number;
        $in?: number[];
      };
    } & {
      $text?: string;
      $and?: any;
      $or?: any;
    }
  ): Promise<T[]> {
    return new Promise((resolve, reject) => {
      console.log("teeeeeest ", this.filename);
    });
  }
}
