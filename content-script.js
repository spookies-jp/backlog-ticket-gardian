// ステータスのDOM
var status_elements = $(".comment-editor__radio-item");

window.console.log(status_elements);

// ticket ページかどうか判定

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

