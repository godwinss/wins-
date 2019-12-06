(function ($) {
    var $html = $('html'),
        $h1 = $('h1'),
        colors = [
      '#A11E1E',
    ],
        txt = [
      '🎊HAPPY BIRTHDAY🎊',
      'TO MYSELF(Godwin)',
      'My wishes for myself today are more grace, more prosperity, more happiness and more years ahead. Happy birthday to me!',
      '<span class="fa fa-4x fa-birthday-cake"></span><hr><h2>happy birthday</h2>'
    ],
        animate = function (it, direction) {
            var c = Math.floor((Math.random() * colors.length));
            var m = direction == "left" ? -1 : 1;
            $h1
                .velocity({
                    opacity: 1,
                    translateY: [0, -2000],
                    translateX: [0, 0]
                }, {
                    duration: 2400,
                    delay: 0,
                    easing: [150, 15],
                    begin: function (el) {
                        $h1.css({
                            'background-color': colors[it % colors.length]
                        });
                        $h1.html(txt[it]);
                    }
                })
                .velocity({
                    translateX: m * 2000
                }, {
                    duration: 1500,
                    delay: 3000,
                    easing: [50, 14],
                    complete: function () {
                        animate(it == txt.length - 1 ? 0 : it + 1, direction == "left" ? "right" : "left");
                    }
                });
        }

    animate(0, "left");
})(window.jQuery);
