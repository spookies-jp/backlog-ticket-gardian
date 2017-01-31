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
    guard_element = self.createGuardElement();
    self.cover(submit_element, guard_element);

    // 各ステータスボタンにイベント登録
    $(status_elements[0]).click(self.onChangeOpen(guard_element));
    $(status_elements[1]).click(self.onChangeInProgress(guard_element));
    $(status_elements[2]).click(self.onChangeResolved(guard_element));
    $(status_elements[3]).click(self.onChangeClosed(guard_element));

    // 予定/実績 の入力によるイベント
    var div = $('div.change-statuses-properties-item.-estimated-hours')
    var est = div.children('input[name="switchStatusIssue.estimatedHours"]');
    var act = div.children('input[name="switchStatusIssue.actualHours"]');
    est.blur(self.onBlurHours(guard_element));
    act.blur(self.onBlurHours(guard_element));
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


  //  on 未対応に変える
  //
  //    `登録` enable
  onChangeOpen: function(guard_element) {
    return function (e) {
      guard_element.hide();
    };
  },


  //  on 処理中に変える
  //
  //    if 予定 == empty
  //
  //      `登録` ボタンを disable
  //
  onChangeInProgress: function(guard_element) {

    var div = $('div.change-statuses-properties-item.-estimated-hours')
    var est = div.children('input[name="switchStatusIssue.estimatedHours"]');
    var act = div.children('input[name="switchStatusIssue.actualHours"]');

    return function (e) {
      guard_element.hide();
      if (utils.empty(est.prop('value'))) {
        guard_element.show();
      }
    };
  },


  //  on 処理済にかえる
  //
  //    if 予定 == empty || 実績 == empty
  //
  //      `登録` ボタンを disable
  onChangeResolved: function(guard_element) {

    var div = $('div.change-statuses-properties-item.-estimated-hours')
    var est = div.children('input[name="switchStatusIssue.estimatedHours"]');
    var act = div.children('input[name="switchStatusIssue.actualHours"]');

    return function(e) {
      guard_element.hide();
      if (utils.empty(est.prop('value')) || utils.empty(act.prop('value'))) {
        guard_element.show();
      }
    };
  },

  onChangeClosed: function(guard_element) {
    var self = BacklogTicketGuardian;
    return self.onChangeResolved(guard_element);
  },



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
  onBlurHours: function(guard_element) {

    var div = $('div.change-statuses-properties-item.-estimated-hours')
    var est = div.children('input[name="switchStatusIssue.estimatedHours"]');
    var act = div.children('input[name="switchStatusIssue.actualHours"]');

    return function(e) {

      var status_elements = $(".comment-editor__radio-item");
      var status = status_elements.children('input:checked').prop('value');

      guard_element.hide();
      switch (Number(status)) {
        case 1: // 未対応
          break;

        case 2: // 処理中
          if (utils.empty(est.prop('value'))) {
            guard_element.show();
          }
          break;

        case 3: // 処理済
        case 4: // 完了
          if (utils.empty(est.prop('value')) || utils.empty(act.prop('value'))) {
            guard_element.show();
          }
          break;

        default:
          break;
      }

    };
  },
};

BacklogTicketGuardian.init();
