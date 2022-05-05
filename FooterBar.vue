<template>
  <div class="footer-container bg-darkgrey">
    <SocialLinkCard
      v-for="media in medias"
      :key="media.short"
      :name="media.name"
      :url="media.url"
      :short="media.short"
    />
  </div>
</template>

<script>
import SocialLinkCard from "./SocialLinkCard";

export default {
  components: {
    SocialLinkCard,
  },
  data: () => {
    return {
      medias: [
        {
          short: "whatsapp",
          name: "WhatsApp",
          url: "https://api.whatsapp.com/send?phone=491777871717&text=Guten Tag, ich interessiere mich für ein Probetraining.",
        },
        {
          short: "instagram",
          name: "Instagram",
          url: "https://www.instagram.com/fitnessbarockbacknang/?hl=de",
        },
        {
          short: "facebook",
          name: "Facebook",
          url: "https://www.facebook.com/fitnessbarockbacknang-105339741217132",
        },
        {
          short: "youtube",
          name: "Youtube",
          url: "https://www.youtube.com/channel/UCVgBKKGKg1rWt9h1ILMAWrA",
        },
        { short: "phone", name: "Mobilnummer", url: "tel:+491777871717" },
      ],
    };
  },
};
</script>

<style>
.footer-container {
  background-color: var(--dark-color);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2%;
  padding-bottom: 5%;
}

@media screen and (max-width: 600px) {
  .footer-container {
    flex-direction: column;
    flex-flow: wrap;
    /* gap: 10%; */
    padding: 5%;
  }
}
</style>