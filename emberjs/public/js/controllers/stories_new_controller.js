Tracker.StoriesNewController = Ember.ObjectController.extend({
    actions: {
        save: function () {
            var story = this.get('model');
            story.save();
            this.transitionToRoute('stories');
        },
        cancel: function () {
            var story = this.get('model');
            story.deleteRecord();
            this.transitionToRoute('stories');
        }

    },
    states: function () {
        return ['unstarted', 'inProgress', 'finished']
    }.property(),

    availablePoints: function () {
        return [1, 2, 3, 4, 5]
    }.property()
})