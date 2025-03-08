<script lang="ts">
    import { navigate } from "svelte-routing";


    // setTimeout(() => {
    //     navigate("/home");
    // }, 4000);

</script>

<main class="h-screen w-screen bg-primary flex flex-col justify-center items-center relative">
    
    <div class="flex gap-10 items-center bg-white rounded-4xl p-10">
        <img src="/bg-excercise-mood.svg" alt="" class="" >
        <p class="text-primary font-medium text-xl text-justify max-w-[600px] z-10">
            Selamat datang di latihan soal bangun datar! <br> <br>
            
            Di sini, kamu akan mengasah pemahaman tentang berbagai jenis bangun datar seperti segitiga, persegi, persegi panjang, lingkaran, dan banyak lagi. <br> <br>
            
            Setiap soal dirancang untuk membantu kamu memahami konsep dasar, seperti keliling, luas, dan sifat-sifat penting lainnya dari bangun datar. <br><br>
            
            Yuk, mulai latihan dan tingkatkan kemampuanmu dalam matematika! <br> <br>
        </p>
    </div>
    
    
    <img src="/bg-splash.svg" alt="" class="absolute top-0 w-screen h-screen">


    <button onclick={() => navigate('/moodtes')} class=" z-10 p-6 bg-white text-primary mt-20 rounded-4xl font-bold text-xl px-20 hover:px-30 transition-all duration-300 hover:cursor-pointer">
        Mulai Tes
    </button>
</main>