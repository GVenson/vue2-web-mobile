import router from '@/router';
import store from '@/store';

console.log('beforeEach');
router.beforeEach((to, from, next) => {
    console.log(to);
    if (to.meta) {
        store.commit('TITLE', to.meta.title);
        // if (to.meta.titleBgColor) {
        //     store.commit('UPDATE_TITLE_BG_COOR', to.meta.titleBgColor);
        // } else {
        //     store.commit('UPDATE_TITLE_BG_COOR', '#369ff2');
        // }
    }
    next();
});
