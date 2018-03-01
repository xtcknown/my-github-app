import DS from "ember-data";

export default DS.Model.extend({
  login: DS.attr("string"),
  name: DS.attr("string"),
  publicRepos: DS.attr("number"),
  avatarUrl: DS.attr("string"),
  bio: DS.attr("string"),
  publicRepos: DS.attr(),
  following: DS.attr(),
  followers:DS.attr(),
  blog: DS.attr()
});
