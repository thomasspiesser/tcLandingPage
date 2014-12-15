Meteor.startup(function () {
	if ( Meteor.users.find().count() === 0 ) {
		Accounts.createUser({
			email: 'thomas@traincrowd.de',
			password: 'tom_TC_7#'
		});
		Accounts.createUser({
			email: 'janek@traincrowd.de',
			password: 'jan_TC_8-'
		});
		Accounts.createUser({
			email: 'elias@traincrowd.de',
			password: 'eli_TC_9+'
		});
	}
});

Meteor.publish("emails", function() {
  if (this.userId) {
    return Emails.find();
  }
});

Meteor.methods({
  insertEmail: function(doc) {
    Emails.insert(doc);
  }
})