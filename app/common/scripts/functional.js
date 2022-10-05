//csl plasma ------------------
function togglePreferredCenter(nearestId) {
   if (!nearestId) {
      return;
   }

   jQuery(function ($) {
      //set icon based on nearest center id
      var centerEl = $(".js-prefercenter[data-itemid='" + nearestId + "']");
      if (centerEl.length > 0) {
         var isActive = centerEl.hasClass("active");

         //clear existing
         $(".js-prefercenter").each(function () { $(this).removeClass("active"); });

         if (isActive) {
            deleteCookie("nearestcenter");
         }
         else {
            setCookie("nearestcenter", nearestId, 14);
            centerEl.addClass("active");
         }
      }
   });
}