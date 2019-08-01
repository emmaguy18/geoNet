$(document).ready(function(){
  // console.log('ready');

  // setInterval(function(){
  // console.log('timeout is working');
  // }, 5000);

  $.ajax({
    url: 'https://api.geonet.org.nz/intensity?type=measured',
    type: 'GET',
    dataType: 'json',
    success: function(dataFromJSON){
      console.log(dataFromJSON);
    },
    error: function(){
      console.log('something has gone wrong');
    }
  });

  $('#measuredbtn').click(function(){
    console.log('button has been clicked');
    $('#measured-list').data(dataFromJSON);
  });





});
