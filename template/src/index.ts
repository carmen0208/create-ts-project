export function greet(name: string): string {
  return `Hello, ${name}! Welcome to TypeScript Stream project!`;
}

if (require.main === module) {
  console.log(greet('Developer'));
} 