function stringifyArray(arr){
  if (arr.length === 0){
    return '';
  } else if (arr.length === 1){
    return arr[0];
  } else if (arr.length > 1){
    var newString = '';
    for (var i = 0; i < arr.length; i++) {
      if (i === 0) {
        newString += arr[i];
      } else if (i < (arr.length - 1) ){
        newString += ', ' + arr[i];
      } else {
        newString += ' and ' + arr[i];
      }
    }
    return newString;
  }
}

function getContactTimes(){
  var contactTime = [];
  var contactBoxes = $('.contact-time :checked');
  for (var i = 0; i < contactBoxes.length; i++) {
    contactTime.push(  $(contactBoxes[i]).val()  );
  }
  return stringifyArray(contactTime);
}

function getWorkTypes(){
  var workType = [];
  var workBoxes = $('.work-type :checked');
  for (var i = 0; i < workBoxes.length; i++) {
    workType.push(  $(workBoxes[i]).val()  );
  }
  return stringifyArray(workType);
};

function getProjectStatus(){
  var projectStatus = [];
  var projectBoxes = $('.project-status :checked');
  for (var i = 0; i < projectBoxes.length; i++) {
    projectStatus.push(  $(projectBoxes[i]).val()  );
  }
  return stringifyArray(projectStatus);
}

function estimateFormHandler(){
  $('#estimate-form').submit(function(e){
    e.preventDefault();
    console.log('form submitted');
    var estimate = {};
    estimate.firstname = $('#estimate-first').val();
    estimate.lastname = $('#estimate-last').val();
    estimate.email = $('#estimate-email').val();
    estimate.phone = $('#estimate-phone').val();
    estimate.street = $('#estimate-street').val();
    estimate.street2 = $('#estimate-street2').val();
    estimate.city = $('#estimate-city').val();
    estimate.state = $('#estimate-state').val();
    estimate.message = $('#estimate-message').val();
    estimate.workType = getWorkTypes();
    estimate.contactTime = getContactTimes();
    estimate.projectStatus = getProjectStatus();
    console.log(estimate);
    $.ajax({
      method: 'post',
      data: estimate,
      url: '/estimate'
    }).done(function(response){
      console.log(response);
    })
  })
}



//
