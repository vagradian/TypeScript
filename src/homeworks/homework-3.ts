class NewSchool {
  // implement 'add area', 'remove area', 'add lecturer', and 'remove lecturer' methods

  _areas: Array<string> = [];
  _lecturers: Array<string> = []; // Name, surname, position, company, experience, courses, contacts

  addArea(area: string): void {
    this._areas.push(area);
  }

  removeArea(area: string): void {
    this._areas = this._areas.filter(item => item !== area);
  }

  addLecture(lecture: string): void {
    this._lecturers.push(lecture);
  }

  removeLecture(lecture: string): void {
    this._lecturers = this._lecturers.filter(item => item !== lecture);
  }

  get areas(): Array<string> {
    return this._areas;
  }

  get lecturers(): Array<string> {
    return this._lecturers;
  }
}

class NewArea {
  // implement getters for fields and 'add/remove level' methods
  _levels: Array<number> = [];
  _name: string;

  addLevel(level: number): void {
    this._levels.push(level);
  }

  removeLevel(level: number): void {
    this._levels = this._levels.filter(item => item !== level);
  }

  get levels(): Array<number> {
    return this._levels;
  }

  get name(): string {
    return this._name;
  }

  constructor(name: string) {
    this._name = name;
  }
}

class NewLevel {
  // implement getters for fields and 'add/remove group' methods

  _groups: Array<string>;
  _name: string;
  _description: string;

  addGroup(group: string): void {
    this._groups.push(group);
  }

  removeGroup(group: string): void {
    this._groups = this._groups.filter(item => item !== group);
  }

  get groups(): Array<string> {
    return this._groups;
  }

  get name(): string {
    return this._name;
  }

  constructor(name: string, description: string) {
    this._name = name;
    this._description = description;
    this._groups = [];
  }
}

class NewGroup {
  // implement getters for fields and 'add/remove student' and 'set status' methods

  _directionName: string;
  _levelName: string;
  _area: string;
  _status: string;
  _students: Array<string> = []; // Modify the array so that it has a valid toSorted method*

  addStudent(student: string): void {
    this._students.push(student);
  }

  removeStudent(student: string): void {
    this._students = this._students.filter(item => item !== student);
  }

  get area(): string {
    return this._area;
  }

  get students(): Array<string> {
    return this._students;
  }

  set status(status: string) {
    this._status = status;
  }

  constructor(directionName: string, levelName: string, area: string, status: string, students: Array<string> ) {
    this._directionName = directionName;
    this._levelName = levelName;
    this._area = area;
    this._status = status;
    this._students = students;
  }

  showPerformance(): Array<string> {
    return this._students.sort((a: any, b: any) => b.getPerformanceRating() - a.getPerformanceRating());
  }
}

class NewStudent {
  // implement 'set grade' and 'set visit' methods

  _firstName: string;
  _lastName: string;
  _birthYear: number;
  _grades: Array<number> = []; // workName: mark
  _visits: Array<boolean> = []; // lesson: present

  constructor(firstName: string, lastName: string, birthYear: number) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._birthYear = birthYear;
  }

  get fullName(): string {
    return `${this._lastName} ${this._firstName}`;
  }

  set fullName(value: string) {
    [this._lastName, this._firstName] = value.split(' ');
  }

  get age() {
    return new Date().getFullYear() - this._birthYear;
  }

  set grade(grade: number) {
    this._grades.push(grade);
  }

  set visit(visit: boolean) {
    this._visits.push(visit);
  }

  getPerformanceRating(): number {
    const gradeValues: Array<number> = Object.values(this._grades);

    if (!gradeValues.length) return 0;

    const averageGrade: number = gradeValues.reduce((sum: number, grade: number) => sum + grade, 0) / gradeValues.length;
    const attendancePercentage: number = (this._visits.filter(present => present).length / this._visits.length) * 100;

    return (averageGrade + attendancePercentage) / 2;
  }
}
