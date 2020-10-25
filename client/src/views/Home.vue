<template>
  <section id ="nav">
    <h1 class="text-center text-white">Silahkan Masukkan Biodata Kamu</h1>
    <form @submit.prevent="send()" >
      <label for="nama" class="text-white">Nama Lengkap:</label><br>
      <input type="text"  v-model="name" name="nama" placeholder="masukan nama kamu"><br><br>

      <label for="umur" class="text-white">Umur:</label><br>
      <input type="number" v-model="umur" placeholder="masukan umur kamu"><br><br>

      <label for="Penghasilan" class="text-white">Penghasilan:</label><br>
      <input type="number" v-model="penghasilan" placeholder="masukan penghasilan kamu"><br><br>

      <label for="Agama" class="text-white">Agama:</label><br>

      <select name="Agama" v-model="agama">
        <option value="Islam">Islam</option>
        <option value="Kristen">Kristen</option>
        <option value="Hindu">Hindu</option>
        <option value="Budha">Budha</option>
      </select><br><br>

      <label for="Pendidikan" class="text-white">Pendidikan:</label><br>

      <select name="Pendidikan"  v-model="pendidikan">
        <option value="SD">SD</option>
        <option value="SMP">SMP</option>
        <option value="SMA">SMA</option>
        <option value="S1">S1</option>
        <option value="S2">S2</option>
        <option value="S3">S3</option>
      </select><br><br>
      
      <label for="Status" class="text-white">Status:</label><br>

      <select name="Status" v-model="status">
        <option value="Single">Single</option>
        <option value="Menikah">Menikah</option>
        <option value="Duda">Duda</option>
      </select><br><br>

      <label for="Merokok" class="text-white">Merokok?</label><br><br>

      <select name="Merokok" v-model="merokok">
        <option value="Iya">Iya</option>
        <option value="Tidak">Tidak</option>
      </select><br><br>

      <label for="Hobby" class="text-white">Hobby:</label><br>
      <input type="text"  v-model="hobby" placeholder="masukan hobby kamu"><br><br>

      <input type="submit" value="Submit">
    </form>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data () {
    return { 
      name : "",
      umur : "",
      penghasilan : "",
      agama : "",
      pendidikan : "",
      status : "",
      merokok : "",
      hobby : "" 
    }
  },

  methods: {
    send () {
      let data = {
         name : this.name,
         umur : this.umur,
         penghasilan : this.penghasilan,
         agama : this.agama,
         pendidikan : this.pendidikan,
         status : this.status,
         merokok : this.merokok,
         hobby : this.hobby 
      }
      this.$store.dispatch('send', data)
    }
  }
}
</script>

<style>
body {
    background-image: url('https://i.pinimg.com/originals/86/54/e2/8654e24e3700d309eef3a26665f5a088.jpg');
    background-size: cover;
    background-repeat: repeat;
}
</style>