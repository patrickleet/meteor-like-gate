Template.likeGate.helpers({
  likeBoth: function() {
    return (Session.get('likes1') && Session.get('likes2'));
  }
});

Template.likeGate.events({
  'click .btn': function () {
    Downloads.insert({
      date: new Date()
    });
  }
});