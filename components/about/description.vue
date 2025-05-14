<template>
  <div class="flex flex-col gap-4 mt-28">
    <div class="text-white p-8 rounded-lg">
      <h1 class="text-lg text-center md:text-start md:text-3xl mb-4">
        Sejarah
        <span class="font-bold glow text-cyan-300"
          >SMK Negeri 2 Kota Bekasi</span
        >
      </h1>
      <hr class="w-40 font-bold text-white my-6 md:hidden mx-auto" />
      <p class="mb-4">
        SMK Negeri 2 Kota Bekasi didirikan pada tahun 2004, berdasarkan surat
        keputusan Wali kota Bekasi nomor 421/1985-Disdik/IX/2004, walau sudah
        mempunyai izin operasional sejak 1985. Sejak berdirinya SMK Negeri 2
        Kota Bekasi telah dipimpin oleh beberapa
      </p>
      <ol class="list-decimal list-inside pl-5">
        <li>Ajim Kanit, S.Pd, MM (2004-2005)</li>
        <li>Chaerudin (2005-2008)</li>
        <li>I. Made Supriatna, S.Pd, M.Si (2008-2012)</li>
        <li>Sugiyono, MM (2012-2015)</li>
        <li>Maman Sudiaman, S.Pd (2015)</li>
        <li>Agus Setiawan, S.Pd, M.Si (2015-2021)</li>
        <li>Agus Wimbadi, M.Pd (2021 - sekarang)</li>
      </ol>
    </div>
    <div class="text-white md:max-w-[70vw] md:mx-auto p-8 rounded-lg">
      <h1 class="text-lg text-center md:text-3xl mb-4">
        Visi
        <span class="font-bold glow text-cyan-300">Sekolah</span>
      </h1>

      <reusable-base-card
        class="mx-auto"
        text="Unggul Berkarakter dan Berwawasan Global (Uber 2G)"
      />
    </div>
    <div class="text-white md:max-w-[70vw] md:mx-auto p-8 rounded-lg">
      <h1 class="text-lg text-center md:text-3xl mb-4">
        Misi
        <span class="font-bold glow text-cyan-300">Sekolah</span>
      </h1>
      <div class="flex w-full gap-4">
        <div class="w-1/2 flex flex-col justify-between items-end gap-3">
          <reusable-base-card
            text="1. Mewujudkan Sumber Daya Manusia yang Profesional, Unggul,
                Kreatif, dan Inovatif (PRODUKTIF), serta berakhlak mulia, peduli
                terhadap lingkungan, dan berakar pada budaya bangsa;"
          />
          <reusable-base-card
            text="2. Mengembangkan sistem pendidikan dan pelatihan yang adaptif,
                fleksibel, dan berwawasan global;"
          />
        </div>
        <div class="w-1/2 flex flex-col justify-between gap-2">
          <reusable-base-card
            text="3. Mengembangkan dan memperkuat sinergi yang bersifat link and match dengan dunia kerja di dalam dan di luar negeri;"
          />
          <reusable-base-card
            text="4. Mewujudkan sarana prasarana standar industri 4.0"
          />
          <reusable-base-card
            text="5. Mewujudkan manajemen sekolah yang mandiri dan melakukan pelayanan prima."
          />
        </div>
      </div>
    </div>
    <div class="text-white p-8 rounded-lg">
      <h1 class="text-lg text-center md:text-start md:text-3xl mb-4">
        Identitas
        <span class="font-bold glow text-cyan-300"
          >SMK Negeri 2 Kota Bekasi</span
        >
      </h1>
      <hr class="w-40 font-bold text-white my-6 md:hidden mx-auto" />
      <p class="mb-4 text-justify">
        SMK Negeri 2 Kota Bekasi adalah salah satu sekolah menengah kejuruan
        yang berada di Kota Bekasi, Jawa Barat.
      </p>
      <p class="my-8 text-justify">
        Sekolah ini terletak di Kelurahan Ciketing Udik, Kecamatan Bantar
        Gebang, Kota Bekasi. Sekolah ini pun hanya berjarak 200 meter dari TPST
        Bantar Gebang, tetapi uniknya tidak tercium bau sampah di lingkungan
        sekolah ini. Sekolah ini menjadi sekolah negeri terluas di Kota Bekasi
        dengan luas tanah mencapai 15.540 meter persegi atau sekitar 1,5
        hektare, yang mana rencananya 30% lahan tersebut akan dijadikan hutan
        kota..
      </p>
      <p class="my-8 text-justify">
        SMK Negeri 2 Kota Bekasi mempunyai komitmen untuk selalu menjaga dan
        melestarikan lingkungan hidup di lingkungan sekolah dan lingkungan
        sekitar. Sekolah ini pernah mendapat penghargaan Adiwiyata Mandiri dari
        Kementrian Lingkungan Hidup pada tahun 2012.
      </p>
      <p class="my-8 text-justify">
        Karena beralamat di Jalan Lapangan Bola Rawa Butun, masyarakat sekitar
        menyebut sekolah ini dengan sebutan "Butun". Selain itu, sekolah ini
        juga mempunyai aturan rambut pelontos bagi siswa laki-laki, maka sebutan
        Butun juga memiliki arti botak tiga tahun sesuai dengan lama pendidikan
        di SMK.
      </p>
    </div>
    <div class="text-white">
      <div class="flex w-full justify-center gap-4">
        <div class="max-w-1/2 flex flex-col justify-between items-end gap-3">
          <reusable-base-card
            textSize="xl"
            mdTextSize="3xl"
            class="font-semibold w-[100%]"
            text="Information Of School"
          />
          <reusable-base-card
            textSize="lg"
            mdTextSize="lg"
            titleTextSize="xl"
            titleMdTextSize="3xl"
            class="font-semibold w-[100%]"
            title="School identitiy Number"
            text="
  <div class='flex'>
    <span class='w-20 font-semibold inline-block'>NPSN</span>
    <span class='font-normal'>: 20231741</span>
  </div>
  <div class='flex'>
    <span class='w-20 font-semibold inline-block'>NSS</span>
    <span class='font-normal'>: 321026503002</span>
  </div>
"
          />
        </div>
        <div class="max-w-2/3 flex flex-col justify-between gap-2">
          <reusable-base-card
            width="100%"
            textSize="lg"
            mdTextSize="lg"
            titleTextSize="xl"
            titleMdTextSize="2xl"
            class="font-semibold h-full w-[60%]"
            title="Contact Info"
            text="
          <div class='space-y-1'>
            <div class='flex'>
              <span class='w-24 font-semibold'>Alamat</span>
              <span class='font-normal'
                >: Jl. Lapangan Bola Rawa Butun Kel. Ciketing Udik – Kec. Bantar
                Gebang, Kota Bekasi</span
              >
            </div>
            <div class='flex'>
              <span class='w-24 font-semibold'>Kode Pos</span>
              <span class='font-normal'>: 17153</span>
            </div>
            <div class='flex'>
              <span class='w-24 font-semibold'>Telepon</span>
              <span class='font-normal'>: (021) 82597121</span>
            </div>
            <div class='flex'>
              <span class='w-24 font-semibold'>E-Mail</span>
              <span class='font-normal'>: smkn2kotabekasi@gmail.com</span>
            </div>
          </div>
          "
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
