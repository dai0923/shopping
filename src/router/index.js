import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import Home from "../views/Home.vue";
import Feed from "../views/Feed.vue";
import Network from "../views/Network.vue";
import Jobs from "../views/Jobs.vue";
import Chat from "../views/Chat.vue";
import Notices from "../views/Notices.vue";

//network
import Connections from "../views/Network/Connections.vue";
import Invitations from "../views/Network/Invitations.vue";
import Teammates from "../views/Network/Teammates.vue";
import Groups from "../views/Network/Groups.vue";
import Pages from "../views/Network/Pages.vue";
import Hashtags from "../views/Network/Hashtags.vue";

//notfound
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/feed",
    name: "Feed",
    component: Feed,
  },
  {
    path: "/network",
    name: "Network",
    component: Network,
    children: [
      { path: "", component: Connections },
      { path: "connections", component: Connections },
      { path: "invitations", component: Invitations },
      { path: "teammates", component: Teammates },
      { path: "groups", component: Groups },
      { path: "pages", component: Pages },
      { path: "hashtags", component: Hashtags },
    ],
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: Jobs,
  },
  {
    path: "/chat",
    name: "Chat",
    component: Chat,
  },
  {
    path: "/notices",
    name: "Notices",
    component: Notices,
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
