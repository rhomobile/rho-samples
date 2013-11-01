Tracker.Router.map(function () {
    this.resource('stories', {path: '/'}, function () {
        this.route('new', {path: '/stories/new'});
        this.route('edit', {path: '/stories/:story_id/edit'}, function(){
            this.route('edit');
        });

    });
});

Tracker.StoriesRoute = Ember.Route.extend({
    model: function () {
        return this.store.find('story');
    }
})

Tracker.StoriesIndexRoute = Ember.Route.extend({
    model: function () {
        return this.modelFor('stories');
    }
})


Tracker.StoriesNewRoute = Ember.Route.extend({
    model: function () {
       var story = this.store.createRecord('story');
        return story;
    }
})