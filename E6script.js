console.log("hello");

for (let step = 0; step < 10; step++) {
  let blocks = '<div class="block" style="width:100vw; height: 10px; border:10px solid yellow">';
  $("body").append(blocks);

}

for (let step = 7; step < 9; step++) {
    let blocks = '<div class="block" style="width:100vw; height: 1px; border:30px solid red">';
    $("body").append(blocks);
  
  }

for (let step = 9; step < 11; step++) {
    let blocks = '<div class="block" style="width:100vw; height: 10px; border:10px solid yellow">';
    $("body").append(blocks); // Category: Manipulation
  
  }

for (let step = 11; step < 13; step++) {
    let blocks = '<div class="block" style="width:100vw; height: 1px; border:30px solid red">';
    $("body").append(blocks);
  
  }

  for (let step = 14; step < 16; step++) {
    let blocks = '<div class="block" style="width:100vw; height: 10px; border:10px solid yellow">';
    $("body").append(blocks);
  
  }

  for (let step = 17; step < 19; step++) {
    let blocks = '<div class="block" style="width:100vw; height: 1px; border:30px solid red">';
    $("body").append(blocks);
  
  }

  for (let step = 20; step < 30; step++) {
    let blocks = '<div class="block" style="width:100vw; height: 10px; border:10px solid yellow">';
    $("body").append(blocks);
  
  }


$(".block").each(function () {
    $(this).on("mouseenter", function () {  // Category: Events
        $(this).css("background-color", "yellow");
    });
})


$(document).ready(function(){
    $("#hide").click(function(){ // Category: Effects
      $("section").hide();
    });

  });

  $(document).ready(function(){
    $("#show").click(function(){
      $("section").show();
    });

  });