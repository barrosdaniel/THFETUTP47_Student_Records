// 1. Create data sctructure to hold student records (name, track, achievements, points)
var students = [{
    name: 'Daniel Barros',
    track: 'Front-end',
    achievements: 66,
    points: 9687
  },
  {
    name: 'Cristiano Ronaldo',
    track: 'Android',
    achievements: 21,
    points: 2569
  },
  {
    name: 'Eric Cantona',
    track: 'UX',
    achievements: 32,
    points: 4587
  },
  {
    name: 'Paul Pogba',
    track: 'UX',
    achievements: 41,
    points: 6214
  },
  {
    name: 'Lionel Messi',
    track: 'Full-stack',
    achievements: 87,
    points: 11256
  }
];

// console.log(students);

// 2. Create function to print student records to page
var message = '';
var output = document.getElementById('output');
for (var i = 0; i < students.length; i++) {
  message += '<h2>Student: ' + students[i].name + '</h2>';
  message += '<p>Track: ' + students[i].track + '</p>';
  message += '<p>Points: ' + students[i].points + '</p>';
  message += '<p>Achievements: ' + students[i].achievements + '</p>';
}
output.innerHTML = message;