import { PipeTransform, Pipe } from "@angular/core";

// don't have to import pipeTransfrom for pipe to work, it just throws an error is you make the class
// and don't include a function to pipe transform.

@Pipe({
  name: "shorten"
})
export class ShortenPipe implements PipeTransform {
  // transform MUST always have a return value.
  transform(value: any, limit: number) {
    if (value.length > limit) {
      return value.substr(0, limit) + "...";
    } else {
      return value;
    }
  }
}

// To use this pipe make sure to add it to the ngModel declorations in the app.module.ts file.
