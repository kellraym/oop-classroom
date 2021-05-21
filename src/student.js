class Student {
  constructor(name, skillLevel) {
    this.name = name,
      this.skillLevel = skillLevel,
      this.assignments = []
  }

  study() {
    if (this.skillLevel < 100) {
      this.skillLevel += 1
    }
    return this;
  }

  doHomework(homework) {
    if (homework === undefined) {
      return this.assignments.forEach(assignment => {
        this.assignments.shift();
        this.doHomework(assignment);
      })
    }
    if (homework.skillLevel && (homework.skillLevel > 0 && homework.skillLevel <= 100)) {
      if (this.skillLevel > homework.skillLevel) {
        homework.completed = true;
      } else {
        homework.completed = false;
      }
      this.assignments.push(homework)
    }
  }
}

module.exports = Student
