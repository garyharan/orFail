// executes code or alert users when a selector returns nothing.
(function($){
  $.fn.orFail = function(error){
    if (this.length == 0){
      if (typeof error == 'function'){
        error();
      } else if (typeof error = 'string'){
        alert('error');
      }
    }
    return this;
  }

})(jQuery);
