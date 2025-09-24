jQuery(document).ready(function(){
  // Only initialize flexslider if the plugin is loaded
  if (typeof jQuery.fn.flexslider === 'function') {
    jQuery('.flexslider').flexslider({
      animation: "fade",
      controlNav: false
    });
  }
});