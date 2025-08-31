class Course {
  constructor(public courseName: string, public grade: number) {}
}

class Student {
  public courses: Course[] = [];

  constructor(public studentID: number, public name: string) {}

  addCourse(course: Course): void {
    this.courses.push(course);
  }

  getAverage(): number {
    const total = this.courses.reduce((sum, c) => sum + c.grade, 0);
    return this.courses.length ? total / this.courses.length : 0;
  }

  displayInfo(): void {
    console.log(`🧑‍🎓 รหัส: ${this.studentID}, ชื่อ: ${this.name}`);
    this.courses.forEach((c, i) => {
      console.log(`   วิชา ${i + 1}: ${c.courseName}, เกรด: ${c.grade}`);
    });
    console.log(`   🎓 เกรดเฉลี่ย: ${this.getAverage().toFixed(2)}\n`);
  }
}

const students: Student[] = [
  new Student(6704101380, "Suwisit"),
  new Student(6704101381, "Sanghuen"),
  new Student(6704101382, "Anuchart")
];

const initialCourses = [
  [new Course("Mathematics for Computer Science", 3.5), new Course("English for Science and Innovation", 3.0), new Course("Software Engineering", 4.0), new Course("Web Techology", 2.5)],
  [new Course("Mathematics for Computer Science", 2.8), new Course("English for Science and Innovation", 3.2), new Course("Software Engineering", 3.9), new Course("Web Techology", 3.0)],
  [new Course("Mathematics for Computer Science", 3.7), new Course("English for Science and Innovation", 3.5), new Course("Software Engineering", 3.8), new Course("Web Techology", 3.2)]
];

students.forEach((student, index) => {
  initialCourses[index].forEach(course => student.addCourse(course));
});

console.log("📋 ข้อมูลนักศึกษาก่อนเพิ่มวิชาใหม่:");
students.forEach(student => student.displayInfo());

students[0].addCourse(new Course("Struceture Relational Database", 3.8));
students[1].addCourse(new Course("Struceture Relational Database", 4.0));
students[2].addCourse(new Course("Struceture Relational Database", 3.6));

console.log("📋 ข้อมูลนักศึกษาหลังเพิ่มวิชาใหม่:");
students.forEach(student => student.displayInfo());