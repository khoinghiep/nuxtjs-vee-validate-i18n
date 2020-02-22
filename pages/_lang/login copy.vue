<template>
  <div class="Content">
    <div class="container">
      <h1 class="Content__Title">{{ $t('login.title') }}</h1>
      <p>{{ $t('login.introduction') }}</p>
    </div>

    <div class="form-container">
      <form>
        <h1>{{$t('form.login.tile')}}</h1>

        <input :placeholder="$t('form.login.email')" type="text" required />

        <input :placeholder="$t('form.login.passowrd')" type="password" required />

        <button>{{$t('form.login.button.submit')}}</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      en: '/login',
      vi: '/dang-nhap'
    }
  },
  head() {
    return { title: this.$t('login.title') }
  }
}
</script>

<style>
form {
  box-sizing: border-box;

  width: 480px;

  margin: 10px auto 0;

  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.2);

  padding-bottom: 40px;

  border-radius: 3px;
}

form h1 {
  box-sizing: border-box;

  padding: 20px;
}

input {
  margin: 40px 25px;

  width: 75%;

  display: block;

  border: none;

  padding: 10px 0;

  border-bottom: solid 1px #1abc9c;

  transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);

  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 96%,
    #1abc9c 4%
  );

  background-position: -200px 0;

  background-size: 200px 100%;

  background-repeat: no-repeat;

  color: #0e6252;
}

input:focus,
input:valid {
  box-shadow: none;

  outline: none;

  background-position: 0 0;
}

input:focus::-webkit-input-placeholder,
input:valid::-webkit-input-placeholder {
  color: #1abc9c;

  font-size: 11px;

  transform: translateY(-20px);

  visibility: visible !important;
}

button {
  border: none;

  background: #1abc9c;

  cursor: pointer;

  border-radius: 3px;

  padding: 6px;

  width: 200px;

  color: white;

  margin-left: 25px;

  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
}

button:hover {
  transform: translateY(-3px);

  box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.2);
}
</style>