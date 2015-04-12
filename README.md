DroidKaigi Webサイト [![Build Status](https://travis-ci.org/DroidKaigi/droidkaigi.github.io.svg)](https://travis-ci.org/DroidKaigi/droidkaigi.github.io)
==========================

http://droidkaigi.github.io/

## 【講演者の方へ】講演情報の変更について

Webサイトにて公開している講演内容（タイトル、発表者名など）の変更をPull Requestにて受け付けます。

[/_data/sessions.yml](https://github.com/DroidKaigi/droidkaigi.github.io/blob/master/_data/sessions.yml)を編集し、PRを送って下さい。

※講演時間の調整については、運営スタッフへ直接お問い合わせ下さい。

## ローカルでの確認方法

### 事前準備
1. rubyのインストール(ver 1.9.3 or 2.0.0)
1. bundlerのインストール
1. github用のgemをインストール  
`bundle install --path vendor/bundle`

### 確認
1. jekyllを起動  
`bundle exec jekyll serve`
1. http://127.0.0.1:4000/ にアクセス

