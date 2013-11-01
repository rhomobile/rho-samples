Tracker.Story = DS.Model.extend({
    title: DS.attr('string'),
    state: DS.attr('string', 'unstarted'),
    points: DS.attr('string', 3),
    tags: DS.attr('string', ''),
    description: DS.attr('string'),

    stateClass: function () {
        var state = this.get('state');
        var result = "";
        if (state == "unstarted") {
            result = "warning"
        }
        if (state == "inProgress") {
            result = "primary"
        }
        if (state == "finished") {
            result = "success"
        }
        return "label label-" + result;
    }.property("state")
});


Tracker.Story.FIXTURES = [
    {
        id: 1,
        title: "Run IMS on Windows Phone 8",
        state: "unstarted",
        points: 1,
        tags: "iOS, android, WP8",
        description: "Run IMS app on WP8 pls use attched files. Now bootstrap.js is loaded incompletely. It fails while is trying to open version.html. In text.js XMLHttpRequest component is used to open local file. But it fails. I found how Phonegap process local file opening. They have XHR patch for windows phone 8 written in js. here the link to commit in which they remove this patch from repo. Also in that commit they say that this patch now in native C# level. So you can use this js patch or try to figure out how they handle this situation in native code.     http://mail-archives.apache.org/mod_mbox/cordova-commits/201306.mbox/%3Cb04da7bdd01444b1af8506340fd18c9c@git.apache.org%3E"
    },

    {
        id: 2,
        title: "Support SSE",
        state: "inProgress",
        points: 2,
        tags: "iOS, android, WP8",
        description: "Server-Sent Events (SSE) is a standard describing how servers can initiate data transmission towards clients once an initial client connection has been established. They are commonly used to send message updates or continuous data streams to a browser client and designed to enhance native, cross-browser streaming through a JavaScript API called EventSource, through which a client requests a particular URL in order to receive an event stream."
    },

    {
        id: 3,
        title: "Updating page problem",
        state: "finished",
        points: 3,
        tags: "iOS, android, WP8",
        description: "When RhoWrapper is running THD replaced application files with new files and then try to navigate to screens which should be updated after file replacement and they see old screens. But after RhoWrapper restarting new screens are available. So THD suppose may be WebKit caches some files so thats why they don't see updated files just after their replacement without RhoWrapper restarting."
    }
];



