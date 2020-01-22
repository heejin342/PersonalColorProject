FlowRouter.template('/ex_album', 'ex_album');

Template.ex_album.helpers({
  posts: function(){
    return DB_POSTS.findAll();
  }
});
