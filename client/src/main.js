import Vue from 'vue';
import './styles/main.scss';

// 注册antd组件
import AntdVueInit from './utils/antd-vue-init';
AntdVueInit();

Vue.config.productionTip = false;

// 注册 router 钩子
import Component from 'vue-class-component';
Component.registerHooks(['beforeRouteEnter', 'beforeRouteLeave', 'beforeRouteUpdate']);

import Router from '@components/Router';
import Store from './store/index.ts';

new Vue({
  router: Router,
  store: Store,
  render: h => {
    return (
      <div id="app">
        <router-view />
      </div>
    );
  }
}).$mount('#app');
