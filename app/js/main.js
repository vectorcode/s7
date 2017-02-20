
jQuery(document).ready(function($) {
  
      $('nav#menu').mmenu({
         extensions : [ 'pagedim-black', 'widescreen', "theme-dark" ],
         navbar   : {
            title : 'Меню'
         },
         offCanvas: {
           position: "right"
         },
         navbars  : []
      });

      $.mmenu.configuration.classNames.fixedElements = {
         fixed: "Fixed"
      };
      
   /*Скрываем лоадер после загрузки страницы*/
   $('.loader').fadeOut('fast');

   /*Переключаем слайды на странице Line up fest*/
   $('.blk-tab').on('click', '.blk-tab_links_item', function(event) {
      event.preventDefault();
      var that = $(this),
         item = that.data('item');
      $('.blk-tab_item, .blk-tab_links_item').removeClass('active');
      $('#item-'+item).addClass('active');
      that.addClass('active');
   });

   /*Увеличение изображений на странице Dress Code*/
   var rounds = $('.round-img-blk_img'),
       blkRounds = $('#blk-dresscode');

   blkRounds.on('click', '.round-img-blk_img', function(event) {
      event.preventDefault();
      rounds.addClass('smal-img').removeClass('big-img');
      $(this).removeClass('smal-img').addClass('big-img');
   });
   
   /*Блок show/hide на старнице Dress Code*/
   $('.show_hide_blk_title').on('click', function(event) {
      event.preventDefault();
      var that = $(this),
         dt = that.data('item'),
         ico = that.find('i');

      if(that.hasClass('active')){
         that.removeClass('active');
         ico.removeClass('fa-rotate-0').addClass('fa-rotate-180');
         $('#show_hide-'+dt).fadeOut(300);
      }else{
         that.addClass('active');
         ico.removeClass('fa-rotate-180').addClass('fa-rotate-0');
         $('#show_hide-'+dt).fadeIn(300);
      }
   });
});


// $('nav#menu').mmenu({
//             "configuration":{
//                "openingInterval" : 0
//             },
//             "backButton": {
//                    "close": true 
//                },
//             "extensions": [
//                "widescreen",
//                "pagedim-black",
//                "theme-dark"
//          ],
//          "offCanvas": {
//             "position": "right"
//          },
//          "setSelected": {
//             "hover": false,
//             "parent": false,
//             "current": false
//          },
//          "counters": false,
//          "iconPanels": false,
//          "navbars": [
//             {
//                "position": "top"
//             }
//          ]
//       });