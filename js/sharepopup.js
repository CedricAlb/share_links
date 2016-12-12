(function ($, Drupal, window, document, undefined) {

  Drupal.behaviors.sharepopup = {
    attach: function (context, settings) {

      var Config = {
        Width: 550,
        Height: 400
      };

  		$("a.sharepopup", context).click(function(e) {
        // popup position
        var
          px = Math.floor((($(window).width() || 1024) - Config.Width) / 2),
          py = Math.floor((($(window).height() || 700) - Config.Height) / 2);

        // open popup
        var popup = window.open(this.href, "social",
          "width="+Config.Width+",height="+Config.Height+
          ",left="+px+",top="+py+
          ",location=0,menubar=0,toolbar=0,status=0,scrollbars=1,resizable=1");
        if (popup) {
          popup.focus();
          if (e.preventDefault) e.preventDefault();
          e.returnValue = false;
        }
  		});
    }
  };

})(jQuery, Drupal, this, this.document);
