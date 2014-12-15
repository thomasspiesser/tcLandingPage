Router.route('/', function () {
	this.render('home')
})

Router.route('/login')
Router.route('/admin')

Router.onBeforeAction(function () {
  // all properties available in the route function
  // are also available here such as this.params

  if (!(Meteor.user() || Meteor.loggingIn())) {
    // if the user is not logged in, render the Login template
    Router.go('login')
  } else {
    // otherwise don't hold up the rest of hooks or our route/action function     from running
    this.next();
  }
}, {only: ['admin']});