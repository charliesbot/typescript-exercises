// This enabled module augmentation mode.
import "date-wizard";

type ReturnDateProps = {
  [key in keyof Date]: ReturnType<Date[key]>;
};

declare module "date-wizard" {
  export function pad(data: number): number;
  export function dateDetails(
    date: Date
  ): {
    year: ReturnDateProps["getFullYear"];
    month: ReturnDateProps["getMonth"];
    date: ReturnDateProps["getDate"];
    hours: ReturnDateProps["getHours"];
    minutes: ReturnDateProps["getMinutes"];
    seconds: ReturnDateProps["getSeconds"];
  };
}
