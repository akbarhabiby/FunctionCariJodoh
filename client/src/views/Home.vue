<template>
  <section id ="nav">
    <h1 class="text-center text-white">Silahkan Masukkan Biodata Kamu</h1>
    <form action="/action_page.php">
      <label for="fname">Nama Lengkap:</label><br>
      <input type="text" id="fname" name="fname" placeholder="masukan nama kamu"><br>
      <label for="lname">Umur:</label><br>
      <input type="number" id="lname" name="lname" placeholder="masukan umur kamu"><br><br>
      <input type="submit" value="Submit">
    </form>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>
