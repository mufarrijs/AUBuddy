AOS.init({
    once:true
});
(function($) {
    function generateBarGraph(wrapper) {
      // Set Width of Bar to data-value
      $(wrapper + ' .bar').each(function(index, el) {
        var bar = $(this),
            value = bar.data('value');
  
        // Set Width & Add Class
        bar.width(value + '%');
        bar.addClass('in');
      });
    }
  
    // Generate the bar graph on window load...
    $(window).on('load', function(event) {
      generateBarGraph('#dashboard-stats');
    });
  })(jQuery);
 // Define major preferences and corresponding points
 var majorPoints = {
  "Mathematics": 0,
  "Applied Mathematics": 0,
  "Biology": 0,
  "Physics, Chemistry": 0,
  // Add other majors here...
};

// Function to calculate points for each major
function calculatePoints(answer) {
  switch(answer) {
      case 'a':
          majorPoints['Mathematics'] += 1;
          break;
      case 'b':
          majorPoints['Applied Mathematics'] += 1;
          break;
      case 'c':
          majorPoints['Biology'] += 1;
          break;
      case 'd':
          majorPoints['Physics, Chemistry'] += 1;
          break;
      // Add cases for other answers here...
  }
}

// Function to submit the quiz
// Function to submit the quiz
function submitQuiz() {
  var form = document.getElementById('quizForm');
  var formData = new FormData(form);
  var answered = false; // Flag to track if any question is answered

  // Iterate through form elements and calculate points
  for (var pair of formData.entries()) {
      calculatePoints(pair[1]);
      if (pair[1]) { // If any answer is selected
          answered = true; // Set flag to true
      }
  }

  // If no answer is selected, display message in the result section
  if (!answered) {
      document.getElementById('result').innerHTML = "<p style='font-size:1.5rem; color: #840032;'>Please answer at least one question before submitting.</p>";
      return;
  }

  // Find the major with the most points
  var mostPoints = Math.max(...Object.values(majorPoints));
  var mostPopularMajors = Object.keys(majorPoints).filter(key => majorPoints[key] === mostPoints);

  // Display the result
  document.getElementById('result').innerHTML = "<p style='font-size:1.5rem;'>We think the major that suits you best is: " + mostPopularMajors.join(", ") + "</p>";
}

const submitEmail = document.querySelector('.emailsection button');

if (submitEmail) {
  submitEmail.addEventListener("click", function(){
    const emailInput = document.getElementById('useremail').value.trim(); // Trim removes any leading or trailing whitespace

    if (emailInput === "") {
      alert("Please provide an email address.");
      return; // Exit the function early if no email is provided
    }

    alert("The email has been successfully added.");
  });
}
