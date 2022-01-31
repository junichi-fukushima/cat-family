## 導入方法

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
**基本設計**
https://docs.google.com/spreadsheets/d/1Qab86QrrpRR65b_HsGJErkKvyUKox1-Y3RDhfonUUSE/edit#gid=2022340122

**概要**
https://docs.google.com/document/d/1Z0ejCJiPY80YIVYPK44y6p0kzzTplLe7dd_SCarImYM/edit#

**ER図形**
https://app.diagrams.net/#G1Gf39q1gEgHnCLqaiJOJd0EHKF9GyUxEM

**画面遷移**
https://www.figma.com/file/22uLQGPReS033Xe8PcwthH/%E3%83%9D%E3%83%BC%E3%83%88%E3%83%95%E3%82%A9%E3%83%AA%E3%82%AA%E7%94%BB%E9%9D%A2%E8%A8%AD%E8%A8%88%E5%9B%B3?node-id=4%3A2
