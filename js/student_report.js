//DONE 2. Create function to print student records to page
var message = '';

function print(message) {
  var output = document.getElementById('output');
  output.innerHTML = message;
}

for (var i = 0; i < students.length; i++) {
  message += '<h2>Student: ' + students[i].name + '</h2>';
  message += '<p>Track: ' + students[i].track + '</p>';
  message += '<p>Points: ' + students[i].points + '</p>';
  message += '<p>Achievements: ' + students[i].achievements + '</p>';
}

print(message);