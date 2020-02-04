const store = require('store');
/**
 * データをlocalstorageに保存・読み込みする
 */
class storageApi {
    /**
     * @param {Object} 保存対象
     */
    save = clearedOrderList => {

        store.set('clearedOrderList', clearedOrderList);
    }

    /**
     * @return {Object}
     */
    load = () => {
        const saveData = store.get('clearedOrderList');
        return (typeof saveData === 'undefined')? [] : saveData;
    }
}
export default storageApi;