<template>
  <footer>
    <div class="container mb-5">
      <div class="mb-9 flex flex-row items-center justify-center gap-12">
        <a class="footer_icon-hover" href="https://www.facebook.com/" target="_blank"><AIcon name="facebook" /></a>
        <a class="footer_icon-hover" href="https://www.instagram.com/" target="_blank"> <AIcon name="instagram" /></a>
        <a class="footer_icon-hover" href="https://www.twitter.com/" target="_blank"> <AIcon name="twitter" /></a>
        <a class="footer_icon-hover" href="https://www.youtube.com/" target="_blank"> <AIcon name="youtube" /></a>
      </div>
      <div class="mb-9 flex flex-row items-center justify-center gap-12 font-bold">
        <a href="#" target="_blank">Conditions of Use</a>
        <a href="#" target="_blank">Privacy & Policy</a>
        <a href="#" target="_blank">Press Room</a>
      </div>
      <p class="text-center text-gray-500">
        © {{ new Date().getFullYear() }} MoviePage by Anna Kasianenko
      </p>
    </div>
  </footer>
</template>
