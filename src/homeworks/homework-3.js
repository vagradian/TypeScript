var NewSchool = /** @class */ (function () {
    function NewSchool() {
        // implement 'add area', 'remove area', 'add lecturer', and 'remove lecturer' methods
        this._areas = [];
        this._lecturers = []; // Name, surname, position, company, experience, courses, contacts
    }
    NewSchool.prototype.addArea = function (area) {
        this._areas.push(area);
    };
    NewSchool.prototype.removeArea = function (area) {
        this._areas = this._areas.filter(function (item) { return item !== area; });
    };
    NewSchool.prototype.addLecture = function (lecture) {
        this._lecturers.push(lecture);
    };
    NewSchool.prototype.removeLecture = function (lecture) {
        this._lecturers = this._lecturers.filter(function (item) { return item !== lecture; });
    };
    Object.defineProperty(NewSchool.prototype, "areas", {
        get: function () {
            return this._areas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewSchool.prototype, "lecturers", {
        get: function () {
            return this._lecturers;
        },
        enumerable: false,
        configurable: true
    });
    return NewSchool;
}());
var NewArea = /** @class */ (function () {
    function NewArea(name) {
        // implement getters for fields and 'add/remove level' methods
        this._levels = [];
        this._name = name;
    }
    NewArea.prototype.addLevel = function (level) {
        this._levels.push(level);
    };
    NewArea.prototype.removeLevel = function (level) {
        this._levels = this._levels.filter(function (item) { return item !== level; });
    };
    Object.defineProperty(NewArea.prototype, "levels", {
        get: function () {
            return this._levels;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewArea.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return NewArea;
}());
var NewLevel = /** @class */ (function () {
    function NewLevel(name, description) {
        this._name = name;
        this._description = description;
        this._groups = [];
    }
    NewLevel.prototype.addGroup = function (group) {
        this._groups.push(group);
    };
    NewLevel.prototype.removeGroup = function (group) {
        this._groups = this._groups.filter(function (item) { return item !== group; });
    };
    Object.defineProperty(NewLevel.prototype, "groups", {
        get: function () {
            return this._groups;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewLevel.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return NewLevel;
}());
var NewGroup = /** @class */ (function () {
    function NewGroup(directionName, levelName, area, status, students) {
        this._students = []; // Modify the array so that it has a valid toSorted method*
        this._directionName = directionName;
        this._levelName = levelName;
        this._area = area;
        this._status = status;
        this._students = students;
    }
    NewGroup.prototype.addStudent = function (student) {
        this._students.push(student);
    };
    NewGroup.prototype.removeStudent = function (student) {
        this._students = this._students.filter(function (item) { return item !== student; });
    };
    Object.defineProperty(NewGroup.prototype, "area", {
        get: function () {
            return this._area;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewGroup.prototype, "students", {
        get: function () {
            return this._students;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewGroup.prototype, "status", {
        set: function (status) {
            this._status = status;
        },
        enumerable: false,
        configurable: true
    });
    NewGroup.prototype.showPerformance = function () {
        return this._students.sort(function (a, b) { return b.getPerformanceRating() - a.getPerformanceRating(); });
    };
    return NewGroup;
}());
var NewStudent = /** @class */ (function () {
    function NewStudent(firstName, lastName, birthYear) {
        this._grades = []; // workName: mark
        this._visits = []; // lesson: present
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthYear = birthYear;
    }
    Object.defineProperty(NewStudent.prototype, "fullName", {
        get: function () {
            return "".concat(this._lastName, " ").concat(this._firstName);
        },
        set: function (value) {
            var _a;
            _a = value.split(' '), this._lastName = _a[0], this._firstName = _a[1];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewStudent.prototype, "age", {
        get: function () {
            return new Date().getFullYear() - this._birthYear;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewStudent.prototype, "grade", {
        set: function (grade) {
            this._grades.push(grade);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewStudent.prototype, "visit", {
        set: function (visit) {
            this._visits.push(visit);
        },
        enumerable: false,
        configurable: true
    });
    NewStudent.prototype.getPerformanceRating = function () {
        var gradeValues = Object.values(this._grades);
        if (!gradeValues.length)
            return 0;
        var averageGrade = gradeValues.reduce(function (sum, grade) { return sum + grade; }, 0) / gradeValues.length;
        var attendancePercentage = (this._visits.filter(function (present) { return present; }).length / this._visits.length) * 100;
        return (averageGrade + attendancePercentage) / 2;
    };
    return NewStudent;
}());
