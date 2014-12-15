EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

Template.home.helpers({
  error: function() {
    return Session.get("createError");
  },
  success: function () {
  	return Session.get("createSuccess");
  }
});

Template.home.events({
	'click #sendButton': function (event, template) {
		var email = template.find('#email').value
		, doc = {email: email, referrer: document.referrer, timestamp: new Date()}

		if (EMAIL_REGEX.test(email)) {
			Meteor.call('insertEmail', doc, function (error, result) {
				if (error) {
					Session.set( "createError", error.reason );
				} else {
					$('#email').val("");
					Session.set( "createError", "" );
					Session.set( "createSuccess", "Danke, wir werden Dich auf dem Laufenden halten" );
				}
			});
		} else {
      Session.set( "createError", "Das ist keine valide Email!" );
    }
    return false;
  }
});