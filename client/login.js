Template.login.helpers({
  error: function() {
    return Session.get("createError");
  }
});

Template.login.events({
  'click #loginButton' : function(e, t) {
    var email = t.find('#account-email').value;
    var password = t.find('#account-password').value;

    if (email.length && password.length) {
      Meteor.loginWithPassword(email, password, function(err){
        if (err) {
          Session.set( "createError", "Sorry, "+err.reason );
        } else {
          $('#account-email').val("");
          $('#account-password').val("");
          Session.set( "createError", '' );
          Router.go('/admin')
        }
      });
    }
    else {
      Session.set( "createError", "Please enter your email and password!" );
    }
    return false;
  }
});

