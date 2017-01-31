# backlog-ticket-guardian

# What's this

Backlogチケットの`予定/実績`が未入力の場合に、`処理済み``完了`に変更できないように制御する ChromeExtension です。

## チケットページでの動作

チケットの詳細ページで動作します。ステータスごとに設定された条件に応じて **登録ボタン** を無効化します。

- 未対応
  - 条件はありません。
- 処理中
  - **予定**が未入力の場合に**登録ボタン**を無効化します。
- 処理済み
  - **予定** 及び **実績** が未入力の場合に**登録ボタン**を無効化します。
- 完了
  - **予定** 及び **実績** が未入力の場合に**登録ボタン**を無効化します。

![animation](https://raw.githubusercontent.com/spookies-jp/backlog-ticket-gardian/images/backlog-ticket-guardian-anim.gif)

# How to use

**1.** 任意のディレクトリにソースコードをダウンロードします。
```bash
$ git clone https://github.com/spookies-jp/backlog-ticket-gardian.git

```
**2.** Chromeで**拡張機能**の設定ページを開きます。

<img width="500px" src="https://raw.githubusercontent.com/spookies-jp/backlog-ticket-gardian/images/how_to_02.png">

**3.** **デベロッパーモード**にチェックを入れます。

<img width="750px" src="https://raw.githubusercontent.com/spookies-jp/backlog-ticket-gardian/images/how_to_03.png">

**4.** **パッケージ化されていない拡張機能を読み込む** ボタンから先程ダウンロードしたディレクトリを指定します。

**5.** インストール完了
