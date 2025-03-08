<script lang="ts">
    import {Bookmarks, Medal} from "phosphor-svelte";
    import CardStartedItems from "../components/patials/CardStartedItems.svelte";
    import {Link} from "svelte-routing";

    let name:string = "Alya";
    let grade:string = "XII";

    let completed : number = 20;
    let materialsCompleted : number = 20;
    let excecisesCompleted : number = 10;
    let storiesCompleted : number = 5;



    
</script>


<main>

    <div class="flex justify-between mt-10">
        <img src="/logo-text-2.png" alt="">
        <Link to="/auth" class="bg-primary text-white px-10 py-2 rounded-2xl hover:scale-110 hover:cursor-pointer transition-transform duration-300">
            Logout
        </Link>
    </div>


    <div class="text-primary mt-10">
        <p class="font-bold text-2xl">
            Profile
        </p>

        <div class="bg-primary text-white p-5 rounded-4xl flex gap-10">

            <div class=" bg-white rounded-4xl px-5 pt-5">
                <img src="/profilePicture.svg" alt="">
            </div>

            <div>
                <p class="font-bold text-2xl">
                    {name}
                </p>
                <p>
                    Grade {grade}
                </p>
                <div class={`rounded-4xl bg-white border mt-5 w-[800px] relative ${completed == 0 ? "p-1" : ""}`}>
                    <div class="h-3 bg-primary rounded-4xl" style={`width: ${completed}%;`}></div>
                </div>

                <div class="flex justify-between mt-10">
                    <div class="flex gap-3 items-center">
                        <Bookmarks size={100} weight="fill" />
                        <div>
                            <p class="font-bold text-2xl">
                                {materialsCompleted}
                            </p>
                            <p>
                                Material <br> Completed
                            </p>
                        </div>
                    </div>

                    <div class="flex gap-3 items-center">
                        <Bookmarks size={100} weight="fill" />
                        <div>
                            <p class="font-bold text-2xl">
                                {excecisesCompleted}
                            </p>
                            <p>
                                Excercises <br> Completed
                            </p>
                        </div>
                    </div>

                    <div class="flex gap-3 items-center">
                        <Bookmarks size={100} weight="fill" />
                        <div>
                            <p class="font-bold text-2xl">
                                {storiesCompleted}
                            </p>
                            <p>
                                Stories <br> Completed
                            </p>
                        </div>
                    </div>
                    
                </div>

            </div>


        </div>

        <div class="flex gap-10 mt-20">

            <div>
                <p class="font-bold text-2xl mb-2">
                    Archivement
                </p>

                <div class="bg-primary flex flex-col gap-10 text-slate-400 p-10 rounded-4xl mb-5">
                    <div class="flex gap-5">
                        <Medal size={100} weight="fill" class="text-[#FCC21B]"/>   
                        <div>
                            <p>
                                Gold Medal
                            </p>

                            <li>
                                Menyelesaikan semua 4 materi.
                            </li>

                            <li>
                                Menyelesaikan 35-40 latihan soal benar.
                            </li>

                            <li>
                                Membaca 8-10 buku.
                            </li>
                        </div>
                        
                    </div>

                    <div class="flex gap-5">
                        <Medal size={100} weight="fill" class="text-[#CECED2]"/>   
                        <div>
                            <p>
                                Gold Medal
                            </p>

                            <li>
                                Menyelesaikan semua 4 materi.
                            </li>

                            <li>
                                Menyelesaikan 35-40 latihan soal benar.
                            </li>

                            <li>
                                Membaca 8-10 buku.
                            </li>
                        </div>
                        
                    </div>


                    <div class="flex gap-5 items-center">
                        <Medal size={100} weight="fill" class="text-[#F79329]"/>   
                        <div>
                            <p class="w-[400px] text-white">
                                Keep it up! You’ve started with 1-4 books, 10+ exercises, and accessed 20%+ of the materials!
                            </p>

                        </div>
                        
                    </div>

                </div>
            </div>

            <div>
                <p class="font-bold text-2xl mb-2">
                    Starred Items
                </p>

                <div class="bg-primary flex flex-col gap-10 text-white p-10 rounded-4xl mb-5">

                    <p class="font-bold text-2xl">
                        Your Treasure Trove of Knowledge :
                    </p>

                    <div class="grid grid-cols-2 gap-5">
                        
                        <CardStartedItems title="Pendidikan Agama Islam" link="/pendidikan-agama-islam" />
                        <CardStartedItems title="Pendidikan Agama Islam" link="/pendidikan-agama-islam" />
 

                    </div>

                </div>
            </div>

        </div>
    </div>
</main>