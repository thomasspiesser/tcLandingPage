Emails = new Meteor.Collection("emails");

Meteor.startup(function () {
	if ( Meteor.users.find().count() === 0 ) {
		var user = Accounts.createUser({
			email: 'thomas@traincrowd.de',
			password: 'asdfasdf',
			profile: {
				name: 'Thomas'
			}
		});
	}
});

Meteor.publish("emails", function() {
  if (this.userId) {
    return Emails.find();
  }
});