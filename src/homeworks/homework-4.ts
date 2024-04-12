// Створіть класи Circle, Rectangle, Square і Triangle.
// У кожного з них є загальнодоступний метод calculateArea.
// У кожної фігури є загальнодоступні властивості - колір і назва, які не можна змінювати після створення.
// У Square і Rectangle зі свого боку є ще додатковий метод print, який виводить рядок із формулою розрахунку площі
interface Printable {
  print(): void;
}

class Shape implements Printable {
  readonly name: string;
  readonly color: string;

  constructor(name: string, color: string) {
    this.name = name;
    this.color = color;
  }

  calculateArea(): number {
    throw new Error("Method 'calculateArea' must be implemented.");
  }

  print(): void {
    throw new Error("Method 'print' must be implemented.");
  }
}

class Circle extends Shape {
  readonly radius: number;

  constructor(radius: number, color: string) {
    super("Circle", color);
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }

  print(): void {
    console.log(`Formula for area of Circle: π * radius^2`);
  }
}

class Rectangle extends Shape {
  readonly width: number;
  readonly height: number;

  constructor(width: number, height: number, color: string) {
    super("Rectangle", color);
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    return this.width * this.height;
  }

  print(): void {
    console.log(`Formula for area of Rectangle: width * height`);
  }
}

class Square extends Rectangle {
  constructor(sideLength: number, color: string) {
    super(sideLength, sideLength, color);
  }

  print(): void {
    console.log(`Formula for area of Square: sideLength * sideLength`);
  }
}

class Triangle extends Shape {
  readonly base: number;
  readonly height: number;

  constructor(base: number, height: number, color: string) {
    super("Triangle", color);
    this.base = base;
    this.height = height;
  }

  calculateArea(): number {
    return 0.5 * this.base * this.height;
  }

  print(): void {
    console.log(`Formula for area of Triangle: 0.5 * base * height`);
  }
}
