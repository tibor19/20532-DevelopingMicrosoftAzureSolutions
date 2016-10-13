(function ($) {

    $.fn.extend({

        moreLink: function (options) {

            var defaults = {
                showChar: 100,
                ellipsestext: "...",
                moretext: "more",
                lesstext: "less"
            };

            var options = $.extend(defaults, options);

            return this.each(function () {

                var o = options;

                var obj = $(this);

                var content = obj.html();

                if (content.length > o.showChar) {

                    var c = content.substr(0, o.showChar);
                    var h = content.substr(o.showChar - 1, content.length - o.showChar);

                    var html = c + '<span class="moreelipses">' + o.ellipsestext + '</span>&nbsp;<span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + o.moretext + '</a></span>';

                    obj.html(html);
                }

                obj.find('.morelink').click(function () {

                    if ($(this).hasClass("less")) {

                        $(this).removeClass("less");
                        $(this).html(o.moretext);

                    } else {

                        $(this).addClass("less");
                        $(this).html(o.lesstext);

                    }

                    $(this).parent().prev().toggle('fast');
                    $(this).prev().toggle('fast');

                    return false;

                });

            });

        }

    });

})(jQuery);


















































































































































































































