Router.route('/', function () {
	this.render('home')
})

Router.route('/admin', {
	path: '/admin',
  onBeforeAction: function (pause) {
    if (!Meteor.user()) {
    	// render the login template but keep the url in the browser the same
    	this.render('login');
    } else {
    // otherwise don't hold up the rest of hooks or our route/action function     from running
    this.next();
  	}
  },
  waitOn: function () {
    // return one handle, a function, or an array
    return Meteor.subscribe('emails');
  },
  action: function () {
    // this.ready() is true if all items returned from waitOn are ready
    if (this.ready())
      this.render();
    else
      this.render('Loading');
  }
})

Router.route('/login')