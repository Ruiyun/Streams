// Generated by CoffeeScript 1.7.1
(function() {
  var Titles, addSidebarTitle, addToSidebar, doSearch, makeKeyPressHandler, makeSidebarSection, matches;

  Titles = {
    'method': {
      title: 'Methods',
      link: 'methods'
    },
    'generator': {
      title: 'Generators',
      link: 'generators'
    },
    'operator.stateless': {
      title: 'Stateless Intermediate Operators',
      link: 'stateless'
    },
    'operator.stateful': {
      title: 'Stateful Intermediate Operators',
      link: 'stateful'
    },
    'terminator': {
      title: 'Terminal Operators',
      link: 'terminals'
    },
    'exception': {
      title: 'Exceptions',
      link: 'exceptions'
    }
  };

  addSidebarTitle = function($sidebar, cls) {
    var title;
    title = $("<a/>");
    title.addClass('sidebar-title');
    title.attr('href', '#' + Titles[cls].link);
    title.html(Titles[cls].title);
    return $sidebar.append(title);
  };

  addToSidebar = function($list, $func) {
    var $anchor, $item, id;
    id = $func.attr('id');
    $item = $('<li/>');
    $item.addClass('sidebar-item');
    $anchor = $('<a/>');
    $anchor.addClass('sidebar-anchor');
    $anchor.html($('.fname', $func).html());
    $anchor.attr('href', '#' + id);
    $item.append($anchor);
    return $list.append($item);
  };

  makeSidebarSection = function($sidebar, cls) {
    var $list;
    addSidebarTitle($sidebar, cls);
    $list = $('<ul/>');
    $list.addClass("sidebar-list");
    $(".function." + cls).each(function(index, el) {
      return addToSidebar($list, $(el));
    });
    return $sidebar.append($list);
  };

  matches = function(query, text) {
    if (query === '') {
      return true;
    }
    return text.indexOf(query) !== -1;
  };

  doSearch = function(query) {
    query = query.toLowerCase();
    return $(".sidebar-item .sidebar-anchor").each(function(index, el) {
      var $el, text;
      $el = $(el);
      text = $el.text().toLowerCase();
      if (matches(query, text)) {
        return $el.show();
      } else {
        return $el.hide();
      }
    });
  };

  makeKeyPressHandler = function($search) {
    return function(e) {
      return doSearch($search.val());
    };
  };

  $(function() {
    var $search, $sidebar;
    $sidebar = $('#sidebar');
    makeSidebarSection($sidebar, 'method');
    makeSidebarSection($sidebar, 'generator');
    makeSidebarSection($sidebar, 'operator.stateless');
    makeSidebarSection($sidebar, 'operator.stateful');
    makeSidebarSection($sidebar, 'terminator');
    makeSidebarSection($sidebar, 'exception');
    $search = $('#search');
    return $search.keyup(makeKeyPressHandler($search));
  });

}).call(this);
