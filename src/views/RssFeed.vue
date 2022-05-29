<template>
  <v-container class="message">
    <v-row>
      <v-col cols="12" md ="6">Tagesschau</v-col>
      <v-col cols="12" md ="6">Heise</v-col>
    </v-row>
    
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      feeds: [
        "https://www.tagesschau.de/xml/rss2/",
        "https://www.heise.de/rss/heise-Rubrik-IT.rdf",
      ],
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

        for (let count = 0; count < 10; count++) {
          let news = {};
          news.img = xmlDoc
            .getElementsByTagName("content:encoded")[count].
            getElementsByTagName("img")[0];
          news.title = xmlDoc.getElementsByTagName("title")[count].innerHTML;
          news.description =
            xmlDoc.getElementsByTagName("description")[count].innerHTML;
          news.link = xmlDoc.getElementsByTagName("guid")[count].innerHTML;

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

          rss.push(news)
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