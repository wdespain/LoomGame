import { Fish, woopah } from "./fish";

const fishy: Fish = {
  hasScales: true,
  size: 12,
  name: "Harry",
};

console.log(fishy.name, "iis", fishy.size, "big");
woopah(fishy.name);
