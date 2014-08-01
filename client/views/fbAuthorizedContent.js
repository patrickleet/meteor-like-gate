Template.fbAuthorizedContent.helpers({
  fbAuthenticated: function () {
    return Session.get('fbAuthStatus') === 'connected';
  }
});