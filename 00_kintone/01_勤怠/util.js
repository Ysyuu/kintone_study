//共通処理クラス
class Util {

    //PHPのarray_column的なもの
    //対象配列から指定したキーと、valueの形に構造変換した配列をreturnする
    //row 対象配列
    //value valueに設定するキー
    //key キーに設定するキー
    static array_column(rows, value, key) {
        if (!Array.isArray(rows)) {
            throw new Error();
        }
        if (arguments.length === 2) {
            return rows.map(r => r[value]);
        }
        return (function() {
            const res = {};
            for (let i = 0; i < rows.length; i++) {
                res[rows[i][key]] = (value == null) ? rows[i] : rows[i][value];
            }
            return res;
        })();
    }

    //レコード取得
    //appId 取得先のアプリID
    static getRecords(appId){
        var body = {
            app: appId
        }
        return new kintone.Promise(function(resolve, reject) {
            kintone.api(kintone.api.url('/k/v1/records', true), 'GET', body, function(resp) {
                // success
                console.log(resp);
                resolve(resp);
            }, function(error) {
                // error
                console.log(error);
                reject(error);
            });
        });
    }
}
