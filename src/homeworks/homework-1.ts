class School {
  directions: string[] = [];

  addDirection(direction: string) {
    this.directions.push(direction);
  }
}

class Direction {
  private _name: string;
  levels: number[] = [];

  get name(): string {
    return this._name;
  }

  constructor(name: string) {
    this._name = name;
  }

  addLevel(level: number) {
    this.levels.push(level);
  }
}

class Level {
  private _name: string;
  private _program: string;
  groups: Array<string> = [];

  constructor(name: string, program: string) {
    this._name = name;
    this._program = program;
  }

  get name(): string {
    return this._name;
  }

  get program(): string {
    return this._program;
  }

  addGroup(group: string): void {
    this.groups.push(group);
  }
}

class Group {
  _students: Array<string> = [];
  directionName: string;
  levelName: string;

  get students(): Array<string> {
    return this._students;
  }

  constructor(directionName: string, levelName: string) {
    this.directionName = directionName;
    this.levelName = levelName;
  }

  addStudent(student: string): void {
    this._students.push(student);
  }

  showPerformance(): Array<string> {
    const sortedStudents: Array<string> = this.students.sort(
        (a: string, b: string) => b.getPerformanceRating() - a.getPerformanceRating()
    );

    return sortedStudents;
  }
}

class Student {
  grades: Record<string, number> = {};
  attendance: boolean[] = [];
  firstName: string;
  lastName: string;
  birthYear: number;

  constructor(firstName: string, lastName: string, birthYear: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
  }

  get fullName(): string {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value: string) {
    [this.lastName, this.firstName] = value.split(" ");
  }

  get age() {
    return new Date().getFullYear() - this.birthYear;
  }

  setGrade(subject: string, grade: number): void {
    this.grades[subject] = grade;
  }

  markAttendance(present: boolean): void {
    this.attendance.push(present);
  }

  getPerformanceRating(): number {
    const gradeValues: Array<number> = Object.values(this.grades);

    if (gradeValues.length === 0) return 0;

    const averageGrade: number =
        gradeValues.reduce((sum: number, grade: number) => sum + grade, 0) / gradeValues.length;

    const attendancePercentage: number =
        (this.attendance.filter((present: boolean) => present).length /
            this.attendance.length) *
        100;

    return (averageGrade + attendancePercentage) / 2;
  }
}