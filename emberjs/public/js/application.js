window.Tracker = Ember.Application.create(
    {
        LOG_TRANSITIONS: true
    }
);

Tracker.ApplicationAdapter = DS.FixtureAdapter.extend();