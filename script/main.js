(function () {

var theImages = document.querySelectorAll(".image-holder"),
    heading = document.querySelector(".heading"),
    subheading = document.querySelector(".main-copy h2"),
    theSeasonText = document.querySelector(".main-copy p"),
    appliedClass;

    function changeElements() {
      heading.classList.remove(appliedClass);
      subheading.classList.remove(appliedClass);

        appliedClass = this.id;

        heading.classList.add(this.id);
        subheading.classList.add(this.id);

        heading.firstChild.nodeValue = dynamicContent[this.id].headline;
        theSeasonText.firstChild.nodeValue = dynamicContent[this.id].text;
    }

    function load(){
      heading.firstChild.nodeValue = dynamicContent["spring"].headline;
      theSeasonText.firstChild.nodeValue = dynamicContent["spring"].text;

    }

    [].forEach.call(theImages, function(image){
          image.addEventListener('click', changeElements, true);
    });

    window.addEventListener('load', load, false);


})();
