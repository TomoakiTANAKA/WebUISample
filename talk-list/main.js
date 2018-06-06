"use strict";

$(document).ready(function () {
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