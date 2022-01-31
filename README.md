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
