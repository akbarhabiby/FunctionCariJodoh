import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import swal from 'sweetalert2'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    send(context, data) {
      console.log(data, '<<<400');
      axios({
        baseURL : 'https://sheltered-earth-60338.herokuapp.com/',
        method : "POST",
         data : {
          name : data.name,
          umur : data.umur,
          penghasilan : data.penghasilan,
          agama : data.agama,
          pendidikan : data.pendidikan,
          status : data.status,
          merokok : data.merokok,
          hobby : data.hobby 
              }
           })
     .then(data => {
      swal.fire(
        'Yeay',
        data.data.msg,
        'success');
          console.log(data,"<<<<then");
         })
     .catch(err => {
      swal.fire(
        'Ooops',
        err.response.data.msg,
        'error');
          console.log(err.response.data,'<<<<catch');
         })
    }
  }
})
