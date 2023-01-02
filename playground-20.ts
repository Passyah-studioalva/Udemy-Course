/* [AI] Array Generic */

export default function play20() {
  function iterate(items: Array<string>) {
    items.forEach((item) => {
      console.log(item.toUpperCase());
    });
  }
  iterate(["muhammad", "passyah", "abdul", "raffi"]);
}
