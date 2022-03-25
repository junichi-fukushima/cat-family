## サービス概要[開発中]
### 保護した猫と里親を結びつける里親サイト
```
既存の猫の里親サイトは複数ありますが、使用する中でUXの面で課題が多いサービスが多いと感じたのが背景としてあります。そこで、猫と里親のマッチング精度を向上させていきたいと思い開発を進めました。
＜課題と感じているUX＞
・検索機能が脆弱
募集地域から応募しても距離が遠いとの理由で里親を断られることが多いのであまり意味がない
・情報量が多すぎる
好み/居住地をを事前に設定しておすすめをpushしたい
また、既存のサービスにはない寄付機能をつけることで、中々里親が決まらない猫への支援を活性化させていくことも目的としています。
```
## 使用技術
### バックエンド
* Ruby on Rails

### フロントエンド
* Next.js(TypeScript)

### テスト
* Rspec
* Jest

### CI/CD
* GithubActions

### 開発環境
* Docker

## フロントエンド設計
### AtomicDesignをベースに設計
* atoms<br>
button,input,iconなど<br>
アプリケーション内で**これ以上分割しない単位**を想定

* molecules<br>
items,sidebarなど<br>

* organisms<br>
list,wrapしたものなど<br>
atomsやmoleculesのパーツを組み合わせたもの

* template<br>
layout,containerなど<br>
ロジックを持たない。ページ全体のレイアウトを共通して当て込むために仕様

### 状態管理ライブラリはReduxを使用
* reduxの設計パターンはre-duckを使用<br>
ファイル数は多くなるが、役割が明快であるため。またducksパターンだとファイルの中身が肥大化しやすいため。
<pre>
state
 └ store
        ├ initialState.ts
        ├ store.ts
 └ ducks
         └ cats
             ├ actions.ts
             ├ operation.ts
             ├ reducers.ts
             ├ selectors.ts
             └ type.ts
</pre>

## ローカル環境導入方法

**①git clone する**

```
% git clone https://github.com/junichi-fukushima/cat-family.git
% cd cat_family
```

**②Dockerイメージの作成**

```
cat_family % docker-compose build
cat_family % docker-compose up
```

**③Rails側でデータベースの作成**

```
cat_family % docker-compose exec api rails db:create
```

**④Railsでアプリケーションの起動をする**

```
cat_family % docker-compose up
```

**※nokogiriでエラーが出た場合**

ubuntuとnokogiriがconflictしてうまく起動できない場合がある。その場合、下記を実行
```
cat_family % cd api
api % bundle config set force_ruby_platform true
cat_family % docker-compose build
cat_family % docker-compose up
```

## 設計書周り
**基本設計**<br>
https://docs.google.com/spreadsheets/d/1Qab86QrrpRR65b_HsGJErkKvyUKox1-Y3RDhfonUUSE/edit#gid=2022340122

**概要**<br>
https://docs.google.com/document/d/1Z0ejCJiPY80YIVYPK44y6p0kzzTplLe7dd_SCarImYM/edit#

**ER図**<br>
https://app.diagrams.net/#G1Gf39q1gEgHnCLqaiJOJd0EHKF9GyUxEM

**画面遷移**<br>
https://www.figma.com/file/22uLQGPReS033Xe8PcwthH/%E3%83%9D%E3%83%BC%E3%83%88%E3%83%95%E3%82%A9%E3%83%AA%E3%82%AA%E7%94%BB%E9%9D%A2%E8%A8%AD%E8%A8%88%E5%9B%B3?node-id=4%3A2
