# GoToFix
Website: https://gotofix.kumassy.com

[GoToトラベル地域共通クーポン取扱店舗検索マップ](https://map.goto.jata-net.or.jp/) に、電子クーポンに対応しているかどうかをフィルタリングできる機能を追加します: 

![マップ](https://gotofix.kumassy.com/map.png)

[GoToトラベル事業](https://goto.jata-net.or.jp/about/) を利用して旅行した場合、旅行代金の 35% が給付され、旅行代金の 15% 分の地域共通クーポンが交付されます。[地域共通クーポン](https://goto.jata-net.or.jp/coupon/) は紙クーポンもしくは電子クーポンとして配布されますが、電子クーポンは対応店舗が少なく、利用しにくいことが指摘されています。どちらの種類のクーポンが配布されるかは、旅行会社および予約方法に依存し、旅行者が自由に決めることはできません。

地域共通クーポンを利用できる店舗は、[GoToトラベル地域共通クーポン取扱店舗検索マップ](https://map.goto.jata-net.or.jp/) で確認することができます。しかし、このマップでは電子クーポンに対応している店舗を探すことが難しいです。そこで、GoToFix は地域共通クーポン取扱店舗検索マップに電子クーポンに対応しているかどうかをフィルタリングできる機能を追加します。

なお、GoToトラベル事業を利用するには、[GoToトラベル事業のご利用に当たっての遵守事項](https://goto.jata-net.or.jp/assets/docs/20200923_1754_gotojyunsyu.pdf) に同意した上で[新しい旅のエチケット](https://goto.jata-net.or.jp/info/2020091001.html) を実践する必要があります。


## 開発
取扱店舗マップは Angular 1.6.10 で作られています。GoToFix はブックマークレットを実行することで、 Angular で管理されているデータにがんばってアクセスします。

```
// ロードされた全ての店舗情報を含む配列
angular.element(document.getElementById('sl-root')).injector().get('pointService').loaded_points

// 店舗別フィルターなどの検索条件に合致するかどうかを判定する関数
angular.element(document.getElementById('sl-root')).injector().get('configService').testFilter

// 検索結果一覧に表示する店舗
angular.element(document.getElementById('sl-root')).controller().points_in_bounds
```
