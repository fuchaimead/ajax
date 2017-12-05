$(document).ready( function() {

  $.ajax({
    url: 'http://json-server.devpointlabs.com/api/v1/users',
    method: 'GET',
    dataType: 'JSON'
  }).done( function(users) {
    users.forEach( function(user) {
      var list = $('.user-list')
      var li = '<a><li data-user-id="' + user.id + '">' + user.first_name + '-' + user.last_name + ': ' + user.phone_number +'</li></a>'
       list.append(li)
    });
  });

  $('#user').on('click', function() {
    $.ajax({
      url: 'http://json-server.devpointlabs.com/api/v1/users',
      type: 'GET',
      dataType: 'JSON',
    }).done( function(user) {
      window.location.href = "/users/" + user.id + "/edit"
    }).fail(function(user){
      console.log
    })
  });
    
    $('#button').on('click', function() {
      window.location.href = "/users/show"
      var first_name = $('#first_name')
      var last_name = $('#last_name')
      var phone_number = $('#phone_number')
      var data ={'user[first_name]': first_name[0].value, 'user[last_name]': last_name[0].value, 'user[phone_number]': phone_number[0].value}
      $.ajax({
        url: 'http://json-server.devpointlabs.com/api/v1/users',
        type: 'POST',
        dataType: 'JSON',
        data: data
      }).done( function(res) {
        window.location.href = "/users"
        console.log(res)
      });

    });
  });



