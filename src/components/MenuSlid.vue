<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    const isOpen = computed(() => {
      return store.getters.isOpen;
    });

    //用變數一樣可以有效果為什麼要用 computed?
    // const isOpen = store.getters.isOpen;

    const handClickMenu = () => {
      store.dispatch("handSideOpen");
    };
    return { handClickMenu, isOpen };
  },
};
</script>
<template>
  <div :class="['menu', { open: isOpen }]">
    <a class="closeBtn" @click="handClickMenu">
      <img src="../assets/close.png" alt="" />
    </a>
    <div class="sidebox">
      <div class="more">
        <p>More from LinkedIn</p>
        <img src="../assets/help.png" alt="" />
      </div>
      <form class="search" action="search.php">
        <img src="../assets/search.png" alt="" />
        <input name="q" placeholder="Search..." type="search" />
      </form>
      <div class="personal">
        <img src="../assets/rectangle.png" alt="" />
        <div class="per_name">
          <p>
            <span class="name">D. Kargaev</span> <span class="you">YOU</span>
          </p>
          <p>
            <span class="views"> 367 views today</span>
            <span class="grow">
              +32<img src="../assets/arrow-up-right.png" alt=""
            /></span>
          </p>
        </div>
      </div>
      <ul class="sideLink">
        <!-- 點連結後側邊欄沒有消失 -->
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/feed">Feed</router-link></li>
        <li><router-link to="/network">Network</router-link></li>
        <li><router-link to="/jobs">Job</router-link></li>
        <li><router-link to="/chat">Chat</router-link></li>
        <li><router-link to="/notices">Notices</router-link></li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.menu {
  position: fixed;
  top: 0;
  right: -370px;
  width: 370px;
  height: 100%;
  z-index: 20;
  background-color: #fff;
  transition: right 0.3s;
  &.open {
    right: 0px;
    > a.closeBtn {
      cursor: pointer;
      position: absolute;
      right: 370px;
      top: 0px;
      z-index: 3;
    }
  }
}

.more {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f4f4f4;
  p {
    margin-left: 20px;
  }
}

.personal {
  padding: 10px 30px;
  font-size: 12px;
  display: none;
  @media screen and (max-width: 1200px) {
    display: block;
  }
  .per_name {
    display: inline-block;
    margin-left: 15px;
    p {
      margin-bottom: 11px;
    }
    .name {
      font-weight: bold;
      margin-left: 10px;
    }
    .you {
      color: #18181833;
    }
    .views {
      color: #747474;
      margin-left: 4px;
    }
    .grow {
      color: #02b033;
      font-weight: bold;
    }
  }
}

.search {
  display: none;
  padding: 10px 30px;
  @media screen and (max-width: 991px) {
    width: 100%;
    display: block;
  }
  img {
    vertical-align: bottom;
  }
  input {
    border: 0px;
  }
}

.sideLink {
  display: none;
  @media screen and (max-width: 991px) {
    display: block;
  }
  a {
    font-size: 20px;
    color: #000;
    margin-bottom: 20px;
    display: block;
  }
}
</style>
