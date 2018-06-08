"use strict";

$(document).ready(function () {
  $('#btn1').on('click', function() {
    // TODO：本当はセレクトボックスの中身を取得して「1」とか「2」とか取得する
    var index = 0;

    var targetObject = $('.row.cardlist-area__row').eq(index);

    targetObject.find('.message-card__wrap').each(function() {
      var height = $(this).find("p").height();
      $(this).find(".message-card__content").animate({
        "height": height
      }, "slow");
      $(this).addClass("active");
    });
  });



  $('.message-card__wrap').on('click', function () {
    if (!$(this).hasClass("active")) {
      // クリックされたらコンテナの高さを固定値から、文字の高さに変更する
      var height = $(this).find("p").height();
      $(this).find(".message-card__content").animate({
        "height": height
      }, "slow");
      $(this).addClass("active");
    } else {
      // すでにactiveになっていたら基準の高さに戻す
      $(this).find(".message-card__content").animate({
        "height": "150px" /* もとのサイズ */
      }, "slow");
      $(this).removeClass("active");
    }
  });
});