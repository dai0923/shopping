<script>
import { computed, reactive, ref } from "vue";
export default {
  setup() {
    const isOpen = ref(true);

    const accordionArr = reactive([
      {
        name: "Connections",
        img: require("../assets/link.png"),
        id: "connections",
        num: 1038, //像這種資料會變的是不是就不是屬於前端處理的，請問寫在這邊是正確的嗎?
      },
      {
        name: "Invitations",
        img: require("@/assets/disc.png"),
        id: "invitations",
        num: 2,
      },
      {
        name: "Teammates",
        img: require("@/assets/archive.png"),
        id: "teammates",
        num: 8,
      },
      {
        name: "Groups",
        img: require("@/assets/users.png"),
        id: "groups",
      },
      {
        name: "Pages",
        img: require("@/assets/layers.png"),
        id: "pages",
        num: 18,
      },
      {
        name: "Hashtags",
        img: require("@/assets/hash.png"),
        id: "hashtags",
        num: 1,
      },
    ]);
    const boxHeight = computed(() => {
      //想要在畫面768的時候測選單是關的 可是試了幾次還是沒辦法達成
      // let mm = window.matchMedia("(max-width: 768px)");
      if (isOpen.value) {
        return `${accordionArr.length * 60}px`;
      }
      return 0;
    });

    const handOpen = () => {
      isOpen.value = !isOpen.value;
    };
    return { isOpen, accordionArr, handOpen, boxHeight };
  },
};
</script>
<template>
  <div class="container">
    <div class="content">
      <div class="accordion_box">
        <div class="accordion">
          <a @click="handOpen" class="title">open/close</a>
          <ul class="box" :style="{ height: boxHeight }">
            <router-link
              class="sideLink"
              v-for="(item, index) in accordionArr"
              :key="item.name"
              :to="{ path: `/network/${item.id}` }"
            >
              <li>
                <img :src="item.img" alt="" />
                {{ item.name }} <span class="num">{{ item.num }}</span>
              </li>
            </router-link>
          </ul>
        </div>
      </div>

      <div class="mian">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  max-width: 1180px;
  margin: auto;
  padding: 40px;
  display: flex;
  @media screen and (max-width: 768px) {
    display: block;
  }
}
.accordion {
  width: 290px;
  overflow: hidden;
  margin-right: 40px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  .title {
    cursor: pointer;
    height: 50px;
    font-weight: bold;
    color: #000;
    font-size: 14px;
    display: block;
    text-align: center;
    line-height: 50px;
    background-color: #fff;
    border: 1px solid #000;
  }
  .box {
    transition: height 0.4s;
    margin: 0;
    padding: 0px;
    .sideLink {
      display: block;
      border-bottom: 1px solid #f4f4f4;
      font-size: 12px;
      color: rgba(24, 24, 24, 1);
      background-color: #fff;
      padding: 20px 30px 20px 60px;
      font-weight: bold;
      &.router-link-active {
        border-left: 10px solid #0275b1;
        img {
          opacity: 0.6;
        }
        .num {
          color: #ed8f03;
        }
      }
      li {
        position: relative;
        .num {
          position: absolute;
          right: 0;
        }
      }
      img {
        vertical-align: middle;
        margin-right: 10px;
      }
    }
  }
}
</style>
