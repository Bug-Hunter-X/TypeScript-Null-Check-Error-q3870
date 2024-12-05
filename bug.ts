function printName(name: string | null): void {
  console.log(name.toUpperCase()); // Error: Object is possibly 'null'
}

printName("John Doe");
printName(null);