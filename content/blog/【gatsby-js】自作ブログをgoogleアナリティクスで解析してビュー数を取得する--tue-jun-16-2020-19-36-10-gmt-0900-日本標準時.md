---
templateKey: blog-post
title: 【Gatsby.js】自作ブログをGoogleアナリティクスで解析してビュー数を取得する
description: 今までWordPressなどを使っていたけど、自社の都合上他のCMSに移行したい・・・ そうだ、流行りのGatsbyを使おう！
contributor: ダミー・ダミお
tags:
  - 動物
  - hello
date: 2020-06-16T10:36:10.957Z
featuredimage: /images/uploads/lion-5218109_1280.jpg
---
<!--StartFragment-->

# 概要

今までWordPressなどを使っていたけど、自社の都合上他のCMSに移行したい・・・\
そうだ、流行りのGatsbyを使おう！

・・・と思い立ったはいいものの、テンプレートをアレンジしようとすると\
必要な機能は自身で実装しなければいけなくなりどこをいじればいいかわからない方向けの記事となります。

# [](https://qiita.com/Hidesato_Nakamura/items/a9ac8cebfce894c5c624#gatsbyjs%E3%81%AE%E3%83%97%E3%83%A9%E3%82%B0%E3%82%A4%E3%83%B3%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6)Gatsby.jsのプラグインについて

Gatsby.jsには様々なプラグインが用意されており、`npm install`で容易に組み込むことができます。\
今回は記事毎のアクセス数をGraphQL経由で取得して表示する`Google Analytics Reporting API`の使用方法を\
順を追ってご紹介させていただきます。

# [](https://qiita.com/Hidesato_Nakamura/items/a9ac8cebfce894c5c624#%E6%89%8B%E9%A0%86)手順

以下の手順に沿って進めます.

1.Google Analyticsプラグインの導入\
2.Google Cloud プラットフォームでサービス アカウントの登録\
3.Google Analytics Reporting APIの導入\
4.Google Analyticsでサービス アカウントのアクセス権を付与\
5.GraphQLでビュー数を取得

# [](https://qiita.com/Hidesato_Nakamura/items/a9ac8cebfce894c5c624#1google-analytics%E3%83%97%E3%83%A9%E3%82%B0%E3%82%A4%E3%83%B3%E3%81%AE%E5%B0%8E%E5%85%A5)1.Google Analyticsプラグインの導入

ビュー数を持ってくる前提作りとして、アクセスを分析してデータを残すためにアナリティクスを導入します。\
まずは[こちら](https://analytics.google.com/analytics/web/)からGoogle Analyticsに登録してください。

登録が終わったら、アナリティクスでGatsbyプロジェクトを解析してもらうためのプラグインを導入します。

<!--EndFragment-->