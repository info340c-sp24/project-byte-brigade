document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
  
    // Prevent the default form submission behavior
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Call the function to calculate the result
      const result = calculateResult();
  
      // Display the result to the user
      displayResult(result);
    });
  
    // Function to calculate the result based on user's answers
    function calculateResult() {
      let result = '';
  
      // Loop through each question
      questions.forEach((question, index) => {
        const selectedAnswer = document.querySelector(`input[name=question${index + 1}]:checked`).value;
        result += selectedAnswer;
      });
  
      return result;
    }
  
    // Function to display the result to the user
    function displayResult(result) {
      // You can map the result to specific hikes here
      const hike = getHikeForResult(result);
      alert(`Based on your answers, your perfect hike is: ${hike}`);
    }
  
    // Function to map the result pattern to a specific hike
    function getHikeForResult(result) {
      const hikeMap = {
        '32121': 'Wallace Falls',
        '22122': ['Cherry Creek Hike', 'Bud Blancher Trail'],
        '12121': 'Franklin Falls',
        '22121': 'Heybrook Lookout',
        '32232': ['Rattlesnake Ledge', 'Poo-Poo point'],
        '11112': ['Union Bay Natural Area', 'Gas Works Park Loop', 'Ravenna Park Loop',
        'Green Lake', 'Lincoln Park', 'Grand Forest West Main Point'],
        '32231': ['Lake 22', 'Mount Si'],
        '11122': ['Washington Park Arboretum', 'Discovery Park', 'Evans Creek Preserve',
        'Paradise Valley Area', 'Puyallup Loop Trail'],
        '12122': ['Foster Island', 'Robe Canyon Trail'],
        '31232': 'Maple Pass Trail',
        '11222': 'Cheshiahud Lake Union Loop',
        '13332': 'Burke Gilman Trail',
        '22232': 'Chief Sealth Trail',
        '22222': 'Coal Creek Trail',
        '21122': 'Japanese Gulch South Loop',
        '12122': ['North Creek Trail', 'Granite Falls Fish Ladder']
        // Add more mappings as needed
      };
  
      return hikeMap[result] || 'No hike found'; // Return "No hike found" if no match
    }
  });

  document.getElementById('restartQuiz').addEventListener('click', function() {
    // Reset all radio buttons to unchecked
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(button => {
      button.checked = false;
    });
  
    // Reset the result message
    alert('Quiz reset.');
  });