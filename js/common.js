  $(document).ready(function () {
    // 탭기능
    $('.tab_list').menuBar();


    $(".gnb > li > a").on("click", function () {

      if ($(this).attr("data-target") == "blank") {
        return;
      }

      $(this).closest("li").toggleClass("on").siblings("li").removeClass("on").find(".gsnb").stop().slideUp('fast');
      $(this).siblings(".gsnb").stop().slideToggle('fast');
      return false;
    });
  });
  (function () {
    $.fn.menuBar = function () {
      this.each(function (index) {
        var $menuBar = null,
          $menuList = null,
          $menuSelect = null;

        function init(el) {
          $menuBar = $(el);
          $menuList = $menuBar.find('li');
        }

        function event() {
          $menuList.on('click', function () {
            if ($menuSelect)
              $menuSelect.removeClass('active');
            $menuList.removeClass('active');
            $menuSelect = $(this);
            $menuSelect.addClass('active');
            $menuSelect.parent('ul').next().children().eq($(this).index()).show().siblings().hide();
          });
        }
        init($(this));
        event();
      });
      return this;
    }
  })(jQuery);