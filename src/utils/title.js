import router from '@/router';
import store from '@/store';

router.beforeEach((to, from, next) => {
    console.log('beforeEach', to, from, store);
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
