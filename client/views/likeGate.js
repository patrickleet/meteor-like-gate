Template.likeGate.helpers({
  likeBoth: function() {
    return (Session.get('likes1') && Session.get('likes2'));
  }
});