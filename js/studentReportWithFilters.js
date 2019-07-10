/*
1.DONE Prompt for student name or quit to exit;
2.DONE Prompt appears over and over again until quit is entered
3.DONE If matches a student's name, print student details to page and end loop
4.DONE Show message if search does not find a student with the name provided
5. Add feature to allow for all records with the same name to be printed to the page
*/

//DONE 2. Create function to print student records to page
var message = '';

function print(message) {
  var output = document.getElementById('output');
  output.innerHTML = message;
}

function searchStudent() {

  do {
    var studentFound = false;
    var input = prompt('Search student records: type a name [Jody] to search or type "quit" to exit.').toLowerCase();

    for (var i = 0; i < students.length; i++) {
      if (input === students[i].name.toLowerCase()) {
        message += '<h2>Student: ' + students[i].name + '</h2>';
        message += '<p>Track: ' + students[i].track + '</p>';
        message += '<p>Points: ' + students[i].points + '</p>';
        message += '<p>Achievements: ' + students[i].achievements + '</p>';
        print(message);
        studentFound = true;
      }
    }

    if (studentFound === false && input != 'quit' && input !== null) {
      alert('No students found with this name.');
      searchStudent();
    }

    input = 'quit';
  }
  while (input !== 'quit' || input === null);

}

searchStudent();