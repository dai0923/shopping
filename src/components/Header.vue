<script>
import MenuBtn from "@/components/MenuBtn.vue";
import MenuSlid from "@/components/MenuSlid.vue";
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";

export default {
  components: { MenuBtn, MenuSlid },
  setup() {
    const store = useStore();

    const isOpen = computed(() => {
      return store.getters.isOpen;
    });

    const handClickMenu = () => {
      store.dispatch("handSideOpen");
    };

    return { isOpen, handClickMenu };
  },
};
</script>
<template>
  <header>
    <div :class="['cover', { open: isOpen }]" @click="handClickMenu"></div>
    <nav>
      <router-link class="logo" to="/">
        <img src="../assets/logo02.png" alt="" />
      </router-link>
      <ul>
        <li>
          <router-link to="/feed">
            <img src="../assets/feed.png" alt="" />
          </router-link>
        </li>
        <li>
          <router-link class="network" to="/network">
            <img src="../assets/network.png" alt="" />
          </router-link>
        </li>
        <li>
          <router-link to="/jobs">
            <img src="../assets/job.png" alt="" />
          </router-link>
        </li>
        <li>
          <router-link to="/chat">
            <img src="../assets/chat.png" alt="" />
          </router-link>
        </li>
        <li>
          <router-link to="/notices">
            <img src="../assets/notices.png" alt="" />
          </router-link>
        </li>
      </ul>
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
      <MenuBtn />
    </nav>
    <MenuSlid />
  </header>
</template>
<style lang="scss" scoped>
header {
  width: 100%;
}
.cover {
  &.open {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    position: fixed;
    z-index: 2;
  }
}
nav {
  display: flex;
  height: 80px;
  justify-content: space-between;
  ul {
    display: flex;
    padding-left: 0px;
    margin: 0;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
}

.logo {
  padding: 17px 40px;
  display: block;
  border-right: 1px solid #f4f4f4;
}

.search {
  display: flex;
  align-self: center;
  padding: 30px;
  border-left: 1px solid #f4f4f4;
  border-right: 1px solid #f4f4f4;
  width: 15%;
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
  @media screen and (max-width: 991px) {
    display: none;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  input {
    border: 0px;
  }
}

.personal {
  display: flex;
  align-items: center;
  padding: 30px;
  font-size: 12px;
  @media screen and (max-width: 1200px) {
    display: none;
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

.other {
  margin-right: 40px;
  @media screen and (max-width: 1200px) {
    margin-right: 0px;
  }
}
</style>
