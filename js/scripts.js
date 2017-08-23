function Contact(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.addresses=[];
  }

function Address(street,city,country){
this.street=street;
this.city=city;
this.country=country;
}

Address.prototype.fullAddress =function(){
  return this.street +", " +this.city + ", " + this.country;
}


Contact.prototype.fullName= function () {
  return this.firstName +""+this.lastName;

};

  //user interface
  $(document).ready(function(){
    $("#add-address").click(function() {
      $("#new-addresses").append('<div class="new-address">'+
        '<div class="form-group">'+
          '<label for="new-street">Enter Street </label>'+
          '<input type="text" class="form-control" id="new-street">'+

        '</div>'+
        '<div class="form-group">'+
          '<label for="new-city">Enter City </label>'+
          '<input type="text" class="form-control" id="new-city">'+

        '</div>'+
        '<div class="form-group">'+
          '<label for="new-country">Enter Country </label>'+
          '<input type="text" class="form-control" id="new-country">'+

        '</div>'+

      '</div>');
  });




    $("form#new-contact").submit(function(event){
      event.preventDefault();

       var inputtedFirstName = $("input#new-first-name").val();
       var inputtedLastName = $("input#new-last-name").val();


       var newContact = new Contact(inputtedFirstName, inputtedLastName);

      $(".new-address").each(function() {
        var inputtedStreet=$(this).find("input.new-street").val();
        var inputtedCity=$(this).find("input.new-city").val();
        var inputtedCountry=$(this).find("input.new-country").val();
        var newAddress=new Address(inputtedStreet,inputtedCity,inputtedCountry);
        newContact.addresses.push(newAddress);

      });


       $("ul#contacts").append("<li><span class='contact'>"+ newContact.fullName() + "</span></li>");
       $(".contact").last().click(function() {
           $("#show-contact").show();
           $("#show-contact h2").text(newContact.firstName);
           $(".first-name").text(newContact.firstName);
           $(".last-name").text(newContact.lastName);
           $("ul#addresses").text("");
           newContact.addresses.forEach(function(address){
             $("ul#addresses").append("<li>" +address.street + "," +address.city +"" + address.country + "</li>");
           });
         });
         $("input#new-first-name").val("");
         $("input#new-last-name").val("");
         $("input.new-street").val("");
         $("input.new-city").val("");
         $("input.new-country").val("");
    });
  });
