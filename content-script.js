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

    // この時点ではステータスを取れない
    window.setTimeout(function() {
      self.onBlurHours(guard_element)();
    }, 1000);

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

    var guard_element = $(document.createElement('div'));
    guard_element.width(105);
    guard_element.height(32);
    guard_element.text('Guard!!');
    guard_element.css('color', 'whitesmoke');
    guard_element.css('font-wieght', 'bold');
    guard_element.css('background-color', '#696208');
    guard_element.css('border-radius', '4px');
    guard_element.css('opacity', '0.8');
    guard_element.css('position', 'absolute');
    guard_element.css('top', 0);

    return guard_element;
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

    return function(e) {

      var status_elements = $(".comment-editor__radio-item");
      var status = status_elements.children('input:checked').prop('value');

      var self = BacklogTicketGuardian;
      switch (Number(status)) {
        case 1: // 未対応
          self.onChangeOpen(guard_element)();
          break;

        case 2: // 処理中
          self.onChangeInProgress(guard_element)();
          break;

        case 3: // 処理済
          self.onChangeResolved(guard_element)();
          break;

        case 4: // 完了
          self.onChangeClosed(guard_element)();
          break;
      }

    };
  },
};

BacklogTicketGuardian.init();
