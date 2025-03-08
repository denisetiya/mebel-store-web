<script lang="ts">

    
    let name : string = "Alya";
    let grade : string = "XII";
    let semester : string = "1";
    let aboutme : string = "apiduadijalkdakjdkadkjad"
    let age : number = 18

    import {Camera} from "phosphor-svelte" 
    
</script>


<main>

    <div class="flex justify-between mt-10">
        <img src="/logo-text-2.png" alt="">
        <button class="bg-primary text-white px-10 py-2 rounded-2xl hover:scale-110 hover:cursor-pointer transition-transform duration-300">
            Save
        </button>
    </div>

    
    <p class="mt-10 text-primary font-bold text-3xl">
        Edit Profile
    </p>

    <div class="mt-5 bg-primary w-full flex justify-center items-center gap-40 rounded-4xl p-10">

        <div class=" bg-white rounded-4xl px-5 pt-5 relative">
            <img src="/profilePicture.svg" alt="">
            <Camera class="absolute bottom-3 right-3 text-primary" weight="fill" size={32}/>
        </div>

        <div class="text-white flex gap-10 flex-col">
            <div>
                <p class="">UserName</p>
                <input type="text" name="username" class="p-2 px-6 border-2 border-white rounded-2xl focus:outline-white w-full mt-3" value={name}>
            </div>

            <div class="flex gap-10">
                <div class="flex flex-col gap-5">
                    <div class="flex gap-5">
                        <div>
                            <p class="">Grade</p>
                            <input type="text" name="grade" class="p-2 px-6 border-2 border-white rounded-2xl focus:outline-white mt-3 w-[80px]" value={grade}>
                        </div>
                        <div>
                            <p class="">Semester</p>
                            <input type="text" name="semester" class="p-2 px-6 border-2 border-white rounded-2xl focus:outline-white mt-3 w-[80px]" value={semester}>
                        </div>
                    </div>

                    <div>
                        <p class="">Age</p>
                        <input type="number" name="age" class="p-2 px-6 border-2 border-white rounded-2xl focus:outline-white mt-3 w-[100px]" value={age}>
                    </div>
                </div>

                <div>
                    <p class="">About Me</p>
                    <textarea name="aboutme" class="p-2 px-6 border-2 border-white rounded-2xl focus:outline-white w-full mt-3 h-[200px]" id="aboutme" value={aboutme}></textarea>
                </div>

            </div>
        </div>


    </div>
</main>