// Grab the file containing all of the responses to the survey
d3.csv('furry-philosophy-edited.csv', function(data) {
  // Start an empty variable for holding the text of all responses
  var questions = '';
  // Loop through every response to the survey, getting the index
  for (var index in data) {
    // Get the response from the data for the given index
    var response = data[index];
    // Loop through every question in the response
    for (var question in response) {
      // Get the answer for the question we're on
      var answer = response[question];
      // Append the question and answer to our questions variable in the format:
      // question: answer<newline>
      questions += question + ": " + answer + '\n';
    }
    // After each response, add a few equals signs so that we can tell responses apart
    questions += '========\n';
  }
  // Find the element with class="for-testing" and set its contents to the value of the questions variable
  d3.select('.for-testing').html(questions);
});
