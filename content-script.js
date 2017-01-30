var BacklogTicketGuardian = {

  init: function() {

    var self = BacklogTicketGuardian;

    // ステータスと登録ボタンのDOM
    var status_elements = $(".comment-editor__radio-item");
    var submit_element  = $('#submitbtn');

    if (utils.falsy(status_elements[0])) {
      console.log('Backlog Ticket Guardian: this is not target page.');
      return;
    }
    // ticket ページかどうか判定
    console.log(status_elements);
    console.log(submit_element);

    // 引数のDOMを覆うようなDIV要素を追加する
    // 登録ボタンを覆って無効にする
    self.cover(submit_element, self.createGuardElement());
  },


  cover: function(target_dom, covering_element) {

    if (utils.existy(target_dom)) {
      if (utils.existy(target_dom.parent())) {
        target_dom.parent().append(covering_element);
      }
    }
  },


  createGuardElement: function() {

    var gurad_element = $(document.createElement('div'));
    gurad_element.width(105);
    gurad_element.height(32);
    gurad_element.text('Guard!!');
    gurad_element.css('color', 'whitesmoke');
    gurad_element.css('font-wieght', 'bold');
    gurad_element.css('background-color', '#696208');
    gurad_element.css('border-radius', '4px');
    gurad_element.css('opacity', '0.8');
    gurad_element.css('position', 'absolute');
    gurad_element.css('top', 0);

    return gurad_element;
  },


};

BacklogTicketGuardian.init();

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
