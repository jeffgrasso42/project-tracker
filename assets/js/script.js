// DEPENDENCIES
// DATA
// FUNCTIONS
    // Display current time and date using Moment.js with setInterval()
function displayTime() {
    var current = moment().format('MMM Do, YYYY [at] hh:mm:ss');
    $('#current-date').text(current);
    };
var timeInterval = setInterval(displayTime, 1000);
// $('#add-project-modal').on('click', $('#add-project-btn'), function () {
//     $('#add-project-btn').trigger('focus')
//   })
// USER INTERACTIONS
    // User clicks "Add Project"
    // User inputs information into form fields
        // Project name, project type (dropdown), hourly rate (number), due date (date picker), days until due date (moment), total earnings (rate * hours in day * days until due);
    // User clicks "X" to remove project
// INITIALIZATION