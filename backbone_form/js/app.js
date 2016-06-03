(function(){

    var User = Backbone.Model.extend({
        defaults: {
            name: 'no name',
            mail: ''
        },
        validate: function(attrs) {
            if (_.isEmpty(attrs.name)) {
                return 'name must not be empty!';
            }
            if (_.isEmpty(attrs.mail)) {
                return 'mail must not be empty!';
            }
        },
        initialize: function() {
            this.on('invalid', function(model, error) {
                $('#error').html(error);
            });
        }
    });

    var user1 = new User({
        name: 'backbone太郎',
        mail: 'backbone.taro@example.com'
    });

    var AddUserView = Backbone.View.extend({
        el: '#addTask',
        events: {
            'click #add': 'addUser',
            'click #load': 'loadUser'
        },
        addUser: function() {
            var user = new User();
            if (user.set({name: $('#name').val(), mail: $('#mail').val()}, {validate:true})) {
                $('#error').empty();
                alert('Add user: name=[' + user.get('name') + '], mail=[' + user.get('mail') + ']');
            }
        },
        loadUser: function() {
            $('#name').val(user1.get('name'));
            $('#mail').val(user1.get('mail'));
            $('#error').empty();
        }
    })

    var addUserView = new AddUserView();

})();
