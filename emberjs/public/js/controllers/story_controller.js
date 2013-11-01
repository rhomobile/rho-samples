Tracker.StoryController = Ember.ObjectController.extend({
    visible: false,
    actions: {
        toggleVisible: function () {

            this.set('visible', !this.get('visible'));
        },

        deleteStory: function () {
            var story = this.get('model');
            story.deleteRecord();
            story.save();
        },
        editStory: function () {
            var story = this.get('model');
            this.transitionToRoute('stories.edit', story.id);
        }
    },
    isVisible: function (key, value) {
        return this.get('visible');
    }.property('visible'),
    getTags: function () {
        var model = this.get('model');
        var tags = this.get('tags');
        return tags.split(',')
    }.property('tags')
})