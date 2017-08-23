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




Contact.prototype.fullName= function () {
  return this.firstName +""+this.lastName;

};

  //user interface
  $(document).ready(function(){
    $("form#new-contact").submit(function(event){
      event.preventDefault();

       var inputtedFirstName = $("input#new-first-name").val();
       var inputtedLastName = $("input#new-last-name").val();
       var inputtedStreet=$("input#new-street").val();
       var inputtedCity=$("input#new-city").val();
       var inputtedCountry=$("input#new-country").val();


       var newContact = new Contact(inputtedFirstName, inputtedLastName);
       var home=new Address(inputtedStreet,inputtedCity,inputtedCountry);

       $("ul#contacts").append("<li><span class='contact'>"+ newContact.fullName() + "</span></li>");
       $(".contact").last().click(function() {
           $("#show-contact").show();
           $("#show-contact h2").text(newContact.firstName);
           $(".first-name").text(newContact.firstName);
           $(".last-name").text(newContact.lastName);
         });
         $("input#new-first-name").val("");
         $("input#new-last-name").val("");
    });
  });
