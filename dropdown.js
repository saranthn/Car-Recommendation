const makeInput = document.getElementById('makeInput');
var modelInput = document.getElementById('modelInput');
var modelDatalist = document.getElementById('model');

makeInput.addEventListener('change', e => {
  // Enable the model input and year select element
  modelInput.disabled = false;

  // Clear the model input and year select element
  modelDatalist.innerHTML = '';

  // Fill the model input and year select element based on the selected make
  fillModels(e.target.value);
});

function fillModels(make) {
  // Get the list of models for the selected make
  var models = getModelsForMake(make);

  if (models === null || models.length === 0) {
  	modelInput.disabled = true;
  }

  // Loop through the models and add an option element for each model
  models.forEach(model => {
    var option = document.createElement('option');
    option.setAttribute('value', model);
    option.innerHTML = model;
    modelDatalist.appendChild(option);
  });
}

function getModelsForMake(make) {
  // Return the list of models for the selected make
  // You can use a switch statement or an object with key-value pairs to map make to models
  // For example:
  switch (make) {
    case 'BMW':
      return ['X1', 'X3', 'X5'];
    case 'Audi':
      return ['A3', 'A4', 'A6'];
    // Add case statements for other makes
    default:
      return [];
  }
}