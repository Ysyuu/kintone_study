(function() {
    "use strict";
    //レコード一覧表示後表示後イベント
    kintone.events.on('app.record.index.show', function(event) {
        if (document.getElementById('my_index_button') !== null) {
            return;
        }

        //追加するボタンの設定
        var beginButton = document.createElement('button');
        beginButton.id = 'my_index_button';
        beginButton.innerText = '出勤';
        
        var finishButton = document.createElement('button');
        finishButton.id = 'my_index_button';
        finishButton.innerText = '退勤';

        // ボタンクリック時の処理
        beginButton.onclick = function() {
            window.confirm('出勤');
        };
        finishButton.onclick = function() {
            window.confirm('退勤');
        };

        //ヘッダー部分の要素を取得し、取得取得した要素の子要素としてbeginButton、finishButtonを追加
        kintone.app.getHeaderMenuSpaceElement().appendChild(beginButton);
        kintone.app.getHeaderMenuSpaceElement().appendChild(finishButton);
    });
})();