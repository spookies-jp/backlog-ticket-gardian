// ステータスのDOM
var status_elements = $(".comment-editor__radio-item");
var submit_element  = $('#submitbtn');

// ticket ページかどうか判定
console.log(status_elements);
console.log(submit_element);

// 引数のDOMを覆うようなDIV要素を追加する
// 登録ボタンを覆って無効にする
(function(element) {

  var cover_dom = $(document.createElement('div'));
  cover_dom.width(105);
  cover_dom.height(32);
  cover_dom.text('Guard!!');
  cover_dom.css('color', 'whitesmoke');
  cover_dom.css('font-wieght', 'bold');
  cover_dom.css('background-color', '#696208');
  cover_dom.css('border-radius', '4px');
  cover_dom.css('opacity', '0.8');
  cover_dom.css('position', 'absolute');
  cover_dom.css('top', 0);

  element.parent().append(cover_dom);

})(submit_element);


// ステータス毎のDOMにonClickイベントを登録して制御

//  on 未対応に変える
//
//    `登録` enable

//  on 処理中に変える
//
//    if 予定 == empty
//
//      `登録` ボタンを disable
//

//  on 処理済にかえる
//
//    if 予定 == empty || 実績 == empty
//
//      `登録` ボタンを disable

//  on (予定|実績)から離れる
//
//    if status == 処理中
//
//      if 予定 == empty
//
//        `登録` ボタンをdisable
//
//      else
//
//        `登録` enable
//
//    else if status == 処理済
//
//      if 予定 == empty || 実績 == empty
//
//        `登録` disable
//
//      else
//
//        `登録` enable
//
