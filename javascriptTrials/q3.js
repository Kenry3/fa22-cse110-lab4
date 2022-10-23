let student = {
    name: "Kenry",
    major: "CS",
    'Grad year': '2024',
    greeting: function () {
        console.log("Hello");
    },
    'Favorite teacher': {
        name: 'Thomas Powell',
        course: 'cse110'
    },
    courseload: ['cs110', 'cse101', 'cse140']
};
console.log(student['courseload'][0]);
