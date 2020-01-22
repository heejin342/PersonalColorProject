//{{> loginButtons}} 기능의 로그인 옵션 셋팅
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});

FlowRouter.template = function(url, t_name, d_name) {
  //url: 접속 url / t_name: 연결 template / d_name: 다이나믹 template
  FlowRouter.route(url, {
    action: function() {
      BlazeLayout.render(t_name);
    }
  });
}

