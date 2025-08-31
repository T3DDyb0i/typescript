// Interface สำหรับ Employee
interface Employee {
  id: number;
  name: string;
  position: string;
  salary: number;
}

// อาเรย์ของพนักงาน
const employees: Employee[] = [
  { id: 1, name: "Suwisit", position: "Manager", salary: 50000 },
  { id: 2, name: "Anuchart", position: "Developer", salary: 40000 },
  { id: 3, name: "Surachai", position: "Designer", salary: 35000 }
];

// ฟังก์ชันค้นหาพนักงานตามชื่อ
function findEmployeeByName(name: string): Employee | undefined {
  return employees.find(emp => emp.name.toLowerCase() === name.toLowerCase());
}

// แสดงผลข้อมูลพนักงานทั้งหมด
console.log("📋 ข้อมูลพนักงานทั้งหมด:");
employees.forEach(emp => {
  console.log(`ID: ${emp.id}, Name: ${emp.name}, Position: ${emp.position}, Salary: ${emp.salary}`);
});

// แสดงผลการค้นหาพนักงาน
const searchName = "Suwisit";
const found = findEmployeeByName(searchName);
console.log(`\n🔍 ผลการค้นหาพนักงานชื่อ "${searchName}":`);
if (found) {
  console.log(`ID: ${found.id}, Name: ${found.name}, Position: ${found.position}, Salary: ${found.salary}`);
} else {
  console.log("ไม่พบพนักงานที่ค้นหา");
}