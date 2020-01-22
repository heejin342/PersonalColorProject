FlowRouter.template('/newpage', 'newpage');


Template.newpage.helpers({
    datas:function(){

        //우리는 여기서 사용자가 저장한 디비를 꺼내서 어레이로 전달하고싶다.
        return DB_MAJOR.findAll()
    },
})

Template.newpage.events({
    'click #btn-save': function() {
        var name = $('#inp-major').val();
        DB_MAJOR.insert({
            'name':name,
            keyword:[]
        });
        //console.log(name);
    }
})


//뉴페이지를 경로르 치면 뉴페이지로 가겠다.



//개발자도구에서 콘솔에서 $('#inp-major').val(); 하면값을 볼 수 있음