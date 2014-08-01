// app 1503683893182742
// jen 101426753295780

window.fbAsyncInit = function() {
  FB.init({
      appId      : '1503683893182742', // enter your facebook app here
      channelUrl : document.location.protocol + "//" + document.location.host + '/channel.html',
      status     : true,
      xfbml      : true
  });

  FB.getLoginStatus(function(response) {
    if (response.status) 
      Session.set('fbAuthStatus', response.status);
  });

  var fg1 = new FacebookFangate({
    fbPageId       : '588585107836902', // page we want to use for fan gate
    onChangeStatus : function(like) {
      if (like) {
        Session.set('likes1', true);
      }
      else {
        Session.set('likes1', false);  
      }
    }
  });

  var fg2 = new FacebookFangate({
    fbPageId       : '101426753295780', // page we want to use for fan gate
    onChangeStatus : function(like) {
      if (like) {
        Session.set('likes2', true);            
      }
      else {
        Session.set('likes2', false);            
      }
    }
  });
};