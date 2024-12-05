function printName(name: string | null): void {
  console.log((name ?? "").toUpperCase()); // Use nullish coalescing
}

function printName2(name: string | null): void {
  console.log(name?.toUpperCase()); // Use optional chaining
}

printName("John Doe");
printName(null);
printName2("Jane Doe");
printName2(null); 