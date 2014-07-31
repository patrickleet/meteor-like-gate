Template.fbAuth.helpers({
  fbAuthenticated: function () {
    return Session.get('fbAuthenticated');
  }
});