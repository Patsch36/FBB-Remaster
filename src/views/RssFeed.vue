<template>
  <div>
    <v-container class="message">
      <v-row>
        <v-col cols="12" class="text-h4 text-md-h1 mb-4 mx-auto text-center">Tagesschau</v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          xl="3"
          v-for="(news, index) in feedsContent[0]"
          :key="index"
        >
          <NewsCard :news="news" />
        </v-col>
      </v-row>
<v-divider
  inset
  class="my-16"
></v-divider>
      <v-row>
        <v-col cols="12" class="text-h4 text-md-h1 mb-4 mx-auto text-center">Heise.de</v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          xl="3"
          v-for="(news, index) in feedsContent[1]"
          :key="index"
        >
          <NewsCard :news="news" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

import NewsCard from "@/components/RSSReader/NewsCard.vue";

export default {
  components: { NewsCard },
  data() {
    return {
      feeds: [
        "https://www.tagesschau.de/xml/rss2/",
        "https://www.heise.de/rss/heise-Rubrik-IT.rdf",
      ],
      newsAmount: 12,
      feedsContent: [],
    };
  },
  methods: {
    async parseFeed() {
      this.feeds.forEach(async (feed) => {
        const response = await axios.get(feed);

        const data = await response.data;

        let parser = new DOMParser();

        let xmlDoc = parser.parseFromString(data, "text/html");

        let rss = [];

        for (let count = 0; count < this.newsAmount; count++) {
          let news = {};
          news.img = xmlDoc
            .getElementsByTagName("content:encoded")[count]
            .getElementsByTagName("img")[0];
          news.link = xmlDoc.getElementsByTagName("guid")[count].innerHTML;
          news.title =
            xmlDoc.getElementsByTagName("title")[count + 1].innerHTML;
          news.description =
            xmlDoc.getElementsByTagName("description")[count + 1].innerHTML;

          if (news.description.includes("<!--")) {
            news.description = news.description.substring(
              4,
              news.description.length - 4
            );
          }

          if (news.description.includes("[CDATA[")) {
            news.description = news.description.substring(
              7,
              news.description.length - 1
            );
          }

          if (news.img !== undefined) {
            news.img = news.img.src;
          }

          rss.push(news);
        }
        this.feedsContent.push(rss);
      });
    },
  },
  created() {
    this.parseFeed();
    console.log(this.feedsContent);
  },
};
</script>

<style scoped>
.message {
  margin-top: 75px;
}
</style>