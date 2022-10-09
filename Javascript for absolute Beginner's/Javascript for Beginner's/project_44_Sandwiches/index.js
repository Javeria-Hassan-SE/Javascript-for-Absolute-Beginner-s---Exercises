function make_sandwich(...items) {
  /* Make a sandwich with the given items. */
  console.log("\nSandwich Items:");

  for (var item, i = 0, j = items, k = j.length; i < k; i += 1) {
    item = j[i];
    console.log("  ...adding " + item + " to your sandwich.");
  }

  console.log("Your sandwich is ready!");
}

make_sandwich("roast beef", "cheddar cheese", "lettuce", "honey dijon");
make_sandwich("turkey", "apple slices", "honey mustard");
make_sandwich("peanut butter", "strawberry jam");
