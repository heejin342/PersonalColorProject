FlowRouter.template('/newpage2/:_id', 'newpage2');


Template.newpage2.helpers({

    keywords:function(){
        var major_id= FlowRouter.getParam('_id');
        console.log(major_id)
        var major = DB_MAJOR.findOne({_id:major_id}) ;
        //우리는 여기서 사용자가 저장한 디비를 꺼내서 어레이로 전달하고싶다.
        console.log(major)
        return major.keyword;
    }


})



Template.newpage2.events({
    'click #btn-save': function(){

        var keywords = $('#inp-keyword').val();
        var major_id = FlowRouter.getParam('_id');
        var major = DB_MAJOR.findOne({_id:major_id});
        if (major.keyword ==undefined){
            major.keyword=[];
        }

        FlowRouter.go('/path/true/false/true/.../10')

        major.keyword.push(keywords);

        DB_MAJOR.update({_id: major_id},major);

    }
})