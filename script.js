const name = document.getElementById('name');
const roll = document.getElementById('roll');
const math = document.getElementById('math');
const science = document.getElementById('science');
const english = document.getElementById('english');
const generateBtn = document.getElementById('generateBtn');
const deleteBtn = document.getElementById('deleteBtn');
const output = document.getElementById('output');

let student;

function generateProfile() {
    const m = Number(math.value);
    const s = Number(science.value);
    const e = Number(english.value);

    student = {
        name: name.value,
        roll: roll.value,
        marks: {
            math: m,
            science: s,
            english: e
        },

        result: function () {
            return `Name: ${this.name} | Roll: ${this.roll} | Math: ${this.marks.math} | Science: ${this.marks.science} | English: ${this.marks.english}`;
        },

        calcGrade: function () {
            const avg = (this.marks.math + this.marks.science + this.marks.english) / 3;

            if (avg >= 80) {
                this.grade = "A";
            } else if (avg >= 60) {
                this.grade = "B";
            } else {
                this.grade = "C";
            }
        },

        print_Result: function () {
            let text = this.result();

            if (this.grade !== undefined) {
                text += `<br>Your Grade is: <b>${this.grade}</b>`;
            }

            output.innerHTML = text;
        }
    };

    student.calcGrade();
    student.print_Result();
}

function deleteGrade() {
    if (student && student.grade !== undefined) {
        delete student.grade;
        student.print_Result();
    }
}

generateBtn.addEventListener("click", generateProfile);
deleteBtn.addEventListener("click", deleteGrade);
