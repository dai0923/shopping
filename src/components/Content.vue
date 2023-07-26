<script>
import IntroduceTab from "@/components/IntroduceTab.vue";
import ArticlesTab from "@/components/ArticlesTab.vue";
import ActivityTab from "@/components/ActivityTab.vue";
import { ref } from "vue";

export default {
  components: {
    IntroduceTab,
    ArticlesTab,
    ActivityTab,
  },
  setup() {
    //tab 我在這邊卡了一段時間 有沒有其他的寫法? 本來是有想用 reactive包可是不是要包空陣列還是空物件
    const pageIdx = ref(0);
    const handChangePage = (idx) => {
      pageIdx.value = idx;
    };
    return { pageIdx, handChangePage };
  },
};
</script>

<template>
  <div class="container">
    <h1>123456789</h1>
    <div class="content">
      <div class="profile">
        <div class="introduce">
          <img src="../assets/pro_bg.png" alt="" class="bg" />
          <img src="../assets/photo.png" alt="" class="photo" />
          <div class="in_text">
            <p class="name">Dmitry Kargaev</p>
            <p>
              Freelance UX/UI designer, 80+ projects in web design, mobile apps
              (iOS & android) and creative projects. Open to offers.
            </p>
            <button class="bg_b">Contact info</button>
            <button class="bg_w">1,043 connections</button>
          </div>
        </div>
        <div class="tab_box">
          <div class="tab_btn">
            <button
              @click="handChangePage(0)"
              :class="[{ active: pageIdx === 0 }, 'first']"
            >
              Introduce
            </button>
            <button
              @click="handChangePage(1)"
              :class="{ active: pageIdx === 1 }"
            >
              Activity & interests
            </button>
            <button
              @click="handChangePage(2)"
              :class="[{ active: pageIdx === 2 }, 'last']"
            >
              Articles (3)
            </button>
          </div>

          <div class="tab_con Introduce_text" v-if="pageIdx === 0">
            <IntroduceTab />
          </div>
          <div class="tab_con Activity_text" v-if="pageIdx === 1">
            <ArticlesTab />
          </div>
          <div class="tab_con Articles_text" v-if="pageIdx === 2">
            <ActivityTab />
          </div>
        </div>
      </div>
      <div class="data">
        <div class="dashboard">
          <p>your dashboard</p>
          <hr />
          <div class="data_box">
            <p class="num">367</p>
            <p class="text">views today</p>
          </div>
          <div class="data_box">
            <p class="num">15</p>
            <p class="text">posts views</p>
          </div>
          <div class="data_box">
            <p class="num">9</p>
            <p class="text">search appereances</p>
          </div>
        </div>
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
  @media screen and (max-width: 1200px) {
    display: block;
  }
}

.profile {
  width: 850px;
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
}

.introduce {
  background-color: #fff;
  position: relative;
  color: #181818;
  .bg {
    @media screen and (max-width: 1200px) {
      width: 100%;
    }
  }
  .photo {
    position: absolute;
    left: 25px;
    bottom: 30px;
    max-width: 170px;
    @media screen and (max-width: 991px) {
      bottom: 0px;
      top: 0px;
      max-width: 20%;
    }
  }
  .in_text {
    padding: 25px 45px 35px 220px;
    font-size: 14px;
    @media screen and (max-width: 991px) {
      padding: 25px;
    }
    p {
      margin: 10px auto;
    }
    .name {
      font-size: 18px;
      font-weight: bold;
    }
  }
  button {
    width: 170px;
    line-height: 32px;
    text-align: center;
    font-size: 12px;
    font-weight: bold;
    margin-right: 15px;
    border-radius: 4px;
    background-color: #0077b5;
    color: #fff;
    border: 1px solid transparent;
    &:hover {
      background-color: #fff;
      color: #0275b1;
      border: 1px solid #0275b1;
    }
    @media screen and (max-width: 991px) {
      width: 100%;
      margin-bottom: 10px;
    }
  }
}

.data {
  width: 290px;
  background-color: #fff;
  padding: 25px 30px 30px;
  margin-left: 40px;
  @media screen and (max-width: 1200px) {
    margin-left: 0px;
    margin-top: 20px;
    max-width: 100%;
    display: block;
    width: auto;
  }
}

.data_box {
  margin: 20px auto;
  p {
    margin: 0px;
  }
  .num {
    color: #0275b1;
    font-size: 52px;
    font-weight: bold;
  }
  .text {
    font-size: 14px;
    color: #181818;
  }
}

.tab_box {
  margin-top: 20px;
}
.tab_btn {
  border-bottom: 1px solid #e7e7e7;
  margin-bottom: 30px;
  font-weight: bold;
  font-size: 12px;
  button {
    border: 1px solid #e7e7e7;
    color: #181818;
    width: 240px;
    text-align: center;
    padding: 15px 0px;
    background-color: #fff;
    border-bottom: 0px;
    vertical-align: bottom;
    &.first {
      border-radius: 5px 0 0 0;
    }
    &.last {
      border-radius: 0 5px 0 0;
    }
    &.active {
      background-color: rgba(0, 119, 181, 1);
      color: #fff;
      padding-top: 22px;
      border-radius: 5px 5px 0 0;
    }
    @media screen and (max-width: 991px) {
      width: 33.3%;
    }
  }
}

.tab_con {
  background-color: #fff;
  padding: 30px;
}
</style>
