import {Console} from "console";


export function clear(buf: boolean=false) {
  var c = new Console(process.stdout);
  process.stdout.write('\033[2J\033[H\033[3J');
}
