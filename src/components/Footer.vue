<script>
export default {};
</script>
<template>
  <footer>
    <div class="logo">
      <img src="../assets/footer_logo.png" alt="" />
    </div>
    <div class="navigation">
      <p class="title">Navigation</p>
      <div class="link">
        <ul>
          <li><a href="">About</a></li>
          <li><a href="">Careers </a></li>
          <li><a href="">Advertising </a></li>
          <li><a href="">Small Business</a></li>
        </ul>
        <ul>
          <li><a href="">Talent Solutions </a></li>
          <li><a href="">Marketing Solutions </a></li>
          <li><a href="">Sales Solutions </a></li>
          <li><a href="">Safery Center</a></li>
        </ul>
        <ul>
          <li><a href="">Community Guidelines </a></li>
          <li><a href="">Privacy & Terms </a></li>
          <li><a href="">Mobile App</a></li>
        </ul>
      </div>
    </div>
    <div class="access">
      <p class="title">Fast access</p>
      <button>Questions?</button>
      <button>Settings</button>
    </div>
    <div class="language">
      <p class="title">Language</p>
      <select name="" id="">
        <option value="English">English</option>
        <!--帶看看資料 -->
      </select>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  font-size: 12px;
  background-color: #f7f9fb;
  border-top: 1px solid #e5e5e5;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 35px 15px 53px;
}

.logo {
  margin-right: 69px;
  @media screen and (max-width: 576px) {
    margin-right: 0px;
  }
}

.title {
  margin-top: 0px;
  margin-bottom: 23px;
  font-weight: bold;
}

.navigation {
  margin-right: 65px;
  @media screen and (max-width: 991px) {
    margin-right: 0px;
  }
  .title {
    margin-bottom: 30px;
  }
  .link {
    display: flex;
    flex-wrap: wrap;
  }
  ul {
    padding-left: 0px;
    margin: 0;
    margin-right: 50px;
    a {
      line-height: 30px;
      color: #181818;
    }
  }
}

.access {
  margin-right: 60px;
  @media screen and (max-width: 576px) {
    margin-right: 0px;
  }
  button {
    width: 170px;
    line-height: 32px;
    text-align: center;
    font-weight: bold;
    border-radius: 4px;
    background-color: #0077b5;
    color: #fff;
    border: 1px solid transparent;
    display: block;
    margin-bottom: 10px;
    &:hover {
      background-color: #fff;
      color: #0275b1;
      border: 1px solid #0275b1;
    }
  }
}

.language {
  @media screen and (max-width: 1200px) {
    margin-top: 20px;
  }
  select {
    /*移除箭頭樣式*/
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;

    /*改變右邊箭頭樣式*/
    background: url("~@/assets/arrow.png") no-repeat transparent;
    background-position: right 15px center;

    border: 0px;
    width: 270px;
    height: 32px;
    padding-left: 15px;
    background-color: #fff;
    color: #181818;
    border-radius: 4px;
  }
  /*IE隱藏箭頭樣式*/
  &::-ms-expand {
    display: none;
  }
}
</style>
