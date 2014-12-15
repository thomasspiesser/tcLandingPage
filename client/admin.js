Template.admin.events({
  'click #logoutButton': function () {
    Meteor.logout();
    Router.go('login')
  }
});

Template.admin.helpers({
	emails: function () {
		return Emails.find().fetch();
	}
});