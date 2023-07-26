<script>
import { ref } from "vue";
export default {
  setup() {
    const tabIdx = ref(0);
    const handChangeTab = (idx) => {
      tabIdx.value = idx;
    };

    return { tabIdx, handChangeTab };
  },
};
</script>
<template>
  <div class="connectionsCon">
    <div class="tab_box">
      <div class="tab_btn">
        <button @click="handChangeTab(0)" :class="{ active: tabIdx === 0 }">
          RECEIVED
        </button>
        <button @click="handChangeTab(1)" :class="{ active: tabIdx === 1 }">
          SENT
        </button>
      </div>

      <div class="tab_con" v-if="tabIdx === 0">
        <div class="newConn">
          <div class="personal">
            <img src="@/assets/photo2.png" alt="" />
            <div class="introduction">
              <p class="per_name">Brandon Wilson</p>
              <p class="per_profession">Senior UX designer</p>
              <a class="per_link" href="">623 connections</a>
            </div>
            <p class="message">
              Hey, I saw your works. I like it! Can we do something together? Or
              maybe you have project for UX at the moment?
            </p>
            <div class="response_btn">
              <button class="accept">Accept</button>
              <button class="decline">Decline</button>
            </div>
          </div>
          <div class="personal">
            <img src="@/assets/photo3.png" alt="" />
            <div class="introduction">
              <p class="per_name">Brandon Wilson</p>
              <p class="per_profession">Senior UX designer</p>
              <a class="per_link" href="">623 connections</a>
            </div>
            <p class="message"></p>
            <div class="response_btn">
              <button class="accept">Accept</button>
              <button class="decline">Decline</button>
            </div>
          </div>
        </div>
        <div class="newNotice">
          <p>RECENT CONNECTIONS</p>
          <hr />
        </div>
        <div class="recent">
          <div class="recent_box">
            <img src="@/assets/photo4.png" alt="" />
            <div class="recent_in">
              <p class="re_name">Brandon Wilson</p>
              <p class="re_profession">Senior UX designer</p>
              <span class="time">Yesterday, 14:30</span>
            </div>
          </div>
          <div class="recent_box">
            <img src="@/assets/photo5.png" alt="" />
            <div class="recent_in">
              <p class="re_name">Brandon Wilson</p>
              <p class="re_profession">Senior UX designer</p>
              <span class="time">Yesterday, 14:30</span>
            </div>
          </div>
          <div class="recent_box">
            <img src="@/assets/photo7.png" alt="" />
            <div class="recent_in">
              <p class="re_name">Brandon Wilson</p>
              <p class="re_profession">Senior UX designer</p>
              <span class="time">Yesterday, 14:30</span>
            </div>
          </div>
          <div class="recent_box">
            <img src="@/assets/photo6.png" alt="" />
            <div class="recent_in">
              <p class="re_name">Brandon Wilson</p>
              <p class="re_profession">Senior UX designer</p>
              <span class="time">Yesterday, 14:30</span>
            </div>
          </div>
        </div>
      </div>
      <div class="tab_con" v-if="tabIdx === 1">
        <div class="recent">
          <div class="recent_box">
            <img src="@/assets/photo4.png" alt="" />
            <div class="recent_in">
              <p class="re_name">Brandon Wilson</p>
              <p class="re_profession">Senior UX designer</p>
              <span class="time">Yesterday, 14:30</span>
            </div>
          </div>
          <div class="recent_box">
            <img src="@/assets/photo5.png" alt="" />
            <div class="recent_in">
              <p class="re_name">Brandon Wilson</p>
              <p class="re_profession">Senior UX designer</p>
              <span class="time">Yesterday, 14:30</span>
            </div>
          </div>
          <div class="recent_box">
            <img src="@/assets/photo6.png" alt="" />
            <div class="recent_in">
              <p class="re_name">Brandon Wilson</p>
              <p class="re_profession">Senior UX designer</p>
              <span class="time">Yesterday, 14:30</span>
            </div>
          </div>
          <div class="recent_box">
            <img src="@/assets/photo7.png" alt="" />
            <div class="recent_in">
              <p class="re_name">Brandon Wilson</p>
              <p class="re_profession">Senior UX designer</p>
              <span class="time">Yesterday, 14:30</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.connectionsCon {
  width: 100%;
}
.tab_btn {
  border-bottom: 1px solid #e7e7e7;
  margin-bottom: 40px;
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
    &.active {
      background-color: rgba(0, 119, 181, 1);
      color: #fff;
      padding-top: 22px;
      border-radius: 5px 5px 0 0;
    }
    @media screen and (max-width: 991px) {
      width: 50%;
    }
  }
}
.newNotice {
  position: relative;
  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #f7f9fb;
    font-weight: bold;
    margin: 0px;
    padding: 0 20px;
    span {
      color: #0275b1;
    }
  }
  hr {
    height: 1px;
    border: none;
    background-color: #e7e7e7;
  }
}

.newConn {
  margin-top: 30px;
  margin-bottom: 42px;
}

.personal {
  display: flex;
  align-items: center;
  padding: 20px 30px;
  font-size: 12px;
  margin-bottom: 10px;
  background-color: #fff;
  @media screen and (max-width: 1175px) {
    display: block;
    text-align: center;
  }
  .message {
    line-height: 15px;
    font-size: 10px;
    color: #18181899;
    width: 40%;
    margin: auto 20px auto 15px;
    @media screen and (max-width: 1175px) {
      width: 100%;
    }
  }
}

.introduction {
  margin-left: 15px;
  padding-right: 50px;
  border-right: 2px solid #0275b1;
  @media screen and (max-width: 1175px) {
    margin-left: 0px;
    padding-right: 0px;
    border-right: 0px;
  }
  .per_name {
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 5px;
  }
  .per_profession {
    font-size: 10px;
    color: #181818;
    margin-bottom: 3px;
  }
  .per_link {
    color: #0275b1;
    font-size: 10px;
  }
}

.response_btn {
  text-align: center;
  button {
    width: 90px;
    font-size: 12px;
    font-weight: bold;
    margin: 5px 7.5px;
    padding: 10px 20px;
    border-radius: 4px;
    border: 0px;
  }
  .accept {
    background: linear-gradient(180deg, #0077b5 0%, #0e6795 100%);
    color: #fff;
  }
  .decline {
    border: 1px solid #b7b7b7;
    color: #b7b7b7;
    background-color: transparent;
  }
}

.recent {
  display: flex;
  margin: 40px auto;
  flex-wrap: wrap;
}

.recent_box {
  display: flex;
  align-items: center;
  padding: 20px 30px;
  font-size: 12px;
  margin-bottom: 10px;
  background-color: #fff;
  width: 40%;
  position: relative;
  &:nth-child(odd) {
    margin-right: 10px;
  }
  @media screen and (max-width: 1175px) {
    width: 100%;
    &:nth-child(odd) {
      margin-right: 0px;
    }
  }
}

.recent_in {
  margin-left: 15px;
  width: 100%;
  .re_name {
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 5px;
  }
  .re_profession {
    font-size: 10px;
    color: #181818;
    margin-bottom: 3px;
  }
  .time {
    position: absolute;
    bottom: 10px;
    right: 15px;
    color: #1818184d;
  }
}
</style>
