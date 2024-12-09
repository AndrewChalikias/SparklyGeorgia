/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'defaultBackground': '#2B125E',
        'sparklyGeorgia': '#FE9BD9',
        'headerBackground': 'rgba(127, 1, 170, 0.28)',
        'buttonBorderColor': '#6000A0',
      },
      backgroundImage: {
        'backgroundBannerImage': "url(./assets/backgroundBannerImage.png)",
        'backgroundChannelStatsGraph': "url(./assets/channelStatsGraph.png)",
        'backgroundChannelSectionImage': "url(./assets/channelSectionBackground.svg)",
        'waveSeperator': "url(./assets/layered-curves.svg)",
        'footerWavesBackground': "url(./assets/waves.svg)",
      },
      fontFamily: {
        'LilyScriptOne': ['LilyScriptOne-Regular'],
        'SquarePegRegular': ['Square Peg'],
      },
      width: {
        'channelStatsWidth': '530px',
        'DefaultContactFormSection': '560px',
        'mediumContactFormSection': '610px',
      },
      height: {
        'heroSectionHeight': '500px',
        'channelInfoSection': '650px',
      },
    }
  },
  plugins: [],
}