/*
1. Prompt for student name or quit to exit;
2. Prompt appears over and over again until quit is entered
3. If matches a student's name, print student details to page
*/

//DONE 2. Create function to print student records to page
var message = '';

function print(message) {
  var output = document.getElementById('output');
  output.innerHTML = message;
}

do {
  var searchEnded = false;
  var input = prompt('Search student records: type a name [Jody] to search or type "quit" to exit.').toLowerCase();

  for (var i = 0; i < students.length; i++) {
    if (input === students[i].name.toLowerCase()) {
      message += '<h2>Student: ' + students[i].name + '</h2>';
      message += '<p>Track: ' + students[i].track + '</p>';
      message += '<p>Points: ' + students[i].points + '</p>';
      message += '<p>Achievements: ' + students[i].achievements + '</p>';
      print(message);
      input = 'quit';
    }
  }
}
while (input !== 'quit' || input === null);