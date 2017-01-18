(function () {

// var theImages = document.querySelectorAll(".image-holder"),
//     heading = document.querySelector(".heading"),
//     subheading = document.querySelector(".main-copy h2"),
//     theSeasonText = document.querySelector(".main-copy p"),
    // appliedClass;

    var $theImages = $('.image-holder'),
        $heading = $('.heading'),
        $subheading = $('.main-copy h2'),
        $theSeasonText = $('.main-copy p'),
        appliedClass;

    function changeElements() {
      $heading.removeClass(appliedClass);
      $subheading.removeClass(appliedClass);

        appliedClass = event.currentTarget.id;

        $heading.addClass(event.currentTarget.id);
        $subheading.addClass(event.currentTarget.id);

        $heading.text(dynamicContent[event.currentTarget.id].headline);
        $theSeasonText.text(dynamicContent[event.currentTarget.id].text);
    }

    $theImages.click(function(){
      changeElements()
    })


    // $theImages.click(function() {
    //     console.log('clicked');
    // })

    //  function load(){
    //    $heading.firstChild.nodeValue = dynamicContent["spring"].headline;
    //    $theSeasonText.firstChild.nodeValue = dynamicContent["spring"].text;
     //
    //  }

    // [].forEach.call(theImages, function(image){
    //       image.addEventListener('click', changeElements, true);
    // });

    //  window.addEventListener('load', load, false);

})();
