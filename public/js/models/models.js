

window.Wine = Backbone.Model.extend({

    

    urlRoot: "/wines",

    idAttribute: "id",

    initialize: function () {
        this.validators = {};

        this.validators.name = function (value) {
            return value.length > 0 ? {isValid: true} : {isValid: false, message: "You must enter a name"};
        };

        this.validators.email = function (value) {
            return value.length > 0 ? {isValid: true} : {isValid: false, message: "You must enter a grape variety"};
        };

        this.validators.users_password = function (value) {
            return value.length > 0 ? {isValid: true} : {isValid: false, message: "You must enter a grape variety"};
        };

        this.validators.emailtrue = function (value) {
            return value.length > 0 ? {isValid: true} : {isValid: false, message: "You must enter a country"};
        };
    },

    validateItem: function (key) {
        return (this.validators[key]) ? this.validators[key](this.get(key)) : {isValid: true};
    },

    // TODO: Implement Backbone's standard validate() method instead.
    validateAll: function () {

        var messages = {};

        for (var key in this.validators) {
            if(this.validators.hasOwnProperty(key)) {
                var check = this.validators[key](this.get(key));
                if (check.isValid === false) {
                    messages[key] = check.message;
                }
            }
        }

        return _.size(messages) > 0 ? {isValid: false, messages: messages} : {isValid: true};
    },

    
    
    defaults: {
        id: null,
        name: "",
        email: "",
        emailtrue: "",
        telefono: "",
        year: "",
        description: "",
        picture: null,
        createdAt: Date.now(),
        lastLoggedInAt: Date.now(),
        forwards: [],
        group: "JK9x4kOSTKqb3XEHuP71ZA==",
        ip: "::ffff:127.0.0.1",
        settings: {},
        users_password: "",
    }
});

window.WineCollection = Backbone.Collection.extend({

    model: Wine,

    url: "/wines"

});