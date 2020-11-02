+++
title = "GoToFix- 電子クーポンに対応した店舗をフィルタリングする方法"
sort_by = "weight"
+++


# 概要 {#overview}
[地域共通クーポン](https://goto.jata-net.or.jp/coupon/) の電子クーポンを使いたいのに、使える店舗が分かりづらい！と思ったことはありませんか？ GoToFix は [GoToトラベル地域共通クーポン取扱店舗検索マップ](https://map.goto.jata-net.or.jp/) に、電子クーポンに対応しているかどうかをフィルタリングできる機能を追加します: 
<div class="img-wrapper">
    <img class="gotofix-map" src="map.png">
</div>

[GoToトラベル事業](https://goto.jata-net.or.jp/about/) を利用して旅行した場合、旅行代金の 35% が給付され、旅行代金の 15% 分の地域共通クーポンが交付されます。[地域共通クーポン](https://goto.jata-net.or.jp/coupon/) は紙クーポンもしくは電子クーポンとして配布されますが、電子クーポンは対応店舗が少なく、利用しにくいことが指摘されています。どちらの種類のクーポンが配布されるかは、旅行会社および予約方法に依存し、旅行者が自由に決めることはできません。

地域共通クーポンを利用できる店舗は、[GoToトラベル地域共通クーポン取扱店舗検索マップ](https://map.goto.jata-net.or.jp/) で確認することができます。しかし、このマップでは電子クーポンに対応している店舗を探すことが難しいです。そこで、GoToFix は地域共通クーポン取扱店舗検索マップに電子クーポンに対応しているかどうかをフィルタリングできる機能を追加します。

なお、GoToトラベル事業を利用するには、[GoToトラベル事業のご利用に当たっての遵守事項](https://goto.jata-net.or.jp/assets/docs/20200923_1754_gotojyunsyu.pdf) に同意した上で[新しい旅のエチケット](https://goto.jata-net.or.jp/info/2020091001.html) を実践する必要があります。

# 使い方 {#usage}
GoToトラベル地域共通クーポン取扱店舗検索マップに電子クーポンに対応した店舗をフィルタリングできる機能を追加する方法を示します

### 事前準備 {#usage-prerequisites}
GoToFix による機能を追加するための「ブックマークレット」の登録作業を行います。まず、下のソースコードをコピーしてください。
<div class="code-wrapper">
<button id="copy">コピーする</button>
<div id="code">
javascript:(function()%7Bif(window.gotofix)alert(&quot;gotofix: すでにスクリプトが読み込まれています&quot;);else{window.gotofix={},window.gotofix.onlye=!1;const o=document.getElementById(&quot;sl-root&quot;),t=angular.element(o).injector().get(&quot;configService&quot;),e=angular.element(o).injector().get(&quot;pointService&quot;);window.gotofix.testFilter=t.testFilter,t.testFilter=function(o,t,e,i,n){return window.gotofix.onlye?&quot;1&quot;===o[&quot;電子クーポン&quot;]&amp;&amp;window.gotofix.testFilter(o,t,e,i,n):window.gotofix.testFilter(o,t,e,i,n)};let i=&#039;\n    &lt;div class=&quot;conditions-wrapper&quot;&gt;        &lt;h4&gt;        &lt;img class=&quot;icon&quot; alt=&quot;検索オプション (gotofix)&quot; title=&quot;検索オプション (gotofix)&quot; src=&quot;/static/maps/gotocp/images/icon_other.png&quot;&gt;        &lt;span&gt;検索オプション (gotofix v0.1)&lt;/span&gt;        &lt;/h4&gt;        &lt;ul class=&quot;conditions&quot;&gt;        &lt;li id=&quot;gotofix-ui-onlye&quot;&gt;            &lt;i class=&quot;material-icons theme-color&quot; &gt;check_box_outline_blank&lt;/i&gt;            &lt;div class=&quot;name&quot;&gt;電子クーポン対応&lt;/div&gt;        &lt;/li&gt;        &lt;/ul&gt;    &lt;/div&gt;    &#039;;const n=document.createElement(&quot;div&quot;);n.innerHTML=i,n.id=&quot;gotofix-ui&quot;,document.querySelector(&quot;#sl-root .option-box&quot;).appendChild(n),document.getElementById(&quot;gotofix-ui-onlye&quot;).addEventListener(&quot;click&quot;,(()=&gt;{window.gotofix.onlye?(n.querySelector(&quot;i&quot;).textContent=&quot;check_box_outline_blank&quot;,window.gotofix.onlye=!1,e.showMarkers()):(n.querySelector(&quot;i&quot;).textContent=&quot;check_box&quot;,window.gotofix.onlye=!0,e.showMarkers())})),document.querySelector(&quot;#sl-root .tab-switch li:first-child&quot;).addEventListener(&quot;click&quot;,(()=&gt;{n.style.display=&quot;block&quot;})),document.querySelector(&quot;#sl-root .tab-switch li:last-child&quot;).addEventListener(&quot;click&quot;,(()=&gt;{n.style.display=&quot;none&quot;})),alert(&quot;gotofix: スクリプトを読み込みました&quot;)}%7D)()
</div>
</div>

コピーできたら、これをブックマークとして登録してください。

### ブックマークレットの登録方法 {#register-bookmarklet}
予め [事前準備](#usage-prerequisites) を読みソースコードをコピーしておいてください

<details>
    <summary>iPad (Chrome)</summary>
    <div>
        1. 適当なページをブックマークします。共有メニューからブックマークをタップしてください
        <div class="img-wrapper">
            <img class="usage" src="usage_ipad_chrome_r1.png">
        </div>
        2. 再度共有メニューを開き、ブックマークを編集をタップしてください
        <div class="img-wrapper">
            <img class="usage" src="usage_ipad_chrome_r2.png">
        </div>
        3. 名前を適当に変更し、URL の部分にコピーしたソースコードを貼り付けてください
        <div class="img-wrapper">
            <img class="usage" src="usage_ipad_chrome_r3.png">
        </div>
    </div>
</details>
<details>
    <summary>Android (Chrome)</summary>
    <div>
        1. 適当なページをブックマークします。ハンバーガーメニューを開き、星マークをタップしてください
        <div class="img-wrapper">
            <img class="usage" src="usage_android_chrome_r1.jpg">
        </div>
        2. 再度ハンバーガーメニューを開き、星マークをタップしてください
        <div class="img-wrapper">
            <img class="usage" src="usage_android_chrome_r2.jpg">
        </div>
        3. 名前を適当に変更し、URL の部分にコピーしたソースコードを貼り付けてください
        <div class="img-wrapper">
            <img class="usage" src="usage_android_chrome_r3.jpg">
        </div>
    </div>
</details>
<details>
    <summary>PC (Chrome)</summary>
    <div>
        1. 適当なページをブックマークします。アドレスバーにある星マークを選択してください
        <div class="img-wrapper">
            <img class="usage" src="usage_pc_chrome_r1.png">
        </div>
        2. 再度星マークを選択し、その他をクリックします
        <div class="img-wrapper">
            <img class="usage" src="usage_pc_chrome_r2.png">
        </div>
        3. 名前を適当に変更し、URL の部分にコピーしたソースコードを貼り付けてください
        <div class="img-wrapper">
            <img class="usage" src="usage_pc_chrome_r3.png">
        </div>
    </div>
</details>
<details>
    <summary>PC (FireFox)</summary>
    <div>
        1. 適当なページをブックマークします。アドレスバーにある星マークをクリックして完了をクリックしてください
        <div class="img-wrapper">
            <img class="usage" src="usage_pc_firefox_r1.png">
        </div>
        2. ブックマーク一覧から先程登録したブックマークを **右クリック** し、情報を見るをクリックしてください
        <div class="img-wrapper">
            <img class="usage" src="usage_pc_firefox_r2.png">
        </div>
        3. 名前を適当に変更し、URL の部分にコピーしたソースコードを貼り付けてください
        <div class="img-wrapper">
            <img class="usage" src="usage_pc_firefox_r3.png">
        </div>
    </div>
</details>



### ブックマークレットの実行 {#usage-execute-bookmarklet}
登録しておいた GoToFix ブックマークレットを実行します

<details>
    <summary>iPad (Chrome)</summary>
    <div>
        <a href="https://map.goto.jata-net.or.jp/">GoToトラベル地域共通クーポン取扱店舗検索マップ</a> のページを開いてください。
        アドレスバーにブックマークの登録名を入力し、表示されたブックマークをタップしてください
        <div class="img-wrapper">
            <img class="usage" src="usage_ipad_chrome_u1.png">
        </div>
    </div>
</details>
<details>
    <summary>Android (Chrome)</summary>
    <div>
        <a href="https://map.goto.jata-net.or.jp/">GoToトラベル地域共通クーポン取扱店舗検索マップ</a> のページを開いてください。
        アドレスバーにブックマークの登録名を入力し、表示されたブックマークをタップしてください
        <div class="img-wrapper">
            <img class="usage" src="usage_android_chrome_u1.jpg">
        </div>
    </div>
</details>
<details>
    <summary>PC (Chrome)</summary>
    <div>
        <a href="https://map.goto.jata-net.or.jp/">GoToトラベル地域共通クーポン取扱店舗検索マップ</a> のページを開いてください。
        アドレスバーにブックマークの登録名を入力し、表示されたブックマークをクリックしてください
        <div class="img-wrapper">
            <img class="usage" src="usage_pc_chrome_u1.png">
        </div>
    </div>
</details>
<details>
    <summary>PC (FireFox)</summary>
    <div>
        <a href="https://map.goto.jata-net.or.jp/">GoToトラベル地域共通クーポン取扱店舗検索マップ</a> のページを開いてください。
        ブックマーク一覧から登録したブックマークをクリックしてください
        <div class="img-wrapper">
            <img class="usage" src="usage_pc_firefox_u1.png">
        </div>
    </div>
</details>


### 追加された機能を利用  {#usage-use-gotofix}
ブックマークレットを実行すると、絞り込み検索に「検索オプション (gotofix)」が現れます。チェックマークを入れると、電子クーポンに対応した店のみ表示されます。

<div class="img-wrapper">
    <img class="map" src="map.png">
</div>

# Contributing {#contributing}
コントリビューションを広く受け付けています

- New issues (feature requests, bug reports, questions, ideas, ...)
- Pull requests (documentation improvements, code improvements, new features, ...)
