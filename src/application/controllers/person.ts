export class Person {
  speak (name?: string): string {
    return `Olá ${name ? name : 'Fulano'}`
  }
}
