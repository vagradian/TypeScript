// Визначте інтерфейс, який використовує сигнатуру індексу з типами об'єднання.
// Наприклад, тип значення для кожного ключа може бути число | рядок.
interface MyInterface {
  [key: string]: number | string;
}

// Створіть інтерфейс, у якому типи значень у сигнатурі індексу є функціями.
// Ключами можуть бути рядки, а значеннями — функції, які приймають будь-які аргументи.
interface MyInterface2 {
  [key: string]: (...args: Array<any>) => void;
}

// Опишіть інтерфейс, який використовує сигнатуру індексу для опису об'єкта, подібного до масиву.
// Ключі повинні бути числами, а значення - певного типу.
interface MyInterface3 {
  [index: number]: string;
}

// Створіть інтерфейс з певними властивостями та індексною сигнатурою.
// Наприклад, ви можете мати властивості типу name: string та індексну сигнатуру для додаткових динамічних властивостей.
interface Person {
  name: string;
  age: number;
  [key: string]: any;
}


// Створіть два інтерфейси, один з індексною сигнатурою, а інший розширює перший, додаючи специфічні властивості.
interface Car {
  [key: string]: any;
}

interface SportsCar extends Car {
  topSpeed: number;
  acceleration: number;
}

// Напишіть функцію, яка отримує об'єкт з індексною сигнатурою і перевіряє,
// чи відповідають значення певних ключів певним критеріям (наприклад, чи всі значення є числами).
interface MyObject {
  [key: string]: number;
}

function checkObject(obj: MyObject, keys: Array<string>): boolean {
  return keys.every(key => key in obj && typeof obj[key] === "number");
}
