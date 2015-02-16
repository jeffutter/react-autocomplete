module.exports = {
  addClass: function (existing, added) {
    var classes = (existing || '').split(' ');
    if (classes.indexOf(added) === -1) classes.push(added);
    return classes.join(' ');
  },

  removeClass: function(existing, removed) {
    return (existing || '').split(' ').filter(function(c) {
      return c !== removed;
    }).join(' ');
  }
};
